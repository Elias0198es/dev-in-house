data = new Date();

hora    = data.getHours();          
min     = data.getMinutes();        
seg     = data.getSeconds();    

str_hora = hora + ':' + min + ':' + seg;

alert("Página acessada ás " + str_hora);

