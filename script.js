var flag = document.querySelector("body")
flag.style.cssText = `
    margin: 0;
        padding: 0;
        height: 100vh;
        width: 100%;
        background-image: linear-gradient(
            to bottom,
            black 33.3%,
            white 33.3%,
            white 66.6%,
            green 66.6%
        )`
var red = document.createElement("div")
red.style.cssText = `
    position: absolute;
    height: 0;
    border-top: 50vh solid transparent;
    border-bottom: 50vh solid transparent;
    border-left: 60vh solid red;
    left: 0px;
    top: 0;
    width: 0;`
flag.appendChild(red)