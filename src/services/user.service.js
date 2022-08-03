
export const userService = {
    getUsers
}

function getUsers() {
    return [
        {
            _id: 101,
            username: 'ronen',
            fullName: 'ronenberger',
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
            fullName: 'orgeva',
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
            fullName: 'nogashalev',
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


