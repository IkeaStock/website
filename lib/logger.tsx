class logger {
    public debug(message: any, debugEnabled: boolean): void {
        if (debugEnabled) {
            console.log(message);
            return
        } else return
    }
}
export default new logger();