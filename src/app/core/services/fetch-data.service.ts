import {Injectable} from '@angular/core';
import {BlotterMockService} from '../mock/blotter-mock.service';
import {Blotter} from '../model/blotter';

@Injectable({
  providedIn: 'root'
})
export class FetchDataService {

  constructor(private mockBlotter: BlotterMockService) {
  }

  loadBlotter(): Blotter[] {
    return this.mockBlotter.loadMockData(500); // TODO replace with real data (SSE LOADING)
  }
}
