async function loop() {
    let i = Math.round(Math.random() * 0.2)
    console.log("Waiting "+i+" seconds...")
    await sleep(i * 1000);
    doStuff()
    loop()
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function doStuff() {
    const newLink = document.createElement("div")
    newLink.classList.add("linktest")
    newLink.style.top = Math.round(Math.random() * 750)+"px"
    newLink.style.left = "1px"
    document.body.appendChild(newLink)

    document.getElementsByClassName("linktest").style.left
}

loop()