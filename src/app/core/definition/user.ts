import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';

export class User {
  // isAnonym: boolean;
  // password: string;
  preferences: {
    navigation: 'map';
    style: 'default'
  };

  id: {
    firstName: string,
    familyName: string,
    birthday: Date,
    avatar: string,
    gender: number
  };

  address: {
    street: string,
    zipCode: number,
    city: string,
    country: string,
    phone: '000-000-000-00'
  };

  rbac: {
    plan: {
      type: 1,
      endsBy: Date
    },
    role: 'GUEST'
  };

  public static fromJSON(json: Object): User {
    const user = new User(json['uid'], json['username'], json['email']);
    if (json.hasOwnProperty('preferences')) {
      user.setPreferencesFromJSON(json['preferences']);
    }
    console.log('user preferences ' + user.preferences.navigation);
    return user;
  }

  constructor(
    public uid: number,
    public username: string,
    public email: string
  ) {
    this.preferences = {
      navigation: 'map',
      style: 'default'
    };
  }

  setPreferencesFromJSON(json: Object) {
    if (json.hasOwnProperty('navigation')) {
      console.log('has navigation prop ' + json['navigation']);
      this.preferences.navigation = json['navigation'];
    } else {
      this.preferences.navigation = 'map';
    }
  }

}
