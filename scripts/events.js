var btnSave = document.getElementById("btn-save");

var saveHandler = function(){
	alert("clicked event");
}

btnSave.addEventListener("click", saveHandler, false);
