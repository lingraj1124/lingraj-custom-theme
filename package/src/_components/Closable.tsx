import React, {useState} from 'react';
import {
    Tab, Grid, Button
} from '@mui/material';
import {
    TabList,
    TabContext, TabPanel
} from '@mui/lab';
import Box from '@mui/material/Box';
import {Item} from './item'

import CloseIcon from '@mui/icons-material/Close';

export default function Closable() {
    console.log("ASDFGBN");
    
    const [selectedTab, setSelectedTab] = useState("Main");

    const [tabs, setTabs] = useState<any>([])
    const [panels, setPanels] = useState<any>([])
    const [tabIndex, setTabIndex] = useState(2)

    const handleChange = (event: any, newValue: any) => {
        setSelectedTab(newValue);
    };

    const handleTabOptions = (value: any) => {
        setSelectedTab(value)
        setTabIndex(tabIndex + 1)
    }

    const createBlueBox = () => {
        const value = `Blue Box ${tabIndex}`
        const newTab = {
            value: value,
            child: () => <div style={{height: '300px', width: '300px', backgroundColor: 'blue'}} />
        }

        setTabs([...tabs, newTab])

        // setPanels([
        //     ...panels,
        //     {
        //         value: value,
        //         child: () => <div style={{height: '300px', width: '300px', backgroundColor: 'blue'}} />
        //     }
        // ])

        handleTabOptions(value);
    }


    const createRedBox = () => {
        const value = `Red Box ${tabIndex}`
        const newTab = {
            value: value,
            child: () => <div style={{height: '300px', width: '300px', backgroundColor: 'red'}} />
        }

        setTabs([...tabs, newTab])

        // setPanels([
        //     ...panels,
        //     {
        //         value: value,
        //         child: () => <div style={{height: '300px', width: '300px', backgroundColor: 'red'}} />
        //     }
        // ])

        handleTabOptions(value);
    }


    const handleTabClose = (event: any, value: any) => {
        tabs.map((e: any) => console.log(e.value))
        const tabArr = tabs.filter((x: any) => x.value !== value)
        console.log(tabArr)
        setTabs(tabArr)

        // const panelArr = panels.filter(p => p.value !== value)
        // setPanels(panelArr);

        setSelectedTab('Main')
    }

    return (
        <Box> 
        <Grid container>
            <Grid item md={12}>
                <Item>
        <TabContext value={selectedTab}>
            <TabList onChange={handleChange} aria-label="lab API tabs example">
                <Tab label="new Closable Tab" value="Main" />

                {tabs.map((tab: any) => (
                    <Tab 
                        icon={
                            <CloseIcon onClick={(e) => handleTabClose(e, tab.value)} />
                        } iconPosition='end'
                        key={tab.value} label={tab.value} 
                        value={tab.value} 
                    />
                ))}
            </TabList>

            <TabPanel value="Main">
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                        <Button 
                            onClick={createBlueBox}
                            variant='contained' color='primary'>
                            Create Blue Box
                        </Button>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Button 
                            onClick={createRedBox}
                            variant='contained' color='secondary'>
                            Create Red Box
                        </Button>
                    </Grid>
                </Grid>
            </TabPanel>

            {tabs.map((panel: any) => (
                <TabPanel key={panel.value} value={panel.value}>
                    {panel.child()}
                </TabPanel>
            ))}
        </TabContext>
        </Item>
        </Grid>
    </Grid>
    </Box>
    );
}