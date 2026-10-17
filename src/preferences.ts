const KEY='long-arms.settings.v1';
const systemMotion=matchMedia('(prefers-reduced-motion: reduce)');
let muted=false;
let motionOverride:boolean|undefined;
try {
  const saved:unknown=JSON.parse(localStorage.getItem(KEY)??'null');
  if(typeof saved==='object'&&saved!==null){
    if('muted' in saved&&typeof saved.muted==='boolean')muted=saved.muted;
    if('reducedMotion' in saved&&typeof saved.reducedMotion==='boolean')motionOverride=saved.reducedMotion;
  }
} catch { muted=false; motionOverride=undefined; }
export const reducedMotion=()=>motionOverride??systemMotion.matches;
function applyMotion(){document.documentElement.dataset.reducedMotion=String(reducedMotion());}
applyMotion(); systemMotion.addEventListener('change',applyMotion);
let context:AudioContext|undefined;
let audioAvailable=true;
export function unlockAudio(){
  if(muted||!audioAvailable)return;
  try {
    context??=new AudioContext();
    if(context.state==='suspended')void context.resume().catch(()=>{audioAvailable=false;});
  } catch { audioAvailable=false; }
}
export type Sfx='ui'|'hit'|'throw'|'grab'|'miss'|'whoosh'|'ko'|'dog'|'attack'|'cover'|'windup';
/** Tiny synth voices: [wave, start Hz, end Hz, length s, volume, noise mix]. */
const VOICES:Record<Sfx,[OscillatorType,number,number,number,number,number][]>={
  ui:[['sine',520,300,.1,.05,0]],
  whoosh:[['sine',180,420,.16,.02,.9]],
  hit:[['triangle',150,48,.16,.09,.5],['square',420,160,.05,.025,0]],
  throw:[['triangle',300,70,.18,.08,.4]],
  ko:[['sine',660,1320,.22,.035,0],['sine',990,1980,.22,.02,0]],
  grab:[['sine',230,380,.1,.06,0]],
  cover:[['square',110,60,.09,.05,.6]],
  miss:[['sine',260,90,.2,.03,.5]],
  dog:[['sine',880,520,.32,.05,0],['sine',700,400,.3,.03,0]],
  attack:[['sawtooth',90,40,.25,.07,.7]],
  windup:[['sine',300,520,.18,.025,0]],
};
let noise:AudioBuffer|undefined;
export function sound(kind:Sfx){
  if(muted||document.hidden||!context||context.state!=='running')return;
  const ctx=context, now=ctx.currentTime;
  if(!noise){noise=ctx.createBuffer(1,ctx.sampleRate*.4,ctx.sampleRate);const d=noise.getChannelData(0);for(let i=0;i<d.length;i++)d[i]=Math.random()*2-1;}
  for(const [type,f0,f1,len,vol,mix] of VOICES[kind]){
    const gain=ctx.createGain(); gain.connect(ctx.destination);
    gain.gain.setValueAtTime(.0001,now);gain.gain.exponentialRampToValueAtTime(vol,now+.008);gain.gain.exponentialRampToValueAtTime(.0001,now+len);
    const osc=ctx.createOscillator(); osc.type=type; osc.frequency.setValueAtTime(f0,now); osc.frequency.exponentialRampToValueAtTime(Math.max(30,f1),now+len*.8);
    const og=ctx.createGain(); og.gain.value=1-mix*.7; osc.connect(og); og.connect(gain); osc.start(now); osc.stop(now+len+.02);
    osc.onended=()=>{osc.disconnect();og.disconnect();gain.disconnect();};
    if(mix>0){
      const src=ctx.createBufferSource(), filter=ctx.createBiquadFilter(), ng=ctx.createGain(); src.buffer=noise;
      filter.type='bandpass'; filter.frequency.setValueAtTime(f0*4,now); filter.frequency.exponentialRampToValueAtTime(Math.max(60,f1*4),now+len); ng.gain.value=mix;
      src.connect(filter); filter.connect(ng); ng.connect(gain); src.start(now); src.stop(now+len);
      src.onended=()=>{src.disconnect();filter.disconnect();ng.disconnect();};
    }
  }
}
function save(){
  try {localStorage.setItem(KEY,JSON.stringify({muted,reducedMotion:motionOverride}));}
  catch {document.querySelector('#settings-note')?.replaceChildren('Настройки действуют до закрытия вкладки.');}
}
export function settingsUi(){return `<div class="settings" aria-label="Настройки"><button id="mute" aria-pressed="${muted}">Без звука: ${muted?'да':'нет'}</button><button id="motion" aria-pressed="${reducedMotion()}">Меньше движения: ${reducedMotion()?'да':'нет'}</button><span id="settings-note" role="status"></span></div>`;}
export function bindSettings(render:()=>void){
  document.getElementById('mute')?.addEventListener('click',()=>{muted=!muted;save();if(!muted){unlockAudio();sound('ui');}render();});
  document.getElementById('motion')?.addEventListener('click',()=>{motionOverride=!reducedMotion();applyMotion();save();render();});
}
