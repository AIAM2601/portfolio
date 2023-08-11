import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
export default function ImgMediaCard() {
  return (
    <Box>
      <Grid container direction="row" justifyContent="space-evenly" alignItems="center" spacing={1} >
        <Grid item >
          <Card sx={{ width: 400, height: 300}}>
            <CardContent >
              <Typography gutterBottom variant="h4" component="div" >
                <Box sx={{ fontWeight: 'bold' }}>Social Media App</Box>
              </Typography>
              <CardMedia 
                component="img"
                image="socialMedia.png"
                alt='Social Media App'
              />
              <Typography variant="body2" color="text.secondary">
              Python Django TailwindCSS <br></br> For more information click <strong>CODE</strong> 
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" href="https://github.com/AIAM2601/SocialMedia" target="_blank">Code</Button>
              <Button size="small" href="https://www.youtube.com/watch?v=SX5jV4jFd60" target="_blank">Video</Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item >
          <Card sx={{ width: 400, height: 300}}>
            <CardContent>
              <Typography gutterBottom variant="h4" component="div">
              <Box sx={{ fontWeight: 'bold' }}> La Princesa De Prusia</Box>
              </Typography>
              <iframe 
                  width="360" 
                  height="200" 
                  src="https://www.youtube.com/embed/biiiKkNwj_M" 
                  title="YouTube video player" 
                  frameborder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                  allowfullscreen>    
              </iframe>
              <Typography variant="body2" color="text.secondary">
                Video Game built with Unity (C#)
              </Typography>
            </CardContent>
            <CardActions>
              {/* <Button size="small" href="https://youtu.be/biiiKkNwj_M" target="_blank">Video</Button> */}
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}

