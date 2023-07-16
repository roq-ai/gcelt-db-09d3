import axios from 'axios';
import queryString from 'query-string';
import { CollegeInterface, CollegeGetQueryInterface } from 'interfaces/college';
import { GetQueryInterface } from '../../interfaces';

export const getColleges = async (query?: CollegeGetQueryInterface) => {
  const response = await axios.get(`/api/colleges${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const createCollege = async (college: CollegeInterface) => {
  const response = await axios.post('/api/colleges', college);
  return response.data;
};

export const updateCollegeById = async (id: string, college: CollegeInterface) => {
  const response = await axios.put(`/api/colleges/${id}`, college);
  return response.data;
};

export const getCollegeById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/colleges/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteCollegeById = async (id: string) => {
  const response = await axios.delete(`/api/colleges/${id}`);
  return response.data;
};
