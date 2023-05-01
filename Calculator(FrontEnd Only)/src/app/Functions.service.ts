export class FuntionsService{

    result!: number;

    soma(x: number, y: number){
        return this.result = x + y;
    }

    subtração(x: number, y: number){
        return this.result = x - y;
    }

    divisao(x: number, y: number){
        return this.result = x / y;
    }

    multiplicacao(x: number, y: number){
        return this.result = x * y;
    }

    porcentagem(x: number, y: number){
        return this.result = (x * y) / 100;
    }

    raizQuadrada(x: number){
        return this.result = Math.sqrt(x);
    }

    limpaTela(){
        this.result = 0;
    }
}