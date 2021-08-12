const color = ["img1.jpg", "img2.jpg", "img3.jpg","img4.jpg","img5.jpg"];
const container = document.createElement("div");
container.setAttribute("class", "container");
var i = 0;
const cyclecolor = () => {
    console.log("slideshow", i);
    if (i === 5) {
        i = 0;
    }
    let htmlElement = `<div><img id="img" class="images" src="${color[i]}"/></div>`;
    container.innerHTML = htmlElement;
    i++;
}
document.body.append(container);
// var images = document.querySelector('.images');
intervalCall();
function intervalCall() {
    setInterval(cyclecolor, 2000);
}
let test = document.getElementById("img");
test.addEventListener('mouseover', stop);
let cyc;

// setTimeout(()=>);
// function cycle() {
//     cyc = setInterval(cyclecolor, 2000);
// // }
function stop() {
    cyc = clearInterval(cyc);
}
// function count() {
//     console.log("typing", event.target.value);
// }
function prev() {
    if (i > 0) {
        i--;
        cyclecolor();
    }
}
function next() {
    if (i < 4) {
        i++;
        cyclecolor();
    }
}