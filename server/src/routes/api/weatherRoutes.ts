import { type Request, type Response } from 'express';
import HistoryService from '../../service/historyService.js';
import WeatherService from '../../service/weatherService.js';

const router = express.Router();
const weatherService = new WeatherService();

// TODO: POST Request with city name to retrieve weather data
router.post('/', async (req, res) => {
  // TODO: GET weather data from city name
  const cityName= req.body.city; 

  if (!cityName) {
    res.status(400).json({message: 'City name is required'});
    return;
  }

  try {
    // calls weatherService to get weather data
    const weatherData = await WeatherService.getWeatherForCity(cityName);
    
  // TODO: save city to search history
  await HistoryService.addCity(cityName); 
  res.status(200).json(weatherData);
  } catch (error) {
    console.error('Error fetching weather data:', error);
    res.status(500).json({error: 'Failed to fetch weather data'});
  }
});

// TODO: GET search history
interface City {
  id: string;
  name: string;
} 
interface ErrorResponse{
  error: string;
}

router.get('/history', async (req, res): Promise<void> => {

try {
  const cities: City[] = await HistoryService.getCities();
 
res.status(200).json(cities);
} catch (error) {
  console.error('Error fetching search history:', error);

  const errorResponse: ErrorResponse = { error: 'Failed to fetch search history'}
  res.status(500).json(errorResponse);
}
});

// * BONUS TODO: DELETE city from search history
router.delete('/history/:id', async (req, res) => {

});

export default router;
