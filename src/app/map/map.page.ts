import { Component, OnInit } from '@angular/core';
import { Map, tileLayer } from 'leaflet';

@Component({
  selector: 'app-map',
  templateUrl: './map.page.html',
  styleUrls: ['./map.page.scss'],
})
export class MapPage implements OnInit {
  map!: Map;

  ngOnInit(): void {
    this.loadMap();
  }

  loadMap() {
    // Initialiser la carte avec un ID
    this.map = new Map('mapId').setView([51.505, -0.09], 13); // Coordonnées pour Londres

    // Ajouter le calque de tuiles
    tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
    }).addTo(this.map);
  }
}
