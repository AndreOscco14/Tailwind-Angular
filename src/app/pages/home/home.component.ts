import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
image: string;
  image2: string;

constructor(){
  this.image= '/assets/images/Bonos3-cuadrada.png';
  this.image2= '/assets/images/Bonos3.png';
}

}
