import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FleetService } from '../../services/fleet.service';
import { Vehicle } from '../../models/vehicle.model';

@Component({
  selector: 'app-vehicle-list',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="vehicle-list">
      <h2>Fleet Status</h2>
      <div class="vehicle-cards">
        <div *ngFor="let vehicle of vehicles$ | async" class="vehicle-card">
          <h3>{{vehicle.plateNumber}}</h3>
          <p>Driver: {{vehicle.driverName}}</p>
          <p>Status: {{vehicle.status}}</p>
          <p>Speed: {{vehicle.speed}} km/h</p>
          <p>Fuel Level: {{vehicle.fuelLevel}}%</p>
          <div class="alert" *ngIf="vehicle.fuelLevel < 20">
            Low Fuel Warning!
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .vehicle-list {
      height: 100%;
    }
    
    .vehicle-cards {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
      gap: 20px;
      padding: 20px 0;
    }
    
    .vehicle-card {
      padding: 15px;
      border: 1px solid #ddd;
      border-radius: 8px;
      background: white;
      box-shadow: 0 2px 4px rgba(0,0,0,0.05);
    }
    
    .vehicle-card h3 {
      margin-bottom: 10px;
      color: #2c3e50;
    }
    
    .vehicle-card p {
      margin: 8px 0;
      color: #34495e;
    }
    
    .alert {
      color: #e74c3c;
      font-weight: bold;
      margin-top: 10px;
      padding: 8px;
      background: #fde8e8;
      border-radius: 4px;
    }
  `]
})
export class VehicleListComponent {
  vehicles$ = this.fleetService.getVehicles();

  constructor(private fleetService: FleetService) {}
}