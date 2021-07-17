import {Injectable} from '@angular/core';
import {Blotter} from '../model/blotter';
import {Currency} from '../model/currency';

@Injectable({
  providedIn: 'root'
})
export class BlotterMockService {

  constructor() {
  }

  loadMockData(count: number): Blotter[] {
    const blotters = [];
    for (let i = 1; i <= count; i++) {
      /* constructor(id: number,
        type: string, client: string,
        state: string, status: string,
        process: string, format: string,
        currency: string, description: string) { */

      blotters[i] = new Blotter(
        i,
        'type',
        'client',
        'state',
        'status',
        'proess',
        'format',
        this.randomCurrency(),
        'desc'
      );
    }
    return blotters;
  }

  randomNum(min, max): number {
    return parseInt(Math.random() * (max - min) + min, 10);
  }

  randomCurrency(): string {
    return Currency[this.randomNum(0, 2)];
  }
}
