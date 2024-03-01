const btn = document.getElementById("btn");
// function debounce (fn,delay) {
//     let timeOutId;
//     return () => {
//         if (timeOutId) {
//             clearTimeout(timeOutId)
//         }
//         timeOutId =  setTimeout( () => {
//             fn()
//         },delay)
//     }
// }
// btn.addEventListener("click",debounce(() => {
//     console.log("click");
//     alert("Clicked")
// },2000))
// const debounce = (fn,delay = 1000) => {
//     let timeOutId;
//     return () => {
//         clearTimeout(timeOutId)
//         timeOutId = setTimeout (() => fn(),delay)
//     }
// }
// btn.addEventListener("click",debounce(() => {
//     console.log("hello")
// },2000))



function debounced (fn,delay = 1000) {
    let timerId;
    // The reutrned function is real function that is called when fire the event 
    return (e) => {
        if(timerId) {
            clearTimeout(timerId)
        }
        timerId = setTimeout(() => {
            fn (e)
        },delay)
    }
}
// This function is only work for fetching data 
async function getProduct (url) {
    const response = await fetch(url)
    const data = await response.json();
    console.log(data)
}
// The function is only call the fetching function with the url 
const handler = (e) => {
    getProduct(`https://dummyjson.com/products/search?q=${e.target.value}`)
}

const inputValue = document.getElementById("input");
inputValue.addEventListener("input",debounced(handler,2000))
