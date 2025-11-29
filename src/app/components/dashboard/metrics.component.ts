import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-metrics',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="metrics-grid">
      <div class="metric-card">
        <h3>Total Vehicles</h3>
        <div class="metric-value">24</div>
      </div>
      <div class="metric-card">
        <h3>Active Vehicles</h3>
        <div class="metric-value">18</div>
      </div>
      <div class="metric-card">
        <h3>Idle Vehicles</h3>
        <div class="metric-value">4</div>
      </div>
      <div class="metric-card">
        <h3>Maintenance</h3>
        <div class="metric-value">2</div>
      </div>
      <div class="metric-card alert">
        <h3>Active Alerts</h3>
        <div class="metric-value">3</div>
      </div>
    </div>
  `,
  styles: [`
    .metrics-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 20px;
      margin-bottom: 20px;
    }

    .metric-card {
      background: white;
      padding: 20px;
      border-radius: 8px;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    }

    .metric-card h3 {
      margin: 0;
      color: #666;
      font-size: 0.9rem;
    }

    .metric-value {
      font-size: 2rem;
      font-weight: bold;
      color: #1a237e;
      margin-top: 10px;
    }

    .alert .metric-value {
      color: #f44336;
    }
  `]
})
export class MetricsComponent {}