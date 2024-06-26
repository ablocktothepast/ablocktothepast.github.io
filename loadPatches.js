fetch('patches.json')
    .then(response => response.json())
    .then(data => {
        // Loop through each item in the array
        var patchAmount = 0
        data.forEach(item => {
        // Do something with each item
        const divvy = document.createElement("div")
        divvy.classList.add("patchNote")
        const patchDate = document.createElement("h3")
        patchDate.classList.add("patchdate")
        patchDate.innerHTML = item.date
        const patchText = document.createElement("p")
        var texty = ""
        //Create text with \n's
        for (i = 0; i < item.contents.length; i++) {
            if (!item.contents[i].includes("°")) texty += "- "
            if (item.contents[i].includes("°")) texty += "○ "
            texty += item.contents[i]
            texty += "<br>"
        }
        patchText.innerHTML = texty
        patchText.classList.add("patchtext")
        divvy.appendChild(patchDate)
        divvy.appendChild(patchText)
        document.getElementById("patchnotes").appendChild(divvy)
        patchAmount++
    });
    document.getElementById("desc").innerHTML = "Whenever we work on the project, our changes will be noted here. This way, you can keep up with what we're working on and make sure we're still alive. There have been a total of <b>"+patchAmount+"</b> patches."
})
.catch(error => console.error(error));