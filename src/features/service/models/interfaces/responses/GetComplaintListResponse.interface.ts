import ComplaintInterface from '../Complaint.interface';
import SelfComplaintInterface from '../SelfComplaint.interface';

export default interface GetComplaintListResponseInterface {
  ListComplaint: ComplaintInterface[];
  ListSelfComplaint: SelfComplaintInterface[];
  TotalPage: number;
  TotalRow: number;
}
