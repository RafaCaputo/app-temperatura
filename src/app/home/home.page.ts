import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Import necessário para ngModel
import { ConversorService } from '../services/conversor.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule], // Adicione FormsModule
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {
  valor: number = 0;
  tipoConversao: string = 'F';
  resultado: number | null = null;

  constructor(private conversorService: ConversorService) {}

  converter() {
    this.resultado = this.tipoConversao === 'F'
      ? this.conversorService.celsiusParaFahrenheit(this.valor)
      : this.conversorService.fahrenheitParaCelsius(this.valor);
  }
}