import React, {useState} from 'react';
import { Tab, Grid, Button } from '@mui/material';
import { TabList, TabContext, TabPanel } from '@mui/lab';


export default function Dynamic() {
    const [selectedTab, setSelectedTab] = useState('1');

    const [tabs, setTabs] = useState<any>([])
    const [panels, setPanels] = useState<any>([])
    const [tabIndex, setTabIndex] = useState(2)

    const handleChange = (event: any, newValue: any) => {
        setSelectedTab(newValue);
    };
    
    const createNewTab = () => {
        const newTab = {
            value: `${tabIndex}`,
            label: `Dynamic Tab ${tabIndex}`
        }

        setTabs([...tabs, newTab])

        setPanels([ ...panels,
                    {
                        value: `${tabIndex}`,
                        child: () => <div>Hello I am dynamic tab {tabIndex}</div>
                    }
        ])

        setSelectedTab(`${tabIndex}`)
        setTabIndex(tabIndex + 1)
    }

    return (
        <TabContext value={selectedTab}>
            <TabList onChange={handleChange} aria-label="lab API tabs example">
                <Tab label="Create New" value="1" />
                {tabs.map((tab: any) => (
                    <Tab key={tab.value} label={tab.label} value={tab.value} />
                ))}
            </TabList>
            <TabPanel value="1">
                <Button 
                    onClick={createNewTab}
                    variant='contained' color='primary'>
                    Create Dynamic Tab
                </Button>
            </TabPanel>
            {panels.map((panel: any) => (
                <TabPanel key={panel.value} value={panel.value}>
                    {panel.child()}
                </TabPanel>
            ))}
        </TabContext>
    );
}