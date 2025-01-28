import { Router } from 'express';
import HistoryService from 'server/src/service/historyService.js'
import WeatherService from 'server/src/service/weatherService.js'
// import HistoryService from '../../service/historyService.js';
// import WeatherService from '../../service/weatherService.js';

const router = Router();

// TODO: POST Request with city name to retrieve weather data
router.post('/', (req, res) => {
  // TODO: GET weather data from city name
  const cityName= req.body.city; 

  if (!cityName) {
    return res.status(400).json({message: 'City name is required'});
  }

  try {
    // calls weatherService to get weather data
    const weatherData = await WeatherService.getWeatherByCity(cityName);
    
  }
  // TODO: save city to search history
  await WeatherService.saveCity(cityName);
});

// TODO: GET search history
router.get('/history', async (req, res) => {

});

// * BONUS TODO: DELETE city from search history
router.delete('/history/:id', async (req, res) => {

});

export default router;
