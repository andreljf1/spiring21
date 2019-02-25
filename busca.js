function AJAX() {
    this.Updater=carregarDados;
    function carregarDados(caminhoRetorno,idResposta,metodo,mensagem) {
        var conteudo=document.getElementById(idResposta);
        conteudo.innerHTML= mensagem;
        var xmlhttp = getXmlHttp();
        //Abre a url
        xmlhttp.open(metodo.toUpperCase(), caminhoRetorno,true);
        //Executada quando o navegador obtiver o código
        xmlhttp.onreadystatechange=function() {
            if (xmlhttp.readyState==4){
                //Lê o texto
                var texto=xmlhttp.responseText;
                //Desfaz o urlencode
                texto=texto.replace(/\+/g," ");
                texto=unescape(texto);
                //Exibe o texto no div conteúdo
                var conteudo=document.getElementById(idResposta);
                conteudo.innerHTML=texto;
            }
        }
    xmlhttp.send(null);
    }
}
function getXmlHttp() {
    var xmlhttp;
    try{
        xmlhttp = new XMLHttpRequest();
    }catch(ee){
        try{
            xmlhttp = new ActiveXObject("Msxml2.XMLHTTP");
        }catch(e){
            try{
                xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
            }catch(E){
            xmlhttp = false;
            }
        }
    }
    return xmlhttp;
}