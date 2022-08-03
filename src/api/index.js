import axios from 'axios'

const url = 'localhost://5000/posts';

export const fetchPost = async() => await axios.get(url);
export const createPost = async (newPost) => await axios.post(`${url}/create`, newPost)
export const updatePost = (id, updatedPost) => axios.patch(`${url}/${id}`, updatedPost);
export const deletePost = (id) => axios.delete(`${url}/delete/${id}`);
export const likePost = (id)=> axios.patch(`${url}/like/${id}`);