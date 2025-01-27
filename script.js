const addIten = document.querySelector("#addIten");
const form = document.querySelector("form")
const ol = document.querySelector("ol")
const button = document.querySelector("#btn-remove")
const alert = document.querySelector("#div-alert")
const alertButton = document.querySelector(".btn-remove")



form.addEventListener("submit", (event) => {
  event.preventDefault()
  const newIten = document.createElement("li")
  const newDiv = document.createElement("div")
  const newCheckboxImage = document.createElement("div")
  const newInput = document.createElement("input")
  const newLabel = document.createElement("label")
  const newButton = document.createElement("button")
  try {
    if(addIten.value === "") {
      throw new Error("Por favor, preencha o campo!")
    }else {
      newDiv.append(newCheckboxImage, newInput, newLabel, newButton)

    newIten.append(newDiv)
  
    ol.append(newIten)
    
    newDiv.classList.add("input-checkbox")
    newCheckboxImage.classList.add("checkbox-image")
    newInput.setAttribute("type", "checkbox")
    newButton.classList.add("btn-remove")
    
    newLabel.textContent = addIten.value
  
    newButton.addEventListener("click", (event) => {
      event.preventDefault()
      newIten.classList.add("remove-iten")
      alert.classList.remove("remove-iten")
    })
    alertButton.addEventListener("click", (event) => {
      event.preventDefault()
      alert.classList.add("remove-iten")
    })
    }
  } catch (error) {
    console.log(error)
  }
})
