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
export function sound(kind:'ui'|'hit'|'throw'|'grab'|'miss'){
  if(muted||document.hidden||context?.state!=='running')return;
  const now=context.currentTime, oscillator=context.createOscillator(), gain=context.createGain();
  const frequency={ui:520,hit:130,throw:310,grab:230,miss:90}[kind];
  oscillator.type=kind==='hit'?'triangle':'sine';
  oscillator.frequency.setValueAtTime(frequency,now);
  oscillator.frequency.exponentialRampToValueAtTime(Math.max(40,frequency*.35),now+.12);
  gain.gain.setValueAtTime(.0001,now);gain.gain.exponentialRampToValueAtTime(.065,now+.008);gain.gain.exponentialRampToValueAtTime(.0001,now+.15);
  oscillator.connect(gain);gain.connect(context.destination);oscillator.start(now);oscillator.stop(now+.16);
  oscillator.onended=()=>{oscillator.disconnect();gain.disconnect();};
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
