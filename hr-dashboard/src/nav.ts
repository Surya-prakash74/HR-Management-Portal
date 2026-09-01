import {
  LayoutGrid,
  Mail,
  Briefcase,
  Users,
  FileText,
  User,
  BookOpen,
  BarChart3,
  CreditCard,
  type LucideIcon,
} from 'lucide-react';

export type NavKey =
  | 'dashboard'
  | 'messages'
  | 'jobs'
  | 'candidates'
  | 'resumes'
  | 'employee-management'
  | 'leave-management'
  | 'performance-management'
  | 'payroll-management';

export interface NavItem {
  key: NavKey;
  label: string;
  icon: LucideIcon;
  section: 'Features' | 'Recruitment' | 'Organization';
  badge?: boolean;
}

// Single source of truth for sidebar nav + placeholder page titles/icons.
export const NAV_ITEMS: NavItem[] = [
  { key: 'dashboard', label: 'Dashboard', icon: LayoutGrid, section: 'Features' },
  { key: 'messages', label: 'Messages', icon: Mail, section: 'Features', badge: true },
  { key: 'jobs', label: 'Jobs', icon: Briefcase, section: 'Recruitment' },
  { key: 'candidates', label: 'Candidates', icon: Users, section: 'Recruitment' },
  { key: 'resumes', label: 'Resumes', icon: FileText, section: 'Recruitment' },
  { key: 'employee-management', label: 'Employee Management', icon: User, section: 'Organization' },
  { key: 'leave-management', label: 'Leave Management', icon: BookOpen, section: 'Organization' },
  { key: 'performance-management', label: 'Performance Management', icon: BarChart3, section: 'Organization' },
  { key: 'payroll-management', label: 'Payroll Management', icon: CreditCard, section: 'Organization' },
];