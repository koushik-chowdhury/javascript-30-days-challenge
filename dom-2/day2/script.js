// function addLanguage(langName){
//     const li = document.createElement("li")
//     li.textContent = `${langName}`;
//     document.querySelector(".language").appendChild(li)
// }
// addLanguage("Typescript")
// addLanguage("Python")

function addLanguage(langName){
    const li = document.createElement("li")
    li.appendChild(document.createTextNode(langName))
    document.querySelector(".language").appendChild(li)
}
addLanguage("PHP")
addLanguage("Python")


// Edit

const edit = document.querySelector("li:nth-child(2)")
const newli = document.createElement("li")
newli.textContent = "Bun"
edit.replaceWith(newli)

// Remove

const lastLang = document.querySelector("li:last-child")
lastLang.remove()