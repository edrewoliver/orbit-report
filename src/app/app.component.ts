import { Component } from '@angular/core';
import { Satelitte } from './satelitte';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'orbit-report';
  sourceList: Satelitte[];
  displayList: Satelitte[];

  constructor() {
    this.sourceList = [];
  
    let satelittesUrl = 'https://handlers.education.launchcode.org/static/satellites.json';

    window.fetch(satelittesUrl).then(function(response) {
      response.json().then(function(data){

        let fetchedSatelittes = data.satellites;

        for (let i=0; i<fetchedSatelittes.length; i++) {

        let newSatelitte = new Satelitte(fetchedSatelittes[i].name, fetchedSatelittes[i].type, fetchedSatelittes[i].launchDate, fetchedSatelittes[i].orbitType, fetchedSatelittes[i].operational);
        
        this.sourceList.push(newSatelitte);
        }
        this.displayList = this.sourceList.slice(0);
      }.bind(this));
    }.bind(this));
 }
  search(searchTerm: string): void {
    let matchingSatelittes: Satelitte[] = [];
    searchTerm = searchTerm.toLowerCase();
    for(let i=0; i < this.sourceList.length; i++) {
      let name = this.sourceList[i].name.toLowerCase();
      if (name.indexOf(searchTerm) >= 0) {
          matchingSatelittes.push(this.sourceList[i]);
      }
    }

    this.displayList = matchingSatelittes;
  }
}

