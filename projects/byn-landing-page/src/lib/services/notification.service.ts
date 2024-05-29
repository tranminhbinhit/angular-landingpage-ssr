import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface Notification {
    message: string;
    id: number;
  }

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
    private notificationsSubject = new BehaviorSubject<Notification[]>([]);
    notifications$ = this.notificationsSubject.asObservable();
    private counter = 0;
  
    showNotification(message: string) {
      const notification: Notification = { message, id: this.counter++ };
      const currentNotifications = this.notificationsSubject.value;
      this.notificationsSubject.next([...currentNotifications, notification]);
      setTimeout(() => {
        this.removeNotification(notification.id);
      }, 3000); // Thông báo sẽ biến mất sau 3 giây
    }
  
    private removeNotification(id: number) {
      const currentNotifications = this.notificationsSubject.value.filter(n => n.id !== id);
      this.notificationsSubject.next(currentNotifications);
    }
}