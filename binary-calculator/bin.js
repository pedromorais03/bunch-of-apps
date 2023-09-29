const binaryNumber = document.querySelector('#binary-number')
const decimalNumber = document.querySelector('#decimal-number')
const convertButton = document.querySelector('#convert-button')
const errorMessage = document.querySelector('.error-message')

binaryNumber.addEventListener('change', verifyValidBinary)
convertButton.addEventListener('click', convertBinaryToDecimal)

function verifyValidBinary(){
   let binaryValue = binaryNumber.value
   let errors = 0

   for(let i = 0; i < binaryValue.length; i++){
      if(binaryValue[i] !== "0" && binaryValue[i] !== "1"){
         errors++
      }
   }

   toggleButton(errors)
}

function toggleButton(errors){
   if(errors !== 0){
      convertButton.disabled = true
      convertButton.style.backgroundColor = '#ef5b5b'
      convertButton.style.cursor = 'not-allowed'

      errorMessage.style.display = 'block'
   }else{
      convertButton.disabled = false
      convertButton.style.backgroundColor = '#3cb371'
      convertButton.style.cursor = 'pointer'

      errorMessage.style.display = 'none'
   }
}

function convertBinaryToDecimal(){
   let binaryValue = binaryNumber.value   
   let convertedNumber = parseInt(binaryValue, 2)

   console.log(convertedNumber)
   decimalNumber.value = convertedNumber.toString()
   console.log("hm")
}
