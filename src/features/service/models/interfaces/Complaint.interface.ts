export default interface ComplaintInterface {
  ID: string;
  Subject: string;
  ListImage: ListImage[];
  Description: string;
  StatusType: string;
  Created: string;
  Source: string;
  Detail: ComplaintCommentInterface[];
}

interface ComplaintCommentInterface {
  ID: string;
  Type: string;
  Description: string;
  Created: string;
  CompletedDate: string;
  Source: string;
  Name: string;
}

interface ListImage {
  ImageUrl: string;
}
