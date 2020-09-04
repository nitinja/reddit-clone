import { __dev__ } from './constants';
import { Post } from './entities/Post';
import { MikroORM } from '@mikro-orm/core';

export default {
  migrations: {

  },
  entities: [Post],
  dbName: 'myreddit',
  type: 'postgresql',
  qwqwe: '',
  debug: __dev__,
} as Parameters<typeof MikroORM.init>[0];
