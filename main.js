
let m = +prompt('Введите число столбцов');
let n = +prompt('Введите число строк');
let elem = document.querySelector('#elem');

let x = new Array(n);

for (let i = 0; i < x.length; i++) {
  x[i] = new Array();
}

let min = 0;
let i = 0;
let counter = 0;
let p = 2; // считает, сколько раз был max. Знач 2,т.к. на старте 2 max уже было
let r = 1; // считает, сколько раз был min. Знач 1,т.к. на старте 2 min уже было
let nw = 0;

//

if (n == 2){ // спец. условие для строк, иначе не сработает
    p = 1;
}

// всегда пишем первую ячейку
x[i].push(counter); 
++counter;
++i;

// в самом начале нужно прибавить, т.к. для зацикливания вычитаем
++i;

for (; min<n; ){

    //Вверх
    if (i>= min){
        --i;
        if (n != 2 && n%2 == 0 && p == n-1 && nw == 0) {
            --i, nw = 1;
        }
       
        for ( ; i >= min; i--, counter++){
            x[i].push(counter)
        }

        r++
        if (p != n-1) p++; 
        if (r >= m) {
            ++min, ++i;
        }
    } 

    //Вниз
    if (i == min || i<n){
        ++i;
        if (n == 2 && counter == m*n-1 && m%2 != 0) {
            --i, nw = 1;
        }
        
        for (; i <= p; i++, counter++){  
            x[i].push(counter)
        }
        
        r++; 
        if (r >= m) ++min;
        if (p != n-1) {
            p++, i--;
        }
    } 
}

function construct_table(parent, arr){
    let table = document.createElement('table');
    for (let i = 0; i <arr.length; i++){
        let tr = document.createElement('tr');
        for (let j = 0; j < arr[i].length; j++){
            let td = document.createElement('td');
            td.innerHTML = arr [i][j];
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
    parent.appendChild(table)
}

construct_table(elem, x)
