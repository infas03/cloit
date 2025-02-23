import { Category, Firstline, Folder } from "iconsax-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { useSelector } from "react-redux";

const Sidebar = () => {
  const pathname = usePathname();
  
  const [openMenus, setOpenMenus] = useState({});
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  const menus = useSelector((state) => state.menu.menus);
  const filteredMenus = menus?.[0]?.children;

  const toggleMenu = (id) => {
    setOpenMenus((prev) => (prev === id ? {} : { [id]: !openMenus[id] }));
    setIsSidebarCollapsed(false)
  };

  const handleSidebarToggle = () => {
    setOpenMenus({})
    setTimeout(() => {
      setIsSidebarCollapsed(!isSidebarCollapsed);
    }, 300)
  };

  return (
    <aside
      className={`w-[240px] ${isSidebarCollapsed ? "w-[80px] p-3" : "w-[240px] p-5"} 
        rounded-3xl bg-blueGray text-white  min-h-full transition-all`}
    >
      <div className="px-2 flex justify-between items-end h-12">
        {!isSidebarCollapsed && <Image src="/logo.svg" width={70} height={21} alt="Logo" priority />}
        <button
          type="button"
          onClick={handleSidebarToggle}
          className={`${isSidebarCollapsed && 'mt-5 px-2'}`}
        >
          <Firstline size="23" color="#ffffff" variant="Outline" />
        </button>
      </div>
      <nav>
        <ul className="space-y-2 mt-5">
          {filteredMenus?.map((menu) => (
            <li key={menu.id}>
              <div
                className={`${
                  openMenus[menu.id] && "bg-blue-gray-800"
                } rounded-2xl`}
              >
                <button
                  onClick={() => toggleMenu(menu.id)}
                  className="block p-4 w-full hover:bg-lime-green-400 flex gap-x-3 items-center rounded-2xl group"
                >
                  <Folder
                    size="20"
                    variant={openMenus[menu.id] ? "Bold" : "Outline"}
                    className={`${
                      openMenus[menu.id] ? "fill-white" : "fill-blue-gray-600"
                    } group-hover:fill-blue-gray-900`}
                  />
                  {!isSidebarCollapsed && (
                    <span
                      className={`text-sm font-bold ${
                        openMenus[menu.id] ? "text-white" : "text-blue-gray-600"
                      } group-hover:text-blue-gray-900`}
                    >
                      {menu?.name}
                    </span>
                  )}
                </button>
                {menu.children && menu.children.length > 0 && (
                  <div
                    className={`overflow-hidden transition-max-height duration-500 ease-in-out ${
                      openMenus[menu.id] ? "max-h-[1000px]" : "max-h-0"
                    }`}
                    style={{ transition: "max-height 0.5s ease-in-out" }}
                  >
                    <ul className="space-y-1">
                      {menu.children.map((child) => (
                        <li
                          key={child.id}
                          className={`flex gap-x-3 items-center p-4 ${
                            pathname === `/menu/${child.name}` ? "bg-lime-green-400" : ""
                          } hover:bg-lime-green-400 group rounded-2xl`}
                        >
                          <Category
                            size="20"
                            variant={openMenus[menu.id] ? "Bold" : "Outline"}
                            className={`${pathname === `/menu/${child.name}` ? "fill-white" : "fill-blue-gray-600"} group-hover:fill-blue-gray-900`}
                          />
                          <Link
                            href={`/menu/${child.name}`}
                            className={`block rounded text-sm font-bold ${
                              pathname === `/menu/${child.name}`
                                ? "text-white"
                                : "text-blue-gray-600"
                            } group-hover:text-blue-gray-900`}
                          >
                            {child.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;

// import { Firstline, Folder } from "iconsax-react";
// import Image from "next/image";
// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import { useState } from "react";
// import { useSelector } from "react-redux";

// const Sidebar = () => {
//   const pathname = usePathname();

//   const [openMenus, setOpenMenus] = useState({});

//   const menus = useSelector((state) => state.menu.menus);
//   const filteredMenus = menus?.[0]?.children;

//   const toggleMenu = (id) => {
//     setOpenMenus((prev) => (prev === id ? {} : {[id]: !openMenus[id]}));
//   };

//   return (
//     <aside className="w-[240px] rounded-3xl bg-blueGray text-white p-5 min-h-full">
//       <div className="pt-5 px-2 flex justify-between items-center">
//         <Image src="/logo.svg" width={70} height={21} alt="Logo" priority />
//         <button type='button'>
//           <Firstline size="23" color="#ffffff" variant="Outline"/>
//         </button>
//       </div>
//       <nav>
//         <ul className="space-y-2 mt-10">
//           {filteredMenus?.map((menu) => (
//             <li key={menu.id}>
//               <div
//                 className={`${
//                   openMenus[menu.id] && "bg-blue-gray-800"
//                 } rounded-2xl`}
//               >
//                 <button
//                   onClick={() => toggleMenu(menu.id)}
//                   className="block p-4 w-full hover:bg-lime-green-400  flex gap-x-3 items-center rounded-2xl group"
//                 >
//                   <Folder
//                     size="20"
//                     variant={openMenus[menu.id] ? "Bold" : "Outline"}
//                     className={`${openMenus[menu.id] ? "fill-white" : "fill-blue-gray-600"} group-hover:fill-blue-gray-900`}
//                   />
//                   <span
//                     className={`text-sm font-bold ${
//                       openMenus[menu.id] ? "text-white" : "text-blue-gray-600"
//                     } group-hover:text-blue-gray-900`}
//                   >
//                     {menu?.name}
//                   </span>
//                 </button>
//                 {menu.children && menu.children.length > 0 && (
//                   <div
//                     className={`overflow-hidden transition-max-height duration-500 ease-in-out ${
//                       openMenus[menu.id] ? "max-h-[1000px]" : "max-h-0"
//                     }`}
//                     style={{ transition: "max-height 0.5s ease-in-out" }}
//                   >
//                     <ul className="space-y-1">
//                       {menu.children.map((child) => (
//                         <li
//                           key={child.id}
//                           className={`flex gap-x-3 items-center p-4 ${pathname === `/menu/${child.name}` ? "bg-lime-green-400" : ""} hover:bg-lime-green-400 group rounded-2xl`}
//                         >
//                           <Folder
//                             size="20"
//                             variant={openMenus[menu.id] ? "Bold" : "Outline"}
//                             className={`${pathname === `/menu/${child.name}` ? "fill-white" : "fill-blue-gray-600"} group-hover:fill-blue-gray-900`}
//                           />
//                           <Link
//                             href={`/menu/${child.name}`}
//                             className={`block rounded text-sm font-bold ${
//                               pathname === `/menu/${child.name}`
//                                 ? "text-white"
//                                 : "text-blue-gray-600"
//                             } group-hover:text-blue-gray-900`}
//                           >
//                             {child.name}
//                           </Link>
//                         </li>
//                       ))}
//                     </ul>
//                   </div>
//                 )}
//               </div>
//             </li>
//           ))}
//         </ul>
//       </nav>
//     </aside>
//   );
// };

// export default Sidebar;
