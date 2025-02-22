import Layout from "@/components/Layout";
import AddMenuForm from "@/components/AddMenuForm";
import { useEffect, useState } from "react";
import { fetchMenus } from "@/redux/actions/menuActions";
import { useDispatch, useSelector } from "react-redux";
import MenuTree from "@/components/MenuTree";

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

  return (
    <Layout>
      <div className={`items-start justify-items-center flex`}>
        <div className="w-1/2 p-4">
          <MenuTree menus={menus} setSelectedMenu={setSelectedMenu} />
        </div>
        <div className="w-1/2 p-4">
          {selectedMenu && <AddMenuForm selectedMenu={selectedMenu} setSelectedMenu={setSelectedMenu} />}
        </div>
      </div>
    </Layout>
  );
}
