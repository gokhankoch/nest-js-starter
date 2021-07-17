const CONFIG: any = {
  ENV: process.env.NODE_ENV,
  SERVER: {
    PORT: process.env.PORT,
  },
  MONGO: {
    URL: process.env.MONGODB_CONNECTION_URI,
    DEFAULT_URL: 'mongodb://localhost',    
  },
};

export default CONFIG;
