import NavBar from "@/components/navbar";
import Sidebar from "@/components/sidebar";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full relative">
      <div className="hidden h-full md:flex md:w-72 md:flex-col md:fixed md:insert-y-0 z-[80} bg-gray-900">
        <div>
          <Sidebar />
        </div>
      </div>
      <main className="md:pl-72">
        <NavBar /> {children}
      </main>
    </div>
  );
};

export default DashboardLayout;
