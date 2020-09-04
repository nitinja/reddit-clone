import {MikroORM} from "@mikro-orm/core";
import { __dev__ } from "./constants";
import { Post } from "./entities/Post";
import microConfig from './mikro-orm.config';

const main = async () => {
    const orm = await MikroORM.init(microConfig);
    const post =orm.em.create(Post, {title: 'test title..'});
    await orm.em.persistAndFlush(post);
}

main().catch(error => {
    console.warn(error);
});

console.log('hello ts3');
