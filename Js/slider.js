
const images = [

    "./images/pic-1.jpg",
    "./images/pic-2.jpg",
    "./images/pic-3.jpg",
    "./images/pic-4.jpg",
    "./images/pic-5.jpg",
    "./images/pic-6.jpg",
    "./images/pic-7.jpg",
    "./images/pic-8.jpg",
    "./images/pic-9.jpg",
];

let imgIndex = 0;
const imgElement = document.getElementById("slider-img");
setInterval(() => {

    if (imgIndex === images.length) {
        imgIndex = 0;
    }
    const imgURl = images[imgIndex];

    imgElement.setAttribute("src", imgURl);
    imgIndex++;

}, 1000);