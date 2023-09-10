import { Component, OnInit } from '@angular/core';
import { SharedService } from '../services/shared.service';


@Component({
  selector: 'app-rodape',
  templateUrl: './rodape.component.html',
  styleUrls: ['./rodape.component.css']
})
export class RodapeComponent implements OnInit {
  constructor(private sharedService: SharedService) { }

  ngOnInit() {
    this.sharedService.paginaSemScroll();
  }
}
