var btnSave = document.getElementById("btn-save");

var saveHandler = function(e){
	alert(e.type);
}

btnSave.addEventListener("click", saveHandler, false);
