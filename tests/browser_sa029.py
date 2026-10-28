"""Production input only; __interaction probes are read-only. No game mutation."""
import json
from pathlib import Path
import browser_mobile as mobile
from playwright.sync_api import sync_playwright

OUT = mobile.ROOT / 'evidence' / 'sa029-browser'

def hat_path(browser, url, touch, errors):
    ctx = browser.new_context(viewport={'width':844 if touch else 1280,'height':390 if touch else 720}, has_touch=touch, is_mobile=touch)
    page = ctx.new_page()
    page.on('pageerror', lambda e: errors.append(str(e)))
    page.goto(url)
    page.locator('#start').click()
    page.locator('#level1').click()
    mobile.skip_briefing_if_active(page, touch)
    # Pickup is actual canvas input, not a resolve/launch helper.
    acquired = page.wait_for_function('''touch => {
      const c=document.querySelector('#scene');
      const h=window.__interaction.actors().find(a=>a.kind==='hat' && a.at && window.__interaction.shot(a.at.x,a.at.y).id===a.id);
      if(!h) return false;
      const send=(type,x,y)=>c.dispatchEvent(new PointerEvent(type,{pointerId:91,pointerType:touch?'touch':'mouse',button:touch?0:2,clientX:x,clientY:y,bubbles:true,cancelable:true}));
      send('pointerdown',h.at.x,h.at.y);
      if(touch) {send('pointermove',h.at.x,h.at.y);send('pointerup',h.at.x,h.at.y);}
      return {hat:h,held:c.dataset.held};
    }''', arg=touch, timeout=10000).json_value()
    page.wait_for_function("document.querySelector('#scene').dataset.held==='hat'", timeout=5000)
    print('ACQUIRED',touch,json.dumps(acquired),flush=True)
    if touch:
        mobile.assert_held_retention(page,'hat',acquired['hat']['id'])
        miss = page.wait_for_function('''() => {
          const c=document.querySelector('#scene'), r=c.getBoundingClientRect();
          for(const e of window.__interaction.actors().filter(a=>a.kind==='enemy' && a.at && a.bounds)) {
            const b=e.bounds;
            for(const x of [b.x-2,b.x+b.width+2]) for(const y of [b.y+b.height*.4,b.y+b.height*.6]) {
              if(x<r.left || x>r.right || y<r.top || y>r.bottom) continue;
              const s=window.__interaction.shot(x,y);
              if(!['whiff','cover','scenery'].includes(s.kind) || s.id==='counter') continue;
              const before={held:c.dataset.held,flights:window.__interaction.flights()};
              for(const type of ['pointerdown','pointerup','pointerup']) c.dispatchEvent(new PointerEvent(type,{pointerId:93,pointerType:'touch',clientX:x,clientY:y,bubbles:true}));
              return {enemy:e.id,bounds:b,release:{x,y},shot:s,before,held:c.dataset.held,flights:window.__interaction.flights()};
            }
          }
          return false;
        }''',timeout=5000).json_value()
        assert miss['held']=='hat' and miss['before']['held']=='hat' and miss['flights']==miss['before']['flights']==[],miss
        print('OUTSIDE_HOSTILE_BOUNDS_NO_ACQUISITION',json.dumps(miss),flush=True)
    thrown = page.wait_for_function('''touch => {
      const c=document.querySelector('#scene'), z=JSON.parse(c.dataset.zone||'null');
      if(!z) return false;
      const s=window.__interaction.shot(z.x,z.y);
      if(s.id!=='counter' || Math.abs(s.point.y-1.15)>.001) return false;
      const send=(type)=>c.dispatchEvent(new PointerEvent(type,{pointerId:92,pointerType:touch?'touch':'mouse',button:touch?0:2,clientX:z.x,clientY:z.y,bubbles:true,cancelable:true}));
      send('pointerdown');
      const before=c.dataset.held;
      if(touch) {send('pointermove');send('pointerup');send('pointerup');}
      return {zone:z,shot:s,before,held:c.dataset.held,flights:window.__interaction.flights()};
    }''',arg=touch,timeout=5000).json_value()
    print('THROWN',touch,json.dumps(thrown),flush=True)
    if touch:
        assert thrown['before']=='hat' and thrown['held']=='' and len(thrown['flights'])==1, thrown
    page.wait_for_function("window.__interaction.hat().phase==='intro'",timeout=7000)
    landed=page.evaluate('window.__interaction.hat()')
    assert landed['rest'] and landed['trophyVisible'] and landed['scaleY']<0, landed
    assert abs(landed['rest']['y']-1.15)<.001 and -2.8<=landed['rest']['z']<=-2, landed
    page.screenshot(path=str(OUT / ('hat-touch-intro.png' if touch else 'hat-desktop-intro.png')))
    print('LANDED_UPSIDE_DOWN_INTRO',touch,json.dumps(landed),flush=True)
    page.wait_for_function("window.__interaction.hat().phase==='pour'",timeout=20000)
    active=page.evaluate('window.__interaction.hat()')
    print('ULT_ACTIVE',touch,json.dumps(active),flush=True)
    ctx.close()


def main():
    OUT.mkdir(exist_ok=True)
    mobile.EVIDENCE=OUT
    errors=[]
    with mobile.server_url() as url, sync_playwright() as p:
        browser=p.chromium.launch()
        mobile.test_touch_prop_grab_and_throw(browser,url,errors)
        hat_path(browser,url,True,errors)
        hat_path(browser,url,False,errors)
        browser.close()
    assert not errors,errors
    print('SA029 contact + touch/desktop hat path PASS',flush=True)

if __name__=='__main__':
    main()
