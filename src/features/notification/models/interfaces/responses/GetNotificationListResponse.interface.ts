import { NotificationInterface } from '../Notification.interface';

export default interface GetNotificationListResponseInterface {
  ListInbox: NotificationInterface[];
  TotalPage: number;
  TotalRow: number;
}
