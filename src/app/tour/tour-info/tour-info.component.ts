import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { ITour } from 'src/app/shared/interfaces';
import { TourService } from '../tour.service';
import { ActivatedRoute } from '@angular/router';
import * as L from "leaflet";
import * as geojson from "geojson";

@Component({
  selector: 'app-tour-info',
  templateUrl: './tour-info.component.html',
  styleUrls: ['./tour-info.component.scss']
})
export class TourInfoComponent implements OnInit, AfterViewInit, OnDestroy {

  tour: ITour | null = null;
  private map: any;

  constructor(private tourService: TourService, private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.tourService.tour(this.activatedRoute.snapshot.params['slug']).subscribe({
      next: (tour) => {
        console.log(tour);
        this.tour = tour;
      },
      error: (err) => {
        console.log(err);
      }
    })
  }

  //  to isolate all the map initialization
  private initMap(): void {
    // creating a new Leaflet map object
    this.map = L.map('map', {
      center: [39.8282, -98.5795],
      zoom: 3
    })

    // With Leaflet, you visualize data as Layers. The kind of data you think of when you picture a map is called “tiles”. You will need to create a new tile layer and add it to the map.
    const tiles = new L.TileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
      minZoom: 3,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });

    tiles.addTo(this.map);
  }

  ngAfterViewInit(): void {
    this.initMap();
  }


  ngOnDestroy(): void {
  }
}
