import axios from 'axios';
import queryString from 'query-string';
import { StaffMemberInterface, StaffMemberGetQueryInterface } from 'interfaces/staff-member';
import { GetQueryInterface } from '../../interfaces';

export const getStaffMembers = async (query?: StaffMemberGetQueryInterface) => {
  const response = await axios.get(`/api/staff-members${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const createStaffMember = async (staffMember: StaffMemberInterface) => {
  const response = await axios.post('/api/staff-members', staffMember);
  return response.data;
};

export const updateStaffMemberById = async (id: string, staffMember: StaffMemberInterface) => {
  const response = await axios.put(`/api/staff-members/${id}`, staffMember);
  return response.data;
};

export const getStaffMemberById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/staff-members/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteStaffMemberById = async (id: string) => {
  const response = await axios.delete(`/api/staff-members/${id}`);
  return response.data;
};
