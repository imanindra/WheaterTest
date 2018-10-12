const images = {
  Clear: require('../assets/clear.png'),
  Clouds: require('../assets/cloud.png'),
  Mist: require('../assets/mist.png'),
  Fog: require('../assets/mist.png'),
  Rain: require('../assets/rain.png'),
  Drizzle: require('../assets/drizzle.png'),
  Thunderstorm: require('../assets/thunder.png')
};

export default weather => images[weather];