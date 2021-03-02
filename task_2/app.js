let img = document.querySelector('#inform');
let howMuchImg = document.querySelectorAll(".img");
let footClick = document.querySelector(".foot");
let imgOne = document.querySelector("#imagesOne");

let takeImg = howMuchImg[0];


let date = new Date();
let x = JSON.stringify(date);
let yData = x.replace(/[^0-9:-]/g, "").slice(0, 10).split("-").reverse().join("-");
let zTime = x.replace(/[^0-9:-]/g, "").slice(10, -6);

img.innerHTML = `на странице ${howMuchImg.length} изображений
текущая дата: ${yData},
текущее время: ${zTime}`;



for (let i = 0; i < howMuchImg.length; i++) {
    howMuchImg[i].addEventListener("click", () => {
        document.body.style.overflow = "hidden";
        imgOne.style.display = "flex";
        imgOne.querySelector("img").src = `images/${i + 1}.jpg`;
    });
};

imgOne.onclick = function() {
    document.body.style.overflow = "";
    imgOne.style.display = "none";
};