import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  template: `
    <header class="header">
      <div class="search-bar">
        <input type="text" placeholder="Search vehicles, drivers...">
      </div>
      <div class="header-actions">
        <div class="notifications">
          <span class="icon">🔔</span>
          <span class="badge">3</span>
        </div>
        <div class="profile">
          <span class="icon">👤</span>
          <span>Admin</span>
        </div>
      </div>
    </header>
  `,
  styles: [`
    .header {
      height: 60px;
      background: white;
      border-bottom: 1px solid #e0e0e0;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 20px;
      margin-left: 250px;
    }

    .search-bar input {
      padding: 8px 12px;
      border: 1px solid #e0e0e0;
      border-radius: 4px;
      width: 300px;
    }

    .header-actions {
      display: flex;
      align-items: center;
      gap: 20px;
    }

    .notifications {
      position: relative;
    }

    .badge {
      position: absolute;
      top: -8px;
      right: -8px;
      background: #f44336;
      color: white;
      border-radius: 50%;
      padding: 2px 6px;
      font-size: 12px;
    }

    .profile {
      display: flex;
      align-items: center;
      gap: 8px;
      cursor: pointer;
    }
  `]
})
export class HeaderComponent {}