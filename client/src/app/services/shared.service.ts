import { Injectable } from '@angular/core';
import { Results } from '../interfaces/Results'

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  recentResults: Results
  constructor() { }

  updateResults(results: any) {

    this.recentResults = results

  }

}
