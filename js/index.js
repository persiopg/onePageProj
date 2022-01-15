//formulario banner
//alert box 
function alertbox(){
    const nome = document.forms["formB"]["fNome"].value;
    const tele = document.forms["formB"]["fTele"].value;
    const email = document.forms["formB"]["fEmail"].value;
    const check = document.forms["formB"]["fChecbox"];
    console.log(check.checked);
    if(validacao(nome,tele,email,check.checked)){
        alert("dados enviados");
    }
    alert("Por Favor preencha todos os campos");
    
}
//validação campo preenchido
function validacao(a,b,c,d){
    if(a!=""&& b!=""&& c!=""&& d == true ){
        return true;
    }
    return false;
}
//evento botao
document.getElementById("btnEnviar").addEventListener("click",alertbox);

$('#navMenu a, .scrollDown').click(function() {
    $('html, body').animate({
      scrollTop: $($(this).attr('href'))
        .offset().top
    }, 700);
    return false;
  });
  
  $(window).scroll(function() {
    var x = $(".nav-top").offset().top;
    $("section").each(function(index) {
      var z = $(this).attr("id");
      if (x > $(this).offset().top && x <= $(this).offset().top + $(this).height()) {
        $('a.' + z).css("color", "red");
      } else {
        $('a.' + z).css("color", "gray")
      }
    })
  })
  