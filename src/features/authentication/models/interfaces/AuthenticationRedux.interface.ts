import { AccountInterface } from '@authentication/models/interfaces/Account.interface';

export default interface AuthenticationRedux {
  account: AccountInterface;
  loading: Record<string, boolean>;
}
