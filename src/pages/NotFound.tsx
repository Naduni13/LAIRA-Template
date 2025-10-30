import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
    document.title = "Under Construction | Coming Soon";
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex items-center justify-center px-4 py-8">
      <div className="max-w-md w-full text-center">
        {/* Elegant 404 number */}
        <div className="mb-8">
          <div className="text-6xl font-light text-gray-400 tracking-wider mb-2">404</div>
          <div className="w-16 h-px bg-gray-300 mx-auto"></div>
        </div>

        {/* Main message */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
          <h1 className="text-xl font-light text-gray-800 mb-4">
            Page Under Construction
          </h1>
          
          <p className="text-gray-600 leading-relaxed mb-4">
            We apologize, but this page is currently under construction and will be available soon. 
            We're working hard to bring you an improved experience.
          </p>
          
          <p className="text-gray-500 text-sm">
            Thank you for your patience and understanding.
          </p>
        </div>

        {/* Footer note */}
        <div className="mt-8 pt-6 border-t border-gray-100">
          <p className="text-xs text-gray-400">
            We look forward to serving you better soon
          </p>
        </div>
      </div>
    </div>
  );
};

export default NotFound;