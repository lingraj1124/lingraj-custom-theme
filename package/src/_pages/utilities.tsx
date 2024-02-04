import * as React from 'react';
import Box from '@mui/material/Box';
import {Item} from '../_components/item'
import { Grid } from '@mui/material';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';
import Button from '@mui/material/Button';
import StarIcon from '@mui/icons-material/Star';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import ButtonGroup from '@mui/material/ButtonGroup';
import IconButton from '@mui/material/IconButton';
import CheckOutlinedIcon from '@mui/icons-material/CheckOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import ClearOutlinedIcon from '@mui/icons-material/ClearOutlined';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Grow from '@mui/material/Grow';
import Paper from '@mui/material/Paper';
import Popper from '@mui/material/Popper';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import ReplayIcon from '@mui/icons-material/Replay';

import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import InfoIcon from '@mui/icons-material/Info';
import SettingsIcon from '@mui/icons-material/Settings';
import LoadingButton from '@mui/lab/LoadingButton';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';

  export default function Utilities() {

    const [open, setOpen] = React.useState(false);
    const anchorRef = React.useRef<HTMLDivElement>(null);
    
    const [open1, setOpen1] = React.useState(false);
    const anchorRef1 = React.useRef<HTMLDivElement>(null);
    
    const [open2, setOpen2] = React.useState(false);
    const anchorRef2 = React.useRef<HTMLDivElement>(null);
    
    const [open3, setOpen3] = React.useState(false);
    const anchorRef3 = React.useRef<HTMLDivElement>(null);

    const [loading1, setLoading1] = React.useState(false);
    const [loading2, setLoading2] = React.useState(false);
    const [loading3, setLoading3] = React.useState(false);
    const [loading4, setLoading4] = React.useState(false);
  
    const handleClick = (type: any) => {
        if(type == 1){
            setLoading1(!loading1);
            setTimeout(() => {
                setLoading1(false);
              }, 2000);
        }
        else if(type == 2){
            setLoading2(!loading2);
            setTimeout(() => {
                setLoading2(false);
              }, 2000);
        }
        else if(type == 3){
            setLoading3(!loading3);
            setTimeout(() => {
                setLoading3(false);
              }, 2000);
        }
        else if(type == 4){
            setLoading4(!loading4);
            setTimeout(() => {
                setLoading4(false);
              }, 2000);
        }
    };
  
    const handleToggle = () => {
      setOpen((prevOpen) => !prevOpen);
    };
  
    const handleToggle1 = () => {
        setOpen1((prevOpen1) => !prevOpen1);
      };
      const handleToggle2 = () => {
        setOpen2((prevOpen2) => !prevOpen2);
      };
      const handleToggle3 = () => {
        setOpen3((prevOpen3) => !prevOpen3);
      };
    const handleClose = (event: Event) => {
      if (
        anchorRef.current &&
        anchorRef.current.contains(event.target as HTMLElement)
      ) {
        return;
      }
      setOpen(false);
    };
    const handleClose2 = (event: Event) => {
      if (
        anchorRef2.current &&
        anchorRef2.current.contains(event.target as HTMLElement)
      ) {
        return;
      }
      setOpen2(false);
    };
    const handleClose3 = (event: Event) => {
      if (
        anchorRef3.current &&
        anchorRef3.current.contains(event.target as HTMLElement)
      ) {
        return;
      }
      setOpen3(false);
    };

    
    const handleClose1 = (event: Event) => {
        if (
          anchorRef1.current &&
          anchorRef1.current.contains(event.target as HTMLElement)
        ) {
          return;
        }
        setOpen1(false);
      };
  

  
    return (
        <>
        <Box> 
            <Grid container>
                <Grid item md={6} sm={12} xs={12}>
                    <Item>
                        <Typography variant="h5">Default</Typography>
                        <Button variant="contained" color="primary">submit</Button>
                        <Button variant="contained" color="primary" disabled>disabled</Button>
                        <Button href="#text-buttons">Link</Button>

                    </Item>
                </Grid>
                
                <Grid item md={6} sm={12} xs={12}>
                    <Item>
                        <Typography variant="h5">Icons</Typography>
                        <Button className="icon-btn" variant="contained" color="primary"><StarIcon /></Button>
                        <Button variant="contained" color="primary" startIcon={<BookmarkBorderOutlinedIcon />}>submit</Button>
                        <Button variant="contained" color="primary" endIcon={<BookmarkBorderOutlinedIcon />}>submit</Button>
                    </Item>
                </Grid>
                
                <Grid item md={6} sm={12} xs={12}>
                    <Item>
                        <Typography variant="h5">Severities</Typography>
                        <Button variant="contained" color="primary">primary</Button>
                        <Button variant="contained" color="secondary">Secondary</Button>
                        <Button variant="contained" color="success">Success</Button>
                        <Button variant="contained" color="info">Info</Button>
                        <Button variant="contained" color="warning">Warning</Button>
                        <Button variant="contained" color="error">Danger</Button>
                    </Item>
                </Grid>
                
                <Grid item md={6} sm={12} xs={12}>
                    <Item>
                        <Typography variant="h5">Raised</Typography>
                        <Button variant="contained" color="primary">primary</Button>
                        <Button variant="contained" color="secondary">Secondary</Button>
                        <Button variant="contained" color="success">Success</Button>
                        <Button variant="contained" color="info">Info</Button>
                        <Button variant="contained" color="warning">Warning</Button>
                        <Button variant="contained" color="error">Danger</Button>
                    </Item>
                </Grid>
                
                <Grid item md={6} sm={12} xs={12}>
                    <Item>
                        <Typography variant="h5">Text</Typography>
                        <Button size="medium" color="primary">primary</Button>
                        <Button size="medium" color="secondary">Secondary</Button>
                        <Button size="medium" color="success">Success</Button>
                        <Button size="medium" color="info">Info</Button>
                        <Button size="medium" color="warning">Warning</Button>
                        <Button size="medium" color="error">Danger</Button>
                    </Item>
                </Grid>

                <Grid item md={6} sm={12} xs={12}>
                    <Item>
                        <Typography variant="h5">Rounded</Typography>
                        <Button variant="contained" className="rounded-btn" size="medium" color="primary">primary</Button>
                        <Button variant="contained" className="rounded-btn" size="medium" color="secondary">Secondary</Button>
                        <Button variant="contained" className="rounded-btn" size="medium" color="success">Success</Button>
                        <Button variant="contained" className="rounded-btn" size="medium" color="info">Info</Button>
                        <Button variant="contained" className="rounded-btn" size="medium" color="warning">Warning</Button>
                        <Button variant="contained" className="rounded-btn" size="medium" color="error">Danger</Button>
                    </Item>
                </Grid>
                
                <Grid item md={6} sm={12} xs={12}>
                    <Item>
                        <Typography variant="h5">Outlined</Typography>
                        <Button variant="outlined" color="primary">primary</Button>
                        <Button variant="outlined" color="secondary">Secondary</Button>
                        <Button variant="outlined" color="success">Success</Button>
                        <Button variant="outlined" color="info">Info</Button>
                        <Button variant="outlined" color="warning">Warning</Button>
                        <Button variant="outlined" color="error">Danger</Button>
                    </Item>
                </Grid>
                
                <Grid item md={6} sm={12} xs={12}>
                    <Item>
                        <Typography variant="h5">Rounded Icons</Typography>
                        <Button className="rounded-btn-icons" variant="contained" color="primary"><CheckOutlinedIcon /></Button>
                        <Button className="rounded-btn-icons" variant="contained" color="secondary"><BookmarkBorderOutlinedIcon /></Button>
                        <Button className="rounded-btn-icons" variant="contained" color="success"><SearchOutlinedIcon /></Button>
                        <Button className="rounded-btn-icons" variant="contained" color="info"><PersonOutlineOutlinedIcon /></Button>
                        <Button className="rounded-btn-icons" variant="contained" color="warning"><NotificationsNoneOutlinedIcon /></Button>
                        <Button className="rounded-btn-icons" variant="contained" color="error"><ClearOutlinedIcon /></Button>
                    </Item>
                </Grid>
                
                <Grid item md={6} sm={12} xs={12}>
                    <Item>
                        <Typography variant="h5">Button Set</Typography>
                        <ButtonGroup variant="contained">
                            <Button variant="contained" color="primary" startIcon={<CheckOutlinedIcon />}>save</Button>
                            <Button variant="contained" color="primary" startIcon={<DeleteOutlinedIcon />}>save</Button>
                            <Button variant="contained" color="primary" startIcon={<ClearOutlinedIcon />}>save</Button>
                        </ButtonGroup>
                    </Item>
                </Grid>

                
                <Grid item md={6} sm={12} xs={12}>
                    <Item>
                        <Typography variant="h5">Rounded Text</Typography>
                        <IconButton color="primary">
                            <CheckOutlinedIcon />
                        </IconButton>
                        <IconButton color="secondary">
                            <BookmarkBorderOutlinedIcon />
                        </IconButton>
                        <IconButton color="success">
                            <SearchOutlinedIcon />
                        </IconButton>
                        <IconButton color="info">
                            <PersonOutlineOutlinedIcon />
                        </IconButton>
                        <IconButton color="warning">
                            <NotificationsNoneOutlinedIcon />
                        </IconButton>
                        <IconButton color="error">
                            <ClearOutlinedIcon />
                        </IconButton>
                    </Item>
                </Grid>

                
                <Grid item md={6} sm={12} xs={12}>
                    <Item>
                        <Typography variant="h5">SplitButton</Typography>
                        <React.Fragment>
                        <ButtonGroup color="primary" className="split-btn-grp" variant="contained" ref={anchorRef} aria-label="split button">
                            <Button startIcon={<AddOutlinedIcon />} >Save</Button>
                            <Button className="split-btn-grp-btn"
                            size="small"
                            aria-controls={open1 ? 'split-button-menu' : undefined}
                            aria-expanded={open1 ? 'true' : undefined}
                            aria-label="select merge strategy"
                            aria-haspopup="menu"
                            onClick={handleToggle}
                            >
                            <ArrowDropDownIcon />
                            </Button>
                        </ButtonGroup>

                        <ButtonGroup color="success" className="split-btn-grp" variant="contained" ref={anchorRef} aria-label="split button">
                            <Button startIcon={<AddOutlinedIcon />} >Save</Button>
                            <Button className="split-btn-grp-btn"
                            size="small"
                            aria-controls={open ? 'split-button-menu' : undefined}
                            aria-expanded={open ? 'true' : undefined}
                            aria-label="select merge strategy"
                            aria-haspopup="menu"
                            onClick={handleToggle}
                            >
                            <ArrowDropDownIcon />
                            </Button>
                        </ButtonGroup>

                        <ButtonGroup color="warning" className="split-btn-grp" variant="contained" ref={anchorRef1} aria-label="split button">
                            <Button startIcon={<AddOutlinedIcon />} >Save</Button>
                            <Button className="split-btn-grp-btn"
                            size="small"
                            aria-controls={open ? 'split-button-menu' : undefined}
                            aria-expanded={open ? 'true' : undefined}
                            aria-label="select merge strategy"
                            aria-haspopup="menu"
                            onClick={handleToggle1}
                            >
                            <ArrowDropDownIcon />
                            </Button>
                        </ButtonGroup>
                        
                        <ButtonGroup color="info" className="split-btn-grp" variant="contained" ref={anchorRef2} aria-label="split button">
                            <Button startIcon={<AddOutlinedIcon />} >Save</Button>
                            <Button className="split-btn-grp-btn"
                            size="small"
                            aria-controls={open ? 'split-button-menu' : undefined}
                            aria-expanded={open ? 'true' : undefined}
                            aria-label="select merge strategy"
                            aria-haspopup="menu"
                            onClick={handleToggle2}
                            >
                            <ArrowDropDownIcon />
                            </Button>
                        </ButtonGroup>
                        
                        <ButtonGroup color="error" className="split-btn-grp" variant="contained" ref={anchorRef3} aria-label="split button">
                            <Button startIcon={<AddOutlinedIcon />} >Save</Button>
                            <Button className="split-btn-grp-btn"
                            size="small"
                            aria-controls={open ? 'split-button-menu' : undefined}
                            aria-expanded={open ? 'true' : undefined}
                            aria-label="select merge strategy"
                            aria-haspopup="menu"
                            onClick={handleToggle3}
                            >
                            <ArrowDropDownIcon />
                            </Button>
                        </ButtonGroup>

                        <Popper
                            open={open}
                            anchorEl={anchorRef.current}
                            role={undefined}
                            transition
                            disablePortal
                        >
                            {({ TransitionProps, placement }) => (
                            <Grow
                                {...TransitionProps}
                                style={{
                                transformOrigin:
                                    placement === 'bottom' ? 'center top' : 'center bottom',
                                }}
                            >
                                <Paper>
                                <ClickAwayListener onClickAway={handleClose}>
                                    <MenuList>
                                            <MenuItem>
                                            <ListItemIcon>
                                                <ReplayIcon fontSize="small" />
                                            </ListItemIcon>
                                            <ListItemText><Typography variant="subtitle1">Update</Typography></ListItemText>
                                            </MenuItem>
                                            <MenuItem>
                                            <ListItemIcon>
                                                <ClearOutlinedIcon fontSize="small" />
                                            </ListItemIcon>
                                            <ListItemText><Typography variant="subtitle1">Delete</Typography></ListItemText>
                                            </MenuItem>
                                            <MenuItem>
                                            <ListItemIcon>
                                                <InfoIcon fontSize="small" />
                                            </ListItemIcon>
                                            <ListItemText><Typography variant="subtitle1">Angular.io</Typography></ListItemText>
                                            </MenuItem>
                                            <Divider />
                                            <MenuItem>
                                            <ListItemIcon>
                                                <SettingsIcon fontSize="small" />
                                            </ListItemIcon>
                                            <ListItemText><Typography variant="subtitle1">Setup</Typography></ListItemText>
                                            </MenuItem>
                                        </MenuList>
                                </ClickAwayListener>
                                </Paper>
                            </Grow>
                            )}
                        </Popper>

                        
                        <Popper
                            open={open1}
                            anchorEl={anchorRef1.current}
                            role={undefined}
                            transition
                            disablePortal
                        >
                            {({ TransitionProps, placement }) => (
                            <Grow
                                {...TransitionProps}
                                style={{
                                transformOrigin:
                                    placement === 'bottom' ? 'center top' : 'center bottom',
                                }}
                            >
                                <Paper>
                                <ClickAwayListener onClickAway={handleClose1}>
                                    <MenuList>
                                            <MenuItem>
                                            <ListItemIcon>
                                                <ReplayIcon fontSize="small" />
                                            </ListItemIcon>
                                            <ListItemText><Typography variant="subtitle1">Update</Typography></ListItemText>
                                            </MenuItem>
                                            <MenuItem>
                                            <ListItemIcon>
                                                <ClearOutlinedIcon fontSize="small" />
                                            </ListItemIcon>
                                            <ListItemText><Typography variant="subtitle1">Delete</Typography></ListItemText>
                                            </MenuItem>
                                            <MenuItem>
                                            <ListItemIcon>
                                                <InfoIcon fontSize="small" />
                                            </ListItemIcon>
                                            <ListItemText><Typography variant="subtitle1">Angular.io</Typography></ListItemText>
                                            </MenuItem>
                                            <Divider />
                                            <MenuItem>
                                            <ListItemIcon>
                                                <SettingsIcon fontSize="small" />
                                            </ListItemIcon>
                                            <ListItemText><Typography variant="subtitle1">Setup</Typography></ListItemText>
                                            </MenuItem>
                                        </MenuList>
                                </ClickAwayListener>
                                </Paper>
                            </Grow>
                            )}
                        </Popper>
                        
                        <Popper
                            open={open2}
                            anchorEl={anchorRef2.current}
                            role={undefined}
                            transition
                            disablePortal
                        >
                            {({ TransitionProps, placement }) => (
                            <Grow
                                {...TransitionProps}
                                style={{
                                transformOrigin:
                                    placement === 'bottom' ? 'center top' : 'center bottom',
                                }}
                            >
                                <Paper>
                                <ClickAwayListener onClickAway={handleClose2}>
                                    <MenuList>
                                            <MenuItem>
                                            <ListItemIcon>
                                                <ReplayIcon fontSize="small" />
                                            </ListItemIcon>
                                            <ListItemText><Typography variant="subtitle1">Update</Typography></ListItemText>
                                            </MenuItem>
                                            <MenuItem>
                                            <ListItemIcon>
                                                <ClearOutlinedIcon fontSize="small" />
                                            </ListItemIcon>
                                            <ListItemText><Typography variant="subtitle1">Delete</Typography></ListItemText>
                                            </MenuItem>
                                            <MenuItem>
                                            <ListItemIcon>
                                                <InfoIcon fontSize="small" />
                                            </ListItemIcon>
                                            <ListItemText><Typography variant="subtitle1">Angular.io</Typography></ListItemText>
                                            </MenuItem>
                                            <Divider />
                                            <MenuItem>
                                            <ListItemIcon>
                                                <SettingsIcon fontSize="small" />
                                            </ListItemIcon>
                                            <ListItemText><Typography variant="subtitle1">Setup</Typography></ListItemText>
                                            </MenuItem>
                                        </MenuList>
                                </ClickAwayListener>
                                </Paper>
                            </Grow>
                            )}
                        </Popper>
                        
                        
                        <Popper
                            open={open3}
                            anchorEl={anchorRef3.current}
                            role={undefined}
                            transition
                            disablePortal
                        >
                            {({ TransitionProps, placement }) => (
                            <Grow
                                {...TransitionProps}
                                style={{
                                transformOrigin:
                                    placement === 'bottom' ? 'center top' : 'center bottom',
                                }}
                            >
                                <Paper>
                                <ClickAwayListener onClickAway={handleClose3}>
                                    <MenuList>
                                            <MenuItem>
                                            <ListItemIcon>
                                                <ReplayIcon fontSize="small" />
                                            </ListItemIcon>
                                            <ListItemText><Typography variant="subtitle1">Update</Typography></ListItemText>
                                            </MenuItem>
                                            <MenuItem>
                                            <ListItemIcon>
                                                <ClearOutlinedIcon fontSize="small" />
                                            </ListItemIcon>
                                            <ListItemText><Typography variant="subtitle1">Delete</Typography></ListItemText>
                                            </MenuItem>
                                            <MenuItem>
                                            <ListItemIcon>
                                                <InfoIcon fontSize="small" />
                                            </ListItemIcon>
                                            <ListItemText><Typography variant="subtitle1">Angular.io</Typography></ListItemText>
                                            </MenuItem>
                                            <Divider />
                                            <MenuItem>
                                            <ListItemIcon>
                                                <SettingsIcon fontSize="small" />
                                            </ListItemIcon>
                                            <ListItemText><Typography variant="subtitle1">Setup</Typography></ListItemText>
                                            </MenuItem>
                                        </MenuList>
                                </ClickAwayListener>
                                </Paper>
                            </Grow>
                            )}
                        </Popper>
                        </React.Fragment>
                    </Item>
                </Grid>
                
                
                <Grid item md={6} sm={12} xs={12}>
                    <Item>
                        <Typography variant="h5">Rounded Outlined</Typography>
                        <Button className="rounded-btn-icons" variant="outlined" color="primary"><CheckOutlinedIcon /></Button>
                        <Button className="rounded-btn-icons" variant="outlined" color="secondary"><BookmarkBorderOutlinedIcon /></Button>
                        <Button className="rounded-btn-icons" variant="outlined" color="success"><SearchOutlinedIcon /></Button>
                        <Button className="rounded-btn-icons" variant="outlined" color="info"><PersonOutlineOutlinedIcon /></Button>
                        <Button className="rounded-btn-icons" variant="outlined" color="warning"><NotificationsNoneOutlinedIcon /></Button>
                        <Button className="rounded-btn-icons" variant="outlined" color="error"><ClearOutlinedIcon /></Button>
                    </Item>
                </Grid>

                
                
                <Grid item md={6} sm={12} xs={12}>
                    <Item>
                        <Typography variant="h5">Loading</Typography>

                        <LoadingButton
                        size="small"
                        onClick={()=>handleClick(1)}
                        startIcon={<SearchOutlinedIcon />}
                        loading={loading1}
                        loadingPosition="start"
                        variant="contained"
                        >
                        Search
                        </LoadingButton>
                        <LoadingButton
                        size="small"
                        onClick={()=>handleClick(2)}
                        endIcon={<SearchOutlinedIcon />}
                        loading={loading2}
                        loadingPosition="end"
                        variant="contained"
                        >
                        Search
                        </LoadingButton>

                        <LoadingButton
                        size="small" className="icon-btn"
                        loading={loading3}
                        onClick={()=>handleClick(3)}
                        variant="contained"
                        >
                        <SearchOutlinedIcon />
                        </LoadingButton>

                        <LoadingButton
                        size="small"
                        onClick={()=>handleClick(4)}
                        startIcon={loading4 ? <SearchOutlinedIcon /> : <></>}
                        loading={loading4}
                        loadingPosition="start"
                        variant="contained"
                        >
                        Search
                        </LoadingButton>
                    </Item>
                </Grid>
                
            </Grid>
        </Box>
        
        </>
    );
  }
  