import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

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
    {name: "Thamarai", id: 1},
    {name: "Selvan", id: 2},
    {name: "Thiru", id: 3},
    {name: "murugan", id: 4}
  ]

  trackByOp(index, obj): number{
    return obj.id;
  }

  txtsize = '25px';  
  colors = ['CYAN', 'GREEN', 'YELLOW'];  
  myColor = ''; 

  customArrayClass: Array<string> = ['customColor', 'customSize'];
  customStringClass: string = "customColor customSize";
  customObjectClass: styleObject<boolean> = {'customColor': false, 'customSize': true}
}

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
  readonly name: T;
  readonly id: U;
}

type styleObject<T> = {
  customColor: T ;
  customSize: T ;
}