function salvar(){
	var json,
		data = {};
		
		data.nome = document.getElementById('inputNome').value;		
		json 	  = JSON.stringify(data);
		
		$.ajax({
			url : "http://localhost:8080/api/v1/pessoa",
			type: "POST",
			contentType:"application/json; charset=utf-8",
			data: json
		}).done( ( response ) => {
			//$('#registerForm')[0].reset();//limpa todos os campos do form
			toastr.success('Cadastro realizado com sucesso!');
		}).fail(() => {
			toastr.error('Failed!');
		});
}

function alterar(){
	var json,
		data = {};
		
		data.id	  = document.getElementById('inputID').value;
		data.nome = document.getElementById('inputNome').value;
		json	  = JSON.stringify(data);
		
		$.ajax({
			url : "http://localhost:8080/api/v1/pessoa",
			type: "PUT",
			contentType:"application/json; charset=utf-8",
			data: json
		}).done(( response ) => {
			//$('#registerForm')[0].reset();//limpa todos os campos do form
			toastr.success('Alteração realizada com sucesso!');
		}).fail(() => {
			toastr.error('Falhou!');
		});
}

function excluir(){
	var data = {};
		
		data.id	  = document.getElementById('inputID').value;
				
		$.ajax({
			url : "http://localhost:8080/api/v1/pessoa"+'/'+data.id,
			type: "DELETE",
			contentType:"application/json; charset=utf-8",
		}).done( ( response ) => {
			//$('#registerForm')[0].reset();//limpa todos os campos do form
			toastr.success('Exclusão realizada com sucesso!');
		}).fail(() => {
			toastr.error('Falhou!');
		});
}

function listar(){
	var i, 
		txt = "";
		
		$.ajax({
			url : "http://localhost:8080/api/v1/pessoa",
			type: "GET",
			contentType:"application/json; charset=utf-8"			
		}).done( function( response ){
			//$('#registerForm')[0].reset();//limpa todos os campos do form			
														
			txt += "<table style='width:53%' border='1' class='table table-hover'>"
			txt += "<thead class='thead-dark'>"
			txt += "<tr><th style='text-align:center'>Código</th><th>Nome</th></tr></thead>"
		
			for (i=0; i < response.length; i++) {
				txt += "<tr><td style='text-align:center'>" + response[i].id + "</td>";
				txt += "<td>" + response[i].nome + "</td></tr>";
			}
				
			txt += "</table>"
			document.getElementById('tabela').innerHTML = txt;
			
		}).fail(function() {
			toastr.error('Falhou!');
		});
}

function consultar(){
	var data = {},
		txt  = "";
		
		data.id	= document.getElementById('inputID').value;
		
		$.ajax({
			url : "http://localhost:8080/api/v1/pessoa"+'/'+data.id,
			type: "GET",
			contentType:"application/json; charset=utf-8"
		}).done( function( response ){
			//$('#registerForm')[0].reset();//limpa todos os campos do form			
				
			txt += "<table style='width:53%' border='1' class='table table-hover'>"
			txt += "<thead class='thead-dark'>"
			txt += "<tr><th style='text-align:center'>Código</th><th>Nome</th></tr></thead>"
	
			txt += "<tr><td style='text-align:center'>" + response.id + "</td>";
			txt += "<td style='text-align:center'>" + response.nome + "</td></tr>";
		
			txt += "</table>"
			document.getElementById('tabela').innerHTML = txt;
			
		}).fail(function() {
			toastr.error('Falhou!');
		});
}