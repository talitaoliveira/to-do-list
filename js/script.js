window.onload = function(){
	function $(attr){
		return (document.querySelector(attr));
	}

	var form = $("#formAdd");
	var btAdd = $('#btAdd');
	var adicionar = $('#adicionar');
	var item = $('#item');
	var lista = $('#lista');
	var itemlista = $("#lista li");

	btAdd.addEventListener("click", function(e){
		e.preventDefault();
		if(form.style.display == 'none'){
			form.style.display = 'block';
		}else{
			form.style.display = 'none';
		}
	});

	adicionar.addEventListener("click", function(e){
		e.preventDefault();
		var li = document.createElement("li");
		lista.appendChild(li);
		var textnode = document.createTextNode(item.value); 
		li.appendChild(textnode);
	});

	lista.addEventListener("click", function(e){
		e.preventDefault();
		e.target.classList.toggle('marcado');
	});
}