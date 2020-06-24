import { Component, OnInit, Input } from '@angular/core';
import { Satelitte } from '../satelitte';


@Component({
  selector: 'app-orbit-list',
  templateUrl: './orbit-list.component.html',
  styleUrls: ['./orbit-list.component.css']
})



export class OrbitListComponent implements OnInit {
  @Input() satelittes: Satelitte[];

  constructor() { }

  ngOnInit() {
  }

  sort(column: string): void {
   
    this.satelittes.sort(function(a: Satelitte, b: Satelitte): number {
       if(a[column] < b[column]) {
          return -1;
       } else if (a[column] > b[column]) {
          return 1;
       }
       return 0;
    });
  }
}
