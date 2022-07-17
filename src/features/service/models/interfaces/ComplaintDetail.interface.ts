export interface ComplaintDetailInterface {
  ID: string;
  Subject: string;
  Name: string;
  ListImage: ListImage[];
  Description: string;
  StatusType: string;
  Created: string;
  Source: string;
  Detail: CommentInterface[];
  IsEnableComment: string;
}

export interface CommentInterface {
  ID: string;
  Type: string;
  Photo: string;
  Description: string;
  Created: string;
  CompletedDate: null | string;
  Source: string;
  Name: string;
}

interface ListImage {
  ImageUrl: string;
}
