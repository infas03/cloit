import { Folder } from "iconsax-react";
import Sidebar from "./Sidebar";

const Layout = ({ children, title }) => {
  return (
    <div className="flex min-h-screen p-2">
      <Sidebar />

      <main className="flex-1 overflow-auto h-full p-5">
        <div className="flex items-center gap-x-2">
          <Folder size="20" variant="Bold" className="fill-blue-gray-300" />
          <span className="text-blue-gray-300 text-sm font-medium">/</span>
          <span className="text-blue-gray-900 text-sm font-medium">{title}</span>
        </div>
        {children}
      </main>
    </div>
  );
};

export default Layout;
