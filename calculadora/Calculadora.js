
export default class Calculadora{

    static soma(x,y){
        return x+y;
    }

    static subtracao(x,y){
        if(verificarEntradaDeTexto(x,y)){
            return "erro";
        }else{
            return x-y;
        }
    }

    static multiplicacao(x,y){
        if(verificarEntradaDeTexto(x,y)){
            return "erro";
        }else{
            return x*y;
        }
    }

    static divisao(x,y){
        if(verificarEntradaDeTexto(x,y)){
            return "erro";
        }else if(y === 0){
            return "não é possivel dividir por 0";
        }else{
            return x/y;
        }
    }
}

function verificarEntradaDeTexto(x,y){
    if(typeof x == "string" || typeof y == "string"){
        return true;
    }else{
        return false;
    }

}