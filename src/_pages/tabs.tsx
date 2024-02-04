import * as React from 'react';
import {Tab } from '@mui/material';
import { TabList, TabContext, TabPanel } from '@mui/lab';
import Dynamic from '../_components/Dynamic';
import Closable from '../_components/Closable';
import Box from '@mui/material/Box';
import {Item} from '../_components/item'
import { Grid } from '@mui/material';

export default function Layout() {

    return (
    <>
    <Box> 
        <Grid container>
            <Grid item lg={12} md={12} sm={12} xs={12}>
                <Item>
                    {/* <Dynamic /> */}
                    <Closable />
                </Item>
            </Grid>
        </Grid>
    </Box>
    </>
    );
}