import ComplaintInterface from '../Complaint.interface';

export default interface GetComplaintListResponseInterface {
  ListComplaint: ComplaintInterface[];
  TotalPage: number;
  TotalRow: number;
}
