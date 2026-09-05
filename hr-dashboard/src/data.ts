import type {
  LeaveSetting,
  LeaveRecord,
  JobPosting,
  Candidate,
  ResumeEntry,
  Employee,
  PerformanceReview,
  PayrollEntry,
  MessageItem,
} from './types';

// Manual/mock data standing in for a real API — swap for a fetch() when the backend exists.
export const leaveSettings: LeaveSetting[] = [
  { id: 'ls1', plan: 'Maternity', durationDays: 60, recallAutorenew: 'No / No' },
  { id: 'ls2', plan: 'Sick', durationDays: 14, recallAutorenew: 'No / Yes' },
  { id: 'ls3', plan: 'Compassionate', durationDays: 30, recallAutorenew: 'No / No' },
  { id: 'ls4', plan: 'Exam', durationDays: 20, recallAutorenew: 'No / Yes' },
  { id: 'ls5', plan: 'Paternity', durationDays: 14, recallAutorenew: 'No / No' },
  { id: 'ls6', plan: 'Casual', durationDays: 10, recallAutorenew: 'Yes / No' },
  { id: 'ls7', plan: 'Annual', durationDays: 21, recallAutorenew: 'No / Yes' },
];

export const ongoingLeaveApplications: LeaveRecord[] = [
  { id: 'ol1', name: 'Rahul Yadav', durationDays: 5, startDate: '22/08/2026', endDate: '28/08/2026', type: 'Casual', reason: 'Personal' },
  { id: 'ol2', name: 'Elisha Bantu', durationDays: 7, startDate: '24/08/2026', endDate: '30/08/2026', type: 'Sick', reason: 'Recovery' },
  { id: 'ol3', name: 'Radhika Sharma', durationDays: 3, startDate: '25/08/2026', endDate: '28/08/2026', type: 'Casual', reason: 'Personal' },
  { id: 'ol4', name: 'Kareem Bhai', durationDays: 5, startDate: '22/08/2026', endDate: '28/08/2026', type: 'Exam', reason: 'Examination' },
  { id: 'ol5', name: 'Ishan Kishan', durationDays: 5, startDate: '22/08/2026', endDate: '28/08/2026', type: 'Casual', reason: 'Personal' },
  { id: 'ol6', name: 'Sara Tendulkar', durationDays: 9, startDate: '20/08/2026', endDate: '30/08/2026', type: 'Sick', reason:'Recovery' },
  { id: 'ol7', name: 'Bala Ram', durationDays: 5, startDate: '22/08/2026', endDate: '28/08/2026', type: 'Casual', reason: 'Travel' },
];

export const leaveHistory: LeaveRecord[] = [
  { id: 'lh1', name: 'Rahul Yadav', durationDays: 5, startDate: '22/08/2025', endDate: '28/08/2025', type: 'Sick', reason: 'Personal' },
  { id: 'lh2', name: 'Elisha Bantu', durationDays: 7, startDate: '22/08/2025', endDate: '30/08/2025', type: 'Exam', reason: 'Examination' },
  { id: 'lh3', name: 'Radhika Sharma', durationDays: 120, startDate: '22/08/2025', endDate: '28/06/2025', type: 'Maternity', reason: 'Child Care' },
  { id: 'lh4', name: 'Kareem Bhai', durationDays: 5, startDate: '22/08/2025', endDate: '28/08/2025', type: 'Sick', reason: 'Personal' },
  { id: 'lh5', name: 'Ishan Kishan', durationDays: 5, startDate: '22/08/2025', endDate: '28/08/2025', type: 'Sick', reason: 'Personal' },
  { id: 'lh6', name: 'Sara Tendulkar', durationDays: 5, startDate: '22/08/2025', endDate: '28/08/2025', type: 'Casual', reason: 'Travel' },
  { id: 'lh7', name: 'Bala Ram', durationDays: 5, startDate: '22/08/2025', endDate: '28/08/2025', type: 'Sick', reason: 'Personal' },
];

export const jobPostings: JobPosting[] = [
  { id: 'jb1', title: 'Frontend Engineer', department: 'Engineering', location: 'Hyderabad', type: 'Full-time', applicants: 24, postedDate: '02/09/2026', status: 'Open' },
  { id: 'jb2', title: 'Product Designer', department: 'Design', location: 'Remote', type: 'Full-time', applicants: 17, postedDate: '10/08/2026', status: 'Open' },
  { id: 'jb3', title: 'HR Coordinator', department: 'Human Resources', location: 'Chennai', type: 'Part-time', applicants: 9, postedDate: '15/08/2026', status: 'Closed' },
  { id: 'jb4', title: 'Backend Engineer', department: 'Engineering', location: 'Remote', type: 'Full-time', applicants: 31, postedDate: '20/08/2026', status: 'Open' },
  { id: 'jb5', title: 'QA Analyst', department: 'Engineering', location: 'Bengaluru', type: 'Contract', applicants: 6, postedDate: '05/09/2026', status: 'Open' },
  { id: 'jb6', title: 'Accountant', department: 'Finance', location: 'Salem', type: 'Full-time', applicants: 12, postedDate: '28/08/2026', status: 'Closed' },
];

export const candidates: Candidate[] = [
  { id: 'cd1', name: 'Aditya raj ', appliedFor: 'Frontend Engineer', stage: 'Interview', experience: '4 yrs', appliedDate: '08/08/2026' },
  { id: 'cd2', name: 'Komal Pallantla', appliedFor: 'Backend Engineer', stage: 'Screening', experience: '2 yrs', appliedDate: '22/08/2026' },
  { id: 'cd3', name: 'Shyam Naidu', appliedFor: 'Product Designer', stage: 'Offer', experience: '5 yrs', appliedDate: '12/08/2026' },
  { id: 'cd4', name: 'Vishal Kumar', appliedFor: 'QA Analyst', stage: 'Hired', experience: '3 yrs', appliedDate: '06/08/2026' },
  { id: 'cd5', name: 'Neha Setty', appliedFor: 'Frontend Engineer', stage: 'Screening', experience: '1 yr', appliedDate: '25/08/2026' },
  { id: 'cd6', name: 'Elisha Babu', appliedFor: 'Accountant', stage: 'Interview', experience: '6 yrs', appliedDate: '01/08/2026' },
];

export const resumeEntries: ResumeEntry[] = [
  { id: 'rs1', candidateName: 'Phaneendra', fileName: 'phaneendra-cv.pdf', uploadedDate: '08/08/2026', skills: ['React', 'TypeScript', 'CSS'] },
  { id: 'rs2', candidateName: 'Nagu Roy', fileName: 'Nagu Roy-cv.pdf', uploadedDate: '22/08/2026', skills: ['Node.js', 'PostgreSQL'] },
  { id: 'rs3', candidateName: 'Rahul Yadav', fileName: 'Rahul Yadav-cv.pdf', uploadedDate: '12/08/2026', skills: ['Figma', 'UX Research'] },
  { id: 'rs4', candidateName: 'Jayanth yerri', fileName: 'Jayanth yerri-cv.pdf', uploadedDate: '06/08/2026', skills: ['Cypress', 'Jest', 'QA'] },
  { id: 'rs5', candidateName: 'Venu Madhav', fileName: 'Venu Madhav-cv.pdf', uploadedDate: '25/08/2026', skills: ['React', 'JavaScript'] },
];


const profileFor = (guarantor: string, kin: string): Employee['profile'] => ({
  jobCategory: 'Full time',
  phone1: '084657367',
  phone2: '',
  city: 'kakinada',
  address: 'ramanya, Alembank',
  nextOfKin: { name: kin, occupation: 'Accountant', phone: '0933786378', relationship: 'Relative', address: 'Kakinada' },
  academicRecords: [
    { institution: 'JNTUK University', detail: 'B.Sc in Computer Science, May 2014 - May 2019' },
    { institution: 'Swamy School', detail: 'Sep 2008 - June 2012' },
  ],
  professionalQualifications: [
    { title: 'DBMS Certification', detail: '' },
    { title: 'Google UI / UX Certification', detail: 'at Google Inc, September 2021 - September 2022' },
    {
      title: 'Web Developer',
      detail: 'at Google Inc, May 2019 - September 2021',
      bullets: ['Collaborated with teammates to deliver valuable features meeting business and customer needs.'],
    },
  ],
  guarantors: [
    { name: guarantor, detail: 'Head of Design Team, Microsoft Inc - 090 400 400 68000' },
    { name: 'Mrs. Gelila Moges', detail: '' },
  ],
  family: [{ name: 'Mr Abel Doe', relationship: 'Brother', phone: '090 300 340 6', address: 'Djibouti Street, Addis Ababa' }],
  jobDescription: [
    'Creating user-centered designs by understanding business requirements and user feedback',
    'Creating user flows, wireframes, prototypes and mockups',
    'Translating requirements into style guides, design systems, design patterns and attractive user interfaces',
  ],
  bankName: 'CBE',
  accountNo: '100022342434423',
  accountName: 'Abebe Kebede',
});

export const employees: Employee[] = [
  { id: 'em1', name: 'Komal Pallantla', department: 'Engineering', role: 'Senior Developer', email: 'Komal.Pallantla@xceltech.com', status: 'Active', profile: profileFor('Mr Natnael Melaku', 'Birhanu Mesfin') },
  { id: 'em2', name: 'Priya Warrior', department: 'Sales', role: 'Account Manager', email: 'Priya.Warrior@xceltech.com', status: 'On Leave', profile: profileFor('Mr Yonas Tesfaye', 'Selamawit Girma') },
  { id: 'em3', name: 'Lakshmi Nair', department: 'Human Resources', role: 'HR Specialist', email: 'Lakshmi.Nair@xceltech.com', status: 'On Leave', profile: profileFor('Mr Dawit Bekele', 'Meron Alemu') },
  { id: 'em4', name: 'Lavanya Reddy', department: 'Finance', role: 'Accountant', email: 'Lavanya.ReddY@xceltech.com', status: 'Active', profile: profileFor('Mr Henok Girma', 'Kalkidan Tesema') },
  { id: 'em5', name: 'Rukmini Vasanth', department: 'Design', role: 'Product Designer', email: 'Rukmini.Vasanth@xceltech.com', status: 'Active', profile: profileFor('Mr Natnael Melaku', 'Biruk Fikru') },
  { id: 'em6', name: 'Kairaa Advani', department: 'Engineering', role: 'QA Engineer', email: 'Kairaa.Advani@xceltech.com', status: 'Active', profile: profileFor('Mr Samuel Assefa', 'Hana Getachew') },
];

export const performanceReviews: PerformanceReview[] = [
  { id: 'pr1', employee: 'Komal Pallantla', period: 'H1 2026', rating: 5, status: 'Completed' },
  { id: 'pr2', employee: 'Priya Warrior', period: 'H1 2026', rating: 3, status: 'Completed' },
  { id: 'pr3', employee: 'Lakshmi  Naidu', period: 'H1 2026', rating: 4, status: 'In Progress' },
  { id: 'pr4', employee: 'Kavya Reddy', period: 'H1 2026', rating: 4, status: 'Completed' },
  { id: 'pr5', employee: 'Ishaan Verma', period: 'H1 2026', rating: 0, status: 'Not Started' },
  { id: 'pr6', employee: 'Arjun Nair', period: 'H1 2026', rating: 5, status: 'Completed' },
];

export const payrollEntries: PayrollEntry[] = [
  { id: 'pl1', employee: 'Komal Pallantla', salary: 50000, bonus: 3000, deductions: 1200, payDate: '1/09/2026', status: 'Paid' },
  { id: 'pl2', employee: 'Priya Warrior', salary: 40000, bonus: 0, deductions: 950, payDate: '1/09/2026', status: 'Paid' },
  { id: 'pl3', employee: 'Lakshmi  Naidu', salary: 29000, bonus: 1500, deductions: 800, payDate: '1/09/2026', status: 'Pending' },
  { id: 'pl4', employee: 'Kavya Reddy', salary: 55000, bonus: 2000, deductions: 900, payDate: '1/09/2026', status: 'Paid' },
  { id: 'pl5', employee: 'Ishaan sharma', salary: 48000, bonus: 2500, deductions: 1000, payDate: '1/09/2026', status: 'Pending' },
  { id: 'pl6', employee: 'Arjun Tendulkar', salary: 36000, bonus: 1000, deductions: 850, payDate: '1/09/2026', status: 'Paid' },
];

export const messages: MessageItem[] = [
  { id: 'ms1', sender: 'Ambhani', subject: 'Request for leave', preview: 'Hi, I wanted to confirm my Leave approval for Thursday...', time: '9:24 AM', unread: true },
  { id: 'ms2', sender: 'Alfha', subject: 'Leave request submitted', preview: 'Alpha Sharma submitted a new leave request for review.', time: 'Yesterday', unread: true },
  { id: 'ms3', sender: 'Keerthi Setty', subject: 'Offer letter question', preview: 'Thank you for the offer! I had one question about...', time: 'Yesterday', unread: false },
  { id: 'ms4', sender: 'Kayadu Lohar', subject: 'September payroll run completed', preview: 'The payroll run for September has completed successfully.', time: '2 days ago', unread: false },
  { id: 'ms5', sender: 'Sara Tendulkar', subject: 'QA sign-off', preview: 'All test cases for the release have passed. Ready to ship.', time: '3 days ago', unread: false },
];