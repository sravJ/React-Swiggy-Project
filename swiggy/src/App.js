import './App.css';
import React from 'react';
import Logo from './assets/swiggy-logo.png';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import InputBase from '@material-ui/core/InputBase';
import MyLocationIcon from '@material-ui/icons/MyLocation';

function App() {
  return (<React.Fragment>
    <section className="customSection">
      <Grid container="container" spacing={24}>
        <Grid item="item" xs={6}>
          <Container>
            <Grid container="container" spacing={24}>
              <Grid item="item" xs={2}></Grid>
              <Grid item="item" xs={6}>
                <img className="customImage" src={Logo} alt="logo"/>
              </Grid>
              <Grid item="item" xs={4}>
                  <Button variant="contained" color="primary" className="customButton1">
                    Login
                  </Button>
                  <Button variant="contained" color="primary" className="customButton2">
                    Sign up
                  </Button>
              </Grid>
              </Grid>
          </Container>
          <Container>
            <Grid container="container" spacing={24}>
              <Grid item="item" xs={2}></Grid>
              <Grid item="item" xs={10}>
                <h1 className="customH1">Hungry?</h1>
                <h2 className="customH2">Order food from favourite restaurants near you.</h2>
              </Grid>
              </Grid>
          </Container>
          <Container>
            <Grid container="container" spacing={24}>
              <Grid item="item" xs={2}></Grid>
              <Grid className="customGrid" item="item" xs={7}>
                <div className="customDiv2">
                <InputBase
                    className="customInput"
                    placeholder="Enter your delivery location"
                    inputProps={{ 'aria-label': 'search google maps' }}
                />
              </div>
              </Grid>
                <Grid className="customGrid" item="item" xs={3}>
                  <Button className="customLocation"><MyLocationIcon className="customIcon" /><span className="customSpan">Locate Me</span></Button>
                    <Button variant="contained" color="primary" className="customButton3">
                        Find Food?
                    </Button>
                </Grid>
              </Grid>
          </Container>
        </Grid>
        <Grid item="item" xs={6}>
          <div className="customDiv"></div>
        </Grid>
      </Grid>
    </section>
  </React.Fragment>);
}

export default App;
