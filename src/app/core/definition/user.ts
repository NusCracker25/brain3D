import { connectableObservableDescriptor } from "rxjs/internal/observable/ConnectableObservable";

export class User {
  // isAnonym: boolean;
  // password: string;
  preferences: {
    navigation: string;
  };

  public static fromJSON(json: Object): User {
    const user = new User(json['uid'], json['username'], json['email']);
    if (json.hasOwnProperty('preferences')) {
      user.setPreferencesFromJSON(json['preferences']);
    }
    console.log('user preferences '+user.preferences.navigation);
    return user;
  }

  constructor(
    public id: number,
    public username: string,
    public email: string
  ) {
    this.preferences = {
      navigation: 'orbit'
    };
  }

  setPreferencesFromJSON(json: Object) {
    if (json.hasOwnProperty('navigation')) {
      console.log('has navigation prop ' + json['navigation']);
      this.preferences.navigation = json['navigation'];
    } else {
      this.preferences.navigation = 'orbit';
    }
  }

}
