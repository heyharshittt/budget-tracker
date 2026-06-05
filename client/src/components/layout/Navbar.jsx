import { Bell } from "lucide-react";

import { useAuth } from "../../context/AuthContext";

const Navbar = () => {
  const { user } = useAuth();

  return (
    <header className="flex h-16 items-center justify-between border- bg-white px-6">
      <div>
        <h2 className="text-lg font-semibold text-slate-800">
          Welcome back
        </h2>
      </div>

      <div className="flex items-center gap-4">
        <Bell
          size={20}
          className="cursor-pointer text-slate-600"
        />

        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-600 text-white">
            {user?.name?.charAt(0)}
          </div>

          <div>
            <p className="font-medium">
              {user?.name}
            </p>

            <p className="text-xs text-slate-500">
              {user?.email}
            </p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;