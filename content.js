setInterval(()=>{
    document.querySelector("div[data-testid='tweetButtonInline'] span > span").innerText = "Cükküldə"
    document.querySelector("div[data-testid='retweet']").onclick = () => {
      setTimeout(()=>{
        rtC = document.querySelector("div[data-testid='retweetConfirm']")
        rtC.querySelector("span").innerText = "Cükküldət"
        rtC.parentElement.querySelector("a span").innerText = "Cükkültünü linçlə"
      },100)
    }
}, 1000)
