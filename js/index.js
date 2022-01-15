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


//validação campo preenchido
function validacao(a,b,c,d){
    if(a!=""&& b!=""&& c!=""&& d == true ){
        return true;
    }
    return false;
}
//evento botao
document.getElementById("btnEnviar").addEventListener("click",alertbox);

document.getElementById("navsaiba").addEventListener("click", scrollbanner);


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

