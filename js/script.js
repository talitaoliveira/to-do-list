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
	var carrega = document.querySelector("#carrega");

	var tipolista = document.querySelector("#tipolista");

	var loading = document.querySelector("#loading");

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


	/*function carrega(){
		console.log("carregando");
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
	}*/
	chamaxml("http://localhost/to-do-list/js/compras.json");

	function chamaxml(url){
		carrega.innerHTML = "0%";
		var xhr = new XMLHttpRequest();
		//xhr.onload = carrega;
		xhr.onreadystatechange = function(){
			if(xhr.readyState == 1){
				console.log("começou");
				loading.style.display = 'block';
			}
			if(xhr.readyState == 2){
				setTimeout(function(){carrega.innerHTML = "45%";},1000);
				loading.style.display = 'block';
			}
			if(xhr.readyState == 3){
				setTimeout(function(){carrega.innerHTML = "98%";},3000);
				loading.style.display = 'block';
			}
			if(xhr.readyState == 4 && xhr.status == 200){
				setTimeout(function(){
					carrega.innerHTML = "100%";
					loading.style.display = 'none';
					carrega.innerHTML = "";
					resposta = JSON.parse(xhr.responseText);
					for (var item in resposta) {
						var li = document.createElement("li");
						lista.appendChild(li);
						var textnode = document.createTextNode(resposta[item].title); 
						li.appendChild(textnode);

						if(resposta[item].completed == true){
							li.classList.toggle('marcado');
						}

					}
				}, 5000);
			}
		};
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