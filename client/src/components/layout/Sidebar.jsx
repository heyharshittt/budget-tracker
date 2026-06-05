// import {
//   LayoutDashboard,
//   Wallet,
//   Receipt,
//   PiggyBank,
//   Target,
//   User,
// } from "lucide-react";



// import { useAuth } from "../../context/AuthContext";

// import { NavLink } from "react-router-dom";

// const Sidebar = () => {

//      const { logout, user } =
//         useAuth();
    
//       const handleLogout =
//         async () => {
//           try {
//             await logout();
//           } catch (error) {
//             console.error(error);
//           }
//         };
    
//   const navItems = [
//     {
//       name: "Dashboard",
//       path: "/dashboard",
//       icon: LayoutDashboard,
//     },
//     {
//       name: "Income",
//       path: "/income",
//       icon: Wallet,
//     },
//     {
//       name: "Expenses",
//       path: "/expenses",
//       icon: Receipt,
//     },
//     {
//       name: "Budgets",
//       path: "/budgets",
//       icon: PiggyBank,
//     },
//     {
//       name: "Goals",
//       path: "/goals",
//       icon: Target,
//     },
//     {
//       name: "Profile",
//       path: "/profile",
//       icon: User,
//     },
   
//   ];
//   return (
//     <aside className="w-64 border-r bg-white">
//       <div className="border-b p-6">
//         <h1 className="text-2xl font-bold text-emerald-600">
//           Budget Tracker
//         </h1>
//       </div>

//       <nav className="p-4">
//         <ul className="space-y-2">
//           {navItems.map((item) => {
//             const Icon = item.icon;

//             return (
//               <li key={item.path}>
//                 <NavLink
//                   to={item.path}
//                   className={({ isActive }) =>
//                     `
//                     flex items-center gap-3 rounded-xl px-4 py-3 transition
//                     ${
//                       isActive
//                         ? "bg-emerald-100 text-emerald-700"
//                         : "text-slate-600 hover:bg-slate-100"
//                     }
//                   `
//                   }
//                 >
//                   <Icon size={18} />
//                   {item.name}
                  
//                 </NavLink>
                
//               </li>
//             );
//           })}
           
//         </ul>
//         <button
//             onClick={
//               handleLogout
//             }
//             className="w-full rounded-lg bg-red-600 px-4 py-2 font-medium text-white transition hover:bg-red-700"
//           >
//             Logout
//           </button>
//       </nav>
      
//     </aside>
    
//   );
// };

// export default Sidebar;


import {
  LayoutDashboard,
  Wallet,
  Receipt,
  PiggyBank,
  Target,
  User,
} from "lucide-react";

import { NavLink } from "react-router-dom";

import { useAuth } from "../../context/AuthContext";

const Sidebar = () => {
  const { logout } = useAuth();

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error(error);
    }
  };

  const navItems = [
    {
      name: "Dashboard",
      path: "/dashboard",
      icon: LayoutDashboard,
    },
    {
      name: "Income",
      path: "/income",
      icon: Wallet,
    },
    {
      name: "Expenses",
      path: "/expenses",
      icon: Receipt,
    },
    {
      name: "Budgets",
      path: "/budgets",
      icon: PiggyBank,
    },
    {
      name: "Goals",
      path: "/goals",
      icon: Target,
    },
    {
      name: "Profile",
      path: "/profile",
      icon: User,
    },
  ];

  return (
    <aside className="fixed left-0 top-0 flex h-screen w-64 flex-col border- bg-white">
      <div className="border-b p-6">
        <h1 className="text-2xl font-bold text-emerald-600">
          Budget Tracker
        </h1>
      </div>

      <nav className="flex-1 p-4">
        <ul className="space-y-2">
          {navItems.map((item) => {
            const Icon = item.icon;

            return (
              <li key={item.path}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    `
                    flex items-center gap-3 rounded-xl px-4 py-3 transition
                    ${
                      isActive
                        ? "bg-emerald-100 text-emerald-700"
                        : "text-slate-600 hover:bg-slate-100"
                    }
                  `
                  }
                >
                  <Icon size={18} />
                  {item.name}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className=" p-4">
        <button
          onClick={handleLogout}
          className="w-full rounded-xl bg-red-600 px-4 py-3 font-medium text-white transition hover:bg-red-700"
        >
          Logout
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;