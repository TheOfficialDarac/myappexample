// alert('this is an alert.');
console.log('this is a log.');
// console.assert(2>4, 'this prints itself out as a warning');

document.querySelector('*').addEventListener('mousemove',(e) =>{
    document.querySelector('*').style.background = `linear-gradient(rgb(${e.offsetX},20,20),rgb(${e.offsetY},20,20))`;
    document.querySelector('*').style.backgroundRepeat = 'no-repeat';
    console.log(document.querySelector('*').tagName)
})