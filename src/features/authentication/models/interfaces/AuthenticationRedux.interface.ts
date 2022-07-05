import { AccountInterface } from '@dashboard/models/Account.interface';

export default interface AuthenticationRedux {
  account: AccountInterface | null;
  loading: Record<string, boolean>;
}
