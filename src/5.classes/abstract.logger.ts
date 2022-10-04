// abstract class Logger {
//     protected abstract log(message: string): void;
//
//     protected printDate(date: Date): void {
//         console.log(date.toString());
//     }
// }
//
// class MyLogger extends Logger {
//     protected log(message: string): void {
//         console.log(message);
//     }
//
//     logWithDate(message: string): void {
//         this.printDate(new Date());
//         this.log(message);
//     }
// }
//
// const logger = new MyLogger();
// logger.logWithDate('message');
