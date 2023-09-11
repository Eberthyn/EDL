import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { SharedService } from './services/shared.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'EDL';

  constructor(private router: Router,
    private sharedService: SharedService) { }
      
  ngOnInit() {
      this.router.events.subscribe((event) => {
          if (!(event instanceof NavigationEnd)) {
              return;
          }
          window.scrollTo(0, 0);
          // this.sharedService.windowSize();
      });
  }
}
