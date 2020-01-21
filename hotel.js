/*var a=[blue,red,green.yellow,orange];
for(i=0;i<a.length;i++)

{
  switch(i)
         {
         	case 0: console.log("my"+(i+1)"st choise is"+a[i])
         	break
         	case 1: console.log("my"+(i+1)"nd choise is"+a[i])
         	break
         	case 2: console.log("my"+(i+1)"rd choise is"+a[i])
         	break
         	case 3: console.log("my"+(i+1)"th choise is"+a[i])
         	break
         	default: console.log("my"+(i+1)"th choise is"+a[i])
         	break;	
         	}
         	 

}
*/































/*var a=[1,2,3,4,5];
var inp=Number(prompt("enter yourInput"));

function sumit(x)
{

	var y=a.slice(-x)
alert(y);
}
sumit(inp)

*/






























/*var myarr=[10,20,30,40,50,60,70,80,90];
var a=myarr.slice(1,4)
alert(a)
alert(a.shift())
alert(a.length)*/




/* var a=myarr.slice(1,5);
 

{var c=0;

 for (var i=0; i<a.length-1; i++) 
          c++;

}
alert(c)

var b=[0,1,1,0,0,1]
for(i=0;i<b.length;i++)

{

	if (b[i]==0)
	{b[i]=1;}
else
	{b[i]=0;}


}
alert (b);
*/































/*var m=[10,20,30,40,50,60,70,80,90]
  var j=[];
 for (var i=0;i<m.length;i++)
  {
 	if (m[i]%2==0)
 	 j.push(m[i]);
 }

alert(j)


var c=["red,","green,","white,","black,"];
var sum=" ";

for(i=0;i<c.length;i++)


{

	sum=sum+c[i];

}

alert(sum)


*/





























/*ar s=[10,13,0,120,89,55,60,22,0,100];
alert(s);
var s1=0;
for(i=0;i<s.length;i++)
s1=s1+s[i];
alert(s1)

alert(s1/s.length)*/




























function mult()
{
var f= document.getElementById("up").value;
var s= document.getElementById("qt").value;

var m= (parseInt(f)*parseInt(s));

document.getElementById("tt").value=m;}
function tax()
{
  var d= document.getElementById("cn").value;
var tot= document.getElementById("tt").value;
var gt;
  if (d=="india"){
  var per= tot/5;
  }
else if (d=="japan"){
  var per= tot/10;
}
else if (d=="usa"){
  var per= tot/20;
}
gt = parseInt(per)+parseInt(tot);
document.getElementById("tx").value=per;
document.getElementById("gt").value=gt;
}














/*var pid=Number(prompt("enter Product id"))
var pname=prompt("enter Product name")
var Qty=Number(prompt("enter Quantity"))
var unp=Number(prompt("enter unit price"))
var cnt=prompt("enter Country")

function getTotal(a,b)

{
	var tb=(a*b);
	return tb;
}

function getTax(c,d)
{ var v;
	{if (c=="india")

        v=d 
	  
}
function msg(pid,pname,qty,unp,cnt)
{
	alert("product"+pid+"product name"+pname+"Quantity"+qty+"unit prize"+unp+"country"+cnt)
}

var grandtotal=getTotal(Qty,unp);
var totaltax=getTax(cnt,grandtotal);




*/




































/*var name=prompt("enter name ")
var phy=Number(prompt("enter phy.marks"))
var che=Number(prompt("enter che marks"))
var math=Number(prompt("enter maths marks")	)

var per=((phy+che+math)*100/300)
{ if (per>80 ) { alert("grade A")}

else if(per>60 && per<80)
{
	alert("grade B")
}
else if(per>60)
	{alert ("Grade C")}
}

function getresult(phy,che,math)

{
	var per=((phy+che+math)*100/300);
	return per;
}

function getgrade(per)

 {if (per>80 ) { return "")}


else if(per>60 && per<80)
{
	alert("grade B")
}
else if(per>60)
	{alert ("Grade C")}
}





























var name=prompt('enter your name')
var favactor=prompt('enter fav actor')
var luckyno=Number(prompt('enter your lucky no.'))
var favdish=prompt('enter your fav dish')

if (name[0]=="d" && favactor[favactor.length-1]=="r" && luckyno=="7" && favdish.length>=6) 
{
	alert("welcome your are secret agent")
}
 else
 {
 	alert("thanks ")
 }*/

 












































//alert("hello")
/*
var a=prompt("enter your hotel name");
var b=prompt("enter total no. of rooms");
var c=prompt("enter ac rooms");
var d=prompt("enter Non ac rooms");


sum=(c+d);
if (sum==b)
	{alert('thank you , Data saved successfully')
	}
else 
{	
alert('wrong input')
}
var marks=Number(prompt('enter marks'));

switch (marks)
 {
  case 1: case 2: case 3:
  alert('poor');
  break;
  case 4: case 5: case 6:
    alert('good');
  break;
  case 7: case 8: case 9: case 10:
  alert('Excellent');
  break;
zghadefault ('g')
}
alert('exit');*/