import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { from, Observable, of, pipe} from 'rxjs';
import { map, filter, tap } from 'rxjs/operators'

@Component({
  selector: 'app-official',
  templateUrl: './official.component.html',
  styleUrls: ['./official.component.css']
})
export class OfficialComponent implements OnInit {
  movies: Array<Movie>;
  title: string;
  director: string;
  constructor() { }

  ngOnInit() {
     this.Refresh();
  }

  removeMovies(i: number){
    this.movies.splice(i, 1);
  }

  addMovies(){
    this.movies.push({title: this.title, director: this.director});
    this.title = "";
    this.director = "";
  }
 
  Refresh() {
    console.log("refresh")
    this.movies = [
      { title: 'Zootopia', director: 'Byron Howard, Rich Moore'},
      { title: 'Batman v Superman: Dawn of Justice', director: 'Zack Snyder'},
      { title: 'Captain American: Civil War', director: 'Anthony Russo, Joe Russo'},
      { title: 'X-Men: Apocalypse', director: 'Bryan Singer'},
      { title: 'Warcraft', director: 'Duncan Jones'},
    ]
  }



  trackByFn(index, item) {
    return item.title;
  }

  kal(val): any {
      alert(val);
  }

  ifDirective: IfObj<boolean, string, number> ={
    showMe: false,
    trueContent: "Check Box is Checked",
    falseContent: "Check Box is Un-Checked",
    align: "center"
  }

  name: string;
  color: string = "red";

  vals : Val<string, number>[] = [
    {color: "CYAN", id: 1},
    {color: "GREEN", id: 2},
    {color: "YELLOW", id: 3},
    {color: "ORANGE", id: 4}
  ]

  trackByOp(index, obj): number{
    return obj.id;
  }

  txtsize = '25px';  
  colors = ['CYAN', 'GREEN', 'YELLOW'];  
  myColor: string = 'white'; 

  customArrayClass: Array<string> = ['customColor', 'customSize'];
  customStringClass: string = "customColor customSize";
  customObjectClass: styleObject<boolean> = {'customColor': false, 'customSize': true};
  customStyle;
  customCss(val){
    this.customStyle = {'color': val};
  }

  srcArray = from([1, 2, 3, 4]);
  multiplyBy2() {
    this.srcArray
    .pipe(map(val => { return val * 2}))
    .subscribe(val => { console.log(val)})
  }

  num: number = 6907667490.47037603;
  dates: number = 1617171600929;
}

let s = new OfficialComponent();
s.multiplyBy2();

interface Movie{
  title: string;
  director: string;
}

interface IfObj<T, U, V>{
  showMe: T;
  trueContent: U;
  falseContent: U;
  align: U;
}

class Val<T, U>{
  readonly color: T;
  readonly id: U;
}

type styleObject<T> = {
  customColor: T ;
  customSize: T ;
}