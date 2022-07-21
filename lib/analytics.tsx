import { analytics } from '@ikeastock/analytics';
import { configENV } from './configEnv';
export default new analytics({
    port: configENV('redis_port'),
    host: configENV('redis_host'),
    username: configENV('redis_username'),
    password: configENV('redis_password'),
});