export class User {
   id: number;

   username: string;

   email: string;

  // isAnonym: boolean;
  password: string;

  public static fromJSON(json: Object): User{
    return new User(
      json['uid'],
      json['username'],
      json['mail']
    );
  }

  constructor (
    public id: number,
    public username: string,
    public email: string
  ){

  }
}
