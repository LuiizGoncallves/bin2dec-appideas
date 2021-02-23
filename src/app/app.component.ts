import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Bin2Dec';
  decimalConverted = 0;

  binaryToDecimal(string) {
    let bin = /^[0-1]+$/;
    if(bin.test(string)){
      let decimal = +0;
      let bits = +1;
      for(let i = 0; i < string.length; i++) {
          let currNum = +(string[string.length - i - 1]);
          if(currNum === 1) {
              decimal += bits;
          }
          bits *= 2;
      }
      this.decimalConverted = decimal;
    }else{
      alert(`É permitido apenas os números 0 e 1`);
    }
  }
}
