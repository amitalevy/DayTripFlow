const CACHE='daytripflow-v72';
const IMG_CACHE='daytripflow-v72';
const ASSETS=['./','./index.html','./style.css','./app.js','./manifest.json','./i18n.js'];
self.addEventListener('install',e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS)).then(()=>self.skipWaiting())));
self.addEventListener('activate',e=>e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>![CACHE,IMG_CACHE].includes(k)).map(k=>caches.delete(k)))).then(()=>self.clients.claim())));
self.addEventListener('fetch',e=>{
  const req=e.request;
  if(req.destination==='image'){
    e.respondWith(caches.open(IMG_CACHE).then(cache=>cache.match(req).then(hit=>hit||fetch(req).then(res=>{cache.put(req,res.clone()).catch(()=>{});return res}).catch(()=>hit))));
    return;
  }
  e.respondWith(caches.match(req).then(hit=>hit||fetch(req).then(res=>{
    if(req.method==='GET' && new URL(req.url).origin===self.location.origin){
      const copy=res.clone(); caches.open(CACHE).then(c=>c.put(req,copy)).catch(()=>{});
    }
    return res;
  }).catch(()=>hit)));
});
