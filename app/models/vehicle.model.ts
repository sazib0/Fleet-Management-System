export interface Vehicle {
  id: string;
  plateNumber: string;
  driverName: string;
  location: {
    lat: number;
    lng: number;
  };
  speed: number;
  fuelLevel: number;
  status: 'active' | 'inactive' | 'maintenance';
  lastMaintenance: Date;
}