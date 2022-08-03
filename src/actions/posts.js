import * as api from '../api';


export const getPosts = ()=> async (dispatch) => {
    try {
        const {data} = await api.fetchPost();
        console.log(data);
        dispatch({type:'FETCH_ALL' ,payload:data })
        console.log('End')
        
    } catch (error) {
        console.log(error);
    }
}

export const createPost = (post) => async (dispatch)=>{
    try{
        const {data} = await api.createPost(post);
        // console.log(data);
        dispatch({type:'CREATE' , payload: data})
    }
    catch(error){
        console.log(error.message);
    }
}

export const updatePost = (currentId , postData) => async(dispatch) => {
        try {
            const {data} = await api.updatePost(currentId, postData);;
            console.log('Update');
            dispatch({type:'UPDATE' , payload:data});
        } catch (error) {
            console.log(error);
        }
}

export const deletePost = (id) =>async(dispatch)=>{
    try {
        await api.deletePost(id);
        console.log('deleted');
        dispatch({type:'DELETE', payload:id});
    } catch (error) {
        console.log(error);
    }
}

export const likePost = (id) => async (dispatch)=>{
    try {
        const {data} = await api.likePost(id);
        console.log(data);
        dispatch({type:'LIKE', payload:data});
    } catch (error) {
        console.log(error)
    }
}