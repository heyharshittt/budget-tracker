// import Sidebar from "../components/layout/Sidebar";
// import Navbar from "../components/layout/Navbar";

// const DashboardLayout = ({
//   children,
// }) => {
//     return (
//     <div className="flex min-h-screen bg-slate-100">
//       <Sidebar /> 

//       <div className="flex flex-1 flex-col">
//         <Navbar />
        

//         <main className="flex-1 p-6">
//           {children}
          
//         </main>
        
//       </div>
//       <div>
       
//       </div>
//     </div>
    
//   );
// };

// export default DashboardLayout;

import Sidebar from "../components/layout/Sidebar";
import Navbar from "../components/layout/Navbar";

const DashboardLayout = ({
  children,
}) => {
  return (
    <div className="min-h-screen bg-slate-100">
      <Sidebar />

      <div className="ml-64 flex min-h-screen flex-col">
        <Navbar />

        <main className="flex-1 p-6">
          {children}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;