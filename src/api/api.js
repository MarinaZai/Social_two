import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': "83f1fbd7-4b11-451f-ac92-128cd4eeb16e"
    }
})


export const usersAPI = {
    getUsers(currentPage=1,pageSize=10) {
        return  instance.get
        (`users?page=${currentPage}&count=${pageSize}`,)
          .then(response => {
              return response.data
             })
     },
     follow(userId) {
        return instance.post(
          `follow/${userId}`
        )
     },
     unfollow(userId) {
        return instance.delete(
          `follow/${userId}`,
        )
     }
}


/* 
export const getUnfollow = (currentPage=1,pageSize=10) => {
    return  instance.delete
    (`users?page=${currentPage}&count=${pageSize}`,)
      .then(response => {
          return response.data
         })
 }
 
 
export const postFollow = (currentPage=1,pageSize=10) => {
    return  instance.post
    (`users?page=${currentPage}&count=${pageSize}`,)
      .then(response => {
          return response.data
         })
 }
 */