const grid_container = document.querySelector('.grid-container');


function makeGrid(row,col){
    for(let j=0;j<col;j++){
        let v_grid = document.createElement('div');
        for(let i=0;i<row;i++){
            let grid = document.createElement('div');
            v_grid.appendChild(grid).className="horizontal-item";
        }  
        grid_container.appendChild(v_grid).className="vertical-grid";
    }

    const boxes = document.querySelectorAll('.horizontal-item');
    boxes.forEach(item => {
        item.addEventListener('mouseover', event => {
            item.style.backgroundColor="blue";
        })
    });
}


makeGrid(16,16);


const button = document.querySelector('.btn');
button.addEventListener('click', (boxes) =>{
    const cont = document.querySelector('.grid-container');
    const size = prompt("What size do you want? ");
    while(cont.firstChild){
        cont.removeChild(cont.firstChild);
    }
    makeGrid(size,size);
});