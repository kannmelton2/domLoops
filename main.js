console.log('domLoops');

const dinosaurs = [
    {type: 't-rex', name: 'Wrex'},
    {type: 'stegosaurus', name: 'Steve'},
    {type: 'velociraptor', name: 'Blue'}
]

// PRINT TO DOM
const printToDom = (divId, textToPrint) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = textToPrint;
}

// THING - WHAT DOES IT DO
const buildDinosaurCards = () => {
    let domStr = '';
    for (let i = 0; i < dinosaurs.length; i++){
        domStr += '<div class="dinosaur">';
        domStr +=   `<h3>${dinosaurs[i].type}</h3>`;
        domStr +=   `<p>${dinosaurs[i].name}</p>`;
        domStr += '</div>';
    }
    printToDom('dino-barn', domStr);

};

buildDinosaurCards();

