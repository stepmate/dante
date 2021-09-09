import React from 'react'
import { Box, Grid,  Typography } from '@material-ui/core'
import { makeStyles } from "@material-ui/core"

// Media
import uno from "../media/section3/1-ladrillo.svg";
import dos from "../media/section3/2-enchufe.svg";
import tres from "../media/section3/3-plomeria.svg";
import cuatro from "../media/section3/4-almacenamiento-de-gas.svg";
import cinco from "../media/section3/5-wrench.svg";
import seis from "../media/section3/6-engeneering.svg";
import siete from "../media/section3/7-drill.svg";
import ocho from "../media/section3/8-sofa.svg";
import nueve from "../media/section3/9-drywall.svg";
import diez from "../media/section3/10-glass.svg";
import once from "../media/section3/11-blueprint.svg";

const useStyles = makeStyles((theme) => ({
    fondo: {
        backgroundColor: '#edeced',
    },
    img: {
        minHeight: '90px',
        
    },
  }));

export const Section3 = () => {
    const classes = useStyles();
    return (
        <Box bgcolor='primary.light' p={8} className={classes.fondo}>
            <Box m={2}>
            <Typography variant="h2" align="center">¿QUE SERVICIOS PUEDO SOLICITAR?</Typography>
            </Box>
            <Typography variant="h4" align="center">En DANTE puedes encontrar EXPERTOS en:</Typography>

<Box mt={8} mb={4}>
            <Grid container xs={12} className={classes.fondo}>

            <Grid item xs={2} md={2}>
                <Box mb={2} display="flex" justifyContent="center">
                    <img className={classes.img} src={uno} alt="ladrillos" />
                </Box>
                <Typography variant="h6"  align="center">
                    ALBAÑILERÍA
                </Typography>
            </Grid>

            <Grid item xs={2} md={2}>
                <Box mb={2} display="flex" justifyContent="center">
                    <img className={classes.img} src={dos} alt="instlaciones electricas" />
                </Box>
                <Typography variant="h6"  align="center">
                    INSTALACIONES ELÉCTRICAS
                </Typography>
            </Grid>

            <Grid item xs={2} md={2}>
                <Box mb={2} display="flex" justifyContent="center">
                    <img className={classes.img} src={tres} alt="Instalaciones de agua/desague" />
                </Box>
                <Typography variant="h6"  align="center">
                    INSTALACIONES DE AGUA/DESAGUE
                </Typography>
            </Grid>

            <Grid item xs={2} md={2}>
                <Box mb={2} display="flex" justifyContent="center">
                    <img className={classes.img} src={cuatro} alt="instalaciones de gas" />
                </Box>
                <Typography variant="h6"  align="center">
                    INSTALACIONES DE GAS
                </Typography>
            </Grid>

            <Grid item xs={2} md={2}>
                <Box mb={2} display="flex" justifyContent="center">
                    <img className={classes.img} src={cinco} alt="instalaciones mecánicas" />
                </Box>
                <Typography variant="h6"  align="center">
                    INSTALACIONES MECÁNICAS
                </Typography>
            </Grid>

            <Grid item xs={2} md={2}>
                <Box mb={2} display="flex" justifyContent="center">
                    <img className={classes.img} src={seis} alt="ingenierías" />
                </Box>
                <Typography variant="h6"  align="center">
                    INGENIERÍAS
                </Typography>
            </Grid>
            
            </Grid>
</Box>

<Box mt={8} mb={4}>
            <Grid container xs={12} className={classes.fondo} direction="row" justifyContent="center" alignItems="center">

                <Grid item xs={3} md={3}>
                    <Box mb={2} display="flex" justifyContent="center">
                    <img className={classes.img} src={siete} alt="carpintería" />
                    </Box>
                    <Typography variant="h6"  align="center">
                        CARPINTERÍA
                    </Typography>
                </Grid>

                <Grid item xs={2} md={2}>
                    <Box mb={2} display="flex" justifyContent="center">
                    <img className={classes.img} src={ocho} alt="mueblería" />
                    </Box>
                    <Typography variant="h6"  align="center">
                        MUEBLERÍA
                    </Typography>
                </Grid>

                <Grid item xs={2} md={2}>
                    <Box mb={2} display="flex" justifyContent="center">
                    <img className={classes.img} src={nueve} alt="drywall/prefabricados" />
                    </Box>
                    <Typography variant="h6"  align="center">
                        DRYWALL/<br/>PREFABRICADOS
                    </Typography>
                </Grid>

                <Grid item xs={2} md={2}>
                    <Box mb={2} display="flex" justifyContent="center">
                    <img className={classes.img} src={diez} alt="vidriería" />
                    </Box>
                    <Typography variant="h6"  align="center">
                        VIDRIERÍA
                    </Typography>
                </Grid>

                <Grid item xs={3} md={3}>
                    <Box mb={2} display="flex" justifyContent="center">
                    <img className={classes.img} src={once} alt="arquitectura/diseño interior" />
                    </Box>
                    <Typography variant="h6"  align="center">
                        ARQUITECTURA/<br/>DISEÑO INTERIOR
                    </Typography>
                </Grid>

    
                
            </Grid>
</Box>
        </Box>
    )
}

