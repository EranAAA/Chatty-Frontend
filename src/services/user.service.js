import { httpService } from './http.service'
const axios = require('axios').default;

export const userService = {
   login,
   logout,
   signup,
   getLoggedinUser,
   userQuery,
   remove,
   addToCart,
   getUsers,
   createUser
}

// Get loged user from sessionStorage
function getLoggedinUser() {
   const user = JSON.parse(sessionStorage.getItem('loggedinUser'))
   return user
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

async function getUsers() {
   try {
      return await httpService.get(`user`)
   } catch (err) {
      console.log('cant user query');
      throw err
   }
}

// Request (Rest:POST) login
async function login(credentials) {
   // waiting from the user if success to login
   try {
      const user = await httpService.post(`auth/login`, credentials)
      sessionStorage.setItem('loggedinUser', JSON.stringify(user))
      return user
   } catch (err) {
      console.log('cant login');
      throw err
   }
}

// Request (Rest:POST) signup
async function signup(credentials) {
   // waiting from the user if success to login
   try {
      const user = await httpService.post(`auth/signup`, credentials)
      sessionStorage.setItem('loggedinUser', JSON.stringify(user))
      return user
   } catch (err) {
      console.log('cant signup');
      throw err
   }
}

// Request (Rest:POST) logout
async function logout() {
   try {
      await httpService.post(`auth/logout`)
      sessionStorage.removeItem('loggedinUser')
   } catch (err) {
      console.log('cant delete user');
      throw err
   }
}

async function userQuery() {
   try {
      return await httpService.get(`users`)
   } catch (err) {
      console.log('cant user query');
      throw err
   }
}

async function remove(userId) {
   try {
      return await httpService.delete(`users/${userId}`)
   } catch (err) {
      console.log('cant delete user');
      throw err
   }
}

async function addToCart(cart) {
   try {
      return await httpService.put(`cart/`, cart)
   } catch (err) {
      console.log('cant add to cart');
      throw err
   }
}




