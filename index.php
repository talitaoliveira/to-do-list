<!DOCTYPE html>
<html lang="pt-br">
<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<!-- As 3 meta tags acima *devem* vir em primeiro lugar dentro do `head`; qualquer outro conteúdo deve vir *após* essas tags -->
	<title>To do List</title>
	<link rel="stylesheet" href="css/style.css">
	<script type="text/javascript" src="js/script.js"></script>
	<!-- Última versão CSS compilada e minificada -->
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
</head>
<body>
	<section class="container" id="add">
		<div class="row">
			<div class="col-md-12 col-sm-12">
				<h1 class="text-center">To do List</h1>
			</div>
		</div>
		<div class="row">
			<div class="col-md-12 col-sm-12">
				<button class="btn btn-default btn-block btn-info" id="btAdd">
					+
				</button>
			</div>
		</div>
		<br>
		<div class="row">
			<form class="container" id="formAdd">
				<div class="form-group">
					<input type="text" class="form-control" id="item" placeholder="Adicione um item">
				</div>
				<div class="form-group">
					<button class="btn btn-default btn-block" id="adicionar">+ Adicionar</button>
				</div>
				<div class="form-group">
					<select class="form-control" name="tipolista" id="tipolista">
						<option value="1">Lista de compras</option>
						<option value="2">Lista de a fazer</option>
					</select>
				</div>
			</form>
		</div>
	</section>
<hr>
	<section id="itens" class="container">
		<h2 class="text-center">Itens adicionados</h2>
		<ul id="lista">
		</ul>
	</section>
</body>
</html>