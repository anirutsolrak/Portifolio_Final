import React from 'react';
import { projects } from '../data/projects';
import ProjectCard from '../components/ProjectCard';  // Importe o ProjectCard
import { Grid, Typography, Box, Container } from '@mui/material';

const AplicacoesProjetos = () => {
  const AplicacoesProjetos = projects.filter(project => project.category === 'Aplicações');

  return (
        <Box sx={{ bgcolor: 'background.default', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            <Container sx={{ flexGrow: 1, py: 8 }}>

                <Typography variant="h3" gutterBottom sx={{ textAlign: 'center' }}>
                    Aplicações
                </Typography>

                    <Grid container spacing={4}>
                        {AplicacoesProjetos.map((project) => (
                            <Grid item key={project.id} xs={12} sm={6} md={4}>
                                <ProjectCard project={project} />
                            </Grid>
                        ))}
                    </Grid>

            </Container>
        </Box>
  );
};

export default AplicacoesProjetos;