import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { Vehicle } from '../models/vehicle.model';

@Injectable({
  providedIn: 'root'
})
export class FleetService {
  private vehicles = new BehaviorSubject<Vehicle[]>([
    {
      id: '1',
      plateNumber: 'ABC123',
      driverName: 'John Doe',
      location: { lat: 40.7128, lng: -74.0060 },
      speed: 65,
      fuelLevel: 75,
      status: 'active',
      lastMaintenance: new Date('2024-01-15')
    },
    {
      id: '2',
      plateNumber: 'XYZ789',
      driverName: 'Jane Smith',
      location: { lat: 40.7142, lng: -74.0119 },
      speed: 55,
      fuelLevel: 45,
      status: 'active',
      lastMaintenance: new Date('2024-01-10')
    }
  ]);

  getVehicles(): Observable<Vehicle[]> {
    return this.vehicles.asObservable();
  }

  updateVehicleLocation(id: string, lat: number, lng: number) {
    const vehicles = this.vehicles.getValue();
    const index = vehicles.findIndex(v => v.id === id);
    if (index !== -1) {
      vehicles[index] = {
        ...vehicles[index],
        location: { lat, lng }
      };
      this.vehicles.next(vehicles);
    }
  }
}