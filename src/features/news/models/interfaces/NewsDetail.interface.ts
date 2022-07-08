export default interface NewsDetailInterface {
  ID: string;
  Title: string;
  ListImage: ListImage[];
  Description: string;
  Created: Date;
}

interface ListImage {
  ImageUrl: string;
}
