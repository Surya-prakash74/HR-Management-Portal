import { useState } from 'react';
import Sidebar from './components/Sidebar/Sidebar';
import Topbar from './components/Topbar/Topbar';
import Dashboard from './components/Dashboard/Dashboard';
import Messages from './components/Messages/Messages';
import Jobs from './components/Jobs/Jobs';
import Candidates from './components/Candidates/Candidates';
import Resumes from './components/Resumes/Resume';
import EmployeeManagement from './components/EmployeeManagement/EmployeeManagement';
import LeaveManagementPage from './components/LeaveManagementPage/LeaveManagementPage';
import PerformanceManagement from './components/PerformanceManagement/PerformanceManagement';
import PayrollManagement from './components/PayrollManagement/PayrollManagement';
import type { NavKey } from './nav';
import './App.css';

const PAGES: Record<NavKey, React.ComponentType> = {
  dashboard: Dashboard,
  messages: Messages,
  jobs: Jobs,
  candidates: Candidates,
  resumes: Resumes,
  'employee-management': EmployeeManagement,
  'leave-management': LeaveManagementPage,
  'performance-management': PerformanceManagement,
  'payroll-management': PayrollManagement,
};

export default function App() {
  const [active, setActive] = useState<NavKey>('dashboard');
  const [history, setHistory] = useState<NavKey[]>([]);
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const navigate = (next: NavKey) => {
    setHistory((h) => [...h, active]);
    setActive(next);
  };

  const goBack = () => {
    setHistory((h) => {
      if (h.length === 0) return h;
      setActive(h[h.length - 1]);
      return h.slice(0, -1);
    });
  };

  const Page = PAGES[active];

  return (
    <div className="app">
      <Sidebar active={active} onSelect={navigate} open={sidebarOpen} />
      <div className="main">
        <Topbar
          onOpenMessages={() => navigate('messages')}
          onToggleSidebar={() => setSidebarOpen((o) => !o)}
          onBack={history.length > 0 ? goBack : undefined}
        />
        <div className="content">
          <Page />
        </div>
      </div>
    </div>
  );
}