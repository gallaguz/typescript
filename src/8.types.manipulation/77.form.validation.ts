// interface IForm {
//     name: string;
//     password: string;
// }
//
// type PropertyType =
//     | {
//     isValid: true;
// }
//     | {
//     isValid: false;
//     errorMessage: string;
// };
//
// type Validation<Type> = {
//     [Property in keyof Type]+?: PropertyType;
// };
//
// const form: IForm = {
//     name: 'Vasya',
//     password: 'password',
// };
//
// const formValidation: Validation<IForm> = {
//     name: { isValid: true },
//     password: {
//         isValid: false,
//         errorMessage: 'Must be more them 5 char length',
//     },
// };
