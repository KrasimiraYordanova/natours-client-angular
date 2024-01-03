import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { ITour } from 'src/app/shared/interfaces';
import { TourService } from '../tour.service';
import { ActivatedRoute } from '@angular/router';
import * as L from "leaflet";
import * as geojson from "geojson";
import { Subject } from 'rxjs';

const iconRetinaUrl = './assets/marker-icon-2x.png';
const iconUrl = './assets/marker-icon.png';
const shadowUrl = './assets/marker-shadow.png';
const iconDefault = L.icon({
  iconRetinaUrl,
  iconUrl,
  shadowUrl,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  tooltipAnchor: [16, -28],
  shadowSize: [41, 41]
});
L.Marker.prototype.options.icon = iconDefault;

@Component({
  selector: 'app-tour-info',
  templateUrl: './tour-info.component.html',
  styleUrls: ['./tour-info.component.scss']
})
export class TourInfoComponent implements OnInit, AfterViewInit, OnDestroy {

  tour: ITour | null = null;
  private map: L.Map | any;
  
  tourObservable: ITour | any = this.tourService.tour(this.activatedRoute.snapshot.params['slug']);
  tourSubject$ = new Subject<ITour>();

  constructor(private tourService: TourService, private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.tourObservable.subscribe(this.tourSubject$);
    this.tourSubject$.subscribe({
        next: (tour: any) => {
          console.log(tour);
          this.tour = tour;
        },
        error: (err) => {
          console.log(err);
        }
      })
  }

  //  to isolate all the map initialization
  private initMap(coords: number[]): void {

    // creating a new Leaflet map object
    this.map = L.map('map', {
      center: [coords[1], coords[0]],
      zoom: 9
  })

    // With Leaflet, you visualize data as Layers. The kind of data you think of when you picture a map is called “tiles”. You will need to create a new tile layer and add it to the map.
    const tiles = new L.TileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
      minZoom: 3,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });

    tiles.addTo(this.map);
  }

  private makeCapitalMarkers(map: any): void {
    this.tourSubject$.subscribe({
      next: (tour: ITour | any) => {
          for (const feature of tour.locations.features) {
            const lon = feature.geometry.coordinates[0];
            const lat = feature.geometry.coordinates[1];
            const marker = L.marker([lat, lon]);
            
            marker.addTo(this.map);
          }
      }
    });
  }

  ngAfterViewInit(): void {
    this.tourSubject$.subscribe({
      next: (tour: ITour) => {
        this.initMap(tour.startLocation.coordinates);
      },
      error: (err) => {
        console.log(err);
      }
    })
    
    this.makeCapitalMarkers(this.map);
  }


  ngOnDestroy(): void {
  }
}
