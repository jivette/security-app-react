import React, { useEffect } from 'react';
import logo from './bg.jpg';
import header from './header.jpg';
import './App.css';
import { Card, CardContent, Typography, Grid, CardMedia, Container } from '@mui/material';
import axios from 'axios';

function App() {
   const [data, setData] = React.useState<any | undefined>();

  const getData = async () => {
    axios.get("https://catfact.ninja/facts").then(response =>{
    console.log(response.data.data);  
    setData(response.data.data);
    });
      
  }
  useEffect(() => {
    if(!data){
      getData();
    }
  }, [data])
  
  return (
    <div className="App">
      <header className="App-header">
          <Grid container spacing={6}>
            <div className="content-header">
              <img src={header} alt="header" width="100%"/>
            </div>
          </Grid>
          <br />
        <Container>
          <Grid container spacing={6}>
            <p>Registros</p>
            {data && data.map((content: {fact: string}) =>{
              return (
                <Grid item xs={4}>
                  <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                      component="img"
                      height="194"
                      image={logo}
                      alt="Paella dish"
                    />
                    <CardContent>
                      <Typography variant="body2" color="text.secondary">
                        {content.fact}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
            )})}
          </Grid>
        </Container>
      </header>
    </div>
  );
}

export default App;
