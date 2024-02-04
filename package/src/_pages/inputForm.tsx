import * as React from 'react';
import Box from '@mui/material/Box';
import {Item} from '../_components/item'
import { Grid } from '@mui/material';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import Autocomplete from '@mui/material/Autocomplete';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import Checkbox from '@mui/material/Checkbox';
import Switch from '@mui/material/Switch';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import OutlinedInput from '@mui/material/OutlinedInput';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import Slider from '@mui/material/Slider';
import Rating from '@mui/material/Rating';
import NotInterestedOutlinedIcon from '@mui/icons-material/NotInterestedOutlined';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import Chip from '@mui/material/Chip';
import SellOutlinedIcon from '@mui/icons-material/SellOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import CropSquareOutlinedIcon from '@mui/icons-material/CropSquareOutlined';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import BpRadio from '../_components/_radioButton/bpCheckedIcon';
 
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
    },
  },
};

const names = [
  'Oliver Hansen',
  'Van Henry',
  'April Tucker',
  'Ralph Hubbard',
  'Omar Alexander',
  'Carlos Abbott',
  'Miriam Wagner',
  'Bradley Wilkerson',
  'Virginia Andrews',
  'Kelly Snyder',
];


const label = { inputProps: { 'aria-label': 'Checkbox demo' },  };
const label2 = { inputProps: { 'aria-label': 'Switch demo' },  };

  export default function InputForm() {

    const [selected, setSelected] = React.useState(false);
    const [selectedValue, setSelectedValue] = React.useState('female');
    const [personName, setPersonName] = React.useState<string[]>([]);
    const [value, setValue] = React.useState<number | string | Array<number | string>>(
        30,
        );
      
    const [value1, setValue1] = React.useState<number | null>(2);
    const [alignment, setAlignment] = React.useState<string | null>('left');
    const [formats, setFormats] = React.useState(() => ['bold', 'italic']);

    const handleFormat = (
        event: React.MouseEvent<HTMLElement>,
        newFormats: string[],
    ) => {
        setFormats(newFormats);
    };

    const handleAlignment = (
        event: React.MouseEvent<HTMLElement>,
        newAlignment: string | null,
    ) => {
        setAlignment(newAlignment);
    };
    
      const handleSliderChange = (event: Event, newValue: number | number[]) => {
        setValue(newValue);
      };
    
      const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value === '' ? '' : Number(event.target.value));
      };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setSelectedValue(event.target.value);
    };

    const controlProps = (item: string) => ({
        checked: selectedValue === item,
        onChange: handleChange,
        value: item
      });

    const top100Films = [
        { label: 'The Shawshank Redemption', year: 1994 },
        { label: 'The Godfather', year: 1972 },
        { label: 'The Godfather: Part II', year: 1974 },
        { label: 'The Dark Knight', year: 2008 },
        { label: '12 Angry Men', year: 1957 },
        { label: "Schindler's List", year: 1993 },
        { label: 'Pulp Fiction', year: 1994 },
      ];


      const handleChange2 = (event: SelectChangeEvent<typeof personName>) => {
        const {
          target: { value },
        } = event;
        setPersonName(
          // On autofill we get a stringified value.
          typeof value === 'string' ? value.split(',') : value,
        );
      };
  
    return (
        <>
        <Box> 
            <Grid container>
                <Grid item md={6}>
                    <Item>
                        <Typography variant="h6">InputText</Typography>
                            <Grid container>
                                <Grid item lg={4} md={12} sm={12} xs={12}>
                                    <TextField
                                        placeholder="Default"
                                        size="small"
                                    />
                                </Grid>
                                <Grid item lg={4} md={12} sm={12} xs={12}>
                                    <TextField disabled
                                        placeholder="Disabled"
                                        size="small"
                                    />
                                    
                                </Grid>
                                <Grid item lg={4} md={12} sm={12} xs={12}>
                                    <TextField error
                                        placeholder="Invalid"
                                        size="small"
                                    />
                                    
                                </Grid>
                            </Grid>
                         
                         
                        <Typography variant="h6">Icons</Typography>

                        <Grid container>
                                <Grid item lg={4} md={12} sm={12} xs={12}>
                                    <TextField
                                    placeholder="With normal TextField"
                                    size="small"
                                    InputProps={{
                                        startAdornment: <InputAdornment position="start"><PersonOutlineOutlinedIcon /></InputAdornment>,
                                    }}
                                    />
                                </Grid>
                                <Grid item lg={4} md={12} sm={12} xs={12}>
                                <TextField
                                    placeholder="With normal TextField"
                                    size="small"
                                    InputProps={{
                                        endAdornment: <InputAdornment position="start"><SearchOutlinedIcon  /></InputAdornment>,
                                    }}
                                    />
                                    
                                </Grid>
                                <Grid item lg={4} md={12} sm={12} xs={12}>
                                <TextField
                                    placeholder="With normal TextField"
                                    size="small"
                                    InputProps={{
                                        endAdornment: <InputAdornment position="start"><PersonOutlineOutlinedIcon /></InputAdornment>,
                                        startAdornment: <InputAdornment position="start"><SearchOutlinedIcon /></InputAdornment>
                                    }}
                                    />
                                    
                                </Grid>
                            </Grid>
                            
                        <Typography variant="h6">Float Label</Typography>                       
                        <Grid container>
                                <Grid item md={12} sm={12} xs={12}>
                                    <TextField
                                        label="Username"
                                        size="small"
                                    />
                                </Grid>
                            </Grid>
 
                        <Typography variant="h6">Textarea</Typography>                       
                        <Grid container>
                                <Grid item md={12} sm={12} xs={12}>
                                    <TextField
                                        placeholder="With normal TextField"
                                        size="small"
                                        multiline
                                        rows={3}
                                    />
                                </Grid>
                            </Grid>
                            
                        <Typography variant="h6">AutoComplete</Typography>                       
                        <Grid container>
                            <Grid item md={12} sm={12} xs={12}>
                                <Autocomplete
                                popupIcon={<KeyboardArrowDownIcon />}
                                    disablePortal
                                    size="small"
                                    options={top100Films}
                                    renderInput={(params: any) => <TextField {...params}  />}
                                />
                            </Grid>
                        </Grid>
                            
                        <Typography variant="h6">InputNumber</Typography>                       
                        <Grid container>
                            <Grid item md={12} sm={12} xs={12}>
                                 <TextField
                                        size="small"
                                        type="number"
                                    />
                            </Grid>
                        </Grid>

                        
                        <Typography variant="h6">Chips</Typography>
                        <Grid container>
                                <Grid item md={12} sm={12} xs={12}>
                            <FormControl>
                                <Select
                                id="demo-multiple-chip"
                                multiple
                                value={personName}
                                onChange={handleChange2} 
                                input={<OutlinedInput 
                                size="small" />}
                                renderValue={(selected) => (
                                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                                    {selected.map((value) => (
                                        <Chip key={value} label={value} />
                                    ))}
                                    </Box>
                                )}
                                MenuProps={MenuProps}
                                >
                                {names.map((name) => (
                                    <MenuItem
                                    key={name}
                                    value={name}
                                    >
                                    {name}
                                    </MenuItem>
                                ))}
                                </Select>
                            </FormControl>
                            </Grid>
                        </Grid>

                    </Item>
                </Grid>

                
                <Grid item md={6} sm={12} xs={12}>
                    <Item>
                        <Typography variant="h6">RadioButton</Typography>
                            <Grid container>
                                <Grid item lg={4} md={12} sm={12} xs={12}>
                                 <FormControl>
                                        <FormControlLabel value="female" control={<BpRadio {...controlProps('female')} />} label="Chicago" />
                                    </FormControl>
                                </Grid>
                                <Grid item lg={4} md={12} sm={12} xs={12}>
                                 <FormControl>
                                        <FormControlLabel value="female1" control={<BpRadio {...controlProps('female1')} />} label="Chicago" />
                                    </FormControl>
                                </Grid>
                                <Grid item lg={4} md={12} sm={12} xs={12}>
                                 <FormControl>
                                        <FormControlLabel value="female2" control={<BpRadio {...controlProps('female2')} />} label="Chicago" />
                                    </FormControl>
                                </Grid>
                            </Grid>

                            
                        <Typography variant="h6">Checkbox</Typography>
                            <Grid container>
                                <Grid item lg={4} md={12} sm={12} xs={12}>
                                    <Checkbox {...label} defaultChecked size="small" />
                                </Grid>
                                <Grid item lg={4} md={12} sm={12} xs={12}>
                                    <Checkbox {...label} defaultChecked size="small" />
                                </Grid>
                                <Grid item lg={4} md={12} sm={12} xs={12}>
                                    <Checkbox {...label} defaultChecked size="small" />
                                </Grid>
                            </Grid>

                        <Typography variant="h6">Input Switch</Typography>
                        <Grid container>
                            <Switch {...label2} />
                        </Grid>

                        <Typography variant="h6">Multiselect</Typography>
                        <Grid container>
                        <FormControl>
                                <Select size="small"
                                IconComponent={KeyboardArrowDownIcon}
                                labelId="demo-multiple-checkbox-label"
                                id="demo-multiple-checkbox"
                                multiple
                                value={personName}
                                onChange={handleChange2}
                                input={<OutlinedInput  />}
                                renderValue={(selected) => selected.join(', ')}
                                MenuProps={MenuProps}
                                >
                                {names.map((name) => (
                                    <MenuItem key={name} value={name}>
                                    <Checkbox checked={personName.indexOf(name) > -1} />
                                    <ListItemText primary={name} />
                                    </MenuItem>
                                ))}
                                </Select>
                            </FormControl>
                        </Grid>
                         
                    </Item>
                </Grid>
                
                <Grid item md={6} sm={12} xs={12}>
                    <Item>
                        <Typography variant="h6">Slider</Typography>
                            <Grid container>
                                <Grid item md={12} sm={12} xs={12}>
                                    <TextField value={value} onChange={handleInputChange}
                                    placeholder="Default"
                                    size="small"
                                    />
                                    <Slider
                                        value={typeof value === 'number' ? value : 0}
                                        onChange={handleSliderChange}
                                        aria-labelledby="input-slider"
                                    />                                
                                </Grid>
                            </Grid>

                            
                        <Typography variant="h6">Rating</Typography>
                            <Grid container>
                                <Grid item md={12} sm={12} xs={12} className="rating-block"> 
                                    <NotInterestedOutlinedIcon className="not-interested-icon" />
                                    <Rating
                                    name="simple-controlled"
                                    value={value1}
                                    onChange={(event, newValue) => {
                                        setValue1(newValue);
                                    }}
                                />                               
                                </Grid>
                            </Grid>
                        </Item>
                </Grid>

                <Grid item md={6} sm={12} xs={12}>
                    <Item>
                        <Typography variant="h6">ToggleButton</Typography>
                            <Grid container>
                                <Grid item md={4} sm={12} xs={12}>
                                    <ToggleButton className="single-toggle-btn"
                                        value="check"
                                        selected={selected}
                                        onChange={() => {
                                            setSelected(!selected);
                                        }}
                                        >
                                        {selected ? 'Yes' : 'No'}
                                    </ToggleButton>
                                </Grid>
                            </Grid>

                            <Typography variant="h6">SelectOneButton</Typography>
                            <Grid container>
                                <Grid item md={12} sm={12} xs={12}>
                                <ToggleButtonGroup fullWidth
                                    value={alignment}
                                    exclusive
                                    onChange={handleAlignment}
                                    aria-label="text alignment"
                                    >
                                    <ToggleButton  className="single-toggle-btn" value="left" aria-label="left aligned">
                                        Option 1
                                    </ToggleButton>
                                    <ToggleButton  className="single-toggle-btn" value="center" aria-label="centered">
                                        Option 2
                                    </ToggleButton>
                                    <ToggleButton  className="single-toggle-btn" value="right" aria-label="right aligned">
                                        Option 3
                                    </ToggleButton>
                                </ToggleButtonGroup>
                                </Grid>
                            </Grid>

                            <Typography variant="h6">SelectManyButton</Typography>
                            <Grid container>
                                <Grid item md={12} sm={12} xs={12}>
                                <ToggleButtonGroup fullWidth
                                    value={formats}
                                    onChange={handleFormat}
                                    aria-label="text formatting"
                                    >
                                    <ToggleButton className="single-toggle-btn" value="bold" aria-label="bold">
                                        Option 1
                                    </ToggleButton>
                                    <ToggleButton className="single-toggle-btn" value="italic" aria-label="italic">
                                        Option 2
                                    </ToggleButton>
                                    <ToggleButton className="single-toggle-btn" value="underlined" aria-label="underlined">
                                        Option 3
                                    </ToggleButton>
                                    </ToggleButtonGroup>
                                </Grid>
                            </Grid>
                    </Item>
                </Grid>

                <Grid item md={12} sm={12} xs={12}>
                    <Item>
                        <Typography variant="h6">InputGroup</Typography>
                            <Grid container>
                                
                                <Grid item lg={6} md={12} sm={12} xs={12}>
                                    <TextField
                                        placeholder="Username"
                                        size="small"
                                        InputProps={{
                                            startAdornment: <InputAdornment  className="input-grp-startAdornment" position="start"><PersonOutlineOutlinedIcon /></InputAdornment>,
                                        }}
                                    />
                                </Grid>
                                <Grid item lg={6} md={12} sm={12} xs={12}>
                                    <TextField
                                        placeholder="Price"
                                        size="small"
                                        InputProps={{
                                            startAdornment: <InputAdornment  className="input-grp-startAdornment" position="start"><SellOutlinedIcon /><ShoppingCartOutlinedIcon /></InputAdornment>,
                                            endAdornment: <InputAdornment  className="input-grp-endAdornment" position="start"><SellOutlinedIcon /><ShoppingCartOutlinedIcon /></InputAdornment>,
                                        }}
                                    />

                                </Grid>

                                <Grid item lg={6} md={12} sm={12} xs={12}>
                                    <TextField
                                        placeholder="Keyword"
                                        size="small"
                                        InputProps={{
                                            startAdornment: <InputAdornment  className="input-grp-startAdornment-text" position="start">Search</InputAdornment>
                                        }}
                                    />
                                </Grid>
                                
                                <Grid item lg={6} md={12} sm={12} xs={12}>
                                    <TextField
                                        placeholder="Username"
                                        size="small"
                                        InputProps={{
                                            startAdornment: <InputAdornment  className="input-grp-startAdornment" position="start"><CropSquareOutlinedIcon /></InputAdornment>,
                                        }}
                                    />
                                </Grid>

                            </Grid>
                    </Item>                
                </Grid>
            </Grid>
        </Box>
        
        </>
    );
  }
  