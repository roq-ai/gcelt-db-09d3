import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface TeacherInterface {
  id?: string;
  user_id?: string;
  information?: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  _count?: {};
}

export interface TeacherGetQueryInterface extends GetQueryInterface {
  id?: string;
  user_id?: string;
  information?: string;
}
