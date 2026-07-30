import Sidebar from "./Sidebar";

function Layout({ children }) {
  return (
    <div className="flex min-h-screen bg-[#EEF2F7]">
      <Sidebar />

      <main className="flex-1 lg:ml-64 p-6 md:p-8 overflow-y-auto">
        {children}
      </main>
    </div>
  );
}

export default Layout;