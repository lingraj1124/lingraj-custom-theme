import { useState,useEffect,useCallback} from "react"

import { Paper, ThemeProvider } from "@mui/material";
import { Routes, Route} from "react-router-dom";
import LeftMenu from "./_layout/leftMenu"
import InputForm from "./_pages/inputForm"
import Buttons from "./_pages/buttons"
import Grid from '@mui/material/Grid';
import useMediaQuery from '@mui/material/useMediaQuery';
import Box from '@mui/material/Box';
import DataGridComponent from "./_pages/dataGridComponent";
import { useCharactersContext } from "./_hooks/Context";

import Dashboard from './_pages/dashboard';
import Dashboard2 from './_pages/dashboard2';
import Dashboard3 from './_pages/dashboard3'; 
import Utilities from './_pages/utilities'; 
import UIKit from './_pages/uiKit'; 
import Hirerachy from './_pages/hirerachy'; 
import Start from './_pages/start';
import Pages from './_pages/pages';

import { Tab } from '@mui/material';
import { TabList, TabContext, TabPanel } from '@mui/lab';
import CloseIcon from '@mui/icons-material/Close';
import { useNavigate } from 'react-router-dom';


export default function App() {
  const navigate = useNavigate();

  const [menuClass, setMenuClass] = useState('');
  const { theme,menuMode,setMenuMode,setDrawerWidth,currentSelectedMenu, setCurrentSelectedMenu,recentTabs,setRecentTabs} = useCharactersContext();
  const tabView = useMediaQuery(theme.breakpoints.down('lg'));

  useEffect(() => {
    if(tabView){
      setMenuClass('mobile-view-component')
      setMenuMode(0)
    }
    else{
      if(menuMode === 1){
        setMenuClass('desktop-view-verticle-menu-component')
        setDrawerWidth(62)
      }
      else if(menuMode === 2){
        setDrawerWidth(0)
        setMenuClass('desktop-view-horizontal-menu-component')
      }
      else{
        setMenuClass('desktop-view-verticle-menu-component')
      }
    }
  },[menuMode])

  const handleClose = useCallback(
    (event: any, tabToDelete: any) => {
      event.stopPropagation();
      const tabToDeleteIndex = recentTabs.findIndex(tab => tab.value === tabToDelete.value);
      
      const updatedTabs = recentTabs.filter((tab:any, index:any) => {
        return index !== tabToDeleteIndex;
      });
      const previousTab = recentTabs[tabToDeleteIndex - 1] || recentTabs[tabToDeleteIndex + 1] || {};

      setRecentTabs(updatedTabs);
      setCurrentSelectedMenu(previousTab.value);
      navigate('/'+previousTab.value);
    },
    [recentTabs]
  );

  const handleChange = (event: any, newValue: string) => {
    setCurrentSelectedMenu(newValue);
    navigate('/'+newValue);
  };

  return (
    <ThemeProvider theme={theme}>
        <Paper>
          <LeftMenu />
          <Box>
            <Grid className={menuClass}>

            <TabContext value={currentSelectedMenu}>
              <TabList scrollButtons="auto" variant="scrollable" onChange={handleChange}>
                  {recentTabs.map((tab: any) => (
                      <Tab 
                          icon={
                              <CloseIcon onClick={event => handleClose(event, tab)} />
                          } iconPosition='end'
                          key={tab.value} label={tab.label} 
                          value={tab.value} 
                      />
                  ))}
              </TabList>
              {recentTabs.map((panel: any) => (
                  <TabPanel key={panel.value} value={panel.value} >
                      
                <Routes>
                  <Route path="/" element={<Dashboard />} />
                  <Route path="/inputForm" element={<InputForm />} />
                  <Route path="/dataGrid" element={<DataGridComponent />} />
                  <Route path="/buttons" element={<Buttons  />} />
                  <Route path="/dashboard" element={<Dashboard  />} />
                  <Route path="/dashboard1" element={<Dashboard2  />} />
                  <Route path="/dashboard2" element={<Dashboard3  />} />
                  <Route path="/utilities" element={<Utilities  />} />
                  <Route path="/uiKit" element={<UIKit  />} />
                  <Route path="/hirerachy" element={<Hirerachy  />} />
                  <Route path="/start" element={<Start  />} />
                  <Route path="/pages" element={<Pages  />} />
                </Routes>
                  </TabPanel>
              ))}
          </TabContext>


            </Grid>
          </Box>
        </Paper>
    </ThemeProvider>
  );
}

