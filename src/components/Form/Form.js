
import useStyles from './style'
import { TextField,Button , Typography, Paper } from '@material-ui/core';
import { useEffect, useState } from 'react';
import FileBase from 'react-file-base64'
import {useDispatch, useSelector} from 'react-redux';
import { createPost , updatePost } from '../../actions/posts';


const Form = ({currentId , setCurrentId})=>{
    const classes = useStyles();
    const dispatch = useDispatch();
    const post = useSelector((state)=> currentId ? state.reducer.find((p)=>p._id === currentId ) : null);

    const [postData, setpostData] = useState({
        creator:'', title:'', message:'' , tags:'' , selectedFile:''
    })

    useEffect(()=> {
        if(post) setpostData(post)
    }, [post,currentId])

    const handleSubmit =(e)=>{
        e.preventDefault();

        if(currentId){
            dispatch(updatePost(currentId , postData))
        }
        else{

            dispatch(createPost(postData));
        }
        setCurrentId(null);
        clear();
        // console.log(postData);
    }

    const clear = (e)=>{
        setpostData({creator:'', title:'', message:'' , tags:'' , selectedFile:''})
    }
    
    return(
        <Paper className={classes.paper}>
            <form autoComplete='off' noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
                <Typography variant='h6'>
                    {currentId ? 'Editing': 'Creating'} a Memory
                </Typography>
                <TextField name="creator" value={postData.creator} variant='outlined' label='Creator' fullWidth onChange={(e)=> setpostData({...postData,creator: e.target.value})}/>

                <TextField name="title" variant='outlined' label='Title' fullWidth value={postData.title} onChange={(e)=> setpostData({...postData,title: e.target.value})}/>

                <TextField name="message" variant='outlined' label='Message' fullWidth value={postData.message} onChange={(e)=> setpostData({...postData,message: e.target.value})}/>

                <TextField name="tags" variant='outlined' label='Tags' fullWidth value={postData.tags} onChange={(e)=> setpostData({...postData,tags: e.target.value.split(',')})}/>
                
                <div className={classes.fileInput}>
                    <FileBase type='file' multiple={false} onDone={ ({base64})=> setpostData( {...postData ,  selectedFile : base64 })}
                    />
                </div>

                <Button className={classes.buttonSubmit} variant="contained" color='primary' backgroundColor='blue' size='large' type='submit' fullWidth  >Submit</Button>


                <Button className={classes.buttonSubmit} variant="contained" color='secondary' size='small' onClick={clear} fullWidth  >Clear</Button>

                
            </form>
        </Paper>
    )
}

export default Form;