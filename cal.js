var txt ="";   

function myFunction(k){
	var key = k.which || k.keyCode;
	switch (key){
		case 96: 
		case 48:
			num0(); break;
			
		case 97: 
		case 49:
			num1(); break;
			
		case 98: 
		case 50:
			num2(); break;
			
		case 99: 
		case 51:
			num3(); break;
			
		case 100: 
		case 52:
			num4(); break;
			
		case 101: 
		case 53:
			num5(); break;
			
		case 102: 
		case 54:
			num6(); break;
		
		case 103: 
		case 55:
			num7(); break;
			
		case 104: 
		case 56:
			num8(); break;
			
		case 105: 
		case 57:
			num9(); break;
			
		case 107: 
			plus(); break;
			
		case 109: 
			minus(); break;
			
		case 106: 
			times(); break;
			
		case 111: 
		case 191:
			divide(); break;
			
		case 110: 
		case 190:
			numdot(); break;
			
		case 13:
			equal(); break;
		case 8:
			backward(); break;	
		case 46:
			clearCurrent(); break;
		case 27:
			clickedClearAll(); break;		
			
		default:
			break;
	}

	if(document.getElementById("equation").value=="undefined"){
		document.getElementById("anwser").innerHTML="ERROR";
		setTimeout(function(){	
			txt = "";
			document.getElementById("equation").innerHTML=txt;
			document.getElementById("anwser").innerHTML=txt;},1000);
	}
}

function num0(){txt +="0";	document.getElementById("equation").innerHTML=txt;}
function num1(){txt += "1";	document.getElementById("equation").innerHTML=txt;}
function num2(){ txt += "2";	document.getElementById("equation").innerHTML=txt;}
function num3(){txt += "3";	document.getElementById("equation").innerHTML=txt;}
function num4(){ txt += "4";	document.getElementById("equation").innerHTML=txt;}
function num5(){ txt += "5";	document.getElementById("equation").innerHTML=txt;}
function num6(){ txt += "6";	document.getElementById("equation").innerHTML=txt;}
function num7(){ txt += "7";	document.getElementById("equation").innerHTML=txt;}
function num8(){ txt += "8";	document.getElementById("equation").innerHTML=txt;}
function num9(){ txt += "9";	document.getElementById("equation").innerHTML=txt;}
function num00(){txt += "00";	document.getElementById("equation").innerHTML=txt;}
function numdot(){txt += ".";	document.getElementById("equation").innerHTML=txt;}

function plus(){checkO(); txt += "+"; document.getElementById("equation").innerHTML=txt;}
function minus(){checkO(); txt += "-"; document.getElementById("equation").innerHTML=txt;}
function times(){checkO(); txt += "*"; document.getElementById("equation").innerHTML=txt;}
function divide(){checkO(); txt += "/";	document.getElementById("equation").innerHTML=txt;}

function equal(){
	var anwser=eval(txt);
	document.getElementById("anwser").innerHTML=anwser;
	txt=String(anwser);
}

function backward(){
	txt=txt.slice(0,txt.length-1);
	document.getElementById("equation").innerHTML=txt;
}

function clickedClearAll(){
	txt = "";
	document.getElementById("equation").innerHTML=txt;
	document.getElementById("anwser").innerHTML=txt;
}

function clearCurrent(){
	document.getElementById("anwser").innerHTML="";
}

function checkO(){
	var temp=txt.slice(txt.length-1);
	if (temp=="+" || temp=="-" || temp=="*" || temp=="/"){
		backward();
	}	
}

function purple(){
	var x = document.getElementsByTagName("div");
	for (i = 0; i < x.length; i++) {
		x[i].style.color = "#522966";
	}
	
	document.getElementsByTagName("h1")[0].style.color = "#522966";
	document.getElementsByTagName("h1")[0].style.textShadow = "2px 2px 5px #E6B2FF";
	document.getElementsByTagName("h5")[0].style.color = "#522966";
	document.getElementsByTagName("h5")[0].style.textShadow = "1px 1px 2px #E6B2FF";
	
	document.getElementById("cal").style.backgroundColor = "#CC66FF";
	document.getElementById("screen").style.backgroundColor = "#FAF0FF";

	var y = document.getElementsByClassName("numpad");
	for (i = 0; i < y.length; i++) {
		y[i].style.backgroundColor = "#E6B2FF";
		y[i].style.boxShadow = "0 0 1px 1px #522966";
	}
}

function blue(){
	var x = document.getElementsByTagName("div");
	for (i = 0; i < x.length; i++) {
		x[i].style.color = "#295266";
	}
	
	document.getElementsByTagName("h1")[0].style.color = "#295266";
	document.getElementsByTagName("h1")[0].style.textShadow = "2px 2px 5px #B2E6FF";
	document.getElementsByTagName("h5")[0].style.color = "#295266";
	document.getElementsByTagName("h5")[0].style.textShadow = "1px 1px 2px #B2E6FF";
	
	document.getElementById("cal").style.backgroundColor = "#66CCFF";
	document.getElementById("screen").style.backgroundColor = "#F0FAFF";

	var y = document.getElementsByClassName("numpad");
	for (i = 0; i < y.length; i++) {
		y[i].style.backgroundColor = "#B2E6FF";
		y[i].style.boxShadow = "0 0 1px 1px #295266";
	}
}

function orange(){
	var x = document.getElementsByTagName("div");
	for (i = 0; i < x.length; i++) {
		x[i].style.color = "#663D14";
	}
	
	document.getElementsByTagName("h1")[0].style.color = "#663D14";
	document.getElementsByTagName("h1")[0].style.textShadow = "2px 2px 5px #FFCC99";
	document.getElementsByTagName("h5")[0].style.color = "#663D14";
	document.getElementsByTagName("h5")[0].style.textShadow = "1px 1px 2px #FFCC99";
	
	document.getElementById("cal").style.backgroundColor = "#FF9933";
	document.getElementById("screen").style.backgroundColor = "#FFF5EB";

	var y = document.getElementsByClassName("numpad");
	for (i = 0; i < y.length; i++) {
		y[i].style.backgroundColor = "#FFCC99";
		y[i].style.boxShadow = "0 0 1px 1px #663D14";
	}
}

function pink(){
	var x = document.getElementsByTagName("div");
	for (i = 0; i < x.length; i++) {
		x[i].style.color = "#66293D";
	}
	
	document.getElementsByTagName("h1")[0].style.color = "#66293D";
	document.getElementsByTagName("h1")[0].style.textShadow = "2px 2px 5px #FFB2CC";
	document.getElementsByTagName("h5")[0].style.color = "#66293D";
	document.getElementsByTagName("h5")[0].style.textShadow = "1px 1px 2px #FFB2CC";
	
	document.getElementById("cal").style.backgroundColor = "#FF6699";
	document.getElementById("screen").style.backgroundColor = "#FFF0F5";

	var y = document.getElementsByClassName("numpad");
	for (i = 0; i < y.length; i++) {
		y[i].style.backgroundColor = "#FFB2CC";
		y[i].style.boxShadow = "0 0 1px 1px #66293D";
	}
}

function grey(){
	var x = document.getElementsByTagName("div");
	for (i = 0; i < x.length; i++) {
		x[i].style.color = "#333333";
	}
	
	document.getElementsByTagName("h1")[0].style.color = "#333333";
	document.getElementsByTagName("h1")[0].style.textShadow = "2px 2px 5px #C0C0C0";
	document.getElementsByTagName("h5")[0].style.color = "#333333";
	document.getElementsByTagName("h5")[0].style.textShadow = "1px 1px 2px #C0C0C0";
	
	document.getElementById("cal").style.backgroundColor = "#808080";
	document.getElementById("screen").style.backgroundColor = "#F2F2F2";

	var y = document.getElementsByClassName("numpad");
	for (i = 0; i < y.length; i++) {
		y[i].style.backgroundColor = "#C0C0C0";
		y[i].style.boxShadow = "0 0 1px 1px #333333";
	}
}



