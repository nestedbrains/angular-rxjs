import {Component, OnInit} from '@angular/core';
import {from, Observable, of, pipe} from "rxjs";
import {flatMap, map, mergeMap} from "rxjs/operators";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angular-rxjs';

  list: Observable<any> = of(['Ovi', 'Ontu', 'Saiful'])
  listFrom: Observable<any> = from(['Ovi', 'Ontu', 'Saiful'])

  relList: Observable<any> = of([])
  relListFrom: Observable<any> = from([])


  ngOnInit(): void {
    /*The from operator emitted one by one from list*/
    // from(this.list).subscribe(res => {console.log( "FROM : ",res)})

    /*The of operator emitted whole list in one time*/
    // of(this.list).subscribe(res => {console.log( "FROM : ",res)})

    this.relList = this.list.pipe(map(item => item.map((i: any) => i + " Islam")))

  }


}
