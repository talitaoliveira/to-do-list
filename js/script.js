window.onload = function(){
	/*function $(attr){
		return (document.querySelector(attr));
	}*/

	var form = document.querySelector("#formAdd");
	var btAdd = document.querySelector('#btAdd');
	var adicionar = document.querySelector('#adicionar');
	var item = document.querySelector('#item');
	var lista = document.querySelector('#lista');
	var itemlista = document.querySelector("#lista li");

	var tipolista = document.querySelector("#tipolista");

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
		lista.prepend(li);
		var textnode = document.createTextNode(item.value); 
		li.appendChild(textnode);
	});

	lista.addEventListener("click", function(e){
		e.preventDefault();
		e.target.classList.toggle('marcado');
	});


	function carrega(){
		resposta = JSON.parse(this.responseText);
		for (var item in resposta) {
			var li = document.createElement("li");
			lista.appendChild(li);
			var textnode = document.createTextNode(resposta[item].title); 
			li.appendChild(textnode);

			if(resposta[item].completed == true){
				li.classList.toggle('marcado');
			}

		}
	}

	chamaxml("http://localhost/to-do-list/js/compras.json");
	
	function chamaxml(url){
		var xhr = new XMLHttpRequest();
		xhr.onload = carrega;
		xhr.open('GET',url,true);
		xhr.send();
	}

	tipolista.addEventListener("change",function(e){
		lista.innerHTML = "";
		if(e.target.value == 1){
			chamaxml("http://localhost/to-do-list/js/compras.json");
		}else{
			chamaxml("http://localhost/to-do-list/js/todo.json");
		}
	});
}