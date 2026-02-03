import type {WeatherData} from "../types/weather";

export async function mockWeather() : Promise<WeatherData>
{
    const sleep = (ms : number) => new Promise(resolve => setTimeout(resolve, ms));
    const now = new Date()
    const weatherData : WeatherData = {
        location : {
            name: "Warsaw",
            latitude: 52.23,
            longitude: 21.01,
        },
        currentWeather : {
            time: now,
            temperature: 24,
            windSpeed: 30,
            weatherCode: 5
        }, 
        hourlyForecast : {
            time: [now, new Date(now.getTime() + 60 * 60 * 1000)],
            temperature: [24, 17],
        },
        dailyForecast : {
            date: [now, new Date(now.getTime() + 24 * 60 * 60 * 1000)],
            tempMin: [0, 2],
            tempMax: [10,12]
        }
    };
    await sleep(2000);
    return weatherData;
}   