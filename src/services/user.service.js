
export const userService = {
    getUsers,
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
            msgId: ['msg101'],
            isAdmin: false,
            profileImg:'',
            isOnline: false,
            imgUrl: "https://res.cloudinary.com/dcbbqlssh/image/upload/v1657190502/de4ec514-64fb-48c3-85a5-e02a5a5238da_xayfuq.webp",    
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
            msgId: ['msg101', 'msg102'],
            isAdmin: true,
            isOnline: false,
            imgUrl: "https://res.cloudinary.com/dcbbqlssh/image/upload/v1657190166/66171d9a-52b4-456b-a26f-c142ba33913a_efj8y1.webp",

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
            msgId: ['msg102'],
            isAdmin: false,
            isOnline: false,
            imgUrl: "https://res.cloudinary.com/dcbbqlssh/image/upload/v1657190455/c6714639-3d34-4a5a-9739-3a72597ae4ec_ud5587.webp",

        },
    ]
}


      
       
     