import rain from '../assets/icons/rain.svg';
import drizzle from '../assets/icons/drizzle.svg';
import thunderstorm from '../assets/icons/thunderstorm.svg';
import snow from '../assets/icons/snow.svg';
import atmosphere from '../assets/icons/atmosphere.svg';
import clear from '../assets/icons/clear.svg';
import fewclouds from '../assets/icons/fewclouds.svg';
import cloudy from '../assets/icons/fewclouds.svg';
import brkclouds from '../assets/icons/brkclouds.svg';
import overclouds from '../assets/icons/overclouds.svg';

const drizzleW = {
  drizzleI: [300, 301, 302, 310, 311, 312, 313, 314, 321],
  icon: drizzle,
};

const thunderstormW = {
  thunderstormI: [200, 201, 202, 210, 211, 212, 221, 230, 231, 232],
  icon: thunderstorm,
};

const rainW = {
  rainI: [500, 501, 502, 503, 504, 511, 520, 521, 522, 531],
  icon: rain,
};

const snowW = {
  snowI: [600, 601, 602, 611, 612, 613, 615, 616, 620, 621, 622],
  icon: snow,
};

const atmosphereW = {
  atmosphereI: [701, 711, 721, 731, 741, 751, 761, 762, 771, 781],
  icon: atmosphere,
};

const clearW = {
  clearI: [800],
  icon: clear,
};

const fewcloudsW = {
  fewcloudsI: [801],
  icon: fewclouds,
};

const cloudsW = {
  cloudsI: [802],
  icon: cloudy,
};

const brkcloudsW = {
  brkcloudsI: [803],
  icon: brkclouds,
};

const overCloudsW = {
  overCloudsI: [804],
  icon: overclouds,
};
const getIcon = (id: number) => {
  if (thunderstormW.thunderstormI.includes(id)) {
    return thunderstormW.icon;
  } else if (drizzleW.drizzleI.includes(id)) {
    return drizzleW.icon;
  } else if (rainW.rainI.includes(id)) {
    return rainW.icon;
  } else if (snowW.snowI.includes(id)) {
    return snowW.icon;
  } else if (atmosphereW.atmosphereI.includes(id)) {
    return atmosphereW.icon;
  } else if (clearW.clearI.includes(id)) {
    return clearW.icon;
  } else if (fewcloudsW.fewcloudsI.includes(id)) {
    return fewcloudsW.icon;
  } else if (cloudsW.cloudsI.includes(id)) {
    return cloudsW.icon;
  } else if (brkcloudsW.brkcloudsI.includes(id)) {
    return brkcloudsW.icon;
  } else if (overCloudsW.overCloudsI.includes(id)) {
    return overCloudsW.icon;
  }
};

export default getIcon;
