

/*var result=[];
for (let i = 0; i < localStorage.length; i++) {
        const id = localStorage.key(i)
        const item = getItemById(id)
        result.push(item)
    }
console.log(result);
*/

window.onhashchange = funcRef;
function funcRef()
{
	if(location.hash!="")
	try
	{
		var val = location.hash.match(/[^#]+/g);
	var textarDate =document.getElementById("dateEdit");
var dd = new Date();
	var localValue = JSON.parse(localStorage.getItem(val));
	//alert("ID " +val);
	//alert("GetCurrent"+ val.id);
	//alert(val.id);
console.log(localValue); //"myValue"
var noteAdd = localValue;
var textar = document.getElementById("text");
//console.log(localValue);
textarDate.innerHTML = noteAdd.date+"."+(noteAdd.month)+"."+noteAdd.year+" "+noteAdd.hour+":"+noteAdd.minute;;
//textarDate.innerHTML = dd.getDate()+"."+(dd.getMonth()+1)+"."+dd.getFullYear()+" "+dd.getHours()+":"+dd.getMinutes();

textar.value = localValue.alltext;
//val.setAttribute("style","display: block; text-decoration: none;  height: 100%; width: 100% ; ");
//localStorage.clear();
/* document.body.classList.add('article');

    alert(document.body.className); */// main page article

	}
	catch (error) {
  console.error(error);
  // expected output: ReferenceError: nonExistentFunction is not defined
  // Note - error messages will vary depending on browser
}

	
}
function changeDate()
{
document.getElementById("dateEdit").innerHTML="";
}
function myFunction()
{
 //  $('#text').val(); alert(text);

 var txt="43t43t";
 txt = document.getElementById('text').value;
//alert(txt);
var textarDate =document.getElementById("dateEdit");
var elem = document.getElementById("notes");
var note = document.createElement("div");

var mainText = document.createElement("div");
var subText = document.createElement("div");
var date = document.createElement("div");
mainText.setAttribute("style","color:#c4c4c6; margin-left:10px; display: block;");
date.setAttribute("style","");
var dd = new Date();
subText.innerHTML = dd.getDate()+"."+(dd.getMonth()+1)+"."+dd.getFullYear()+" "+dd.getHours()+":"+dd.getMinutes();

subText.setAttribute("style", "");
var br = document.createElement("br");
const words = txt.match(/[^\r\n]+/g);
var line = document.createElement("div");
	line.setAttribute("style", "height:3px;background:#2a2930;margin-left:10px;margin-right:10px;margin-top:0px;border-radius:50px;");
line.id= "line"+i;

var key=""
    key=words[0].replace(" ","");
    

	var wordForSub = "";

var wordForMain="";
if(words.length>0)
	if(words[0].length<10)
		wordForMain = words[0];
	else
		wordForMain = words[0].substr(0,10)+"..";

	if(words.length>1)
	if(words[1].length<10){
		wordForSub = words[1];
	}else{
		wordForSub =words[1].substr(0, 10)+"..";
	}
if(words.length>0)
{
		mainText.innerHTML="<a href='#' style='display: block;  height: 100%;' onclick='' >"+words[0]+"<br>";
	if(words.length>1)
	{
/*	subText.innerHTML+="\t"+words[1]+"</a>";
	//note.appendChild(link);
	note.innerHTML="<a href='#' style='display: block;  height: 100%;' onclick='' > </a>";
	//note.appendChild(mainText);
	note.appendChild(mainText);
	note.appendChild(date);
	note.appendChild(subText);
	elem.appendChild(note);
	elem.appendChild(line);*/
	note.innerHTML="<a href='#"+key+i+"' id='"+key+i+"'class='notChosen' onclick='GetCurrent(this)' ><div class='mainText' style='color:#c4c4c6; margin-left:10px;'>"+
	wordForMain+"</div> <div class='date' style='color:#f2e6d0;display:inline;margin-left:10px font-size:15px;'>"+
	dd.getDate()+"."+(dd.getMonth()+1)+"."+dd.getFullYear() +"</div><div class='subText' style='color:#f2e7d1; display:inline; margin-left:30px;font-size: 18px;'>\t"
	+wordForSub+"</div>"+"</a>";
	//note.innerHTML+=
	//note.innerHTML+="<div class='date'>"+dd.getDate()+"."+(dd.getMonth()+1)+"."+dd.getFullYear() +"</div>";
	elem.prepend(line);
	
	elem.prepend(note);
	}
	else
	{
	
	note.innerHTML="<a href='#"+key+i+"' id='"+key+i+"' class='notChosen'  onclick='GetCurrent(this)' ><div class='mainText' style='color:#c4c4c6; margin-left:10px;'>"+
	wordForMain+"</div> <div class='date' style='color:#f2e6d0;display:inline;margin-left:10px font-size:15px;'>"+
	dd.getDate()+"."+(dd.getMonth()+1)+"."+dd.getFullYear() +"</div></a>";
	elem.prepend(line);
	elem.prepend(note);
	}

	var Note={
 	zagolovok: words[0],
 	dateOfEdit: dd,
 	alltext: txt ,
 	idgen:i,
 	month:(dd.getMonth()+1),
 	date: dd.getDate(),
 	year: dd.getFullYear(),
 	minute:dd.getMinutes(),
 	hour:dd.getHours()
	 };
	 var serialObj = JSON.stringify(Note);
	 localStorage.setItem(key+i,serialObj);
	 //alert("Set "+key+i);
	 i=i+1;
	 location.hash = "#";
	 console.log(i);
	 //localStorage.clear();
 }
 document.getElementById('text').value ="";

}
var last ={zagolovok: '',
 	dateOfEdit:'' ,
 	alltext: '' ,
 	idgen: ''+0,
 	month:''+0,
 	date: ''+0,
 	year: ''+0,
 	minute:''+0,
 	hour:''+0
 	};

var lastVal ;
function GetCurrent(val)
{
//if(val.id != last.id)last.setAttribute("style","display: block;text-decoration: none;  height: 100%;");

var val2 = location.hash.match(/[^#]+/g);
var noteAdd  = JSON.parse(localStorage.getItem(val2));

var textarDate =document.getElementById("dateEdit");
val.classList.add('Chosen');
if(lastVal!=null)
lastVal.classList.remove('Chosen');

lastVal =val;

	var localValue = JSON.parse(localStorage.getItem(val.id));
	//alert("ID " +val.id)
	//alert("GetCurrent"+ val.id);
	//alert(val.id);
console.log(localValue); //"myValue"
current = val;
var textar = document.getElementById("text");
console.log(localValue);
textarDate.innerHTML = noteAdd.date+"."+(noteAdd.month)+"."+noteAdd.year+" "+noteAdd.hour+":"+noteAdd.minute;;

textar.value = localValue.alltext;
//val.setAttribute("style","display: block; text-decoration: none;  height: 100%; width: 100% ; ");
//localStorage.clear();
last = val;
}
var current = {};
function Delete()
{
var link = window.location.href;
var words = link.split('#');
var elem = document.getElementById("notes");

var key=""
    key=words[1].replace("%20"," ");
 last = JSON.parse(localStorage.getItem(key)) ;
var tempForId = last.zagolovok.replace(" ","");

//alert(words[1]);
var child = document.getElementById(words[1]);
//alert(words[1]+" "+tempForId);
child.remove(elem);
//alert("zagolovok "+last.zagolovok);
//var id = key.match(/[^tempForId]+/g);
var id = key.replace(tempForId,"");
//alert(id);
var linetoRem = document.getElementById("line"+id);
linetoRem.remove(elem);
localStorage.removeItem(key);

//linetoRem.setAttribute("style","height:0px;");
 document.getElementById('text').value="";
document.getElementById("dateEdit").innerHTML="";
location.hash="";

//localStorage.clear();
}
function clearAll()
{
	localStorage.clear();
}
function Save()
{
	var link = window.location.href;
var words2 = link.split('#');
var id = words2[1].match(/[^a-z]+/g);
var linetoRem = document.getElementById("line"+id);
linetoRem.remove(elem);
var elem = document.getElementById("notes");
//alert(words[1]);
var child = document.getElementById(words2[1]);
//alert(words2[1]);
child.remove(elem);
	var txt="43t43t";
 txt = document.getElementById('text').value;
var textarDate =document.getElementById("dateEdit");
var elem = document.getElementById("notes");
var note = document.createElement("div");

var mainText = document.createElement("div");
var subText = document.createElement("div");
var date = document.createElement("div");
mainText.setAttribute("style","color:#c4c4c6; margin-left:10px; display: block;");
date.setAttribute("style","");
var dd = new Date();
subText.innerHTML = dd.getDate()+"."+(dd.getMonth()+1)+"."+dd.getFullYear()+" "+dd.getHours()+":"+dd.getMinutes();
textarDate.innerHTML = dd.getDate()+"."+(dd.getMonth()+1)+"."+dd.getFullYear()+" "+dd.getHours()+":"+dd.getMinutes();

subText.setAttribute("style", "");
var br = document.createElement("br");
const words = txt.match(/[^\r\n]+/g);
var line = document.createElement("div");
	line.setAttribute("style", "height:3px;background:#2a2930;margin-left:10px;margin-right:10px;margin-top:0px;border-radius:50px;");
	var wordForSub = "";
	var wordForMain="";
if(words.length>0)
	if(words[0].length<10)
		wordForMain = words[0];
	else
		wordForMain = words[0].substr(0,10)+"..";

	if(words.length>1)
	if(words[1].length<10){
		wordForSub = words[1];
	}else{
		wordForSub =words[1].substr(0, 10)+"..";
	}
line.id= "line"+id;
if(words.length>0)
{
		mainText.innerHTML="<a href='#' style='display: block;  height: 100%;' onclick='' >"+words[0]+"<br>";
	if(words.length>1)
	{
	note.innerHTML="<a href='#"+words[0]+id+"' id='"+words[0]+id+"' class='notChosen'  onclick='GetCurrent(this)' ><div class='mainText' style='color:#c4c4c6; margin-left:10px;'>"+
	wordForMain+"</div> <div class='date' style='color:#f2e6d0;display:inline;margin-left:10px font-size:15px;'>"+
	dd.getDate()+"."+(dd.getMonth()+1)+"."+dd.getFullYear() +"</div><div class='subText' style='color:#e2c690; display:inline; margin-left:30px;font-size: 18px;'>\t"
	+wordForSub+"</div>"+"</a>";
	//note.innerHTML+=
	//note.innerHTML+="<div class='date'>"+dd.getDate()+"."+(dd.getMonth()+1)+"."+dd.getFullYear() +"</div>";
	elem.prepend(line);
	//alert("ADD LINE");
	elem.prepend(note);
	}
	else
	{
	
	note.innerHTML="<a href='#"+words[0]+id+"' id='"+words[0]+id+"' class='notChosen' onclick='GetCurrent(this)' ><div class='mainText' style='color:#c4c4c6; margin-left:10px;'>"+
	wordForMain+"</div> <div class='date' style='color:#f2e6d0;display:inline;margin-left:10px font-size:15px;'>"+
	dd.getDate()+"."+(dd.getMonth()+1)+"."+dd.getFullYear() +"</div></a>";
	elem.prepend(line);
	elem.prepend(note);

	}





//alert(words2[1]);
	var item = JSON.parse(localStorage.getItem(words2[1]));
localStorage.removeItem(words2[1]);

	console.log("get "+words2[1]);
	item.zagolovok = words[0];
	item.dateOfEdit = dd;
	item.alltext = txt;
	 var serialObj = JSON.stringify(item);
	 console.log(words[0]+id);
	// alert(words[0]+id);
	 localStorage.setItem(words[0]+id,serialObj);
 


//alert(id);

//linetoRem.setAttribute("style","height:0px;");
 document.getElementById('text').value="";

location.hash="";

document.getElementById("dateEdit").innerHTML="";

	 console.log(i);
 }

}
var i=0;
function AddStorage()
{
	for(let i=0; i<localStorage.length; i++) {
  let key = localStorage.key(i);
  AddFromStorage(key);
 }
}

 function AddFromStorage(key)
{
var noteAdd  = JSON.parse(localStorage.getItem(key));
if(noteAdd.idgen>=i)i=noteAdd.idgen+1;

console.log(noteAdd);
 txt = noteAdd.alltext;

var textarDate =document.getElementById("dateEdit");
var elem = document.getElementById("notes");
var note = document.createElement("div");

var mainText = document.createElement("div");
var subText = document.createElement("div");
var date = document.createElement("div");
mainText.setAttribute("style","color:#c4c4c6; margin-left:10px; display: block;");
date.setAttribute("style","");
//

//
////

///
///
var dd = Date.parse(noteAdd.dateOfEdit);

subText.innerHTML = noteAdd.date+"."+(noteAdd.month)+"."+noteAdd.year+" "+noteAdd.hour+":"+noteAdd.minute;

subText.setAttribute("style", "");
var br = document.createElement("br");
const words = txt.match(/[^\r\n]+/g);
var line = document.createElement("div");
	line.setAttribute("style", "height:3px;background:#2a2930;margin-left:10px;margin-right:10px;margin-top:0px;border-radius:50px;");
line.id= "line"+noteAdd.idgen;

var key=""
    key=words[0].replace(" ","");
    

	var wordForSub = "";

var wordForMain="";
if(words.length>0)
	if(words[0].length<10)
		wordForMain = words[0];
	else
		wordForMain = words[0].substr(0,10)+"..";

	if(words.length>1)
	if(words[1].length<10){
		wordForSub = words[1];
	}else{
		wordForSub =words[1].substr(0, 10)+"..";
	}
if(words.length>0)
{
		mainText.innerHTML="<a href='#' style='display: block;  height: 100%;' onclick='' >"+words[0]+"<br>";
	if(words.length>1)
	{
	note.innerHTML="<a href='#"+key+noteAdd.idgen+"' id='"+key+noteAdd.idgen+"' class='notChosen' onclick='GetCurrent(this)' ><div class='mainText' style='color:#c4c4c6; margin-left:10px;'>"+
	wordForMain+"</div> <div class='date' style='color:#f2e6d0;display:inline;margin-left:10px font-size:15px;'>"+
	noteAdd.date+"."+(noteAdd.month)+"."+noteAdd.year +"</div><div class='subText' style='color:#e2c690; display:inline; margin-left:30px;font-size: 18px;'>\t"
	+wordForSub+"</div>"+"</a>";
	//note.innerHTML+=
	//note.innerHTML+="<div class='date'>"+dd.getDate()+"."+(dd.getMonth()+1)+"."+dd.getFullYear() +"</div>";
	
	//console.log(note.innerHTML );
	elem.append(note);
	elem.append(line);

	}
	else
	{
	
	note.innerHTML="<a href='#"+key+noteAdd.idgen+"' id='"+key+noteAdd.idgen+"' class='notChosen' onclick='GetCurrent(this)' ><div class='mainText' style='color:#c4c4c6; margin-left:10px;'>"+
	wordForMain+"</div> <div class='date' style='color:#f2e6d0;display:inline;margin-left:10px font-size:15px;'>"+
	noteAdd.date+"."+(noteAdd.month)+"."+noteAdd.year +"</div></a>";
	elem.append(note);
	elem.append(line);

	}

}

}
//link.href="http://google.com";
//elem.appendChild(br);

/*
*/

//alert(document.getElementsByClassName("taxonomy-images")[0].innerHTML);

/*document.fuck.append(div);
body.insertAdjacentHTML('beforeend', '<p>Привет</p>');*/

