import fs from 'fs';

// TODO: Define a City class with name and id properties
class City {
  name: string;
  id: string;

  constructor(name: string, id: string) {
    this.name = name;
    this.id = id;
  }
}
// TODO: Complete the HistoryService class
class HistoryService {
  // TODO: Define a read method that reads from the searchHistory.json file
  
  // read (private and async method) is defined, which will return a promise that resolves to an array of City objects.
private async read(): Promise<City[]> {
  //  creates a new Promise. Inside the promise, it uses fs.readFile to read the contents of searchHistory.json
  return new Promise((resolve, reject) => {
    fs.readFile('./searchHistory.json', 'utf8', (err, data) => {
      // If there is an error reading the file, the promise is rejected with the error
      if (err) {
        return reject(err);
      } 
      // If the file is read successfully, the data is parsed into an object. The map function is used to create an array of City objects from the parsed data, where each city object is instantiated with its name and id. The promise is resolved with the array of City objects.
     const cities = JSON.parse(data).map((city: {name:string; id:string}) => new City(city.name, city.id));
      resolve(cities);
    });
  });
}
  // TODO: Define a write method that writes the updated cities array to the searchHistory.json file
  // private async write(cities: City[]) {}

  // write (private and async) is defined, which takes an array of City objects as a parameter and returns a promise that resolves to void (no value).
   private async write(cities: City[]): Promise<void> {
// creates a new Promise. Inside the promise, it uses fs.writeFile to write the stringified version of the cities array to searchHistory.json.
    return new Promise((resolve, reject) => {
      fs.writeFile('./searchHistory.json', JSON.stringify(cities), (err) => {
        // takes err to handle any errors that may occur durind the write operation
        if (err) {
          return reject(err);
        }
        // If the file is written successfully, the promise is resolved with no value.
        resolve();
      });
    })
   }
  // TODO: Define a getCities method that reads the cities from the searchHistory.json file and returns them as an array of City objects
  // async getCities() {}

  // getCities is defined, which calls the read method and returns the result (an array of City objects).
  async getCities(): Promise<City[]> {
    return await this.read();
  }
  // TODO Define an addCity method that adds a city to the searchHistory.json file
  // async addCity(city: string) {}
  async addCity(cityName: string): Promise<void> {
    const cities = await this.getCities();
    const newCity = new City(cityName, Date.now().toString());
    cities.push(newCity);
    await this.write(cities);
  }
  // * BONUS TODO: Define a removeCity method that removes a city from the searchHistory.json file
  // async removeCity(id: string) {}
}

export default new HistoryService();
