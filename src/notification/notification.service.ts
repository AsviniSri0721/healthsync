import { Injectable } from '@nestjs/common';

@Injectable()
export class NotificationService {
  sendNotification(to: string, message: string) {
    console.log(`Notification sent to ${to}: ${message}`);
    return { to, message };
  }
}
