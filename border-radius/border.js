const inputBorder = document.querySelector('#change-br')
const inputColor = document.querySelector('#change-color')
const showColor = document.querySelector('#show-color')
const measure = document.querySelector('#measure')
const span = document.querySelector("#errorMessage")
const element = document.getElementById('box')
const defaultBorder = 0

inputBorder.addEventListener("change", changeBorderRadius)
measure.addEventListener("change", changeBorderRadius)

inputColor.addEventListener("change", changeColor)

function changeBorderRadius(){
   let inputValue = inputBorder.value
   let measure = document.querySelector('#measure').value

   if(!isNaN(inputValue) && inputValue !== "")
   {
      element.style.borderRadius = `${inputValue}${measure}` 
      span.innerHTML = ""
   }else{
      span.innerHTML = `Por favor insira um valor válido`
      element.style.borderRadius = `${defaultBorder}${measure}`
   }   
}

function changeColor(){
   let colorHex = inputColor.value
   showColor.value = colorHex
   element.style.backgroundColor = colorHex
}