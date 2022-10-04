export namespace StrategyExample {
    //

    export class User {
        githubToken: string;
        jwtToken: string;
    }

    export interface AuthStrategy {
        auth(user: User): boolean;
    }

    export class Auth {
        constructor(private strategy: AuthStrategy) {}

        setStrategy(strategy: AuthStrategy): void {
            this.strategy = strategy;
        }

        public authUser(user: User): boolean {
            return this.strategy.auth(user);
        }
    }

    export class JWTStrategy implements AuthStrategy {
        auth(user: StrategyExample.User): boolean {
            if (user.jwtToken) {
                // Some API logic
                // Verification
                console.log(`Verification success`);
                return true;
            }
            console.log(`Verification failed`);
            return false;
        }
    }

    export class GithubStrategy implements AuthStrategy {
        auth(user: StrategyExample.User): boolean {
            if (user.githubToken) {
                // Some API logic
                // Verification
                console.log(`Verification success`);
                return true;
            }
            console.log(`Verification failed`);
            return false;
        }
    }

    export const execute = (): void => {
        console.log(`\n--- Start: Strategy ---\n`);

        const user = new User();
        user.jwtToken = 'JWTToken';
        const auth = new Auth(new JWTStrategy());
        console.log(auth.authUser(user)); // true - because user has JWTToken
        auth.setStrategy(new GithubStrategy());
        console.log(auth.authUser(user)); // false - because has no GithubToken
        user.githubToken = 'GithubToken';
        console.log(auth.authUser(user)); // true - because user has GithubToken

        console.log(`\n--- End: Strategy ---\n`);
    };
}
