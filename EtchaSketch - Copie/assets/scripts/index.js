/*functions*/

let containerEl = document.getElementById("container");

function createGrid(rows,columns) {
    for (let i = 0; i < rows * columns ; i++) {
        const divContent = document.createElement("div");
        divContent.classList.add("content");
        containerEl.appendChild(divContent);
    }
}

createGrid(16,16);

function gridHover(e) {
    e.target.style.backgroundColor = inputColor.value;
    
}

containerEl.addEventListener("mouseover", gridHover);

let divContent;


function gridEraser() {
    let divContents = document.querySelectorAll(".content");
    divContents.forEach((divContent)=>{
        divContent.style.backgroundColor = '';
    })
    
}

function gridColor() {
    let divContents = document.querySelectorAll(".content");
    divContents.forEach((divContent)=>{
        divContent.addEventListener("mouseenter", (e)=>{
            divContent.style.backgroundColor = inputColor.value;
        })
        
    })
    
}

function rainbowGenerator() {
    const hue = Math.floor(Math.random() * 360);
    return `hsl(${hue}, 100%, 50%)`;

}
function gridRainbow() {

    let divContents = document.querySelectorAll(".content");
    divContents.forEach((divContent)=>{
        divContent.addEventListener("mouseenter",(e)=>{
            divContent.style.backgroundColor = rainbowGenerator();
        })
        
    })
    
}

// function gridSlider() {
//     let rows = sliderBtn.value;
//     let columns = sliderBtn.value;
//     containerEl.style.gridTemplateColumns=`${columns},1fr`;
//     containerEl.style.gridTemplateRows=`${rows},1fr`;
//     createGrid(rows,columns);
// }
/* j'ai créé une fonction pour retirer tous les parents directs avec leurs classes et styles
déjà attribués automatiquement pour que les nouveaux settings de l'input range soient pris
en considération*/

function removeAllChildNodes(parent){
    while(parent.firstChild){
        parent.removeChild(parent.firstChild);
    }
}

function gridSlider() {
    let rows = sliderBtn.value;
    let columns = sliderBtn.value;
    removeAllChildNodes(containerEl);
    containerEl.setAttribute('style', `grid-template-columns: repeat(${columns}, 1fr); grid-template-rows: repeat(${rows}, 1fr);`);
    for (let i = 0; i < rows*columns; i++) {
        const divContent = document.createElement("div");
        divContent.classList.add("content");
        containerEl.appendChild(divContent);
        }
        containerEl.appendChild(divContent); 
    }

/*buttons*/

let buttonsEl = document.getElementById("buttons");
let resetBtn = document.getElementById("reset");
let inputColor = document.getElementById("colorpicker");
let rnbwBtn = document.getElementById("rainbow");
let sliderBtn = document.getElementById("slider");
let labelEl = document.querySelector(".label");
let sliderDivEl = document.querySelector(".sliderDiv");

buttonsEl.appendChild(resetBtn);
buttonsEl.appendChild(inputColor);
buttonsEl.appendChild(rnbwBtn);

sliderDivEl.appendChild(sliderBtn);
sliderDivEl.appendChild(labelEl);
buttonsEl.appendChild(sliderDivEl);




resetBtn.addEventListener("click", gridEraser);

inputColor.addEventListener("click", gridColor);

rnbwBtn.addEventListener("click", gridRainbow);

sliderBtn.addEventListener("input", function () {
    let valRange = sliderBtn.value;
    labelEl.textContent = valRange;
    gridSlider();
})
