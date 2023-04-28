const container = document.querySelector('.container');

function makeGrid(row,col){
    for(let j=0;j<col;j++){
        let v_grid = document.createElement('div');
        for(let i=0;i<row;i++){
            let grid = document.createElement('div');
            v_grid.appendChild(grid).className="horizontal-item";
        }  
        container.appendChild(v_grid).className="vertical-grid";
    }
}


const div = document.querySelectorAll(".horizontal-item");

div.forEach(item => {
    item.addEventListener('click', () =>{
        console.log("click");
    })    
});

makeGrid(16,16);