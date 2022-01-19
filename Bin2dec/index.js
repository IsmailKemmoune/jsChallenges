const text = document.getElementById("text")
const convert = document.getElementById("convertButton")
const result = document.getElementById("result")

let binary = ""
let parsed = 0

// const binaryCheck = (str) => {
//     for (let i = 0; i < str.length; i++)
//     if(str[i] !== "0" || str[i] !== "1")
//         return 0
//     else
//         return 1
// } 

convert.addEventListener("click", () =>{
    binary = text.value
    parsed = parseInt(binary, 2)
    if(isNaN(parsed))
    {
        alert("please enter a valid binary number")
        return ;
    }
    result.innerHTML = "result is : "
    render()
})

const render = () =>{
    result.innerHTML += parsed   
}