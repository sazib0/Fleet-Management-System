import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapComponent } from '../map/map.component';
import { VehicleListComponent } from '../vehicle-list/vehicle-list.component';
import { SidebarComponent } from '../navigation/sidebar.component';
import { HeaderComponent } from '../header/header.component';
import { MetricsComponent } from './metrics.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    MapComponent,
    VehicleListComponent,
    SidebarComponent,
    HeaderComponent,
    MetricsComponent
  ],
  template: `
    <div class="dashboard-container">
      <app-sidebar></app-sidebar>
      <div class="main-content">
        <app-header></app-header>
        <div class="dashboard-content">
          <app-metrics></app-metrics>
          <div class="dashboard-grid">
            <div class="map-section">
              <app-map></app-map>
            </div>
            <div class="info-section">
              <app-vehicle-list></app-vehicle-list>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .dashboard-container {
      display: flex;
      min-height: 100vh;
      background: #f5f5f5;
    }

    .main-content {
      flex: 1;
      margin-left: 250px;
    }

    .dashboard-content {
      padding: 20px;
    }

    .dashboard-grid {
      display: grid;
      grid-template-columns: 1fr;
      gap: 20px;
      margin-top: 20px;
    }

    @media (min-width: 1024px) {
      .dashboard-grid {
        grid-template-columns: 3fr 2fr;
      }
      
      .map-section {
        position: sticky;
        top: 80px;
        height: calc(100vh - 220px);
      }
    }

    .map-section {
      background: white;
      border-radius: 8px;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
      overflow: hidden;
    }

    .info-section {
      min-height: 400px;
    }
  `]
})
export class DashboardComponent {}