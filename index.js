import{a as v,i as n,S}from"./assets/vendor-BK_rxH-O.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))e(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const d of o.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&e(d)}).observe(document,{childList:!0,subtree:!0});function i(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function e(t){if(t.ep)return;t.ep=!0;const o=i(t);fetch(t.href,o)}})();const p=15;document.querySelector(".load-more");async function y(s,r=1){const i=new URLSearchParams({key:"51651971-b67330e54672f93571a43cb22",q:s,image_type:"photo",orientation:"horizontal",safesearch:!0});try{return(await v.get(`https://pixabay.com/api/?${i}&page=${r}&per_page=${p}`)).data}catch(e){throw n.error({title:"Error",message:`Error: ${e}`,position:"topRight"}),e}}const f=document.querySelector(".gallery"),g=document.querySelector(".loader"),L=document.querySelector(".load-more");let u;function w(s,r=!1){const i=s.map(e=>`
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
  `).join("");r?f.insertAdjacentHTML("beforeend",i):f.innerHTML=i,u?u.refresh():u=new S(".gallery a",{captionsData:"alt",captionDelay:250})}function $(){f.innerHTML=""}function E(){g.classList.remove("hidden")}function b(){g.classList.add("hidden")}function q(){L.classList.remove("hidden")}function l(){L.classList.add("hidden")}const P=document.querySelector(".form"),M=document.querySelector(".input"),R=document.querySelector(".load-more"),h=document.querySelector(".gallery");let c="",a=1,m=0;P.addEventListener("submit",async s=>{if(s.preventDefault(),c=M.value.trim(),!c){n.error({title:"Error",message:"Please enter search images name",position:"topRight"});return}a=1,$(),l(),E();try{const r=await y(c,a);if(r.hits.length===0){n.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),l();return}w(r.hits),m=Math.ceil(r.totalHits/p),a<m?q():(l(),n.info({title:"Info",message:"We're sorry, but you've reached the end of search results.",position:"topRight"}))}catch(r){console.error(r)}finally{b()}});R.addEventListener("click",async()=>{a+=1;try{E();const s=await y(c,a);if(w(s.hits,!0),h.firstElementChild){const e=2*h.firstElementChild.getBoundingClientRect().height;window.scrollBy({top:e,behavior:"smooth"})}a>=m&&(l(),n.info({title:"Info",message:"We're sorry, but you've reached the end of search results.",position:"topRight"}))}catch(s){console.error(s)}finally{b()}});
//# sourceMappingURL=index.js.map
