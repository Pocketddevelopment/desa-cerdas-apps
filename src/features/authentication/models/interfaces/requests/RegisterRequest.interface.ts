export interface RegisterFormStep1 {
  NIK: string;
  Name?: string;
  DateOfBirth: string;
  FirstName: string;
  LastName: string;
}

export interface RegisterFormStep2 {
  Email: string;
  MobileNo: string;
  Password: string;
  ConfirmPassword?: string;
  RegisterType?: string;
}
