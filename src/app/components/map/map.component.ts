import { Component, OnInit, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as L from 'leaflet';
import { FleetService } from '../../services/fleet.service';

@Component({
  selector: 'app-map',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div id="map" class="map-container"></div>
  `,
  styles: [`
    .map-container {
      height: 100%;
      min-height: 500px;
      width: 100%;
    }
  `]
})
export class MapComponent implements AfterViewInit {
  private map!: L.Map;
  private markers: { [key: string]: L.Marker } = {};

  constructor(private fleetService: FleetService) {}

  ngAfterViewInit() {
    this.initMap();
    this.loadVehicles();
  }

  private initMap() {
    this.map = L.map('map').setView([40.7128, -74.0060], 13);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors'
    }).addTo(this.map);
  }

  private loadVehicles() {
    this.fleetService.getVehicles().subscribe(vehicles => {
      vehicles.forEach(vehicle => {
        if (this.markers[vehicle.id]) {
          this.markers[vehicle.id].setLatLng([vehicle.location.lat, vehicle.location.lng]);
        } else {
          this.markers[vehicle.id] = L.marker([vehicle.location.lat, vehicle.location.lng])
            .bindPopup(`
              <b>${vehicle.plateNumber}</b><br>
              Driver: ${vehicle.driverName}<br>
              Speed: ${vehicle.speed} km/h<br>
              Fuel: ${vehicle.fuelLevel}%
            `)
            .addTo(this.map);
        }
      });
    });
  }
}