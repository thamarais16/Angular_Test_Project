import { Component, VERSION } from '@angular/core';
//import { Logger } from '/src/app/log'

@Component({
  selector: 'my-app',
  templateUrl: "./app.component.html",
  styleUrls: [ "./app.component.css" ]
})
export class AppComponent  {
  //name = 'Angular ' + VERSION.major;
  header: string = "header";
  heading: string = "Welcome"; 
  movies: Movie[] =[
    {title:'Zootopia',director:'Byron Howard, Rich Moore',cast:'Idris Elba, Ginnifer Goodwin, Jason Bateman',releaseDate:'March 4, 2016'},
    {title:'Batman v Superman: Dawn of Justice',director:'Zack Snyder',cast:'Ben Affleck, Henry Cavill, Amy Adams',releaseDate:'March 25, 2016'},
    {title:'Captain American: Civil War',director:'Anthony Russo, Joe Russo',cast:'Scarlett Johansson, Elizabeth Olsen, Chris Evans',releaseDate:'May 6, 2016'},
    {title:'X-Men: Apocalypse',director:'Bryan Singer',cast:'Jennifer Lawrence, Olivia Munn, Oscar Isaac',releaseDate:'May 27, 2016'},
    {title:'Warcraft',director:'Duncan Jones',cast:'Travis Fimmel, Robert Kazinsky, Ben Foster',releaseDate:'June 10, 2016'},
  ]

  num: any = 1;
  items: item[] = [{name: 'One', val: 1}, {name: 'Two', val: 2}, {name: 'Three', val: 3}, {name: 'Four', val: 3}, {name: 'Five', val: 3}];

  firstName: string = "";
  changeValue: string= "";
  firstNameChange: Function = (event)=>{
    console.log(event);
    this.changeValue = event.target.value;
  }
  name: string ="Hi";
  name1;
  count(event){
    this.num= event.target.value;
  }
}

class Movie {
  title : string;
  director : string;
  cast : string;
  releaseDate : string;
}

interface item{
  name: string;
  val: number;
}

