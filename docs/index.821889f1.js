let e=document.querySelector("#breakingImg"),t=document.querySelector("#breakingNews .title"),i=document.querySelector("#breakingNews .description"),l=document.querySelector(".WNews"),s=document.querySelector("#USNews .newsBox"),r=document.querySelector("#WorldNews .newsBox"),n=document.querySelector("#BusinessNews .newsBox"),a=document.querySelector("#ArtsNews .newsBox"),c=document.querySelector("#LifestyleNews .newsBox"),o=document.querySelector("#OpinionNews .newsBox"),d=document.querySelector(".header"),u=document.querySelector("nav ul"),m=document.querySelector(".bar");m.addEventListener("click",e=>{m.classList.toggle("active"),u.classList.toggle("activeMenu")}),window.addEventListener("scroll",()=>{window.scrollY>50?d.classList.add("sticky"):d.classList.remove("sticky")});const g=async e=>{let t=`https://api.nytimes.com/svc/topstories/v2/${e}.json?api-key=aEw0xd0wuOukh7khEuHH9tnTeD1VkGbY`;try{let e=await fetch(t);return(await e.json()).results.slice(0,10)}catch(e){console.error("Error fetching data:",e)}};g("home").then(l=>{if(l.length>0){let s=l[0].multimedia?l[0].multimedia[0].url:"default-image.jpg";e.innerHTML=`<img src="${s}" alt="Breaking News Image">`,t.innerHTML=`<a href="${l[0].url}" target="_blank"><h2>${l[0].title}</h2></a>`,i.innerHTML=`${l[0].abstract}`}}),g("world").then(e=>{let t="";e.forEach(e=>{let i=e.title.length<100?e.title:e.title.slice(0,6)+"...",l=e.multimedia?e.multimedia[0].url:"default-image.jpg";t+=`<div class="news">
                <div class="img">
                    <img src="${l}" alt="World News Image">
                </div>
                <div class="text">
                    <div class="title">
                        <a href="${e.url}" target="_blank"><p>${i}</p></a>
                    </div>
                </div>
             </div>`}),l.innerHTML=t});const w=(e,t)=>{let i="";t.forEach(e=>{let t=e.title.length<100?e.title:e.title.slice(0,10)+"...",l=e.multimedia&&e.multimedia.length>0?e.multimedia[0].url:"default-image.jpg";i+=`<div class="newsCard">
                <div class="img">
                    <img src="${l}" alt="image">
                </div>
                <div class="text">
                    <div class="title">
                        <a href="${e.url}" target="_blank"><p>${t}</p></a>
                    </div>
                </div>
             </div>`}),e.innerHTML=i};g("us").then(e=>w(s,e)),g("world").then(e=>w(r,e)),g("business").then(e=>w(n,e)),g("arts").then(e=>w(a,e)),g("fashion").then(e=>w(c,e)),g("opinion").then(e=>w(o,e));
//# sourceMappingURL=index.821889f1.js.map
