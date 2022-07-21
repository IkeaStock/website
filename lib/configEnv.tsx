type ENV = "redis_host" | "redis_port" | "redis_password" | "redis_db" | "redis_username";
export function configENV(key: ENV) {
    const upper = key.toUpperCase();
    const env: any = process.env[upper];
    return env  
}