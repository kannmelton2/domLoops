console.log('loops');

const colors = ['red','green', 'navy blue', 'yellow', 'orange'];

const colorLoop = () => {
    let domString = '';
    for (let i = 0; i < colors.length; i++) {
        domString += `<h1>${colors[i]}</h1>`;
    }
    console.log(domString);
}
colorLoop();

const instructors = [
    {first: 'zoe', last: 'ames',},
    {first: 'mary', last: 'west'},
    {first: 'luke', last: 'lancaster'}
]

const nameLoop = () => {
    let domStr = '';
    for (let i = 0; i < instructors.length; i++) {
        domStr += `<h2>${instructors[i].first} ${instructors[i].last}</h2>`;
    }
    console.log(domStr);
}
nameLoop();