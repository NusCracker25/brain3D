export class MapConcept {
   public px: 0;
   public py: 0;
   public pz: 0;

  public static fromJSON(json: Object): MapConcept {
    // TODO actual implementation must be improved with dictionary maintenance to avoid memory leak on concept creation
    console.log('creation d une map depuis ' + JSON.stringify(json));
    const concept = new MapConcept(
      json['uid'],
      json['name']
    );
    if ( json.hasOwnProperty('px')) {
      concept.px = json['px'];
    }
    if (json.hasOwnProperty('py') ) {
      concept.px = json['py'];
    }
    if ( json.hasOwnProperty('pz') ) {
      concept.px = json['pz'];
    }
    return concept;
  }

  constructor (
    public uid: number,
    public name: string,
  ) {

  }


}
