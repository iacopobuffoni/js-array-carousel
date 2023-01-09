const imgs = ["img/01.webp", "img/02.webp", "img/03.webp", "img/04.webp", "img/05.webp",];
const slide = document.querySelector(".slide");


for (let i=0; i<imgs.length; i++) {

    slide.innerHTML += `<img src="${imgs[i]}" class="hidden carouselImg"></img>`;
    console.log ("slide");
    
}

const allImgs = document.querySelectorAll(".carouselImg");
allImgs[0].classList.toggle("hidden");

const previousBtn = document.querySelector("#previous");
const nextBtn = document.querySelector("#next");
let index = 0;

console.log("inizio", index);
previousBtn.style.display = "none";
previousBtn.addEventListener("click", function(){

    if (index >0) {

        allImgs[carouselIndex].classList.toggle("hidden");
        index--;
        allImgs[index].classList.toggle("hidden");

    }

    if (index == 0) {

        previousBtn.style.display = "none";

    }

    nextBtn.style.display= "block";
    console.log("prev", index);

});

nextBtn.addEventListener("click", function(){

    if (index < imgs.length -1) {

        allImgs[index].classList.toggle("hidden");
        index++;
        allImgs[index].classList.toggle("hidden");

    }

    
    if (index == (imgs.length -1)) {

        nextBtn.style.display = "none";

    }
    
    previousBtn.style.display= "block";
    console.log("next", index);

});