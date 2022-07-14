export default interface CreateComplaintRequestInterface {
  districtId: string;
  customerId: string;
  listImage?: ListImage[];
  subject: string;
  description: string;
}

interface ListImage {
  image: string;
}
