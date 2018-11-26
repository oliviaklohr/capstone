const variableDefaults = {
  API_URL: 'http://localhost:8080',
  // API_URL: 'http://192.168.1.166:8080',
};

const developmentEnvirons = {
  ...variableDefaults,
};

const prodEnvirons = {
  ...variableDefaults,
  // API_URL          // TODO: UPDATE THIS TO BE THE TRUE DB PATH
};

const environs = process.env.NODE_ENV === 'development'
  ? developmentEnvirons
  : prodEnvirons;

export default {
  ...environs,
}
