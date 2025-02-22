import { addMenu, updateMenu } from "@/redux/actions/menuActions";
import { addMenuSchema } from "@/validations/validations";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";

const AddMenuForm = ({ selectedMenu, setSelectedMenu }) => {
  console.log('selectedMenu: ', selectedMenu)
  const dispatch = useDispatch();

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      id: selectedMenu?.id || '',
      name: selectedMenu?.isUpdate ? selectedMenu?.name : '',
      parentName: selectedMenu?.isUpdate ? selectedMenu?.parentName : selectedMenu?.name,
      parentId: selectedMenu?.isUpdate ? selectedMenu?.parentId : selectedMenu?.id,
      depth: selectedMenu?.isUpdate ? selectedMenu?.depth : selectedMenu?.depth,
    },
    validationSchema: addMenuSchema,
    onSubmit: async (values, { resetForm }) => {
      if(selectedMenu?.isUpdate){
        dispatch(updateMenu(values, resetForm, setSelectedMenu))
      } else {
        const { id, ...addValues } = values;
        dispatch(addMenu(addValues, resetForm, setSelectedMenu))
      }
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
            value={formik.values.id}
            onChange={formik.handleChange}
            className="border p-2 rounded-2xl w-full bg-lightGray disabled:bg-darkGray px-4 py-[14px]"
            disabled
          />
          {formik.touched.parentId && formik.errors.parentId ? (
            <div className="text-red-500 text-sm">{formik.errors.parentId}</div>
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
            value={formik.values.parentName}
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
          {selectedMenu?.isUpdate ? 'Update' : 'Save'}
        </button>
      </form>
    </div>
  );
};

export default AddMenuForm;
