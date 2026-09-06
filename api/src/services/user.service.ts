import users from "../mocks/user.mock.ts";

export function findAllUser() {
    return users;
}

export function findUserById(id: number) {
    const user = users.find(user => user.id === id);

    if (!user) 
        throw new Error (`Usuário de id ${id} não encontro`);
    
    return user;



}