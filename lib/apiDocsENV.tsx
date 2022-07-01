type ENV = "API_ENABLED" | "api_enabled";
export function apiDocsENV(key: ENV) {
    const upper = key.toUpperCase();
    const env: any = process.env[upper];
    return env  
}