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
//validação campo preenchido
function validacao(a,b,c,d){
    if(a!=""&& b!=""&& c!=""&& d == true ){
        return true;
    }
    return false;
}
//evento botao
document.getElementById("btnEnviar").addEventListener("click",alertbox);

window.onload = function () {
  scrollSpy('#navMenu', {
    sectionClass: '.scrollspy',
    menuActiveTarget: 'li > a',
    offset: 1000,
    // smooth scroll
    smoothScroll: true,
    smoothScrollBehavior: function(element) {
      console.log('run "smoothScrollBehavior"...', element)
      element.scrollIntoView({ behavior: 'smooth' }) // default behavior
    }
  })
}