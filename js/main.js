function insertTooltip(tooltipText, elementId){
	var inputElement = document.getElementById(elementId);
	var tooltip = document.createElement('span');
	tooltip.innerHTML = tooltipText;
	inputElement.parentNode.appendChild(tooltip, inputElement.nextSibling);
}

function validateForm(){
	var nombre, apellido, correo, contraseña, tip_bici, twitter, expresion, seleccionar,letra;

	nombre = document.getElementById("name").value;
	apellido = document.getElementById("lastname").value;
	correo = document.getElementById("input-email").value;
	contraseña = document.getElementById("input-password").value;
	twitter = document.getElementById("input-social").value;
	seleccionar = document.getElementById("opciones").selectedIndex;
	expresion = /\w+@\w+\.+[a-z]/;
	letra =   /^[a-zA-Z]+(\s*[a-zA-Z]*)*[a-zA-Z]+$/;
	mayusculas = /^([A-Z]{1}[a-zñáéíóú]+[\s]*)+$/;

	if(nombre === ""){ 
		insertTooltip("Ingrese su nombre", "name");
		return false;
		//tooltipText.style.display="none";
	}else if(!letra.test(nombre)){
		insertTooltip("Ingrese sólo letras", "name");
		return false;
	}else if(!mayusculas.test(nombre)){
		insertTooltip("Ingrese sólo la primera letra de su nombre en mayusculas", "name");
		return false;
	}else if(apellido === ""){
		insertTooltip("Ingrese su apellido", "lastname");
		return false;
	}else if(!letra.test(apellido)){
		insertTooltip("Ingrese sólo letras", "lastname");
		return false;
	}else if(!mayusculas.test(apellido)){
		insertTooltip("Ingrese sólo la primera letra de su apellido en mayusculas", "lastname");
		return false;
	}else if(correo === ""){
		insertTooltip("Ingrese su e-mail", "input-email");
		return false;
	}else if(!expresion.test(correo)){
		insertTooltip("El e-mail no es válido", "input-email");
		return false;
	}else if(contraseña === "password" || contraseña === "123456" || contraseña === "098754"){
		insertTooltip("Ingrese otra contraseña", "input-password");
		return false;
	}else if(contraseña === ""){
		insertTooltip("Ingrese una contraseña", "input-password");
		return false;
	}else if(contraseña.length < 6){
		insertTooltip("La contraseña debe tener mínimo 6 carácteres", "input-password");
		return false;
	}else if(contraseña.length > 20){
		insertTooltip("La contraseña debe tener máximo 20 carácteres", "input-password");
		return false;
	}else if(seleccionar == null || seleccionar == 0){
		insertTooltip("Seleccione un tipo de bici", "opciones");
		return false;
	}

	document.getElementById("name").value="";
	document.getElementById("lastname").value="";
	document.getElementById("input-email").value="";
	document.getElementById("input-password").value="";
	document.getElementById("input-social").value="";
	document.getElementById("opciones").selectedIndex=0;

}
