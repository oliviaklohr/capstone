const variableDefaults = {
  // API_URL: 'http://localhost:8080', // TODO: only used for local development
  API_URL: 'http://ec2-52-202-10-230.compute-1.amazonaws.com:8080',
};

const developmentEnvirons = {
  ...variableDefaults,
};

const prodEnvirons = {
  ...variableDefaults,
};

const environs = process.env.NODE_ENV === 'development'
  ? developmentEnvirons
  : prodEnvirons;

export default {
  ...environs,
}
