import { Bell, Menu } from "lucide-react";

import { useAuth } from "../../context/AuthContext";

const Navbar = ({ onMenuClick }) => {
  const { user } = useAuth();

  return (
    <header className="flex min-h-16 items-center justify-between border-b bg-white px-4 sm:px-6">
      <div className="flex min-w-0 items-center gap-3">
        <button
          type="button"
          aria-label="Open navigation"
          onClick={onMenuClick}
          className="rounded-lg p-2 text-slate-600 hover:bg-slate-100 md:hidden"
        >
          <Menu size={22} />
        </button>

        <h2 className="truncate text-base font-semibold text-slate-800 sm:text-lg">
          Welcome back
        </h2>
      </div>

      <div className="flex shrink-0 items-center gap-3 sm:gap-4">
        <Bell
          size={20}
          className="cursor-pointer text-slate-600"
        />

        <div className="flex items-center gap-2 sm:gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-emerald-600 text-white sm:h-10 sm:w-10">
            {user?.name?.charAt(0)}
          </div>

          <div className="hidden sm:block">
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
