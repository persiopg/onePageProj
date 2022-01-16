//formulario banner
//alert box 
function formBanner(){
    const nome = document.forms["formB"]["fNome"].value;
    const tele = document.forms["formB"]["fTele"].value;
    const email = document.forms["formB"]["fEmail"].value;
    const check = document.forms["formB"]["fChecbox"];
    if(validacaoBanner(nome,tele,email,check.checked)){
        alert("Dados enviados");
    }else{alert("Por Favor preencha todos os campos");}    
}

function scrollbanner(){
  scrollSpy('#navsaiba', {
    sectionClass: '.scrollspy',
    menuActiveTarget: 'a',
    offset: 100,
    smoothScroll: true,
    smoothScrollBehavior: function(element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  });
};
//form contatos
function formContato(){
  const nome = document.forms["formCont"]["nome"].value;
  const tele = document.forms["formCont"]["tele"].value;
  const email = document.forms["formCont"]["email"].value;
  const assunto = document.forms["formCont"]["assunto"].value;
  const mensagem = document.forms["formCont"]["mensagem"].value;

  if(validacaoContato(nome,email,assunto,mensagem)){
    alert("Mensagen Enviada");
  }else{alert("Por Favor preencha todos os campos");}

}


//validação campo preenchido banner
function validacaoBanner(a,b,c,d){
    if(a!=""&& b!=""&& c!="" && d == true ){
        return true;
    }
    return false;
};

//validação campo preenchido contato
function validacaoContato(a,b,c,d){
  if(a!=""&& b!=""&& c!="" && d != "" ){
      return true;
  }
  return false;
};

//evento botao
//baner
document.getElementById("btnEnviar").addEventListener("click",formBanner);
//saiba mais
document.getElementById("navsaiba").addEventListener("click", scrollbanner);
//contato
document.getElementById("btnEnviarCont").addEventListener("click",formContato);


//config simple scrollspy
window.onload = function () {
  scrollSpy('#navMenu', {
    sectionClass: '.scrollspy',
    menuActiveTarget: 'li > a',
    offset: 100,
    smoothScroll: true,
    smoothScrollBehavior: function(element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  });
};

