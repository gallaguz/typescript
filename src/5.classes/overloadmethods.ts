// class User {
//     skills: string[] = [];
//
//     addSkill(skill: string): void;
//     addSkill(skills: string[]): void;
//     addSkill(skillOrSkills?: string | string[]): void {
//         if (typeof skillOrSkills === 'string') {
//             this.skills.push(skillOrSkills);
//         }
//         if (Array.isArray(skillOrSkills)) {
//             this.skills = [...this.skills, ...skillOrSkills];
//         }
//     }
// }
//
// const user = new User();
// user.addSkill('Dev');
// user.addSkill(['Ops', 'Programmer']);
// console.log(user);
