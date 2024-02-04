import { makeStyles } from '@mui/styles';

const drawerWidth = 62;

const useStyles = makeStyles((theme: any) =>({
    root: {
        color: theme.palette.primary.main,
      "&, &:before": {
        content: '""',
        backgroundColor: theme.palette.primary.main,
        width: '4px',
        height: '12px',
        display: 'block',
        borderRadius: '0px 3px 3px 0px',
        position: 'absolute',
      },
      "& .MuiListItemIcon-root": {
        color: theme.palette.primary.main
        }
    },
    test1: {
        paddingLeft: '40px !important',
    },
    test2: {
        paddingLeft: '23px !important',
        top: '-5px',
    },
    mainComponets:{
        width: (theme.breakpoints.up('md'))? `calc(100% - ${drawerWidth}px)` : '100%', 
        minHeight: '90vh', 
    }
  })
);

const GlobalStyles = () => {
  useStyles();

  return null;
};

export default GlobalStyles;