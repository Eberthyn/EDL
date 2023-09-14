import { Component, HostListener, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import imageMapResize from 'image-map-resizer';
import { SharedService } from './services/shared.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'EDL';

  constructor(
    private router: Router,
    private sharedService: SharedService
  ) {
  }

  ngOnInit() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        setTimeout(() => {
          this.sharedService.windowSize();
          imageMapResize();
        }, 50);
      }
    });
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any): void {
    this.sharedService.windowSize();
    imageMapResize();
  }
}