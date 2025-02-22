import * as Yup from 'yup';

export const addMenuSchema = Yup.object({
    menuId: Yup.string().required('MenuID is required'),
    name: Yup.string().required('Name is required'),
    parentId: Yup.string().required('ParentID is required'),
    depth: Yup.string().required('Depth is required')
});