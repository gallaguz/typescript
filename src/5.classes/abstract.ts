// abstract class Controller {
//     abstract handle(req: any): void;
//
//     handleWithLogs(req: any): void {
//         console.log('start');
//         this.handle(req);
//         console.log('end');
//     }
// }
//
// class UserController extends Controller {
//     handle(req: any): void {
//         console.log(req);
//     }
// }
//
// const c = new UserController();
// c.handleWithLogs('req');
