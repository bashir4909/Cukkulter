function dothething(){
    twb = document.querySelector("div[data-testid='tweetButtonInline'] span > span")
    if (twb) {
      
    if (twb.innerText==="Tweet")
    {
      twb.innerText = "Cükküldə"
    } else if (twb.innerText==="Reply")
    {
      twb.innerText = "Cükküldəş"
    }
  }
    twb = document.querySelector("div[data-testid='tweetButton'] span > span")
    if(twb){
    if (twb.innerText==="Tweet")
    {
      twb.innerText = "Cükküldə"
    } else if (twb.innerText==="Reply")
    {
      twb.innerText = "Cükküldəş"
    }}

    document.querySelectorAll("div[data-testid='retweet']").forEach((rtb)=>{
      rtb.onclick = () => {
        setTimeout(()=>{
          rtC = document.querySelector("div[data-testid='retweetConfirm']")
          rtC.querySelector("span").innerText = "Cükküldət"
          rtC.parentElement.querySelector("a span").innerText = "Linçlə"
        },100)
      }  
    })
  }

window.addEventListener('load',()=>{
  setInterval(dothething, 1000)
})
