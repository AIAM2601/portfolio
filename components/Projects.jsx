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
        <Grid   item >
          <Card className='dark:bg-[#0c4a6e] dark:[color:white] '  sx={{ width: 350, height: 300}}>
            <CardContent >
              <Typography gutterBottom variant="h4" component="div" >
                <Box className="min-[300px]:text-[24px]" sx={{ fontWeight: 'bold' }}>Social Media App</Box>
              </Typography>
              <CardMedia 
                component="img"
                image="socialMedia.png"
                alt='Social Media App'
              />
              <Typography className=" mt-1 dark:[color:white]" variant="body2" color="text.secondary">
              Python Django TailwindCSS <br></br> For more information click <strong>CODE</strong> 
              </Typography>
            </CardContent>
            <CardActions>
              <Button className='text-bold text-[14px] hover:[color:#126ca1] text-black dark:[color:white] hover:bg-slate-100 dark:hover:bg-[#133041] dark:hover:[color:white]' href="https://github.com/AIAM2601/SocialMedia" target="_blank">Code</Button>
              <Button className='text-bold text-[14px] hover:[color:#126ca1] text-black dark:[color:white] hover:bg-slate-100 dark:hover:bg-[#133041] dark:hover:[color:white]' href="https://www.youtube.com/watch?v=SX5jV4jFd60" target="_blank">Video</Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item >
          <Card className='dark:bg-[#0c4a6e] dark:[color:white]' sx={{ width: 350, height: 300}}>
            <CardContent>
              <Typography gutterBottom variant="h4" component="div">
              <Box className="min-[300px]:text-[24px]"  sx={{ fontWeight: 'bold' }}> La Princesa De Prusia</Box>
              </Typography>
              <iframe 
                  width="330" 
                  height="200" 
                  src="https://www.youtube.com/embed/biiiKkNwj_M" 
                  title="YouTube video player" 
                  frameborder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                  allowfullscreen>    
              </iframe>
              <Typography className="dark:[color:white]" variant="body2" color="text.secondary">
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

