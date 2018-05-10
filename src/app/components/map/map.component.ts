import { Component, OnInit } from '@angular/core';
import * as L from "leaflet";
import "leaflet";

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  isLoading: boolean;

  constructor() {
    this.isLoading = true;
  }

  ngOnInit() {

    setTimeout(() => {
      this.isLoading = false;
      this.setMap();
    }, 2000);

  }

  setMap() {

    const map = L.map('map', {
      crs: L.CRS.Simple,
      minZoom: -5
    });

    map.zoomControl.setPosition('bottomright');

    var bounds = new L.LatLngBounds(new L.LatLng(0, 0), new L.LatLng(10000, 14000))
    var image = L.imageOverlay('assets/logo.png', bounds).addTo(map);

    map.fitBounds( bounds );

     var sol = L.latLng([ 10000 , 14000 ]);
      L.marker(L.latLng([0, 0]) , { icon : L.icon( {
       iconUrl : 'assets/marker-icon.png'
    })
    }).addTo(map);

    L.marker(L.latLng([0, 100]), {
      icon: L.icon({
        iconUrl: 'assets/marker-icon.png'
      })
    }).addTo(map);

    map.setView(new L.LatLng(5000, 7000) , -3);

  }

}
