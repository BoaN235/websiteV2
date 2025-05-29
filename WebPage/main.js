const alphabet = "abcdefghijklmnopqrstuvwxyz";
const h1Element = document.getElementById("hacker_title");
console.log(h1Element)
const hiddenText = h1Element.textContent;

let previousTimestamp = 1000;
let elapsedSeconds = 0;
let secondspercharacterReveal = 0.2;


const animationLoop = (currentTimestamp) => {
    let secondsSinceLastFrame = (currentTimestamp - previousTimestamp) / 1000;
    previousTimestamp = currentTimestamp
    
    elapsedSeconds += secondsSinceLastFrame

    const charctersToReveal = elapsedSeconds/secondspercharacterReveal

    let animatedText = ""

    for (let i = 0; i < hiddenText.length; i++ ) {
        let character = ""

        if ( i < charctersToReveal) {
            character = hiddenText[i]
        }
        else {
            character = alphabet[Math.floor(Math.random() * alphabet.length)]
        }
        animatedText += character;
    }
    h1Element.innerText = animatedText
    
    window.requestAnimationFrame(animationLoop);
}
window.requestAnimationFrame(animationLoop)

h1Element.addEventListener("click", () => {
    elapsedSeconds = 0;
})


function home() {
window.location.href = "../home/index.html";
}
function projects() {
window.location.href = "../projects/project_list.html";
}
function blog() {
window.location.href = "../blog/blog.html";
}
function about() {
window.location.href = "../about/about.html";
}