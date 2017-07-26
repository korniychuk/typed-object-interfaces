import { IObject } from './typed-object-interfaces';

class User {
  public name: string;
  public id: string;

  public constructor(data: IObject<User> = {}) {
  } // end constructor()

}
