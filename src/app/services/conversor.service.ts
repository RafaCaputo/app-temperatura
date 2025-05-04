import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConversorService {

  constructor() { }

  // Conversão de Celsius para Fahrenheit
  celsiusParaFahrenheit(celsius: number): number {
    return (celsius * 9 / 5) + 32;
  }

  // Conversão de Fahrenheit para Celsius
  fahrenheitParaCelsius(fahrenheit: number): number {
    return (fahrenheit - 32) * 5 / 9;
  }
}