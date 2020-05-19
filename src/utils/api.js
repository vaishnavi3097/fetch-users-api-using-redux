import axios from 'axios';
import baseurl from './baseurl';

export function getAllUsers(){
    return axios.get(`${baseurl}/users`)
}
