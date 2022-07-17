export default interface UpdatePasswordThunkPayloadInterface {
  oldPassword: string;
  newPassword: string;
  newPasswordConfirmation: string;
}
