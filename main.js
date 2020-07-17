function agregarFila(){
    document.getElementById("tablaMinimos2").innerHTML = `<div class="row">
                                                            <input type="number">
                                                            <input type="number">
                                                            <input type="number">
                                                            <input type="number">
                                                            <input type="number">
                                                            <input type="number">
                                                        </div>`;
}
  
function eliminarFila(){
    var table = document.getElementById("tablaMinimos");
    var rowCountM = table.rows.length;
    
    if(rowCountM <= 1)
      alert('No se puede eliminar el encabezado');
    else
      table.deleteRow(rowCountM -1);

}
var j = 1;
var k = 1;
var Xi = 0;
var XiYi = 0;
var Pxi = 0;
var e = 0;

function agregarFila2(){
    document.getElementById("tablaExponencial").insertRow(-1).innerHTML = `<td><input class="X${j}" type="number"></td><td><input class="Y${k}" type="number"></td><td><p id="Xi${Xi}"></p></td><td><p id="XiYi${XiYi}"></p></td><td><p id="Px${Pxi}"></p></td><td><p id="e${e}"></p></td>`;
    j +=1;
    k +=1;
    Xi +=1;
    XiYi +=1;
    Pxi +=1;
    e +=1;
}

  
function eliminarFila2(){
    var table = document.getElementById("tablaExponencial");
    var rowCountE = table.rows.length;
    
    if(rowCountE <= 1)
      alert('No se puede eliminar el encabezado');
    else
      table.deleteRow(rowCountE -1);
    
}

var X = [];
var Y = [];
var Z = [];
var W = [];
var P = [];
var E = [];
var puntos = [];

function capturar(){

    var table = document.getElementById("tablaExponencial");
    var rowCountM = table.rows.length;
    var i;
    var sumaX = 0;
    var sumaY = 0;
    var sumaZ = 0;
    var sumaW = 0;
    
    for ( i = 1; i <= rowCountM-1; i++){
        var Xi = document.getElementsByClassName(`X${i}`)[0].value;
        var Yi = document.getElementsByClassName(`Y${i}`)[0].value;
        var XiNumero = parseFloat(Xi);
        var YiNumero = parseFloat(Yi);
        sumaX = (sumaX + XiNumero);
        sumaY = (sumaY + YiNumero);
        X.push(XiNumero);
        Y.push(YiNumero);
        puntos.push({x: XiNumero, y: YiNumero});
    }
    console.log(X);
    console.log(Y);
    console.log(sumaX);
    console.log(sumaY);
    console.log(puntos);

    for (q = 0; q <= rowCountM-2; q++){
        var Xi2 = Math.pow(X[q], 2);
        sumaZ = (sumaZ + Xi2);
        Z.push(Xi2);
        var resXiYi = (X[q]*Y[q]);
        sumaW = (sumaW + resXiYi);
        W.push(resXiYi.toFixed(4));
        valorXi2 = document.getElementById(`Xi${q}`).innerHTML=`${Z[q]}`;
        valorXiYi = document.getElementById(`XiYi${q}`).innerHTML=`${W[q]}`;
    }
    console.log(Z);
    console.log(W);
    console.log(sumaZ);
    console.log(sumaW);

    var a0;

    a0 = ((sumaZ*sumaY) - (sumaW*sumaX))/((X.length*sumaZ) - (Math.pow(sumaX, 2)));
    valorA0 = document.getElementById('a0').innerHTML=`${a0}`;

    var a1;

    a1 = ((X.length*sumaW) - (sumaX*sumaY))/((X.length*sumaZ) - (Math.pow(sumaX, 2)));
    valorA1 = document.getElementById('a1').innerHTML=`${a1}`;

    var Px;
    var l;
    var error;

    for (l = 0; l <= rowCountM-2; l++){
        Px = ((a1*X[l])-a0);
        P.push(Px.toFixed(4));
        valorPx = document.getElementById(`Px${l}`).innerHTML=`${P[l]}`;
        error = Math.pow((Y[l]-P[l]), 2);
        E.push(error.toFixed(4));
        valorError = document.getElementById(`e${l}`).innerHTML=`${E[l]}`;
    };

    var ctx = document.getElementById('grafica').getContext('2d');

    var grafica = new Chart( ctx, {
        type: 'line',
        data: {
            datasets: [{
                label: 'Xi Yi',
                data: Y
            }],
            labels: X
        },
        options: {
            responsive: true
        }
    });

    var ctx2 = document.getElementById('grafica2').getContext('2d');

    var grafica2 = new Chart( ctx2, {
        type: 'line',
        data: {
            datasets: [{
                label: 'Xi Px',
                data: P
            }],
            labels: X
        },
        options: {
            responsive: true
        }
    });

}




