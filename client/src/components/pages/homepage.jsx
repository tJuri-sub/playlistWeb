import { AppSidebar } from "../component/sidebar";
import { SidebarProvider, SidebarTrigger } from "../ui/sidebar";
import { PlaylistRender } from "./playlistRenderer";

export const Homepage = () => {
  const user = [
    {
      name: "Juri",
    },
  ];

  return (
    <SidebarProvider>
      <div className="flex h-screen w-full">
        <AppSidebar />
        <div className="flex-1 flex flex-col ">
          <div className="h-13 bg-[#131313] text-[#ffffff] flex items-center px-2">
            <SidebarTrigger />
            {/* You can add more header content here */}
          </div>
          {/* Content */}
          <div className="bg-[#1b1b1b] flex-1 text-[#ffffff] p-2">
            <h1 className="text-2xl font-bold mb-5">
              Welcome{" "}
              {user.map((user, index) => (
                <span key={index}>{user.name}</span>
              ))}
            </h1>
            <PlaylistRender />
          </div>
        </div>
      </div>
    </SidebarProvider>
  );
};
