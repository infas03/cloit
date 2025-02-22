import { addMenu } from "@/redux/actions/menuActions";
import { addMenuSchema } from "@/validations/validations";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";

const AddMenuForm = ({ selectedMenu }) => {
  const dispatch = useDispatch();

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      menuId: selectedMenu.id ||  "",
      name: "",
      parentId: selectedMenu.id || "",
      depth: selectedMenu.depth || 1,
    },
    validationSchema: addMenuSchema,
    onSubmit: async (values, { resetForm }) => {
      
      console.log("values: ", values);
      dispatch(addMenu(values, resetForm))
    },
  });

  return (
    <div className="rounded-md">
      <form onSubmit={formik.handleSubmit}>
        <div className="mb-2">
          <label htmlFor="depth" className="block text-sm text-blueGray2">
            Menu ID
          </label>
          <input
            type="text"
            id="parentId"
            value={formik.values.menuId}
            onChange={formik.handleChange}
            className="border p-2 rounded-2xl w-full bg-lightGray disabled:bg-darkGray px-4 py-[14px]"
            disabled
          />
          {formik.touched.menuId && formik.errors.menuId ? (
            <div className="text-red-500 text-sm">{formik.errors.menuId}</div>
          ) : null}
        </div>
        <div className="mb-2">
          <label htmlFor="depth" className="block text-sm text-blueGray2">
            Depth
          </label>
          <input
            type="number"
            id="depth"
            value={formik.values.depth}
            onChange={formik.handleChange}
            className="border p-2 rounded-2xl w-1/2 bg-lightGray disabled:bg-darkGray px-4 py-[14px]"
            disabled
          />
          {formik.touched.depth && formik.errors.depth ? (
            <div className="text-red-500 text-sm">{formik.errors.depth}</div>
          ) : null}
        </div>
        <div className="mb-2">
          <label htmlFor="parentId" className="block text-sm text-blueGray2">
            Parent Data
          </label>
          <input
            type="text"
            id="parentId"
            value={selectedMenu?.name}
            className="border p-2 rounded-2xl w-1/2 bg-lightGray disabled:bg-darkGray px-4 py-[14px]"
            disabled
          />
          {formik.touched.parentId && formik.errors.parentId ? (
            <div className="text-red-500 text-sm">{formik.errors.parentId}</div>
          ) : null}
        </div>
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm text-blueGray2">
            Name
          </label>
          <input
            type="text"
            id="name"
            value={formik.values.name}
            onChange={formik.handleChange}
            className="border p-2 rounded-2xl w-1/2 bg-lightGray disabled:bg-darkGray px-4 py-[14px]"
          />
          {formik.touched.name && formik.errors.name ? (
            <div className="text-red-500 text-sm">{formik.errors.name}</div>
          ) : null}
        </div>

        <button
          type="submit"
          className="bg-arctic-blue-600 hover:bg-arctic-blue-600/90 w-1/2 text-white px-8 py-[14px] rounded-[48px] font-bold"
        >
          Save
        </button>
      </form>
    </div>
  );
};

export default AddMenuForm;
