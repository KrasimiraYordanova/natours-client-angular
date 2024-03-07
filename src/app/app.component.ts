import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivationStart, Router, RoutesRecognized } from '@angular/router';
import { filter, map, tap } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'nature\'s tours';
  // dob!: string;

  constructor(private router: Router, private pageTitle: Title) {}

  ngOnInit(): void {
    // this.router.config.filter(obj => obj.data != undefined);
    this.router.events.pipe(
      filter((e): e is ActivationStart => e instanceof ActivationStart),
      map(e => e.snapshot.data?.['title']),
      filter(data => !!data)
      // tap(console.log)
    ).subscribe((pageTitle) => {
      this.pageTitle.setTitle(pageTitle);
    });
  }

  
}
