const hexArr = [0,1,2,3,4,5,6,7,8,9,'A','B', 'C', 'D', 'E', 'F'];

const btn = document.getElementById('btn');
const color = document.querySelector('.color');

btn.addEventListener('click', function() {
    let hexColor = "#";
    for(let i =0;i<6;i++) {

        let randomNum = Math.floor(Math.random()*hexArr.length)
        hexColor+=hexArr[randomNum];
    }

    color.textContent=hexColor;
    document.body.style.backgroundColor = hexColor;
})
