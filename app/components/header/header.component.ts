import { Component } from '@angular/core';

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
  `]
})
export class HeaderComponent {}