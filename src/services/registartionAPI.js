import axios from "axios";

const baseURl= 'https://6311c5a7f5cba498da853924.mockapi.io/vcube/api/users';

const registrationService=(data) =>{ 
     return axios.post(baseURl,data);
}
export default registrationService;