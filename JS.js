function calcular(){
	var operacao=document.getElementById('operacao').value;
	var num1=document.getElementById("num1").value;
	var num2=document.getElementById("num2").value;
	var result=null;
	
	num1=parseFloat(num1);	//força ser do tipo float a variavel
	num2=parseFloat(num2);
	
	if(num1 == ' ' || num1 == ""){
		alert("Favor Digite um Número Válido"); //se tiver apenas espaço ou nao ter nada...
	}
	
	if(num2 == ' ' || num2 == ""){
		alert("Favor Digite um Número Válido");
	}
	
	switch(operacao){
		case "1":
			result=num1+num2;
			break;
			
		case "2":
			result=num1-num2;
			break;
			
		case "3":
			result=num1*num2;
			break;
			
		case "4":
			result=num1/num2;
			break;
		
		default:
			alert("A opção selecionada é invalida");
			return false;
			
	}
		document.getElementById('resultado').value=result;
	
	}