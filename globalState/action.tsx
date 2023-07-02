import { dataType } from "../components/Home"

export const SET_STATE = 'SET_STATE'
export const SET_TITLE = 'SET_TITLE'
export const SET_CONTENT = 'SET_CONTENT'
export const SET_IMAGE = 'SET_IMAGE'
export const SET_POSTS = 'SET_POSTS'

export type ACTIONTYPE ={
    type: string,
    payload?: string,
    array?: dataType[]
}


export const setState = (payload : string) : ACTIONTYPE=>{
    return {
        type: SET_STATE,
        payload: payload,
    }
}
export const setTitle = (payload : string) : ACTIONTYPE=>{
    return {
        type: SET_TITLE,
        payload: payload,
    }
}
export const setContent = (payload : string) : ACTIONTYPE=>{
    return {
        type: SET_CONTENT,
        payload: payload,
    }
}
export const setImage = (payload : string) : ACTIONTYPE=>{
    return {
        type: SET_IMAGE,
        payload: payload,
    }
}
export const setPosts = (post : dataType[]): ACTIONTYPE =>{
    return {
        type: SET_POSTS,
        array: [...post]
    }
}