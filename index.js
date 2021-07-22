var botao = document.getElementById("botao");

botao.addEventListener('click', function(){
  var pdf = new jsPDF();
  pdf.text('document.getElementById("teste").value, 10, 10');
  pdf.save("formulario.pdf");
})


