
import { Outlet } from "react-router-dom";

export default function App() {
  return (
    <div className="min-h-screen bg-[#F8F9FA]">
      {/* Mobile Container */}
      <div className="max-w-md mx-auto bg-white shadow-2xl min-h-screen relative">
        <Outlet />
      </div>
    </div>
  );
}
