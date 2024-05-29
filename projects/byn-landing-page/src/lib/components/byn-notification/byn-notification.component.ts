import { Component, OnInit } from '@angular/core';
import { Notification, NotificationService } from '../../services/notification.service';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'byn-notification',
  template: `
    <div *ngFor="let notification of notifications" class="notification" [@fade]>
      {{ notification.message }}
    </div>
  `,
  styles: [`
    .notification {
      position: fixed;
      top: 20px;
      right: 20px;
      background-color: #ff9800;
      color: white;
      padding: 15px;
      border-radius: 5px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
      z-index: 1000;
      margin-bottom: 10px;
      transition: opacity 0.3s ease-in-out;
    }
  `],
  animations: [
    trigger('fade', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('300ms', style({ opacity: 1 }))
      ]),
      transition(':leave', [
        animate('300ms', style({ opacity: 0 }))
      ])
    ])
  ]
})
export class NotificationComponent implements OnInit {
  notifications: Notification[] = [];

  constructor(private notificationService: NotificationService) {}

  ngOnInit() {
    this.notificationService.notifications$.subscribe(notifications => {
      this.notifications = notifications;
    });
  }
}