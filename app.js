
// let indexes = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


// for (let index in indexes){
//     console.log(Number(index + 1));
// }



// let index = 0;

let accbx = document.querySelectorAll(".accordion-box");
let acclabel = document.querySelectorAll(".acc-label");
let min_svg = document.querySelectorAll(".minus");
let acctext = document.querySelectorAll(".acc-text");





accbx.forEach(label => {
    label.addEventListener("click", () => {
        // console.log("God is good");
        label.classList.toggle("change");
    })

    acctext.forEach(item => {
        item.addEventListener('mouseout', () => {
            item.addEventListener("mouseout", () => {
                label.classList.remove("change");
            })
        })
    })
})


acclabel.forEach(label => {
    label.addEventListener("click", () => {
        // console.log("Hallelujah");
        label.classList.toggle("change");
    })
    
    acctext.forEach(item => {
        item.addEventListener('mouseout', () => {
            item.addEventListener("mouseout", () => {
                label.classList.remove("change");
            })
        })
    })
})


