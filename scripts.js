function viewPassword(){
	var cont=0;
	if (document.getElementById("senha").getAttribute("type") == "password") {
		document.getElementById("eye").setAttribute("src", "/sistema-escolar/eye.png");
		document.getElementById("senha").setAttribute("type", "text");
		document.getElementById("eye").setAttribute("title", "Ocultar senha");
		cont = 1;
	}
	if (cont==0) {
		document.getElementById("eye").setAttribute("src", "/sistema-escolar/eye-blocked.png");
		document.getElementById("senha").setAttribute("type", "password");
		document.getElementById("eye").setAttribute("title", "Mostrar senha");
	}
}

function viewPasswordAluno(){
	var cont=0;
	if (document.getElementById("a_senha").getAttribute("type") == "password") {
		document.getElementById("eye").setAttribute("src", "/sistema-escolar/eye.png");
		document.getElementById("a_senha").setAttribute("type", "text");
		document.getElementById("eye").setAttribute("title", "Ocultar senha");
		cont = 1;
	}
	if (cont==0) {
		document.getElementById("eye").setAttribute("src", "/sistema-escolar/eye-blocked.png");
		document.getElementById("a_senha").setAttribute("type", "password");
		document.getElementById("eye").setAttribute("title", "Mostrar senha");
	}
}

function viewPasswordProfessor(){
	var cont=0;
	if (document.getElementById("p_senha").getAttribute("type") == "password") {
		document.getElementById("eye").setAttribute("src", "/sistema-escolar/eye.png");
		document.getElementById("p_senha").setAttribute("type", "text");
		document.getElementById("eye").setAttribute("title", "Ocultar senha");
		cont = 1;
	}
	if (cont==0) {
		document.getElementById("eye").setAttribute("src", "/sistema-escolar/eye-blocked.png");
		document.getElementById("p_senha").setAttribute("type", "password");
		document.getElementById("eye").setAttribute("title", "Mostrar senha");
	}
}

function formAtualizaAluno(id){
	document.getElementById("formCadastroAluno").style.display = "grid";
	document.getElementById("formCadastroAluno").setAttribute("name",id);
}
function fechaFormAtualizaAluno(){
	document.getElementById("formCadastroAluno").style.display = "none";
}
function formAtualizaProfessor(id){
	document.getElementById("formCadastroProfessor").style.display = "grid";
	document.getElementById("formCadastroProfessor").setAttribute("name",id);
}
function fechaFormAtualizaProfessor(){
	document.getElementById("formCadastroProfessor").style.display = "none";
}
function formAtualizaCurso(id){
	document.getElementById("formCadastroCurso").style.display = "grid";
	document.getElementById("formCadastroCurso").setAttribute("name",id);
}
function fechaFormAtualizaCurso(){
	document.getElementById("formCadastroCurso").style.display = "none";
}
function formAtualizaDisciplina(id){
	document.getElementById("formCadastroDisciplina").style.display = "grid";
	document.getElementById("formCadastroDisciplina").setAttribute("name",id);
}
function fechaFormAtualizaDisciplina(){
	document.getElementById("formCadastroDisciplina").style.display = "none";
}

function formCadastroAluno(){
	document.getElementById("formCadastroAluno").style.display = "grid";
	document.getElementById("fundo").style.display = "block";
}

function fechaFormCadastroAluno(){
	document.getElementById("formCadastroAluno").style.display = "none";
	document.getElementById("fundo").style.display = "none";
}

function formCadastroProfessor(){
	document.getElementById("formCadastroProfessor").style.display = "grid";
	document.getElementById("fundo").style.display = "block";
}

function fechaFormCadastroProfessor(){
	document.getElementById("formCadastroProfessor").style.display = "none";
	document.getElementById("fundo").style.display = "none";
}

function formCadastroCurso(){
	document.getElementById("formCadastroCurso").style.display = "grid";
	document.getElementById("fundo").style.display = "block";
}

function fechaFormCadastroCurso(){
	document.getElementById("formCadastroCurso").style.display = "none";
	document.getElementById("fundo").style.display = "none";
}

function formCadastroDisciplina(){
	document.getElementById("formCadastroDisciplina").style.display = "grid";
	document.getElementById("fundo").style.display = "block";
}

function fechaFormCadastroDisciplina(){
	document.getElementById("formCadastroDisciplina").style.display = "none";
	document.getElementById("fundo").style.display = "none";
}

function formAtualizacaoAluno(){
	document.getElementById("formAtualizacaoAluno").style.display = "grid";
	document.getElementById("fundo").style.display = "block";
}

function fechaFormAtualizacaoAluno(){
	document.getElementById("formAtualizacaoAluno").style.display = "none";
	document.getElementById("fundo").style.display = "none";
}

function formAtualizacaoProfessor(){
	document.getElementById("formAtualizacaoProfessor").style.display = "grid";
	document.getElementById("fundo").style.display = "block";
}

function fechaFormAtualizacaoProfessor(){
	document.getElementById("formAtualizacaoProfessor").style.display = "none";
	document.getElementById("fundo").style.display = "none";
}

function formAtualizacaoCurso(){
	document.getElementById("formAtualizacaoCurso").style.display = "grid";
	document.getElementById("fundo").style.display = "block";
}

function fechaFormAtualizacaoCurso(){
	document.getElementById("formAtualizacaoCurso").style.display = "none";
	document.getElementById("fundo").style.display = "none";
}

function formAtualizacaoDisciplina(){
	document.getElementById("formAtualizacaoDisciplina").style.display = "grid";
	document.getElementById("fundo").style.display = "block";
}

function fechaFormAtualizacaoDisciplina(){
	document.getElementById("formAtualizacaoDisciplina").style.display = "none";
	document.getElementById("fundo").style.display = "none";
}

function formExclusaoAluno(){
	document.getElementById("formExclusaoAluno").style.display = "grid";
	document.getElementById("fundo").style.display = "block";
}

function fechaFormExclusaoAluno(){
	document.getElementById("formExclusaoAluno").style.display = "none";
	document.getElementById("fundo").style.display = "none";
}

function formExclusaoProfessor(){
	document.getElementById("formExclusaoProfessor").style.display = "grid";
	document.getElementById("fundo").style.display = "block";
}

function fechaFormExclusaoProfessor(){
	document.getElementById("formExclusaoProfessor").style.display = "none";
	document.getElementById("fundo").style.display = "none";
}

function formExclusaoCurso(){
	document.getElementById("formExclusaoCurso").style.display = "grid";
	document.getElementById("fundo").style.display = "block";
}

function fechaFormExclusaoCurso(){
	document.getElementById("formExclusaoCurso").style.display = "none";
	document.getElementById("fundo").style.display = "none";
}

function formExclusaoDisciplina(){
	document.getElementById("formExclusaoDisciplina").style.display = "grid";
	document.getElementById("fundo").style.display = "block";
}

function fechaFormExclusaoDisciplina(){
	document.getElementById("formExclusaoDisciplina").style.display = "none";
	document.getElementById("fundo").style.display = "none";
}

function irParaAtualizarDados(){
	document.location.href = "atualizar-dados.html";
}

function irParaApagarDados(){
	document.location.href = "apagar-dados.html";
}

function atualizarAluno(id,nome,email,telefone,data_nascimento){
	var db = openDatabase("sistema-escolar", "1.0", "Sistema escolar", 200000);

	//db.transaction(function(tx){
		//tx.executeSql("UPDATE aluno SET nome = "+nome+", email = "+email+", senha = "+senha+", data_nascimento = "+data_nascimento+", telefone = "+telefone+" WHERE id = "+id);
	//});

	alert("Os seguintes dados foram cadastrados com sucesso:\n"+id+"\n"+nome+"\n"+email+"\n"+data_nascimento+"\n"+telefone);

	//alert("Os dados foram atualizados com sucesso!");
}

function apagarAluno(id){
	var db = openDatabase("sistema-escolar", "1.0", "Sistema escolar", 200000);

	db.transaction(function(tx){
		tx.executeSql("DELETE FROM aluno WHERE id ="+id);
	});

	alert("O aluno foi excluído com sucesso!");
	window.location.href = "apagar-dados.html";
}

function apagarProfessor(id){
	var db = openDatabase("sistema-escolar", "1.0", "Sistema escolar", 200000);

	db.transaction(function(tx){
		tx.executeSql("DELETE FROM professor WHERE id ="+id);
	});

	alert("O professor foi excluído com sucesso!");
	window.location.href = "apagar-dados.html";
}

function apagarCurso(id){
	var db = openDatabase("sistema-escolar", "1.0", "Sistema escolar", 200000);

	db.transaction(function(tx){
		tx.executeSql("DELETE FROM curso WHERE id ="+id);
	});

	alert("O curso foi excluído com sucesso!");
	window.location.href = "apagar-dados.html";
}

function apagarDisciplina(id){
	var db = openDatabase("sistema-escolar", "1.0", "Sistema escolar", 200000);

	db.transaction(function(tx){
		tx.executeSql("DELETE FROM disciplina WHERE id ="+id);
	});

	alert("A disciplina foi excluída com sucesso!");
	window.location.href = "apagar-dados.html";
}

function mask(e, id, mask){
  var tecla=(window.event)?event.keyCode:e.which;   
  if((tecla>47 && tecla<58)){
    mascara(id, mask);
    return true;
  } 
  else{
    if (tecla==8 || tecla==0){
      mascara(id, mask);
      return true;
    } 
    else  return false;
  }
}

function mascara(id, mask){
  var i = id.value.length;
  var carac = mask.substring(i, i+1);
  var prox_char = mask.substring(i+1, i+2);
  if(i == 0 && carac != '#'){
    insereCaracter(id, carac);
    if(prox_char != '#')insereCaracter(id, prox_char);
  }
  else if(carac != '#'){
    insereCaracter(id, carac);
    if(prox_char != '#')insereCaracter(id, prox_char);
  }
  function insereCaracter(id, char){
    id.value += char;
  }
}