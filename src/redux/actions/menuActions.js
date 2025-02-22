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

export const addMenu = (inputData, resetForm) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(`${apiUrl}/api/v1/menus`, inputData);
      console.log('add response: ', response);
      
      if (response.status === 200) {
        console.log('Menu created successfully:', response.data);
        resetForm()
        dispatch(fetchMenus());
      }
    } catch (error) {
      console.error('Error adding menu: ', error);
    }
  };
};
