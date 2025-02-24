import axios from 'axios';

const apiUrl = process.env.NEXT_PUBLIC_API_URL;

export const setMenus = (data) => ({
  type: 'SET_MENUS',
  payload: data
});

export const fetchMenus = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`${apiUrl}/api/v1/menus`);

      if (response.status === 200) {
        console.log('Menus fetched: ', response.data);

        dispatch(setMenus(response.data));
      }
    } catch (error) {
      console.error('Error fetching menus: ', error);
    }
  };
};

export const addMenu = (inputData, resetForm, setSelectedMenu, setLoading) => {
  console.log('addMenu input: ', inputData);
  return async (dispatch) => {
    try {
      const response = await axios.post(`${apiUrl}/api/v1/menus`, inputData);
      console.log('add response: ', response);
      
      if (response.status === 200) {
        console.log('Menu created successfully:', response.data);
        setLoading(false)
        resetForm()
        setSelectedMenu(null)
        dispatch(fetchMenus());
      }
    } catch (error) {
      console.error('Error adding menu: ', error);
    }
  };
};

export const updateMenu = (inputData, resetForm, setSelectedMenu, setLoading) => {
  console.log('updateMenu input: ', inputData);

  return async (dispatch) => {
    try {
      const response = await axios.put(`${apiUrl}/api/v1/menus/${inputData?.id}`, inputData);
      console.log('update response: ', response);
      
      if (response.status === 200) {
        console.log('Menu updated successfully:', response.data);
        setLoading(false);
        resetForm();
        setSelectedMenu(null);
        dispatch(fetchMenus());
      }
    } catch (error) {
      console.error('Error updating menu: ', error);
    }
  };
};

export const deleteMenu = (menuId) => {
  console.log('input menuId: ', menuId)
  return async (dispatch) => {
    try {
      const response = await axios.delete(`${apiUrl}/api/v1/menus/${menuId}`);
      console.log('Delete response: ', response);

      if (response.status === 200) {
        console.log('Menu deleted successfully:', response.data);
        dispatch(fetchMenus());
      }
    } catch (error) {
      console.error('Error deleting menu: ', error);
    }
  };
};
