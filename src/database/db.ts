import 'reflect-metadata';
import { createConnection, getConnectionOptions } from 'typeorm';

export default async () => {
  try {
    const connectionOptions = await getConnectionOptions();
    Object.assign(connectionOptions, {
      options: { encrypt: true },
      entities: ['src/entity/*.ts'],
    });
    console.log(`connecting to database: ${connectionOptions.type}...`);

    await createConnection(connectionOptions);
    console.log('database connected');
  } catch (error) {
    console.log(error);
  }
};
