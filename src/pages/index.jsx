import Layout from "@/components/Layout";
import AddMenuForm from "@/components/AddMenuForm";
import { useEffect, useState } from "react";
import { fetchMenus } from "@/redux/actions/menuActions";
import { useDispatch, useSelector } from "react-redux";
import MenuTree from "@/components/MenuTree";
import Dropdown from "@/components/Dropdown";
import { Category2 } from "iconsax-react";

export default function Home() {
  const dispatch = useDispatch();
  const [selectedMenu, setSelectedMenu] = useState(null);

  useEffect(() => {
    const fetchData = () => {
      dispatch(fetchMenus());
    };

    fetchData();
  }, [dispatch]);

  const menus = useSelector((state) => state.menu.menus);

  const hardcodeOption =
    [{ label: menus?.[0]?.name, value: menus?.[0]?.name }] || [];

  return (
    <Layout title={"Menus"}>
      <div className={`items-start justify-items-center flex`}>
        <div className="w-1/2 p-4">
          <div className="flex gap-x-3 items-center py-8">
            <div className="bg-arctic-blue-600 rounded-full w-[52px] h-[52px] flex items-center justify-center">
              <Category2 size="24" variant={"Bold"} className={`fill-white`} />
            </div>
            <span className="text-3xl font-extrabold text-blue-gray-900">Menus</span>
          </div>
          <div className="mb-5 w-3/4">
            <div className="text-sm text-blue-gray-600 mb-0.5">Menu</div>
            <Dropdown
              value={
                hardcodeOption.find(
                  (option) => option?.value === menus?.[0]?.name
                ) || ""
              } //hardcode value
              // onChange={handleBranchChange}
              options={hardcodeOption} //hardcode options
              isClearable={false}
              isSearchable={false}
              placeholder="Select Menu"
              name="menu"
              id="menu"
            />
          </div>
          <MenuTree menus={menus} setSelectedMenu={setSelectedMenu} />
        </div>
        <div className="w-1/2 p-4 mt-[117px]">
          {selectedMenu && (
            <AddMenuForm
              selectedMenu={selectedMenu}
              setSelectedMenu={setSelectedMenu}
            />
          )}
        </div>
      </div>
    </Layout>
  );
}
