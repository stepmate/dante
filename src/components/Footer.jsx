import React from 'react'
import { Box, Grid, Typography } from '@material-ui/core'
import EmailIcon from '@material-ui/icons/Email';
import FacebookIcon from '@material-ui/icons/Facebook';


export const Footer = () => {
    return (
        <Box bgcolor='primary.light' pt={6} pb={6} >
<Grid container xs={12} justifyContent="center">

    <Grid item xs={2}>
        <Typography><b>ÍNDICE WEB</b></Typography>
        <Typography>
            Inicio<br/>
            Registro de usuario<br/>
            Inicio sesión de usuario
        </Typography>
    </Grid>
    <Grid item xs={2}>
        <Typography>
        <br/>Trabaja con nosotros<br/>
        Inicio de sesión de Dante<br/>
        Registro de Dantes
        </Typography>
    </Grid>
    <Grid item xs={3}></Grid>
    <Grid item xs={2}>
        <Typography><b>CONTACTO</b></Typography>
        
        
                
        <Box display="flex" component="span">
            <EmailIcon />
            <Typography style={{marginLeft: '15px'}}>contacto@dante.com</Typography>
        </Box>
        
    </Grid>
    <Grid item xs={2}>
        <Typography><b>REDES</b></Typography>
        <Box component="span" display="flex">
            <FacebookIcon />
            <Typography style={{marginLeft: '15px'}}>/App.Dante</Typography>
        </Box>
    </Grid>

    
<Typography align="center"> © Creado por <b>Grupo DANTE</b></Typography>
    

</Grid>
        </Box>
    )
}

