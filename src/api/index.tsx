import axios from 'axios';

const url = 'http://localhost:3001/users';

export const fetchUser = () => axios.get(url);
export const updateUser = (id: any, updatedUser: any) => axios.patch(`${url}/${id}`, updatedUser);
