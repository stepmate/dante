import React from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Fab from "@material-ui/core/Fab";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import Zoom from "@material-ui/core/Zoom";
import img from "../media/dante-human-blue.svg";
import nombre from "../media/nombre.svg";
import logoArco from "../media/div-logo-texto.svg";
import {useForm } from "react-hook-form";

import {
  Button,
  FormControlLabel,
  FormLabel,
  Grid,
  List,
  ListItem,
  Paper,
  Radio,
  RadioGroup,
  TextField,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "fixed",
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
  appBar: {
    background: "transparent",
    boxShadow: "none",
  },
  logo: {
    maxHeight: "64px",
  },
  listHorizontalDisplay: {
    display: "flex",
    flexDirection: "row",
    padding: 0,
    color: "#1A1F39",
    fontFamily: "Monda",
    fontWeight: 700,
    fontSize: "1.1rem",
  },
  paperForm: {
    padding: "25px",
    //width: '100%',
  },
  form: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "80%",
    },
  },
}));

function ScrollTop(props) {
  const { children, window } = props;
  const classes = useStyles();
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      "#back-to-top-anchor"
    );

    if (anchor) {
      anchor.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <Zoom in={trigger}>
      <div onClick={handleClick} role="presentation" className={classes.root}>
        {children}
      </div>
    </Zoom>
  );
}

ScrollTop.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default function Navbar(props) {
  const { handleSubmit, register} = useForm();
  const [value, setValue] = React.useState('');
  const classes = useStyles();
  const onSubmit = (formData) => { 
    console.log('formData: ', formData)


  }
  const handleChange = (event) => {
    setValue(event.target.value);
  };
  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar className={classes.appBar}>
        <Toolbar>
          <Grid container>
            <Grid item>
              <img className={classes.logo} src={img} alt="logo" />
              <img className={classes.logo} src={nombre} alt="dante" />
            </Grid>
          </Grid>
          <List className={classes.listHorizontalDisplay}>
            <ListItem>Inicio</ListItem>
            <ListItem>Beneficios</ListItem>
            <ListItem>Servicios</ListItem>
            <ListItem>Pasos</ListItem>
            <ListItem>Nosotros</ListItem>
          </List>
        </Toolbar>
      </AppBar>
      <Toolbar id="back-to-top-anchor" />
      <Container>
        <Box mt={6}>
          <Grid
            xs={12}
            container
            direction="row"
            justifyContent="flex-end"
            alignItems="center"
          >
            <Grid container xs={6} lg={8} justifyContent="center">
<Box mt={-24} mr={22}>
              <img src={logoArco} alt="logo dante" />
</Box>     
            </Grid>
            <Grid item xs={4}>
              
                <Paper className={classes.paperForm}>
                  <form onSubmit={handleSubmit(onSubmit)} className={classes.form}>
                    <Typography variant="body1" align="center">
                      ¿Tienes arreglos pendientes en casa?
                    </Typography>
                    <Typography variant="body2" align="center">
                      REGISTRATE
                    </Typography>

                    <Box mt={6} m={2}>
                      <FormLabel component="legend"></FormLabel>
                      <RadioGroup
                        aria-label=""
                        name="radioGroup"
                        value={value}
                        onChange={handleChange}
                        
                      >
                        <FormControlLabel
                          value="cliente"
                          control={<Radio />}
                          label="Busco un experto de construcción"
                        />
                        <FormControlLabel
                          value="experto"
                          control={<Radio />}
                          label="Soy un experto de construccón"
                        />
                      </RadioGroup>

                      <TextField
                        id="name"
                        label="Nombre"
                        variant="outlined"
                        {...register('name')}
                      />
                      <TextField
                        id="email"
                        label="email"
                        variant="outlined"
                        {...register('email')}
                      />
                      <TextField
                        id="country"
                        label="Pais"
                        variant="outlined"
                        {...register('country')}
                      />
                      <TextField
                        id="state"
                        label="Estado"
                        variant="outlined"
                        {...register('state')}
                      />
                    </Box>
                    <Box display="flex" justifyContent="center">
                      <Button onClick={handleSubmit(onSubmit)} variant="contained" color="primary">
                        Registrarte Gratis
                      </Button>
                    </Box>            
                  </form>
                </Paper>
            </Grid>
          </Grid>
        </Box>
      </Container>
      <ScrollTop {...props}>
        <Fab color="secondary" size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </React.Fragment>
  );
}
