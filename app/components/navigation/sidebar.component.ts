import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule],
  template: `
    <nav class="sidebar">
      <div class="logo">
        <h1>Fleet Manager</h1>
      </div>
      <ul class="nav-items">
        <li class="nav-item active">
          <span class="icon">📊</span>
          Dashboard
        </li>
        <li class="nav-item">
          <span class="icon">🚗</span>
          Vehicle Status
        </li>
        <li class="nav-item">
          <span class="icon">🗺️</span>
          Trip History
        </li>
        <li class="nav-item">
          <span class="icon">📈</span>
          Analytics
        </li>
        <li class="nav-item">
          <span class="icon">🔧</span>
          Maintenance
        </li>
        <li class="nav-item">
          <span class="icon">⚙️</span>
          Settings
        </li>
      </ul>
    </nav>
  `,
  styles: [`
    .sidebar {
      width: 250px;
      height: 100vh;
      background: #1a237e;
      color: white;
      padding: 20px 0;
      position: fixed;
      left: 0;
      top: 0;
    }

    .logo {
      padding: 0 20px;
      margin-bottom: 30px;
    }

    .logo h1 {
      font-size: 1.5rem;
      font-weight: 600;
    }

    .icon {
      margin-right: 10px;
    }
  `]
})
export class SidebarComponent {}