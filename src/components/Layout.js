import Sidebar from "./Sidebar";

const Layout = ({ children }) => {
  return (
    <div className="flex min-h-screen p-2">
      <Sidebar />

      <main className="flex-1 overflow-auto h-full p-5">
        {children}
      </main>
    </div>
  );
};

export default Layout;
