// interface IRole {
//     name: string;
// }
// interface IPermission {
//     endDate: Date;
// }
// interface IUser {
//     name: string;
//     roles: IRole[];
//     permission: IPermission;
// }
// const user: IUser = {
//     name: 'Vasya',
//     roles: [],
//     permission: {
//         endDate: new Date(),
//     },
// };
// const nameUser = user['name'];
// const roleName = 'roles';
//
// type roleType = IUser['roles'];
// // Для обращения по переменной
// type roleType2 = IUser[typeof roleName];
//
// type RoleType = IUser['roles'][number];
// type DateType = IUser['permission']['endDate'];
//
// const roles = ['admin', 'user', 'super-user'] as const;
// type roleTypes = typeof roles[number];
