'use strict';

interface MyUser {
    name: string;
    id: string;
    email?: string;
}
type MyUserOptionals = Partial<MyUser>;

// interface MyUserOptionals {
//     name?: string;
//     id?: string;
//     email?: string;
// }

const merge = (user: MyUser, overrides: MyUserOptionals): MyUser => {
    return {
        ...user,
        ...overrides
    };
};

const merge1 = (user: MyUser, overrides: RequiredMyUser): MyUser => {
    return {
        ...user,
        ...overrides
    };
};

console.log(
    merge(
        {
            name: 'John',
            id: '123',
            email: 'hoot.webelistics@getMaxListeners.com'
        },
        { email: 'webelistics@gmail.com' }
    )
);

console.log(
    merge1(
        {
            name: 'John',
            id: '123',
            email: 'hoot.webelistics@getMaxListeners.com'
        },
        {
            name: 'John',
            id: '123',
            email: 'hoot.webelistics@gmail.com'
        }
    )
);

type RequiredMyUser = Required<MyUser>;
// type JustEmailAndName = Pick<MyUser, 'email' | 'name'>;
