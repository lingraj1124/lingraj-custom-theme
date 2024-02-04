import React, { useContext, useEffect } from "react"
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import AppBar from '@mui/material/AppBar';
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Avatar from '@mui/material/Avatar';
import logo from '../_images/logo-freya-single.svg';
import logo2 from '../_images/logo-freya.svg';
import logo3 from '../_images/logo3.png';
import logo4 from '../_images/logo4.png';
import userimg from '../avatar-profilemenu.png'
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';

import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import StarOutlineOutlinedIcon from '@mui/icons-material/StarOutlineOutlined';
import ExploreOutlinedIcon from '@mui/icons-material/ExploreOutlined';
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';
import ListOutlinedIcon from '@mui/icons-material/ListOutlined';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import BadgeOutlinedIcon from '@mui/icons-material/BadgeOutlined';
import CheckBoxOutlinedIcon from '@mui/icons-material/CheckBoxOutlined';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import KeyboardBackspaceOutlinedIcon from '@mui/icons-material/KeyboardBackspaceOutlined';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import ListItem from '@mui/material/ListItem';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import MenuIcon from '@mui/icons-material/Menu';
import MoreIcon from '@mui/icons-material/MoreVert';
import Divider from '@mui/material/Divider';
import BpRadio from '../_components/_radioButton/bpCheckedIcon';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useCharactersContext } from "../_hooks/Context";

import baseTheme from "../_theme/defultTheme";
import theme1 from "../_theme/Theme1";
import theme2 from "../_theme/Theme2";
import { useNavigate } from 'react-router-dom';

export default function LeftMenu(props: any) {

  const navigate = useNavigate();



  
  const {theme, setTheme , drawerWidth, setDrawerWidth, setCurrentSelectedMenu,
          menuMode,setMenuMode,currentSelectedMenu,recentTabs,setRecentTabs } = useCharactersContext();

    const tabView = useMediaQuery(theme.breakpoints.down('lg'));
    const [selectedValue, setSelectedValue] = React.useState(true);

    // let test =["S.No", "Type", "Name", "Category", "Code", "ASL No","Status","Warehouse","Active",'Payment Terms',"Address",'Address 1','Region','City','State','Country','Postal code','Office No','Fax No','Contact Person 1','Contact Number 1','Email Id 1','Designation 1','Contact Person 2','Contact Number 2','Email Id 2','Designation 2','Contact Person 3','Contact Number 3','Email Id 3','Designation 3','Registration No','Mobile No','Toll Free No','FCPA Ack','Bank Name','Branch Name','IFSC Code','Accound No','Cost Competancy','Delivery Score','Quality Score','Supplier Score','PAN Number','Aadhar Number','GSTIN Number','With Holding %']


    useEffect(()=>{

      const cars = ["S.No", "Name", "Category", "Code", "ASL No","Status","Warehouse","Active",'Payment Terms',"Address",'Address 1','Region','City','State','Country','Postal code','Office No','Fax No','Contact Person 1','Contact Number 1','Email Id 1','Designation 1','Contact Person 2','Contact Number 2','Email Id 2','Designation 2','Contact Person 3','Contact Number 3','Email Id 3','Designation 3','Registration No','Mobile No','Toll Free No','FCPA Ack','Bank Name','Branch Name','IFSC Code','Accound No','Cost Competancy','Delivery Score','Quality Score','Supplier Score','PAN Number','Aadhar Number','GSTIN Number','With Holding %']

      let columString = '';

      for(let i=0;i<cars.length;i++){
        columString = columString+'12345ExcelReportColumnsTO excelReportColumnsTO'+i+' = new ExcelReportColumnsTO();excelReportColumnsTO'+i+'.setColumnDisplayName("'+cars[i]+'");excelReportColumnsTO'+i+'.setWidth(this.width1500);manufacturerReportHeaders.add(excelReportColumnsTO'+i+');)'
      }
      


      if(recentTabs.length === 0){
        handleListItemClick('uiKit')
      }
      
      if(tabView){
        changeMenu(true)
      }
    },[tabView])

    const controlProps = (item: any) => ({
      checked: selectedValue === item,
      value: item
    });
    
    
    const [state, setState] = React.useState(true);
    const [toggle, setToggle] = React.useState(false);
    const [testing, setTesting] = React.useState(false);
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const [selectedMenu, setSelectedMenu] = React.useState('dashboard');

    const [anchorEl1, setAnchorEl1] = React.useState<null | HTMLElement>(null);
    const open1 = Boolean(anchorEl1);

    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] =
    React.useState<null | HTMLElement>(null);

  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

    const mobileMenuId = 'primary-search-account-menu-mobile';
    const renderMobileMenu = (
      <Menu
        anchorEl={mobileMoreAnchorEl}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        id={mobileMenuId}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={isMobileMenuOpen}
        onClose={handleMobileMenuClose}
      >
        <MenuItem>
         <IconButton>
            <SearchOutlinedIcon  className="mobile-more-list" />
        </IconButton>
        </MenuItem>
        <MenuItem >
        <IconButton>
            <Avatar className={tabView? 'mobile-login-user-img' : 'desktop-login-user-img'} src={userimg} alt="logo" variant="square" />
        </IconButton>
        </MenuItem>
        <MenuItem onClick={handleProfileMenuOpen} >
        <IconButton>
            <KeyboardBackspaceOutlinedIcon   className="mobile-more-list" fontSize="small" />
        </IconButton>
        </MenuItem>
      </Menu>
    );
    const handleClick2 = (event: React.MouseEvent<HTMLButtonElement>) => {
      setAnchorEl1(event.currentTarget);
    };

    const handleClick1 = (event: React.MouseEvent<HTMLButtonElement>) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
    const handleClose1 = () => {
      setAnchorEl1(null);
    };

    const handleClick = () => {
    setTesting(!testing);
    };

    const handleListItemClick = (event: any) => {

      setCurrentSelectedMenu(event)

      let test2 = recentTabs;
      
      const openedTab = test2.findIndex(data => data.value === event) === -1;
      if(openedTab){

        if(event === 'dashboard'){
          test2.push({
            value: 'dashboard',
            label: 'Dashboard',
          })  
          setSelectedMenu('dashboard');
        }
        else if(event === 'dashboard1'){
          test2.push({
            value: 'dashboard1',
            label: 'Dashboard2',
          })  
          setSelectedMenu('dashboard');
        }
        else if(event === 'dashboard2'){
          test2.push({
            value: 'dashboard2',
            label: 'Dashboard3',
          })   
          setSelectedMenu('dashboard');
        }
        else if(event === 'utilities'){
          test2.push({
            value: 'utilities',
            label: 'Utilities',
          })  
          setSelectedMenu(event);
        }
        else if(event === 'uiKit'){
          test2.push({
            value: 'uiKit',
            label: 'UI Kit',
          })  
          setSelectedMenu(event);
        }
        else if(event === 'hirerachy'){
          test2.push({
            value: 'hirerachy',
            label: 'Hirerachy',
          })   
          setSelectedMenu(event);
        }
        else if(event === 'start'){
          test2.push({
            value: 'start',
            label: 'Start',
          })    
          setSelectedMenu(event);
        }
        else if(event === 'pages'){
          test2.push({
            value: 'pages',
            label: 'Pages',
          }) 
        }
        setRecentTabs(test2)
        setSelectedMenu(event);
      }
      
      navigate('/'+event);
    };

    const toggleDrawer = () => {
        setToggle(!toggle);
    };
    
      const list = (anchor: any) => (
        <Box
          sx={{ width: toggle ? 220 : 62 }}
          role="presentation"
        //   onMouseEnter={()=>toggleDrawer()}
        //   onMouseLeave={()=>toggleDrawer()}
        > 
          <List>
              {
                  tabView ?
                  null
                   :
                   !toggle ?
                   <>
                   <ListItem>
                       <Avatar className='org-desktop-logo'  src={logo3} onClick={() => toggleDrawer()} alt="logo" variant="square" />
                   </ListItem> 
                   <ListItem>
                       <Avatar className='desktop-logo'  src={logo} onClick={() => toggleDrawer()} alt="logo" variant="square" />
                   </ListItem> 
                   </>
                   :
                   <>
                   <ListItem>
                       <Avatar className='exp-panel-org-desktop-logo'  src={logo4} onClick={() => toggleDrawer()} alt="logo" variant="square" />
                   </ListItem> 
                   <ListItem>
                       <Avatar className='exp-panel-desktop-logo'  src={logo2} onClick={() => toggleDrawer()} alt="logo" variant="square" />
                   </ListItem> 
                   </>
              }
              
            <ListItem className={(currentSelectedMenu == 'dashboard' || currentSelectedMenu == 'dashboard1' || currentSelectedMenu == 'dashboard2') ? "left-menu-item" : ""} selected={currentSelectedMenu == 'dashboard'} >
                <ListItemButton >
                    <ListItemIcon>
                        <HomeOutlinedIcon />
                    </ListItemIcon>
                    
                    {toggle? <ListItemText><Typography variant="body2" noWrap>Dashboard</Typography> </ListItemText>: null}
                    <ListItemIcon onClick={() => handleClick()}>
                        {
                            toggle ?
                            testing ? 
                            <KeyboardArrowUpIcon />
                            :
                            <KeyboardArrowDownOutlinedIcon />
                            :
                            null
                        }
                    </ListItemIcon>
                </ListItemButton>
              </ListItem>

              {
                  testing ?
                  <MenuList>
                        <MenuItem  onClick={(event) => handleListItemClick('dashboard')} className={(toggle && testing )? 'left-submenu-2' : 'left-submenu-1'}> 
                        <ListItemIcon>
                            <BadgeOutlinedIcon fontSize="small" />
                        </ListItemIcon>
                        {(toggle && testing )?<Typography variant="body2">Dashboard 1</Typography>: null}
                        </MenuItem>
                        <MenuItem onClick={(event) => handleListItemClick('dashboard1')} className={(toggle && testing )? 'left-submenu-2' : 'left-submenu-1'}>
                        <ListItemIcon>
                            <CheckBoxOutlinedIcon fontSize="small" />
                        </ListItemIcon>
                        {(toggle && testing )?<Typography variant="body2">Dashboard 2</Typography>: null}
                        </MenuItem>
                        <MenuItem onClick={(event) => handleListItemClick('dashboard2')} className={(toggle && testing )? 'left-submenu-2' : 'left-submenu-1'}>
                        <ListItemIcon>
                            <BookmarkBorderOutlinedIcon fontSize="small" />
                        </ListItemIcon>
                        {(toggle && testing )?<Typography variant="body2" noWrap>
                        Dashboard 3
                        </Typography>:null}
                        </MenuItem>
                    </MenuList>
                  :
                  null
              }
              
              <ListItem className={(currentSelectedMenu == 'uiKit')? 'left-menu-item' : ''} selected={currentSelectedMenu == 'uiKit'}  onClick={() => handleListItemClick('uiKit')}>
                <ListItemButton >
                    <ListItemIcon>
                        <StarOutlineOutlinedIcon />
                    </ListItemIcon>
                    {toggle? <ListItemText><Typography variant="body2" noWrap>UI Kit</Typography> </ListItemText>: null}
                </ListItemButton>
              </ListItem>
              <ListItem className={(currentSelectedMenu == 'utilities')? 'left-menu-item' : ''} selected={currentSelectedMenu == 'utilities'}  onClick={() => handleListItemClick('utilities')}>
                <ListItemButton >
                    <ListItemIcon>
                        <ExploreOutlinedIcon />
                    </ListItemIcon>
                    {toggle? <ListItemText><Typography variant="body2" noWrap>Utilities</Typography> </ListItemText>: null}
                </ListItemButton>
              </ListItem>
              <ListItem  className={(currentSelectedMenu == 'pages')? 'left-menu-item' : ''} selected={currentSelectedMenu == 'pages'}  onClick={() => handleListItemClick('pages')}>
                <ListItemButton >
                    <ListItemIcon>
                        <WorkOutlineOutlinedIcon />
                    </ListItemIcon>
                    {toggle? <ListItemText><Typography variant="body2" noWrap>Pages</Typography> </ListItemText>: null}
                </ListItemButton>
              </ListItem>
              <ListItem  className={(currentSelectedMenu == 'hirerachy')? 'left-menu-item' : ''} selected={currentSelectedMenu == 'hirerachy'}  onClick={() => handleListItemClick('hirerachy')}>
                <ListItemButton >
                    <ListItemIcon>
                        <ListOutlinedIcon />
                    </ListItemIcon>
                    {toggle? <ListItemText><Typography variant="body2" noWrap>Hirerachy</Typography> </ListItemText>: null}
                </ListItemButton>
              </ListItem>
              <ListItem className={(currentSelectedMenu == 'start')? 'left-menu-item' : ''} selected={currentSelectedMenu == 'start'}  onClick={(event) => handleListItemClick('start')}>
                <ListItemButton >
                    <ListItemIcon>
                        <FileDownloadOutlinedIcon />
                    </ListItemIcon>
                    {toggle? <ListItemText><Typography variant="body2" noWrap>Start</Typography> </ListItemText>: null}
                </ListItemButton>
              </ListItem>
          </List>
        </Box>
      );

      const changeMenu=(data: any)=>{

        setSelectedValue(data)
        if(data){
          setMenuMode(1)
          setDrawerWidth(62);
        }
        else{
          setMenuMode(2)
          setDrawerWidth(0);
        }
      }

      const changeTheme = (test: any) => {
        if (test === 1) {
          setTheme(baseTheme)
        }
        else if (test === 2) {
          setTheme(theme1)
        }
        else if (test === 3) {
          setTheme(theme2)
        }
    
      }

  return (
    <Box sx={{ flexGrow: 1 }}>
    <AppBar position="static">
        <Toolbar>
          {
            menuMode === 2 && !tabView ?
            <>
            <IconButton>
            <Avatar className='org-horizontal-menu-logo' src={logo4} onClick={() => toggleDrawer()}  alt="logo" variant="square" />
            </IconButton>
            <IconButton>
                 <Avatar className='horizontal-menu-logo' src={logo2} onClick={() => toggleDrawer()}  alt="logo" variant="square" />
             </IconButton>

            </>
           :
           null
          }
           {
           tabView? 
            <>
            <IconButton color="inherit" onClick={()=>toggleDrawer()}>
                <MenuIcon />
            </IconButton>
            <IconButton>
                  <Avatar className='org-desktop-logo' src={logo3} onClick={() => toggleDrawer()}  alt="logo" variant="square" />
                  <Avatar className='mobile-logo' src={logo} onClick={() => toggleDrawer()}  alt="logo" variant="square" />
              </IconButton>
            </>
            :
            null 
           }

           {
             (menuMode === 2) ?
             <div className="horizontal-menu">
               <Button size="medium" className={(currentSelectedMenu == 'dashboard' || currentSelectedMenu == 'dashboard1' || currentSelectedMenu == 'dashboard2') ? "horizontal-menu-btn selected-menu" : "horizontal-menu-btn"} onClick={handleClick2} 
                  aria-controls={open1 ? 'basic-menu' : undefined}
                  aria-haspopup="true" 
                  aria-expanded={open1 ? 'true' : undefined}>
                  <HomeOutlinedIcon className="horizontal-menu-dropdown-list-icon"/><Typography variant="body2"> Dashboard </Typography><KeyboardArrowDownIcon  /></Button>
               
               <Menu
                  anchorEl={anchorEl1}
                  open={open1}
                  onClose={handleClose1}
                  MenuListProps={{
                  'aria-labelledby': 'basic-button',
                  }}
                >
                <MenuItem onClick={(event) => handleListItemClick('dashboard')} className="horizontal-menu-dropdown-list selected-menu"><BadgeOutlinedIcon fontSize="small" className="horizontal-menu-dropdown-list-icon"/><Typography variant="body2">Dashboard 1</Typography></MenuItem>
                <MenuItem onClick={(event) => handleListItemClick('dashboard1')} className="horizontal-menu-dropdown-list"><CheckBoxOutlinedIcon fontSize="small" className="horizontal-menu-dropdown-list-icon"/><Typography variant="body2">Dashboard 2</Typography></MenuItem>
                <MenuItem onClick={(event) => handleListItemClick('dashboard2')} className="horizontal-menu-dropdown-list"><BookmarkBorderOutlinedIcon fontSize="small" className="horizontal-menu-dropdown-list-icon"/><Typography variant="body2">Dashboard 3</Typography></MenuItem>
              </Menu>

               <Button size="medium" className={currentSelectedMenu == 'uiKit' ? "horizontal-menu-btn selected-menu" : "horizontal-menu-btn"} onClick={(event) => handleListItemClick('uiKit')} ><StarOutlineOutlinedIcon /><Typography variant="body2"> UI Kit </Typography></Button>
               <Button size="medium" className={currentSelectedMenu == 'utilities' ? "horizontal-menu-btn selected-menu" : "horizontal-menu-btn"} onClick={(event) => handleListItemClick('utilities')} ><ExploreOutlinedIcon /><Typography variant="body2"> Utilities </Typography></Button>
               <Button size="medium" className={currentSelectedMenu == 'pages' ? "horizontal-menu-btn selected-menu" : "horizontal-menu-btn"} onClick={(event) => handleListItemClick('pages')} ><WorkOutlineOutlinedIcon /><Typography variant="body2"> Pages </Typography></Button>
               <Button size="medium" className={currentSelectedMenu == 'hirerachy' ? "horizontal-menu-btn selected-menu" : "horizontal-menu-btn"} onClick={(event) => handleListItemClick('hirerachy')}  ><ListOutlinedIcon /><Typography variant="body2"> Hirerachy </Typography></Button>
               <Button size="medium" className={currentSelectedMenu == 'start' ? "horizontal-menu-btn selected-menu" : "horizontal-menu-btn"} onClick={(event) => handleListItemClick('start')} ><FileDownloadOutlinedIcon /><Typography variant="body2"> Start </Typography></Button>
             </div>
             :
             null
           }

            <Box sx={{ flexGrow: 1 }} />
            {
                !tabView
                ?
                <>
                    <div>
                        <Button
                            aria-controls={open ? 'basic-menu' : undefined}
                            aria-haspopup="true"
                            aria-expanded={open ? 'true' : undefined}
                            onClick={handleClick1}
                        >
                          <Typography variant="body2">  Themes </Typography>
                        </Button>
                        <Menu
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                            MenuListProps={{
                            'aria-labelledby': 'basic-button',
                            }}
                        >
                        <MenuItem>Menu Mode</MenuItem>
                        <MenuItem className="menu-mode" onClick={() => changeMenu(true)}><BpRadio {...controlProps(true)} />Sidebar</MenuItem>
                        <MenuItem className="menu-mode" onClick={() => changeMenu(false)}><BpRadio {...controlProps(false)} />Horizontal</MenuItem>
                        <Divider />
                            <MenuItem>Themes</MenuItem>
                            <MenuItem>
                              <span onClick={() => changeTheme(1)} className="theme-menu default-theme"></span>
                              <span onClick={() => changeTheme(2)} className="theme-menu green-theme"></span>
                              <span onClick={() => changeTheme(3)} className="theme-menu orange-theme"></span>
                            </MenuItem>
                        </Menu>
                    </div>
                    <Box>
                        <IconButton color="inherit">
                            <SearchOutlinedIcon />
                        </IconButton>
                        <IconButton
                            color="inherit"
                        >
                            <Avatar className={tabView? 'mobile-login-user-img' : 'desktop-login-user-img'} src={userimg} alt="logo" variant="square" />
                        </IconButton>
                        <IconButton
                            color="inherit"
                        >
                            <KeyboardBackspaceOutlinedIcon  fontSize="small" />
                        </IconButton>
                    </Box>
                </>
                :
                <Box>
                    <IconButton
                    size="large"
                    aria-label="show more"
                    aria-controls={mobileMenuId}
                    aria-haspopup="true"
                    onClick={handleMobileMenuOpen}
                    color="inherit"
                    >
                    <MoreIcon />
                    </IconButton>
                </Box>
            }
        </Toolbar>
    </AppBar>

    {renderMobileMenu}
    
    {
      selectedValue  ?
      <Drawer
        sx={{
            width: tabView?'auto': drawerWidth,
            flexShrink: 0,
            '& .MuiDrawer-paper': {
                width: tabView ? (toggle ? '200' : '0') : (toggle ? '200' : drawerWidth),
                top: tabView? drawerWidth+'px' : '0px',
                boxShadow: '0px 10px 40px rgb(41 50 65 / 6%)',
                borderRight: '0px solid rgba(0, 0, 0, 0.12)'
            },
            }}
            variant="permanent"
            anchor="left"
            open={state}
        >
            {list("left")}
      </Drawer>
      :
      null

    }
    </Box>
  );
}
