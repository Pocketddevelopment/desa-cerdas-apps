export interface AttractionDestinationDetailInterface {
  ID: string;
  Title: string;
  ListImage: ListImage[];
  Description: string;
  Longitude: number;
  Latitude: number;
  Created: Date;
}

interface ListImage {
  ImageUrl: string;
}