import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit { 

   breeds=
    {
      "corgi": ["cardigan"],
      "deerhound": ["scottish"],
      "bulldog": ["boston", "english", "french"],
      "mastiff": ["bull", "english", "tibetan"],
      "australian": ["shepherd"],
      "greyhound": ["italian"],
      "buhund": ["norwegian"],
      "hound": ["afghan", "basset", "blood", "english", "ibizan", "plott", "walker"],
      "bullterrier": ["staffordshire"],
    }

    names: string;

  constructor() { }

  ngOnInit() {
  }

}