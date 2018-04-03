function enviaDados(){
  var nome = $("#nome").val();
  var email = $("#email").val();
  var telefone = $("#telefone").val();
  var notice = $("#notice").val();

  var dados = {
    name: nome,
    email: email,
    phone: telefone,
    notice: notice
  };

  $.ajax({
    url: "http://api.vtexcrm.com.br/corebiz/dataentities/TE/documents",
    type: "POST",
    data: JSON.stringify(dados),
    headers: {
      "Content-type" : "application/json",
      "Accept" : "application/json"
    },
    success: function (res){
      console.log(res);
    },
    error: function (erro){
      console.log(erro);
      alert("Erro");
    }
  });
};

var campos = $(".form-contato input, .form-contato textarea");

$("#btn-contato").click(function(event){
  event.preventDefault();
  if (campos.val() == "") {
    alert("Todos os campos devem ser preenchidos.");
  } else {
    enviaDados();
    alert("Dados enviados com sucesso.");
    $(".form-contato")[0].reset();
  }
});
