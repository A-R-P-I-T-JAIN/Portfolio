const text = document.querySelector(".text");
        function text_load(){
            setTimeout(() => {
                text.textContent = "Web Developer";
            },0);
            setTimeout(() => {
                text.textContent = "Java Developer";
            },4000);
            setTimeout(() => {
                text.textContent = "Sketch Artist";
            },8000);
            
        }
        text_load();
        setInterval(text_load,12000);

let scrollContainer = document.querySelector(".sec-3-1");
let leftScroll = document.getElementById("left_arr");
let rightScroll = document.getElementById("right_arr");

let width = window.innerWidth
let height = window.innerHeight
console.log(width)
leftScroll.addEventListener("click",()=>{
       scrollContainer.scrollLeft -= 600;
})

rightScroll.addEventListener("click",()=>{
    scrollContainer.scrollLeft += 600;
})

let scrollContainer2 = document.querySelector(".sketches");
let leftScroll2 = document.getElementById("left_arr2");
let rightScroll2 = document.getElementById("right_arr2");


leftScroll2.addEventListener("click",()=>{
    scrollContainer2.scrollLeft -= 600;
})

rightScroll2.addEventListener("click",()=>{
    scrollContainer2.scrollLeft += 600;
})

// function submit(){
// const scriptURL = 'https://script.google.com/macros/s/AKfycbxwoeDLhTEfKR0k4ZwCWYg-gTkoWzxAIWmHfVwhoE84sa9zTCXYm38DDCrfEOzRvvIX/exec'
//         const form = document.forms['submit-to-google-sheet']
      
//         form.addEventListener('submit', e => {
//           e.preventDefault()
//           fetch(scriptURL, { method: 'POST', body: new FormData(form)})
//             .then(response => console.log('Success!', response))
//             .catch(error => console.error('Error!', error.message))
//         })

//     }
