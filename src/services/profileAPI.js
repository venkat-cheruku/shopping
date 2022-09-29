import axios from 'axios';

const baseURL = "https://6311c5a7f5cba498da853924.mockapi.io/vcube/api/users";

export const getUserDetailsServices = (id) =>
    axios.get(`${baseURL}/${id}`);

export const updateUserDetailsServices = (id, data) =>
    axios.put(`${baseURL}/${id}`, data);