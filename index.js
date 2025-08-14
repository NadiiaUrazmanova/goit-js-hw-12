import{a as b,i as n,S as v}from"./assets/vendor-BK_rxH-O.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))e(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const d of s.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&e(d)}).observe(document,{childList:!0,subtree:!0});function a(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function e(t){if(t.ep)return;t.ep=!0;const s=a(t);fetch(t.href,s)}})();const h=15;document.querySelector(".load-more");function m(o,r=1){const a=new URLSearchParams({key:"51651971-b67330e54672f93571a43cb22",q:o,image_type:"photo",orientation:"horizontal",safesearch:!0});return b.get(`https://pixabay.com/api/?${a}&page=${r}&per_page=${h}`).then(e=>e.data).catch(e=>{throw n.error({title:"Error",message:`Error: ${e}`,position:"topRight"}),e})}const f=document.querySelector(".gallery"),y=document.querySelector(".loader"),p=document.querySelector(".load-more");let u;function g(o,r=!1){const a=o.map(e=>`
    <li class="gallery-item">
      <a class="gallery-link" href="${e.largeImageURL}">
        <img
          class="gallery-image"
          src="${e.webformatURL}"
          alt="${e.tags}"
          loading="lazy"
        />
      </a>
      <div class="gallery-info">
        <p>Likes: ${e.likes}</p>
        <p>Views: ${e.views}</p>
        <p>Comments: ${e.comments}</p>
        <p>Downloads: ${e.downloads}</p>
      </div>
    </li>
  `).join("");r?f.insertAdjacentHTML("beforeend",a):f.innerHTML=a,u?u.refresh():u=new v(".gallery a",{captionsData:"alt",captionDelay:250})}function E(){f.innerHTML=""}function L(){y.classList.remove("hidden")}function w(){y.classList.add("hidden")}function S(){p.classList.remove("hidden")}function l(){p.classList.add("hidden")}const q=document.querySelector(".form"),P=document.querySelector(".input"),$=document.querySelector(".load-more");document.querySelector(".gallery");let c="",i=1;q.addEventListener("submit",async o=>{if(o.preventDefault(),c=P.value.trim(),!c){n.error({title:"Error",message:"Please enter search images name",position:"topRight"});return}i=1,E(),l(),L();try{const r=await m(c,i);if(r.hits.length===0){n.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),l();return}g(r.hits);const a=Math.ceil(r.totalHits/h);i<a?S():(l(),n.info({title:"Info",message:"We're sorry, but you've reached the end of search results.",position:"topRight"}))}catch(r){console.error(r)}finally{w()}});$.addEventListener("click",async()=>{i+=1,L();try{const o=await m(c,i);g(o.hits,!0);const e=2*document.querySelector(".gallery").firstElementChild.getBoundingClientRect().height;window.scrollBy({top:e,behavior:"smooth"});const t=Math.ceil(o.totalHits/h);i>=t&&(l(),n.info({title:"Info",message:"We're sorry, but you've reached the end of search results.",position:"topRight"}))}catch(o){console.error(o)}finally{w()}});
//# sourceMappingURL=index.js.map
