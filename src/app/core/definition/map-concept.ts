export class MapConcept {
   public px: number;
   public py: number;
   public pz: number;

  public static fromJSON(json: Object): MapConcept {
    // TODO actual implementation must be improved with dictionary maintenance to avoid memory leak on concept creation
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
    public id: number,
    public name: string,
  ) {

  }


}
