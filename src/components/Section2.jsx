import React from 'react'
import { Box, Grid, Paper, Typography } from '@material-ui/core'
import { makeStyles } from "@material-ui/core"

const useStyles = makeStyles((theme) => ({
    fondo: {
        backgroundColor: 'primary.main',
    },
    cards: {
        backgroundColor: '#edeced',
        display: "flex",
      minHeight: "250px",
      textAlign: "center",
      alignContent: "center"
    },
  }));

export const Section2 = () => {
    const classes = useStyles();
    return (
        <Box bgcolor='primary.light' p={8} className={classes.fondo}>
            <Box m={2}>
            <Typography variant="h2" align="center">¿PORQUÉ USAR DANTE?</Typography>
            </Box>
            <Typography variant="h4" align="center">BENEFICIOS</Typography>

<Box mt={8} mb={4}>
            <Grid container xs={12} className={classes.fondo}>
                <Grid item xs={6} md={3}>
                    <Box m={2}>
                        <Paper elevation={10} className={classes.cards}>
                            <Box p={2} display="flex" alignItems="center">
                                <Typography variant="h5" align="center">
                                    Consigue <Box component="span" color="primary.main">FÁCIL Y RÁPIDO</Box> expertos que te ayudarán con cualquier servicio de construcción / reparacíon.
                                </Typography>
                            </Box>
                        </Paper>
                    </Box>
                </Grid>

                <Grid item xs={6} md={3}>
                    <Box m={2}>
                    <Paper elevation={10} className={classes.cards}>
                            <Box p={2} display="flex" alignItems="center">
                                <Typography  variant="h5" align="center">
                                    Conoce las <Box component="span" color="primary.main">PUNTUACIONES, OPINIONES Y TRABAJOS RELIZADOS</Box> de los Dantes para escoger con quién harás el trabajo.
                                </Typography>
                            </Box>
                        </Paper>
                    </Box>
                </Grid>

                <Grid item xs={6} md={3}>
                    <Box m={2}>
                    <Paper elevation={10} className={classes.cards}>
                            <Box p={2} display="flex" alignItems="center">
                                <Typography  variant="h5" align="center">
                                    Negocia y compra cotizaciones para tus servicios <Box component="span" color="primary.main">SIN SALIR DE CASA.</Box>
                                </Typography>
                            </Box>
                        </Paper>
                    </Box>
                </Grid>
                
                <Grid item xs={6} md={3}>
                    <Box m={2}>
                    <Paper elevation={10} className={classes.cards}>
                            <Box p={2} display="flex" alignItems="center">
                                <Typography  variant="h5" align="center">
                                    Contacta con Dantes protegiendo tu <Box component="span" color="primary.main">PRIVACIDAD, sin exponer tus redes o número privado.</Box>
                                </Typography>
                            </Box>
                        </Paper>
                    </Box>
                </Grid>
            </Grid>
            </Box>
        </Box>
    )
}

