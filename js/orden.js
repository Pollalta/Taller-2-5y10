window.addEventListener("keydown",Teclas)
function Teclas(key) {
    var div=document.querySelector("#divtext")

    if (key.keyCode=="69" &&key.ctrlKey) {
        div.style.display='block';
    }if (key.keyCode=="83" &&key.ctrlKey) {
        div.style.display='none';
    }
}
function valorRadio(form, name){
	var radio=form.elements[name];
	var valor;
	for (var i =0,len=radio.length; i<len; i++) {
		if(radio[i].checked==true){
			valor=radio[i].value;
		}
		return valor;
	}
}
function Complementos(e){
	var form = this.form;
 var val = parseFloat(form.elements['Complementos_total'].value);
 if ( this.checked == true ) {
 val += parseFloat(this.value);
 } else {
 val -= parseFloat(this.value);
 }

 form.elements['Complementos_total'].value = val;
 ActualizarTotal(form);
 }

function ComboCan(e){
	this.form.elements['Cantidad'].value=parseFloat(this.value);
	if(this.form.elements['Cantidad'].value!=0){
		ActualizarTotal(this.form);
	}else{
		this.form.elements['Cantidad'].value=1;
	}
	
}
function ComboPrecio(e){
	this.form.elements['Combo_total'].value = parseFloat(this.value);

	ActualizarTotal(this.form);

}
function ActualizarTotal(form){
	var Combototal=parseFloat(form.elements['Combo_total'].value);
	var CantidadTotal=parseFloat(form.elements['Cantidad'].value);
	var Complementos=parseFloat(form.elements['Complementos_total'].value)
	form.elements['Total_Orden'].value=((Combototal+Complementos)*CantidadTotal);
}
function Iniciar(){
var form= document.getElementById('Orden');
var btnComentarios=document.querySelector('#btnComentario')
    var div=document.querySelector("#divtext")
    div.style.display="none";
    btnComentarios.addEventListener('click',()=>{

        if (div.style.display==='none') {
            div.style.display='block';
        }else{
            div.style.display='none';
        }
    })
	var tipo= form.elements['combo'];
	for (var i =0, len=tipo.length; i <len; i++) {
		tipo[i].onclick=ComboPrecio;
	}
 form.elements['Combo_total'].value=parseFloat(valorRadio(form, 'combo'));
 ActualizarTotal(form);
 var Cantidad= form.elements['Cantidad'].value
	Cantidad.onkeydown=function(){
		ComboCan();
	}
	var el = document.getElementById('Complementos');
	var Complementos = el.getElementsByTagName('input');
	for (var i=0, len=Complementos.length; i<len; i++) {
		 if (Complementos[i].type === 'checkbox') {
		 Complementos[i].onclick =Complementos ;
		 }
	 }
};
window.onload=Iniciar;