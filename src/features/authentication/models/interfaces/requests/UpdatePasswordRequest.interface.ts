export default interface UpdatePasswordRequestInterface {
  customerID: string;
  oldPassword: string;
  newPassword: string;
  newPasswordConfirmation: string;
}
