export interface LeaveSetting {
  id: string;
  plan: string;
  durationDays: number;
  recallAutorenew: string; // e.g. "No / No", "Yes / No"
}

export interface LeaveRecord {
  id: string;
  name: string;
  durationDays: number;
  startDate: string;
  endDate: string;
  type: string;
  reason: string;
}

export interface JobPosting {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string; // Full-time / Part-time / Contract
  applicants: number;
  postedDate: string;
  status: 'Open' | 'Closed';
}

export interface Candidate {
  id: string;
  name: string;
  appliedFor: string;
  stage: 'Screening' | 'Interview' | 'Offer' | 'Hired';
  experience: string;
  appliedDate: string;
}

export interface ResumeEntry {
  id: string;
  candidateName: string;
  fileName: string;
  uploadedDate: string;
  skills: string[];
}

export interface EmployeeProfileData {
  jobCategory: string;
  phone1: string;
  phone2?: string;
  city: string;
  address: string;
  nextOfKin: { name: string; occupation: string; phone: string; relationship: string; address: string };
  academicRecords: { institution: string; detail: string }[];
  professionalQualifications: { title: string; detail: string; bullets?: string[] }[];
  guarantors: { name: string; detail: string }[];
  family: { name: string; relationship: string; phone: string; address: string }[];
  jobDescription: string[];
  bankName: string;
  accountNo: string;
  accountName: string;
}

export interface Employee {
  id: string;
  name: string;
  department: string;
  role: string;
  email: string;
  status: 'Active' | 'On Leave';
  profile: EmployeeProfileData;
}

export interface PerformanceReview {
  id: string;
  employee: string;
  period: string;
  rating: number; // out of 5
  status: 'Completed' | 'In Progress' | 'Not Started';
}

export interface PayrollEntry {
  id: string;
  employee: string;
  salary: number;
  bonus: number;
  deductions: number;
  payDate: string;
  status: 'Paid' | 'Pending';
}

export interface MessageItem {
  id: string;
  sender: string;
  subject: string;
  preview: string;
  time: string;
  unread: boolean;
}