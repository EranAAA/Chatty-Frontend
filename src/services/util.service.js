

export const utilService = {

   createUser
}

function createUser() {
   return {
      username: '',
      password: '',
      email: '',
      friends: [],
      msgId: [],
      isAdmin: false,
      isOnline: false,
      imgUrl: '',
   }
}
