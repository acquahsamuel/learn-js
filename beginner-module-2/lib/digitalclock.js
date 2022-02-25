
const clock = document.querySelector('.clock');


const tick = () => {
    const now  = new Date();

    const hours = now.getHours();
    const mins  = now.getMinutes();
    const sec   = now.getSeconds();

    const html = `
       <span> ${hours} </span> : 
       <span> ${mins}  </span> : 
       <span> ${sec}   </span> 
    `;
 
    clock.innerHTML = html;

}


setInterval(tick , 1000);