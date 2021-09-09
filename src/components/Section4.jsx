import React from 'react'
import { Box, Button, Grid,  Typography } from '@material-ui/core'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import { makeStyles } from "@material-ui/core"
import paso2 from "../media/section4/paso2.svg";
import googleApp from "../media/section4/google-play.svg";
import appStore from "../media/section4/app-store.svg";

const useStyles = makeStyles((theme) => ({
    fondo: {
        //ackgroundColor: '#000',
        backgroundColor: 'primary.main',
        //backgroundColor: 'linear-gradient(to bottom, rgba(245, 245, 245, 0.4), rgba(41, 48, 92, 0))'
    },
    arrow: {
        display: "flex",
      minHeight: "250px",
      textAlign: "center",
      alignContent: "center"
    },
  }));

export const Section4 = () => {
    const classes = useStyles();
    return (
        <Box bgcolor='primary.light' p={8} className={classes.fondo}>
            <Box m={2}>
            <Typography variant="h2" align="center">¿CÓMO FUNCIONA?</Typography>
            </Box>

<Box mt={8} mb={4}>
            <Grid container direction="row" justifyContent="center" xs={12} className={classes.fondo}>
               <Grid item xs={1}>
                   <Box  alignItems="center" justifyContent="flex-end" className={classes.arrow}>
                   <ArrowBackIosIcon style={{fontSize: 64}}  />
                   </Box>
               </Grid>
               <Grid item xs={4}>
                   <Box display="flex" justifyContent="center">
                       <img src={paso2} alt="paso dos" />
                   </Box>
               </Grid>
               <Grid item xs={1}>
                   <Box alignItems="center" className={classes.arrow}>
                   <ArrowForwardIosIcon style={{fontSize: 64}} />
                   </Box>
               </Grid>
            </Grid>
            
                <Box display="flex" justifyContent="center">
                    <Button variant="contained" color="primary"> Prueba Dante</Button>
                </Box>

            <Box mt={6} display="flex" justifyContent="center">
                <Typography>Pronto disponible en </Typography>
                <img src={appStore} alt="logo appStore" style={{marginLeft: '20px'}}/>
                <img src={googleApp} alt="logo google play" style={{marginLeft: '10px'}} />
            </Box>
</Box>
        </Box>
    )
}

