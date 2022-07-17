export default interface SelfComplaintInterface {
  ID: string;
  Subject: string;
  ListImage: ListImage[];
  Description: string;
  StatusType: string;
  Created: string;
  Source: string;
  ResponseCount: number;
}

interface ListImage {
  ImageUrl: string;
}
