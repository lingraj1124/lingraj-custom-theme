import React from 'react'
import Box from '@mui/material/Box';
import {Item} from '../_components/item'
import { Grid } from '@mui/material';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

export default function Start(){

    return (
    <Box> 
        <Grid container>
            <Grid item md={12}>
                <Item>
                    <Typography variant="h6">Start</Typography>
                </Item>
            </Grid>
        </Grid>
    </Box>
    )
}