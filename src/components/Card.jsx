import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';



export default function BasicCard({frase}) {
  return (
    <Card sx={{ maxWidth: 600 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Citações Filosofo Kanye West
        </Typography>
        <Typography variant="h5" component="div">
          {frase}
        </Typography>
      </CardContent>
    </Card>
  );
}