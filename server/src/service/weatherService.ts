import dotenv from 'dotenv';
dotenv.config();

// TODO: Define an interface for the Coordinates object
interface Coordinates {
  latitude: number;
  longitude: number;
}
// TODO: Define a class for the Weather object
class Weather {
// city, date, icon, iconDescription, tempF, windSpeed, humidity
city: string;
date: string;
icon: string;
iconDescription: string;
tempF: number;
windSpeed: number;
humidity: number;

}
// TODO: Complete the WeatherService class
class WeatherService {
  // TODO: Define the baseURL, API key, and city name properties
private baseURL: string= process.env.API_BASE_URL;
private apiKey:  string= process.env.API_KEY;
private cityName: string = '';
 // TODO: Create fetchLocationData method
  // private async fetchLocationData(query: string) {}
private async fetchLocationData(query:string){
  
}
  // TODO: Create destructureLocationData method
  // private destructureLocationData(locationData: Coordinates): Coordinates {}
private destructureLocationData(LocationData: Coordinates): Coordinates{

}
  // TODO: Create buildGeocodeQuery method
  // private buildGeocodeQuery(): string {}
private buildGeocodeQuery(): string {

}
  // TODO: Create buildWeatherQuery method
  // private buildWeatherQuery(coordinates: Coordinates): string {}
private buildWeatherQuery(coordinates: Coordinates): string {

}
  // TODO: Create fetchAndDestructureLocationData method
  // private async fetchAndDestructureLocationData() {}
  private async fetchAndDestructureLocationData(){

  }
  // TODO: Create fetchWeatherData method
  // private async fetchWeatherData(coordinates: Coordinates) {}
  private async fetchWeatherData(coordinates: Coordinates) {

}
  // TODO: Build parseCurrentWeather method
  // private parseCurrentWeather(response: any) {}
  private parseCurrentWeather(response: any) {

  }
  // TODO: Complete buildForecastArray method
  // private buildForecastArray(currentWeather: Weather, weatherData: any[]) {}
  private buildForecastArray(currentWeather: Weather, weatherData: any[]){

  }
  // TODO: Complete getWeatherForCity method
  // async getWeatherForCity(city: string) {}
  async getWeatherForCity(city: string) {

  }
}

export default new WeatherService();
