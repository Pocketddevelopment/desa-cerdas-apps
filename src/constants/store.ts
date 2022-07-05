export default class StoreConstants {
  static AUTH = 'authentication';
  static SERVICE = 'service';
  static PROFILE = 'profile';

  // attraction, news, notification, report
  static MISC = 'misc';
  static ATTRACTION = this.MISC;
  static NEWS = this.MISC;
  static NOTIFICATION = this.MISC;
  static REPORT = this.MISC;

  // Storage Key Constants
  static AUTO_LOGIN = 'autoLogin';
  static ONBOARDING = 'shouldOnboard';
  static REFRESH_TOKEN = 'dc-ac-rt';
}
