/* @flow */

export type HourlyData = {
  apparentTemperature: number,
  cloudCover: number,
  dewPoint: number,
  humidity: number,
  icon: string,
  ozone: number,
  precipIntensity: number,
  precipProbability: number,
  precipType: string,
  pressure: number,
  summary: string,
  temperature: number,
  time: number,
  uvIndex: number,
  visibility: number,
  windBearing: number,
  windGust: number,
  windSpeed: number,
};

export type CurrentlyData = {
  apparentTemperature: number,
  cloudCover: number,
  dewPoint: number,
  humidity: number,
  icon: string,
  nearestStormBearing: number,
  nearestStormDistance: number,
  ozone: number,
  precipIntensity: number,
  precipProbability: number,
  pressure: number,
  summary: string,
  temperature: number,
  time: number,
  uvIndex: number,
  visibility: number,
  windBearing: number,
  windGust: number,
  windSpeed: number,
};

export type DailyData = {
  apparentTemperatureHigh: number,
  apparentTemperatureHighTime: number,
  apparentTemperatureLow: number,
  apparentTemperatureLowTime: number,
  apparentTemperatureMax: number,
  apparentTemperatureMaxTime: number,
  apparentTemperatureMin: number,
  apparentTemperatureMinTime: number,
  cloudCover: number,
  dewPoint: number,
  humidity: number,
  icon: string,
  moonPhase: number,
  ozone: number,
  precipIntensity: number,
  precipIntensityMax: number,
  precipIntensityMaxTime: number,
  precipProbability: number,
  precipType: string,
  pressure: number,
  summary: string,
  sunriseTime: number,
  sunsetTime: number,
  temperatureHigh: number,
  temperatureHighTime: number,
  temperatureLow: number,
  temperatureLowTime: number,
  temperatureMax: number,
  temperatureMaxTime: number,
  temperatureMin: number,
  temperatureMinTime: number,
  time: number,
  uvIndex: number,
  uvIndexTime: number,
  visibility: number,
  windBearing: number,
  windGust: number,
  windGustTime: number,
  windSpeed: number,
};

export type LocationData = {
  accuracy: number,
  altitude: number,
  altitudeAccuracy: number,
  heading: number,
  latitude: number,
  longitude: number,
  speed: number,
};

export type WeatherData = {
  currently: CurrentlyData,
  daily: {
    data: DailyData,
  },
  flags: {
    sources: string[],
    units: String,
  },
  hourly: HourlyData[],
  latitude: number,
  longitude: number,
  offset: number,
  timezone: string,
};

export type AppState = {
  fetching: boolean,
  fetchingLocation: boolean,
  weatherData: WeatherData | {},
  locationData: LocationData | {},
  error: string,
};
