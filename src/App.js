import {Container, AppBar,Typography,Grow,Grid} from '@material-ui/core';

import memories from './images/memories.png';
import Posts from './components/Posts/Posts'
import {getPosts} from './actions/posts'
import Form from './components/Form/Form'
import useStyles from './style'
import { useDispatch } from 'react-redux';
import { useState , useEffect } from 'react';

const App = ()=>{
    const classes = useStyles();
    const dispatch = useDispatch();
    const [currentId,setCurrentId] = useState(null);

    useEffect(()=>{
        dispatch(getPosts());
    }, [dispatch, currentId])
    return(
       <Container maxWidth='lg'>
            <AppBar className={classes.appBar} position="static" color="inherit">
                <Typography className={classes.heading} variant='h3' align='center'>
                    Memories
                </Typography>
                <img className={classes.image} src={memories} alt="memories" height='60'/>
            </AppBar>

            <Grow in>
                <Container>
                    <Grid container justifyContent='space-between' alignItems='stretch' spacing={3}>
                        <Grid item xs={12} sm={7}>
                            <Posts  setCurrentId={setCurrentId}/>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Form setCurrentId={setCurrentId} currentId={currentId}/>
                        </Grid>
                    </Grid>
                </Container>
            </Grow>
       </Container>
    )
}

export default App;