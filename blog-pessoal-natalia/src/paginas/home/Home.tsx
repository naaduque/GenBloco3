import React from 'react';
import { Grid, Box, Typography, Button } from '@material-ui/core';
import './Home.css';

function Home() {
    return (
        <>
            <Grid container direction="row" justifyContent="center" alignItems="center" style={{ backgroundColor: "crimson" }}>
                <Grid alignItems="center" item xs={6}>
                    <Box paddingX={20} >
                        <Typography variant="h3" gutterBottom color="textPrimary" component="h3" align="center" style={{ color: "white", fontWeight: "bold" }}>Olá</Typography>
                        <Typography variant="h5" gutterBottom color="textPrimary" component="h5" align="center" style={{ color: "white", fontWeight: "bold" }}>Diga alguma coisa :)</Typography>
                    </Box>
                    <Box display="flex" justifyContent="center">
                        <Box marginRight={1}>
                        </Box>
                        <Button variant="outlined" style={{ borderColor: "white", backgroundColor: "crimson", color: "white" }}>Ver Postagens</Button>
                    </Box>
                </Grid>
                <Grid item xs={6} >
                    <img src="https://www.bing.com/th/id/OGC.8a46ff6385218a62f56533ad49edc574?pid=1.7&rurl=https%3a%2f%2fmedia1.giphy.com%2fmedia%2f5ndklThG9vUUdTmgMn%2fsource.gif&ehk=3Sw%2bEc5sqhIozc3TbNicrettWgfLTffFFD6VicSruBA%3d" alt="" width="320px" height="px" />
                </Grid>
                <Grid xs={12} style={{ backgroundColor: "white" }}>
                </Grid>
            </Grid>
        </>
    );
}

export default Home;