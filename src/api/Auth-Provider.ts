interface IAuthProvider{
    isAuthenticated: boolean;
    userName?: string|null;

    signin(userName: string): Promise<void>;

    signout(): Promise<void>;

}

export const AuthProvider: IAuthProvider = {
    userName: null,
    isAuthenticated: false,
    signin: function (userName: string): Promise<void> {
        this.isAuthenticated=true;
        this.userName = userName;
        return Promise.resolve();
    },
    signout: function (): Promise<void> {
        this.isAuthenticated=false;
        this.userName = null;
        return Promise.resolve();
    }
}