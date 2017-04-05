var celdasV1=document.getElementById("celdasVacias1");
var celdasV2=document.getElementById("celdasVacias2");
var numeritos=document.getElementsByClassName("numero");
var btnExplotar = document.getElementsByClassName('explotar');
var bomba =document.getElementsByClassName("bomba");
var longitud = btnExplotar.length;


celdasV1.addEventListener("click",colorCeldas);
celdasV2.addEventListener("click",colorCeldas);
for(var i = 0; i < longitud; i++){
	btnExplotar[i].addEventListener('click',mostrarBomba);
	

}

function mostrarBomba(sms){
	sms = alert("fin juego");
	for(var j=0; j<longitud; j++){
		var imagen = document.createElement("img");
		imagen.src = "bomba.jpeg";
		bomba[j].appendChild(imagen);		
		btnExplotar[0].remove();       
        
	}
}
function recorrerNumeros(numeritos) {
    var numeritos=document.getElementsByClassName("numero");
    for(var i = 0;i<numeritos.length;i++){
        numeritos[i].addEventListener("click",numeros)
    }
    /*numeritos.forEach(function (numero) {
    numero.addEventListener("click",numeros);
});*/
}
    
 recorrerNumeros(numeritos);   



function colorCeldas() {
        var padre=this.parentNode;
    this.style.display = "none";   
    padre.style.backgroundColor = "#00BFFF"
}

function numeros() {
    var padre=this.parentNode;
    if(this.value==1){           
        padre.innerText="1";        
    }else if(this.value==2){           
        padre.innerText="2";

    }
}
    

    
