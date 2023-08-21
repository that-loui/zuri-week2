const randoms = [1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F','K','M','N','Y','Z'];

function generateRandom(){
    return Math.floor(Math.random()*randoms.length);
}

console.log(generateRandom());

function outputRandom(){
let output = '';
for(i= 0; i < 3; i++){
    output+=`${randoms[generateRandom()]}`;
}
output+= ' ';
for(i =0; i < 3; i++){
    output +=`${randoms[generateRandom()]}`
}

return output;
}


const elements = document.querySelectorAll(".set2");
elements.forEach( item =>{
    item.textContent = outputRandom();
})


