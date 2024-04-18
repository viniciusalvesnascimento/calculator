alert ("vamos fazer continhas?")

let numberOne = prompt("digite o primeiro numero")
let numberTwo = prompt("digite o segundo numero")

firstNumber = Number(numberOne) 
secondNumber = Number(numberTwo)

const sum = firstNumber + secondNumber
const sub =  firstNumber - secondNumber
const multi =  firstNumber * secondNumber
const div =  firstNumber / secondNumber
const rest =  firstNumber % secondNumber

alert(`soma: ${sum}`)
alert(`subtração: ${sub}`)
alert(`multiplicação: ${multi}`)
alert(`divisão: ${div}`)
alert(`resto da divisão: ${rest}`)

if(numberOne == numberTwo){
  alert ("os números são iguais")
} else {
  alert ("os números são diferentes")
} if (sum % 2 == 0){
  alert ("o numero é par")
} else{
  alert ("o numero é ímpar")
}