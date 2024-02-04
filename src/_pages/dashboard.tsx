import Box from '@mui/material/Box';
import {Item} from '../_components/item'
import { Grid } from '@mui/material';
import Typography from '@mui/material/Typography';

export default function Dashboard(){

    return (
    <Box> 
        <Grid container>
            <Grid item md={12}>
                <Item>
                    <Typography variant="h6">Dashboard</Typography>
                </Item>
            </Grid>
        </Grid>
    </Box>
    )
}