import bcrypt from 'bcryptjs';

const users=[
    { 
        email:'admin@email.com',
        password: bcrypt.hashSync('123456',10),
    },
    {
        email: 'jhon@email.com',
        password: bcrypt.hashSync('123456', 10),
    },
    {
        email: 'jane@email.com',
        password: bcrypt.hashSync('123456', 10),
    }
]

export default users;