import { MongooseModule } from '@nestjs/mongoose';
import CONFIG from '../config/default';

export const DB = () => {
  if (process.env.NODE_ENV !== 'test') {
    return [
      MongooseModule.forRoot(CONFIG.MONGO.URL || CONFIG.MONGO.DEFAULT_URL , {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true,
      }),
    ];
  } else {
    return [];
  }
};
