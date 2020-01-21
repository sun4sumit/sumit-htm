function mult()
{
var s= document.getElementById("salary").value;
var a= document.getElementById("ta").value;
var d= document.getElementById("da").value;
var ded= document.getElementById("dd").value;

var pf= (s/20);

document.getElementById("pdd").value=pf;
var tot=parseInt(s)+parseInt(a)+parseInt(d)-parseInt(ded)-parseInt(pf);

document.getElementById("gt").value=tot;
}