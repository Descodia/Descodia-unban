const logo=function(){
  
    
  return `
  
    \u001b[32m______ 
    
    Ahmed - Descodia
    Contact me on Telegram; @descodia
    `
}
const menu=function(){

  return` 
  \u001b[32m
_______whatsapp tools_________
|                            |
| [1]=>wa.me                 | 
| [2]=>gerador de menu       |
| [3]=>gerador de aviso      |
| [4]=>Desativar numero      |
| [5]=>Desbanir numero       |
|____________________________|

\u001b[0m
  [9]=> criador
  [0]=>sair
  \u001b[0m`
}
const warking=(aviso)=>{
let avisoc=aviso.replace('.','\n')
  return `
  \u001b[31m
  @________________Ahmed_______________@
  
  ${avisoc}
  
  
  ~by                                      
Descodia_king
       @_________________________@
  \u001b[0m
       `
}

module.exports={logo:logo,menu:menu,aviso:warking}
