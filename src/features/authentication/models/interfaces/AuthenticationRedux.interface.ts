import { AccountInterface } from '@authentication/models/interfaces/Account.interface';

export default interface AuthenticationRedux {
  account: AccountInterface | null;
  loading: Record<string, boolean>;
}
