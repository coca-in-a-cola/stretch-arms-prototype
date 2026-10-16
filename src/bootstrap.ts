import './style.css';
import './polish.css';

void import('./main').catch(()=>{
  const app=document.getElementById('app');
  if(!app)return;
  app.innerHTML='<main class="fallback" role="alert"><h1>3D недоступно</h1><p>Для игры нужен WebGL 2. Включите аппаратное ускорение или откройте игру в другом современном браузере, затем обновите страницу.</p><button id="reload" class="primary">ОБНОВИТЬ</button></main>';
  document.getElementById('reload')?.addEventListener('click',()=>location.reload());
});
