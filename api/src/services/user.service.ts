import users from "../mocks/user.mock.ts";
import type { CreateUser, User } from '../types/user.type.ts';

export function findAllUser() {
    return users;
}

export function findUserById(id: number) {
    const user = users.find(user => user.id === id);

    if (!user) 
        throw new Error (`Usuário de id ${id} não encontro`);
    
    return user;
}

export function insertUser({ name, email, password }:CreateUser) {
    const id = users[users.length -1].id + 1;

    const user: User = {
        id,
        name,
        email,
        password
    };

    users[users.length] = user;

    return user;

}