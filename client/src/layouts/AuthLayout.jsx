import { Link } from "react-router-dom";

const AuthLayout = ({
  title,
  subtitle,
  children,
  footerText,
  footerLinkText,
  footerLink,
}) => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-100 px-4">
      <div className="w-full max-w-md rounded-3xl bg-white p-8 shadow-lg">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-emerald-600">
            Budget Tracker
          </h1>

          <h2 className="mt-6 text-2xl font-semibold text-slate-800">
            {title}
          </h2>

          <p className="mt-2 text-slate-500">
            {subtitle}
          </p>
        </div>

        {children}

        <div className="mt-6 text-center text-sm text-slate-600">
          {footerText}{" "}
          <Link
            to={footerLink}
            className="font-medium text-emerald-600 hover:text-emerald-700"
          >
            {footerLinkText}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;