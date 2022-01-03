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
    rtb = document.querySelector("div[data-testid='retweet']")
    if (rtb) {
      document.querySelector("div[data-testid='retweet']").onclick = () => {
        setTimeout(()=>{
          rtC = document.querySelector("div[data-testid='retweetConfirm']")
          rtC.querySelector("span").innerText = "Cükküldət"
          rtC.parentElement.querySelector("a span").innerText = "Linçlə"
        },100)
      }  
    }
    
  }

window.addEventListener('load',()=>{
  setInterval(dothething, 1000)
})
