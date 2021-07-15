const SELECTORS = {
  "tweetButton": "div[data-testid='tweetButtonInline'] > div > span > span",
  "retweetButton": "div[data-testid='retweet']",
  "quoteButton": "#layers > div.css-1dbjc4n.r-1p0dtai.r-1d2f490.r-105ug2t.r-u8s1d.r-zchlnj.r-ipm5af > div > div > div > div:nth-child(2) > div.css-1dbjc4n.r-14lw9ot.r-z2wwpe.r-1upvrn0.r-j2cz3j.r-1udh08x.r-u8s1d > div > div > div > a > div.css-1dbjc4n.r-16y2uox.r-1wbh5a2 > div > span",
  "retweetButton1": "#layers > div.css-1dbjc4n.r-1p0dtai.r-1d2f490.r-105ug2t.r-u8s1d.r-zchlnj.r-ipm5af > div > div > div > div:nth-child(2) > div.css-1dbjc4n.r-14lw9ot.r-z2wwpe.r-1upvrn0.r-j2cz3j.r-1udh08x.r-u8s1d > div > div > div > div > div.css-1dbjc4n.r-16y2uox.r-1wbh5a2 > div > span"
}

window.addEventListener("load", (evt) => {
  waitForElement(SELECTORS["tweetButton"], function(b) { b.innerHTML = "Cükküldə" })
  waitForElement(SELECTORS["quoteButton"], function(b) { b.innerHTML = "Cükkültünü Linçlə" })
}, false)

function waitForElement(query, callback) {
  var counter = 0
  var el = document.querySelector(query)
    //while ((!el) & (counter < 50)) {
    //setTimeout(() => {
    //el = document.querySelector(query);
    //console.log(counter)
    //counter++
    //}, 100)
    //}
  setTimeout(() => {
    el = document.querySelector(query)
    if (el) { callback(el) } else {
      console.log(el)
    }
  }, 2000)
}

// Since tweets load dynamically we will call this every 2 seconds

setInterval(() => {
  var rtButtons = document.querySelectorAll(SELECTORS["retweetButton"])
  console.log(rtButtons)
  rtButtons.forEach((bt) => {
    bt.onclick = () => {
      console.log("YO YO")
      setTimeout(() => {
        qb = document.querySelector(SELECTORS["quoteButton"])
        qb.innerHTML = "Cükkültünü Linçlə"
        rb = document.querySelector(SELECTORS["retweetButton1"])
        rb.innerHTML = "Cükküldətdir"
      }, 100)
    }
  })
}, 2000)