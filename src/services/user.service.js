
export const userService = {
    getUsers
}

function getUsers() {
    return [
        {
            _id: 101,
            username: 'ronen',
            password: 'r123',
            email: 'ronenberger@gmail.com',
            friends: [{
                _id: 102,
                fullName: 'orgeva'
            }],
            isAdmin: false
        },
        {
            _id: 102,
            username: 'or',
            password: 'o123',
            email: 'orgeva@gmail.com',
            friends: [{
                _id: 101,
                fullName: 'ronenberger'
            }],
            isAdmin: true
        },
        {
            _id: 103,
            username: 'noga',
            password: 'n123',
            email: 'nogashalev@gmail.com',
            friends: [
                {
                    _id: 101,
                    fullName: 'orgeva'
                },
                {
                    _id: 102,
                    fullName: 'ronenberger'
                }
            ],
            isAdmin: false
        },
    ]
}


