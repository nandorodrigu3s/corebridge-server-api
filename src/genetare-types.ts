import { NestFactory } from '@nestjs/core';
import {
  GraphQLSchemaBuilderModule,
  GraphQLSchemaFactory,
} from '@nestjs/graphql';
import { printSchema } from 'graphql';
import { UserResolver } from './modules/user/datasource/graphql/resolver/user.resolver';
import * as fs from 'fs';
import { promisify } from 'util';
import { AuthResolver } from './modules/auth/datasource/graphql/resolver/auth.resolver';
import { CartResolver } from './modules/cart/datasource/graphql/resolver/cart.resolver.graphql';

const checkIfFileOrDirectoryExists = (path: string): boolean => {
  return fs.existsSync(path);
};

const createFile = async (
  path: string,
  fileName: string,
  data: any,
): Promise<void> => {
  if (!checkIfFileOrDirectoryExists(path)) {
    fs.mkdirSync(path);
  }

  const writeFile = promisify(fs.writeFile);

  return await writeFile(`${path}/${fileName}`, data, 'utf8');
};

async function generateSchema() {
  const app = await NestFactory.create(GraphQLSchemaBuilderModule);
  await app.init();

  const gqlSchemaFactory = app.get(GraphQLSchemaFactory);
  const schema = await gqlSchemaFactory.create([
    AuthResolver,
    UserResolver,
    CartResolver,
  ]);
  console.log(printSchema(schema));
  await createFile(
    './src/graphql/app-schema',
    'schema.gql',
    printSchema(schema),
  );
}
setTimeout(async () => {
  await generateSchema();
}, 500);
