export interface SMEDetailInterface {
  ID: string;
  Title: string;
  ListImage: ListImage[];
  Description: string;
  ContactName: number;
  ContactPhone: string;
  Created: Date;
}

interface ListImage {
  ImageUrl: string;
}
