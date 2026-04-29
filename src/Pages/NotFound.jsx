import { Link } from "react-router"; // or react-router-dom
import { ArrowLeftIcon } from "@heroicons/react/24/outline";

const NotFound = () => {
  return (
    <div className="relative min-h-[90vh] flex items-center justify-center bg-white px-6">
      {/* Background Decor: Subtle Abstract Shape */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[40%] left-[50%] -translate-x-1/2 -translate-y-1/2 bg-zinc-50 rounded-full blur-3xl opacity-60" />
      </div>

      <div className="relative z-10 max-w-md w-full text-center">
        {/* The Error Code - Ultra Thin */}
        <span className="text-[30px] font-bold tracking-[0.2em] text-zinc-400 uppercase mb-4 block">
          Error 404
        </span>

        {/* Heading - Weight 400 */}
        <h1 className="text-[26px] font-normal text-red-500 mb-3">
          Lost in the void.
        </h1>

        {/* Description - Weight 300 & Small Font */}
        <p className="text-[13px] font-light text-zinc-500 leading-relaxed mb-10 mx-auto">
          The page you are looking for has been moved, deleted, or never existed
          in this dimension.
        </p>

        {/* Call to Action - Consistent with your Header UI */}
        <div className="flex flex-col items-center gap-6">
          <Link
            to="/"
            className="group flex items-center gap-x-2 rounded-full bg-zinc-900 px-6 py-2 text-[16px] font-normal text-zinc-800 hover:bg-zinc-800 transition-all shadow-sm active:scale-95 my-5">
            <ArrowLeftIcon className="h-3.5 w-3.5 text-zinc-400 group-hover:text-zinc-700 transition-colors" />
            Return to Home
          </Link>

          {/* Secondary Support Link */}
          <div className="flex items-center gap-x-4 border-t border-zinc-100 pt-6 w-full justify-center">
            <Link
              to="/contact"
              className="text-[11px] font-normal text-zinc-400 hover:text-zinc-900 transition-colors uppercase tracking-widest">
              Report Issue
            </Link>
            <span className="h-1 w-1 bg-zinc-200 rounded-full" />
            <Link
              to="/status"
              className="text-[11px] font-normal text-zinc-400 hover:text-zinc-900 transition-colors uppercase tracking-widest">
              System Status
            </Link>
          </div>
        </div>
      </div>

      {/* Subtle Bottom Branding */}
      <div className="absolute bottom-8 text-[11px] font-light text-zinc-300 tracking-tighter">
        &copy;ChintaGhor Systems Inc.
      </div>
    </div>
  );
};

export default NotFound;
