import { useState } from "react";

import Sidebar from "../components/layout/Sidebar";
import Navbar from "../components/layout/Navbar";

const DashboardLayout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  return (
    <div className="min-h-screen bg-slate-100">
      <Sidebar
        isOpen={sidebarOpen}
        onClose={closeSidebar}
      />

      <div className="flex min-h-screen flex-col md:ml-64">
        <Navbar
          onMenuClick={() =>
            setSidebarOpen(true)
          }
        />

        <main className="flex-1 p-4 sm:p-6">
          {children}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
