class Flavor {
  id: number; // Cambiar el tipo de id a number
  title: string;
  pictureUrl: string;
  constructor(id: number, title: string, pictureUrl: string) { // Cambiar el tipo de id aquí también
    this.id = id;
    this.title = title;
    this.pictureUrl = pictureUrl;
  }
}

export default Flavor;