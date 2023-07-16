import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface StaffMemberInterface {
  id?: string;
  user_id?: string;
  notices?: string;
  programs?: string;
  activities?: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  _count?: {};
}

export interface StaffMemberGetQueryInterface extends GetQueryInterface {
  id?: string;
  user_id?: string;
  notices?: string;
  programs?: string;
  activities?: string;
}
