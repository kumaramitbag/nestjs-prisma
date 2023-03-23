import { Injectable } from '@nestjs/common';
import { IUserRo } from './interface/user.interface';
import { DatabaseService } from '../database/database.service';

@Injectable()
export class UserService {
  constructor(private dbCon: DatabaseService) {}

  async getAll(): Promise<IUserRo> {
    const user = await this.dbCon.user.findMany({
      include: { shops: true, products: true },
    });
    return { success: true, message: '', data: user };
  }
}
