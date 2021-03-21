import { Component, OnInit } from '@angular/core';

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
    this.movies.push({title: this.title, director: this.director})
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
}

  interface Movie{
    title: string;
    director: string;
  }