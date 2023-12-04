import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router, RoutesRecognized } from '@angular/router';
import { filter, map, tap } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'natours-client';

  constructor(private router: Router, private pageTitle: Title) {
    // this.router.config.filter(obj => obj.data != undefined);
    this.router.events.pipe(
      filter((e): e is RoutesRecognized => e instanceof RoutesRecognized),
      map(e => e),
      // tap(console.log)
    ).subscribe(() => {});
  }
}
