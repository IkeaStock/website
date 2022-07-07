class logger {
    public debug(message: any, debugEnabled: string): void {
        if (debugEnabled == "true") {
            console.log(message);
            return
        } else return
    }
}
export default new logger();