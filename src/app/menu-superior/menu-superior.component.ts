import { Component, HostListener } from '@angular/core';
import { SharedService } from '../services/shared.service';

@Component({
  selector: 'app-menu-superior',
  templateUrl: './menu-superior.component.html',
  styleUrls: ['./menu-superior.component.css']
})
export class MenuSuperiorComponent {

  constructor(private sharedService: SharedService) { }

  @HostListener('window:scroll', [])
  onScroll() {
    this.sharedService.onWindowScroll()
  }
}
