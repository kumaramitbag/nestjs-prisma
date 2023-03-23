import { UserEntity } from '../entity/user.entity';

export interface IUserRo {
  success: boolean;
  message: string;
  data: UserEntity[];
}
