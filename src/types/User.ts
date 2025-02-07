export enum Role {
	regular="Regular User",
	admin="Administrator"
}
export interface User {
		userId : number;
		firstName: string;
		lastName: String;
		email: string;
		role : Role;
}

export interface UserListInterface {
	users: User[];
}