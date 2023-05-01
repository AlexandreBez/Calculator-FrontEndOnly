import { Component } from '@angular/core';
import { FuntionsService } from '../Functions.service';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent{

  isOff: boolean = true;
  value!: string;

  x!: number;
  y!: number;

  quadrado: boolean = false;
  porcentagem: boolean = false;
  soma: boolean = false;
  sub: boolean = false;
  div: boolean = false;
  mult: boolean = false;
  
  constructor(
    private functionsService: FuntionsService
  ) { }


  // funçoes
  turnOnClicked(){
    this.isOff = false;
    this.value = "0";
    this.x = 0;
    this.y = 0;
  }

  turnOffClicked(){
    this.isOff = true;
    this.value = "";
    this.x = 0;
    this.y = 0;
  }

  onSquareClicked(){
    this.quadrado = true;
    this.porcentagem = false;
    this.soma = false;
    this.sub = false;
    this.div = false;
    this.mult = false;
  }

  onPercentageClicked(){
    this.quadrado = false;
    this.porcentagem = true;
    this.soma = false;
    this.sub = false;
    this.div = false;
    this.mult = false;
  }

  onDivClicked(){
    this.quadrado = false;
    this.porcentagem = false;
    this.soma = false;
    this.sub = false;
    this.div = true;
    this.mult = false;
  }

  onMultClicked(){
    this.quadrado = false;
    this.porcentagem = false;
    this.soma = false;
    this.sub = false;
    this.div = false;
    this.mult = true;
  }

  onSubClicked(){
    this.quadrado = false;
    this.porcentagem = false;
    this.soma = false;
    this.sub = true;
    this.div = false;
    this.mult = false;
  }

  onAddClicked(){
    this.quadrado = false;
    this.porcentagem = false;
    this.soma = true;
    this.sub = false;
    this.div = false;
    this.mult = false;
  }

  onClearClicked(){
    this.value = "0";
    this.x = 0;
    this.y = 0;
  }

  onResultClicked(){
    if (this.x === null || this.y === null) {
      this.value = "NaN"
    }else {

      if (this.quadrado === true) {
        this.value = String(this.functionsService.raizQuadrada(this.x)); 
      }else if(this.porcentagem === true){
        this.value = String(this.functionsService.porcentagem(this.x, this.y));
      }else if(this.soma === true){
        this.value = String(this.functionsService.soma(this.x, this.y));
      }else if(this.sub === true){
        this.value = String(this.functionsService.subtração(this.x, this.y));
      }else if(this.div === true){
        this.value = String(this.functionsService.divisao(this.x, this.y));
      }else if(this.mult === true){
        this.value = String(this.functionsService.multiplicacao(this.x, this.y));
      }else{
        this.value = "ErroR"
      }

    }
  }

  // Numeros
  oneClicked(){
    if(this.quadrado === true){
      this.x = 1;
    }
    
    if(this.porcentagem === true){
      this.x = 1;
    }else{
      this.y = 1;
    };

    if(this.soma === true){
      this.x = 1;
    }else{
      this.y = 1;
    };

    if(this.sub === true){
      this.x = 1;
    }else{
      this.y = 1;
    };

    if(this.div === true){
      this.x = 1;
    }else{
      this.y = 1;
    };

    if(this.mult === true){
      this.x = 1;
    }else{
      this.y = 1;
    };

    this.value = "1";
  }

  twoClicked(){
    if(this.quadrado === true){
      this.x = 2;
    }
    
    if(this.porcentagem === true){
      this.x = 2;
    }else{
      this.y = 2;
    };

    if(this.soma === true){
      this.x = 2;
    }else{
      this.y = 2;
    };

    if(this.sub === true){
      this.x = 2;
    }else{
      this.y = 2;
    };

    if(this.div === true){
      this.x = 2;
    }else{
      this.y = 2;
    };

    if(this.mult === true){
      this.x = 2;
    }else{
      this.y = 2;
    };

    this.value = "2";
  }

  threeClicked(){
    if(this.quadrado === true){
      this.x = 3;
    }
    
    if(this.porcentagem === true){
      this.x = 3;
    }else{
      this.y = 3;
    };

    if(this.soma === true){
      this.x = 3;
    }else{
      this.y = 3;
    };

    if(this.sub === true){
      this.x = 3;
    }else{
      this.y = 3;
    };

    if(this.div === true){
      this.x = 3;
    }else{
      this.y = 3;
    };

    if(this.mult === true){
      this.x = 3;
    }else{
      this.y = 3;
    };
    
    this.value = "3";
  }

  fourClicked(){
    if(this.quadrado === true){
      this.x = 4;
    }
    
    if(this.porcentagem === true){
      this.x = 4;
    }else{
      this.y = 4;
    };

    if(this.soma === true){
      this.x = 4;
    }else{
      this.y = 4;
    };

    if(this.sub === true){
      this.x = 4;
    }else{
      this.y = 4;
    };

    if(this.div === true){
      this.x = 4;
    }else{
      this.y = 4;
    };

    if(this.mult === true){
      this.x = 4;
    }else{
      this.y = 4;
    };

    this.value = "4";
  }

  fiveClicked(){
    if(this.quadrado === true){
      this.x = 5;
    }
    
    if(this.porcentagem === true){
      this.x = 5;
    }else{
      this.y = 5;
    };

    if(this.soma === true){
      this.x = 5;
    }else{
      this.y = 5;
    };

    if(this.sub === true){
      this.x = 5;
    }else{
      this.y = 5;
    };

    if(this.div === true){
      this.x = 5;
    }else{
      this.y = 5;
    };

    if(this.mult === true){
      this.x = 5;
    }else{
      this.y = 5;
    };

    this.value = "5";
  }

  sixClicked(){
    if(this.quadrado === true){
      this.x = 6;
    }
    
    if(this.porcentagem === true){
      this.x = 6;
    }else{
      this.y = 6;
    };

    if(this.soma === true){
      this.x = 6;
    }else{
      this.y = 6;
    };

    if(this.sub === true){
      this.x = 6;
    }else{
      this.y = 6;
    };

    if(this.div === true){
      this.x = 6;
    }else{
      this.y = 6;
    };

    if(this.mult === true){
      this.x = 6;
    }else{
      this.y = 6;
    };
    
    this.value = "6";
  }

  sevenClicked(){
    if(this.quadrado === true){
      this.x = 7;
    }
    
    if(this.porcentagem === true){
      this.x = 7;
    }else{
      this.y = 7;
    };

    if(this.soma === true){
      this.x = 7;
    }else{
      this.y = 7;
    };

    if(this.sub === true){
      this.x = 7;
    }else{
      this.y = 7;
    };

    if(this.div === true){
      this.x = 7;
    }else{
      this.y = 7;
    };

    if(this.mult === true){
      this.x = 7;
    }else{
      this.y = 7;
    };

    this.value = "7";
  }

  eightClicked(){
    if(this.quadrado === true){
      this.x = 8;
    }
    
    if(this.porcentagem === true){
      this.x = 8;
    }else{
      this.y = 8;
    };

    if(this.soma === true){
      this.x = 8;
    }else{
      this.y = 8;
    };

    if(this.sub === true){
      this.x = 8;
    }else{
      this.y = 8;
    };

    if(this.div === true){
      this.x = 8;
    }else{
      this.y = 8;
    };

    if(this.mult === true){
      this.x = 8;
    }else{
      this.y = 8;
    };

    this.value = "8";
  }

  nineClicked(){
    if(this.quadrado === true){
      this.x = 9;
    }
    
    if(this.porcentagem === true){
      this.x = 9;
    }else{
      this.y = 9;
    };

    if(this.soma === true){
      this.x = 9;
    }else{
      this.y = 9;
    };

    if(this.sub === true){
      this.x = 9;
    }else{
      this.y = 9;
    };

    if(this.div === true){
      this.x = 9;
    }else{
      this.y = 9;
    };

    if(this.mult === true){
      this.x = 9;
    }else{
      this.y = 9;
    };

    this.value = "9";
  }

  zeroClicked(){
    if(this.quadrado === true){
      this.x = 0;
    }
    
    if(this.porcentagem === true){
      this.x = 0;
    }else{
      this.y = 0;
    };

    if(this.soma === true){
      this.x = 0;
    }else{
      this.y = 0;
    };

    if(this.sub === true){
      this.x = 0;
    }else{
      this.y = 0;
    };

    if(this.div === true){
      this.x = 0;
    }else{
      this.y = 0;
    };

    if(this.mult === true){
      this.x = 0;
    }else{
      this.y = 0;
    };

    this.value = "0";
  }
}
