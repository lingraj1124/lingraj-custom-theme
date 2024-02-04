import { createTheme } from "@mui/material/styles";
import type { } from '@mui/x-data-grid-pro/themeAugmentation';

const themeColor = '#34b56f';
const themeStripRowColor = "#b4e5c9"
const themeLightColor = '#11ff3526'
const whiteColor = '#ffffff';
const drawerWidth = 62;
const textTransform1 = 'capitalize'
const font_family = '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"';


const theme1 = createTheme({
  palette: {
    primary: {
      main: themeColor,
      light: themeLightColor,
    },
    secondary: {
      main: '#607D8B',
    },
    error: {
      main: '#D32F2F',
    },
    warning: {
      main: '#FBC02D',
    },
    info: {
      main: '#0288D1',
    },
    success: {
      main: '#689F38',
    },
  },
  typography: {
    body1: {
      fontFamily: font_family,
      color: '#293241cc',
      fontSize: '12px',
      fontWeight: 400,
    },
    body2: {
      margin: '5px',
      fontFamily: font_family,
      fontSize: '12px',
      fontWeight: 600,
    },
    h1: {
      margin: '15px 0 0.5rem 0',
      fontWeight: 600,
      lineHeight: 1.2,
      color: 'inherit',
      fontSize: '26px',
      fontFamily: font_family,
      '&:first-child': {
        marginTop: '0px'
      },
    },
    h2: {
      margin: '15px 0 0.5rem 0',
      fontWeight: 600,
      lineHeight: 1.2,
      color: 'inherit',
      fontSize: '24px',
      fontFamily: font_family,
      '&:first-child': {
        marginTop: '0px'
      },
    },
    h3: {
      margin: '15px 0 0.5rem 0',
      fontWeight: 600,
      lineHeight: 1.2,
      color: 'inherit',
      fontSize: '22px',
      fontFamily: font_family,
      '&:first-child': {
        marginTop: '0px'
      },
    },
    h4: {
      margin: '15px 0 0.5rem 0',
      fontWeight: 600,
      lineHeight: 1.2,
      color: 'inherit',
      fontSize: '20px',
      fontFamily: font_family,
      '&:first-child': {
        marginTop: '0px'
      },
    },
    h5: {
      margin: '15px 0 0.5rem 0',
      fontWeight: 600,
      lineHeight: 1.2,
      color: 'inherit',
      fontSize: '18px',
      fontFamily: font_family,
      '&:first-child': {
        marginTop: '0px'
      },
    },
    h6: {
      textTransform: textTransform1,
      margin: '15px 0 0.5rem 0',
      fontWeight: 600,
      lineHeight: 1.2,
      color: 'inherit',
      fontSize: '16px',
      fontFamily: font_family,
      '&:first-child': {
        marginTop: '0px',
      },
    },
    subtitle2: {
      marginLeft: '5px',
      fontWeight: 600,
      lineHeight: 1.2,
      color: 'inherit',
      fontSize: '14px',
      fontFamily: font_family,
      '&:first-child': {
        marginTop: '0px'
      },
    },
    subtitle1: {
      fontWeight: 400,
      lineHeight: 1.2,
      color: 'inherit',
      fontSize: '14px',
      fontFamily: font_family,
      '&:first-child': {
        marginTop: '0px'
      },
    },
  },
  shape: {
    borderRadius: 4
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 575,
      md: 768,
      lg: 991,
      xl: 1200,
    },
  },
  components: {
    MuiAppBar: {
      defaultProps: {
        sx: {
          maxHeight: drawerWidth,
          background: whiteColor,
          position: 'fixed',
          zIndex: 999,
          boxShadow: '0 10px 40px 0 rgb(41 50 65 / 6%)',
          color: "#293241",
        }
      }
    },
    MuiListItemIcon: {
      defaultProps: {
        sx: {
          color: '#293241',
          minWidth: '32px',
          fontSize: '26px'
        }
      }
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          background: whiteColor,
          margin: '0px !important',
          '& .dataGrid-paper': {
            height: 'auto',
            width: '100%'
          },
          '& .MuiBox-root': {
            '& .mui-box-1': {
              height: 'auto', width: '100%', border: '1px solid rgba(70, 77, 242, 0.2)', 
              backgroundColor: '#FCFCFC'
            },
            '& .mui-box-2': {
              height: 650, width: '100%'
            }
          },
          '& .mui-table-title': {
            marginBottom: '18px',
            fontFamily: 'inherit',
            fontWeight: '600',
            fontSize: '1.25rem'
          },
          '& .MuiTabPanel-root':{
            padding: '0px',
            background: '#ffffff',
            margin: '0px 5px',
            borderRadius: '10px'
          }
        }
      },
      defaultProps: {
        elevation: 0
      }
    },
    MuiListItem: {
      defaultProps: {
        sx: {
          padding: '5px 0px',
          height: '55px'
        }
      },
      styleOverrides: {
        root: {
          paddingTop: '16px',
          '&.block-type-list-item':{
            margin: '10px 0px',
            borderLeft: '4px solid green',
            boxShadow: '0px 1px 15px 3px #ccc',
            borderRadius: '5px',
            backgroundColor: '#fff',
            height: '70px',
            minWidth: '991px'
          },
          '& :hover': {
            color: themeColor,
            "& .MuiListItemIcon-root": {
              color: themeColor
            }
          },
          '&.left-menu-item': {
            color: themeColor,
            "&:before": {
              content: '""',
              backgroundColor: themeColor,
              width: '4px',
              height: '12px',
              display: 'block',
              borderRadius: '0px 3px 3px 0px',
              position: 'absolute',
            },
            "& .MuiListItemIcon-root": {
              color: themeColor
            },
            '&.Mui-selected': {
              backgroundColor: whiteColor + ' !important',
              color: themeColor + ' !important',
              '& .MuiSvgIcon-root': {
                color: themeColor + ' !important'
              },
              '& .MuiTypography-root': {
                color: themeColor
              },
            },
          },
        },
      }
    },
    MuiAvatar: {
      defaultProps:{
          sx:{
            width: '100%',
            height: '100%'
          }
      },
      styleOverrides: {
        root: {
          '&.mobile-logo': {
            padding: '10px 5px 10px',
            width: '17px',
            height: '20px',
          },
          '&.desktop-logo': {
            margin: '10px 22px 22px',
            width: '17px',
            height: '20px',
          },
          '&.org-desktop-logo': {
            margin: '10px 13px 13px',
            width: '35px',
            height: '35px',
          },
          '&.exp-panel-desktop-logo': {
            margin: '10px 22px 22px',
            width: '75px',
            height: '20px',
          },
          '&.exp-panel-org-desktop-logo': {
            margin: '10px 13px 13px',
            width: '123px',
            height: '35px',
          },
          '&.desktop-login-user-img': {
            height: '28px',
            width: '28px',
            margin: '0px 20px'
          },
          '&.mobile-login-user-img': {
            height: '28px',
            width: '28px',
            padding: '0px 0px'
          },
          '&.horizontal-menu-logo':{
            '& img':{
              height: '16px',
              width: '58px'
            }
          },
          '&.org-horizontal-menu-logo':{
            '& img':{
              height: '25px',
              width: '90px'
            }
          },
          '@media screen and (max-width: 991px)': {
            '&.horizontal-menu-logo':{
              display: 'none'
            }
          },
        }
      }
    },
    MuiToolbar: {
      defaultProps: {
        sx: {
          minHeight: drawerWidth,
          '& .horizontal-menu': {
            marginTop: '5px',
            marginLeft: '10px',
            '& .MuiButton-root': {
              color: '#293241',
            },
            '& .horizontal-menu-btn':{
                marginRight: '0px !important'
            },
            '& .horizontal-menu-btn.selected-menu':{
              color: themeColor
            },
            '& .horizontal-menu-btn:hover':{
              backgroundColor: themeLightColor
            }
          },
          '@media screen and (max-width: 991px)': {
            '& .horizontal-menu':{
              display: 'none'
            }
          },
          '@media screen and (min-width: 575px)': {
            paddingLeft: '10px',
            paddingRight: '10px'
          },
          '@media screen and (max-width: 575px)': {
            paddingLeft: '10px',
            paddingRight: '10px'
          },
        }
      }
    },
    MuiSvgIcon: {
      defaultProps: {
        sx: {
          fontSize: 30,
        }
      }
    },
    MuiMenuItem: {
      defaultProps: {
        sx: {
          '& .theme-menu': {
            width: '26px',
            height: '26px',
            borderRadius: '26px',
            display: 'block',
            position: 'relative',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'transform 0.2s',
            boxShadow: '0 0.125rem 0.25rem rgb(0 0 0 / 8%)',
            marginRight: '5px'
          },
          '&.menu-mode':{
              padding: '0px 5px',
          },
          '&.horizontal-menu-dropdown-list':{
            padding: '0px 10px 0px 0px',
            margin: '0px 10px 5px 10px',
            borderRadius: '8px',
          },
          '&.horizontal-menu-dropdown-list.selected-menu':{
            color: themeColor,
            background: themeLightColor,
            '& .horizontal-menu-dropdown-list-icon':{
              color: themeColor,
            }
          },
          '&.horizontal-menu-dropdown-list:hover':{
            background: themeLightColor,
          },
          '& .horizontal-menu-dropdown-list-icon':{
            fontSize: '20px',
            color: '#92969e',
            margin: '5px 0px 5px 5px'
          },
          '& .default-theme': {
            backgroundColor: '#5297FF',
          },
          '& .green-theme': {
            backgroundColor: themeColor,
          },
          '& .orange-theme': {
            backgroundColor: '#ff810e',
          }
        }
      },
      styleOverrides: {
        root: {
          color: '#92969e',
          '& .MuiSvgIcon-root': {
            fontSize: 18,
            color: '#92969e',
          },
          '& .MuiListItemIcon-root': {
            minWidth: '25px'
          },
          '&.left-submenu-1': {
            paddingLeft: '23px',
            margin: '0px',
            top: '-5px',
          },
          '&.left-submenu-2': {
            margin: '0px 15px',
            '&:hover': {
              borderRadius: '11px',
              backgroundColor: themeLightColor
            }
          },
          '& .mobile-more-list': {
            color: '#000000de',
            fontSize: '24px'
          }
        }
      }
    },
    MuiGrid: {
      styleOverrides: {
        root: {
          '&.mobile-view-component': {
            width: '100%',
            minHeight: '90vh',
            padding: '32px 0px',
            backgroundColor: '#eef0f2'
          },
          '&.desktop-view-horizontal-menu-component': {
            minHeight: '90vh',
            width: '100%',
            padding: '30px 0px',
            marginLeft: '0px',
            backgroundColor: '#eef0f2'
          },
          '&.desktop-view-verticle-menu-component': {
            minHeight: '90vh',
            width: `calc(100% - `+drawerWidth+`px)`,
            padding: '30px 0px',
            marginLeft: drawerWidth+'px',
            backgroundColor: '#eef0f2'
          },
          '@media screen and (max-width: 991px)': {
            '&.desktop-view-verticle-menu-component': {
              width: '100%',
              marginLeft: '0px',
            },
            '&.horizontal-menu':{
              display: 'none'
            }
          },
          '@media screen and (min-width: 991px)': {
            '&.mobile-view-component': {
              width: `calc(100% - ${drawerWidth}px)`,
              marginLeft: drawerWidth,
            }
          },
          '&.desktop-view-verticle-menu-component > :first-child': {
            marginTop: '40px',
            marginLeft: '5px'
          },
          '&.desktop-view-horizontal-menu-component > :first-child': {
            marginTop: '40px',
            marginLeft: '5px'
          },
          '&.mobile-view-component > :first-child': {
            marginTop: '40px',
            marginLeft: '5px'
          },
          '& .rating-block': {
            '& .MuiSvgIcon-root': {
              width: '22px'
            }
          },
          '& .not-interested-icon': {
          color: '#ff000099'
        },
        '& .react-dropdown-tree-select .dropdown': {
          width: '98%'
        },
        '& .react-dropdown-tree-select .dropdown .dropdown-trigger.arrow' :{
          width: '100%'
        },
        
        '& .tag-item:last-child' :{
          width: '96%'
        },
        
        '& .tag-item .search' :{
          borderBottom: '0px !important'
          },
          '& .tag' :{
            borderRadius: '15px !important',
            backgroundColor: themeColor+' !important',
            padding: '5px 5px 5px 10px !important',
            color: 'white !important'
          },
          '& .react-dropdown-tree-select .dropdown .dropdown-trigger':{
            borderRadius: '5px'
          },
          '& .toggle:focus':{
            outline: '0px'
          },
          '& .react-dropdown-tree-select .dropdown .dropdown-content' :{
            width: '100%'
          },
          '& .tag-remove' :{
            color: 'white',
            fontSize: '100%'
          },
          '& .react-dropdown-tree-select .dropdown .dropdown-trigger:focus':{
            outline: '0px'
          },
          '& input[type="checkbox"]:checked':{
            backgroundColor: 'white',
            borderColor: 'white'
          }, 
          '& input[type="checkbox"]:checked:after':{
            width: '2px !important',
            height: '9px !important',
            border: 'solid '+themeColor,
            borderWidth: '0 2px 2px 0',
            transform: 'rotate(45deg)',
            content: '""',
            position: 'absolute',
            marginLeft: '4px',
          },
          '& input[type="checkbox"]':{
            appearance: 'none',
            width: '14px',
            height: '14px',
            border: '1px solid black'
          },
          '& input[type="checkbox"]:focus':{
            outline: '0px'
          },
          '& .node.checked':{
            backgroundColor: themeColor,
            color: 'white'
          },
          '& .node>label':{
            fontFamily: font_family
          },
        }
      }
    },
    MuiTextField: {
      defaultProps: {
        sx: {
          width: '100%',
          '& .MuiInputBase-colorPrimary.Mui-focused': {
            boxShadow: '0 0 0 0.2rem ' + themeColor,
            borderColor: themeColor
          },
          '& .MuiInputBase-inputSizeSmall': {
            height: '20px',
            fontSize: '14px',
            padding: '7px',
            color: '#69707A'
          },
          '& .MuiInputBase-sizeSmall': {
            borderRadius: '6px',
            paddingLeft: '7px',
            paddingRight: '7px',
            margin: '5px'
          },
          '& .MuiAutocomplete-clearIndicator': {
            padding: '2px'
          },
          '& .MuiAutocomplete-startAdornment': {
            right: '0px !important',
            background: themeColor,
            top: 'calc(50% - 18px)',
            padding: '1px',
            borderRadius: '2px 5px 5px 0px',
            '& .MuiIconButton-sizeMedium': {
              color: whiteColor + ' !important',

            }
          },
          '& .MuiSvgIcon-root+.MuiSvgIcon-root': {
            marginRight: '-7px',
            borderRadius: '0px 5px 5px 0px',
          }
        }
      },
      styleOverrides: {
        root: {
          '& .input-grp-startAdornment-text': {
            '& .MuiTypography-root': {
              background: themeColor,
              fontSize: '14px',
              padding: '7px',
              color: whiteColor,
              marginLeft: '-6px',
              borderRadius: '5px 0px 0px 5px',
              fontWeight: 'normal',
            }
          },
          '& .MuiAutocomplete-endAdornment': {
            right: '0px !important',
            padding: '6px',
            background: themeColor,
            top: 'calc(50% - 18px)',
            borderRadius: '2px 5px 5px 0px',
            '& .MuiIconButton-sizeMedium': {
              color: whiteColor + ' !important',
            }
          },

          '& .input-grp-startAdornment': {
            '& .MuiSvgIcon-root': {
              padding: '8px',
              background: '#dadbfc',
              color: '#83888F',
              marginLeft: '-6px',
              borderRadius: '5px 0px 0px 5px',
              fontSize: '18px'
            },
            '& .MuiSvgIcon-root+.MuiSvgIcon-root': {
              marginLeft: '0px',
              borderRadius: '0px',
              borderLeft: '1px solid #D4D6D9',
            }
          },
          '& .input-grp-endAdornment': {
            '& .MuiSvgIcon-root': {
              marginRight: '0px',
              borderRadius: '0px',
              borderLeft: '1px solid #D4D6D9',
              padding: '8px',
              background: '#dadbfc',
              color: '#83888F',
              fontSize: '18px'
            },
          }
        }
      }
    },
    MuiInputAdornment: {
      defaultProps: {
        sx: {
          margin: '0px'
        }
      },
      styleOverrides: {
        root: {
          '& .MuiSvgIcon-root': {
            fontSize: '25px',
          }
        }
      }
    },
    MuiRadio: {
      styleOverrides: {
        root: {
          '& .MuiSvgIcon-root': {
            fontSize: '25px'
          },
          '& .PrivateSwitchBase-input+span': {
            width: '20px',
            height: '20px',
          },
          '&.Mui-checked': {
            '& span': {
              backgroundColor: themeColor,
            },
            '& span:before': {
              display: 'block',
              width: '18.4px',
              height: '18px',
              backgroundImage: 'radial-gradient(' + whiteColor + ',' + whiteColor + ' 42%,transparent 47%)',
              content: '""',
              backgroundPositionX: '.8px',
              backgroundPositionY: '1px'
            }
          }
        },
      }
    },
    MuiFormControl: {
      styleOverrides: {
        root: {
          width: '100%',
          '& .MuiFormControlLabel-root': {
            marginLeft: '0px'
          }
        }
      }
    },
    MuiCheckbox: {
      defaultProps: {
        sx: {
          color: themeColor,
          borderRadius: '6px'
        }
      },
      styleOverrides: {
        root: {
          '& .MuiSvgIcon-fontSizeSmall': {
            width: '25px',
            height: '25px',
            borderRadius: '6px',
          },
          '&.Mui-checked': {
            color: themeColor,
          }
        }
      }
    },
    MuiSwitch: {
      styleOverrides: {
        root: {
          '& .Mui-checked': {
            color: themeColor + ' !important',
          },
          '& .Mui-checked+.MuiSwitch-track': {
            backgroundColor: themeColor + ' !important',
          }
        }
      }
    },
    MuiList: {
      styleOverrides: {
        root: {
          '&.block-type-list':{
            backgroundColor: '#eef0f2',
            paddingTop: '0px',
             minWidth: '991px'
          },
          '& .Mui-selected': {
            backgroundColor: themeColor + ' !important',
            color: whiteColor + ' !important',
            '& .MuiSvgIcon-root': {
              color: whiteColor + ' !important'
            },
            '& .MuiTypography-root': {
              color: whiteColor
            },
          },
          '& .MuiCheckbox-root': {
            padding: '0px 5px 0px 0px'
          }
        }
      }
    },
    MuiSlider: {
      styleOverrides: {
        root: {
          color: themeColor,
          '& .MuiSlider-rail': {
            color: themeColor
          },
        }
      }
    },
    MuiRating: {
      defaultProps: {
        sx: {
          color: themeColor
        }
      }
    },
    MuiToggleButton: {
      defaultProps: {
        sx: {
          textTransform: textTransform1
        }
      },
      styleOverrides: {
        root: {
          '&.Mui-selected': {
            backgroundColor: themeColor + ' !important',
            color: whiteColor
          },
          '&.single-toggle-btn': {
            width: '100%',
            padding: '3px'
          }
        }
      }
    },
    MuiChip: {
      defaultProps: {
        sx: {
          backgroundColor: themeColor,
          color: whiteColor
        }
      },
      styleOverrides: {
        root: {
          '&.MuiChip-filledSuccess': {
            backgroundColor: '#C8E6C9', color: '#256029'
          },
          '&.MuiChip-filledWarning': {
            backgroundColor: '#FEEDAF', color: '#8a5340'
          },
          '&.MuiChip-filledInfo': {
            backgroundColor: '#ECCFFF', color: '#694382'
          },
          '&.MuiChip-filledError': {
            backgroundColor: '#FFCDD2;', color: '#c63737'
          }
        }
      }
    },
    MuiButton: {
      defaultProps: {
        sx: {
          padding: '7px 14px',
          fontFamily: font_family,
          marginRight: '.5rem!important',
          marginBottom: '.5rem!important',
          textTransform: textTransform1,
          bordeRadius: '6px',
          lineHeight: 'normal',
          fontWeight: '400',
          boxShadow: '0 0 0 0 '+whiteColor,
          '&.MuiButton-containedPrimary': {
            color: whiteColor
          },
          '&.Mui-disabled': {
            color: '#fff',
            boxShadow: 'none',
            opacity: 0.6,
            backgroundColor: themeColor,
          },
        }
      },
      styleOverrides: {
        root: {
          '&.icon-btn': {
            minWidth: '30px',
            padding: '6px'
          },
          '& .MuiSvgIcon-root': {
            fontSize: '20px'
          },
          '&.rounded-btn': {
            borderRadius: '20px'
          },
          '&.rounded-btn-icons': {
            minWidth: '2rem',
            borderRadius: '50%',
            padding: '6px'
          },
          '& .MuiCircularProgress-root': {
            color: '#fff !important'
          }
        }
      }
    },
    MuiButtonGroup: {
      defaultProps: {
        sx: { 
          boxShadow: '0 0 0 0 '+whiteColor,
          '& .MuiButton-root': {
            marginRight: '0rem!important',
            marginBottom: '0rem!important',
          },
          '&.MuiButtonGroup-root .MuiButtonGroup-grouped:not(:last-of-type)': {
            borderRight: '0px solid #bdbdbd'
          },
          '&.split-btn-grp': {
            marginRight: '0.5rem!important',
            marginBottom: '0.5rem!important',
            '& .split-btn-grp-btn': {
              minWidth: '30px',
              padding: 0
            }
          }
        }
      }
    },
    MuiIconButton: {
      defaultProps: {
        sx: {
          '& .MuiSvgIcon-root': {
            fontSize: '20px'
          },
        }
      }
    },
    MuiPagination: {
      styleOverrides: {
        root: {
          '& .MuiPaginationItem-rounded.Mui-selected': {
            color: whiteColor
          },
        }
      }
    }, 
    MuiDataGrid: {
      styleOverrides: {
        root: {
          borderLeft: '0px',
          borderRight: '0px',
          borderBottom: '0px',
          '& .MuiDataGrid-columnHeaders': {
            backgroundColor: '#FCFCFC',
            color: '#69707A',
          },
          '& .MuiDataGrid-columnHeaderTitle': {
            fontWeight: 600,
            fontSize: '14px',
          },
          '& .MuiDataGrid-cell': {
            padding: '0 6px',
            fontFamily: font_family,
            fontSize: '14px',
            fontWeight: 400,
            color: '#69707A'
          },
          '& .MuiDataGrid-row:hover': {
            backgroundColor: themeLightColor+' !important'
          },
          '& .MuiDataGrid-row:nth-child(even)': {
            backgroundColor: themeStripRowColor,
            opacity: 0.9
          },
          '& .even-row-list-item':{
            margin: '5px 0px',
            borderLeft: '4px solid green',
            boxShadow: '0px 1px 15px 3px #ccc',
            borderRadius: '5px',
          },
          '& .odd-row-list-item':{
            margin: '5px 0px',
            borderLeft: '4px solid red',
            boxShadow: '0px 1px 15px 3px #ccc',
            borderRadius: '5px',
          },
          '& .MuiDataGrid-toolbarContainer': {
            marginLeft: '100%',
            backgroundColor: whiteColor,
            color: themeColor
          },
          '& .MuiDataGrid-detailPanelToggleCell:hover': {
            border: `2px solid ${themeColor}`
          },
          '& .MuiDataGrid-columnHeader--sorted': {
            color: themeColor
          },
          '& .MuiDataGrid-sortIcon': {
            color: themeColor
          },
          '& .MuiBox-root': {
            '& .mui-stack-1': {
              height: '100%', py: 2
            },
            '& .mui-paper-1': {
              flex: 1, height: 'auto', p: 1, marginLeft: '5%'
            }
          },
          '& .MuiAvatar-root': {
            width: '50%', 
            height: 'auto'
          },
          '& .MuiSvgIcon-root': {
            fontSize: '22px'
          },
          '& .mui-detail-panel': {
            borderLeft: '1px solid rgb(224, 224, 224)',
            borderRight: '1px solid rgb(224, 224, 224)',
          }
        },
      }
    },
    MuiTabs:{
      defaultProps:{
        sx:{ 
          minHeight: '36px',
          '& .MuiTabs-scrollButtons.Mui-disabled':{
            display: 'none'
          },
          '& .MuiTabs-indicator':{
            color: themeColor
          }
        }
      }
    },
    MuiTab:{
      defaultProps:{
        sx:{ 
          minHeight: '36px',
          textTransform: textTransform1+ ' !important',
          '& .MuiSvgIcon-root':{
            fontSize: '20px'
          }
        }
      }
    }
  }
});

export default theme1;

