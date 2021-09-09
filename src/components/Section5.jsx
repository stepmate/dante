import React from 'react'
import { Box,  Grid, Typography } from '@material-ui/core'
import { makeStyles } from "@material-ui/core"
import fondo from "../media/section5/fondo.png";

const useStyles = makeStyles((theme) => ({
    fondo: {
        backgroundImage: `url(${fondo})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
    },
    textoGradient: {
        background:  `linear-gradient(to left, rgba(0, 0, 0, 1), rgba(255, 255, 255, 0))`,
        width: '100%'
    }
  }));

export const Section5 = () => {
    const classes = useStyles();
    return (
        <Box bgcolor='primary.light'  className={classes.fondo} >
            <Box p={8} className={classes.textoGradient}>

            <Box m={2}>
            <Typography style={{color:'#fff'}} variant="h2" align="center">¡FACILITANDO LA VIDA DEL CLIENTE Y DEL MAESTRO!</Typography>
            </Box>

<Box mt={8} mb={4}>
    <Grid container xs={12} justifyContent="flex-end">
        <Grid item xs={6}>
    <Box mb={4}>
            <Typography color="primary" variant="h5">NUESTRA MISIÓN</Typography>
            <Typography style={{color: '#EDECED'}} variant="h6">Conectar a la comunidad de maestros de la construcción con el mercado online, facilitar los procesos de contratación y aportar al sector construcción de LATAM.</Typography>
    </Box>
    <Box>
            <Typography color="primary" variant="h5">NUESTRA HISTORIA</Typography>
            <Typography  style={{color: '#EDECED'}} variant="h6">Creamos DANTE luego de pasar en persona por todos los inconvenientes de pedir servicios de construcción de la forma habitual. Desde no conocer quién pueda hacer el trabajo, o no está disponible, o el que nos recomiendan no llega nunca, o el que encontramos cobra abusivamente, etc; nos mostró la necesidad de buscar una solución. DANTE es una solución para clientes que necesiten realizar un trabajo de construcción y expertos que quieran conectar con nuevos clientes.</Typography>
    </Box>    

        </Grid>
    </Grid>
</Box>
            </Box>
        </Box>
    )
}

