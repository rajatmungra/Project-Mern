

 const reducer = (state = [], action)=>{
    switch (action.type) {
        case 'DELETE':
            return state.filter((post)=>{return post._id !== action.payload });

        case 'UPDATE':
        case 'LIKE' :
            return state.map((post)=> action.payload._id===post._id ? action.payload : post )
        case 'FETCH_ALL':
            console.log(action.payload)
            return action.payload
        
        case 'CREATE' :
            console.log([...state , action.payload])
            return [...state , action.payload]

        default:
           return state;
    }
}

export default reducer;