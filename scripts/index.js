const areaCircle = document.querySelector('.area-ball');
const btnCreateCircle = document.querySelector('#add-ball');
const btnDelCircle = document.querySelector('#del-ball');
let countCircle;

window.onload = ()=>{
    countCircle = +localStorage.getItem('countCircle');
    if(countCircle == 0){
        paintAreaCircle(3);
        localStorage.setItem('countCircle','3');
    }
    else
        paintAreaCircle(countCircle);
}


btnCreateCircle.addEventListener('click',()=>{
    paintAreaCircle();
    localStorage.setItem('countCircle',`${++countCircle}`);
})
btnDelCircle.addEventListener('click',()=>{
    if(areaCircle.hasChildNodes()){
        areaCircle.lastElementChild.remove();
        localStorage.setItem('countCircle',`${--countCircle}`);}
})
function paintAreaCircle(count = 1){
    for(let i = 0;i < count; i++){
        let newCircle = document.createElement('div');
        newCircle.className = 'red-circle';
        areaCircle.appendChild(newCircle);        
    }    
}