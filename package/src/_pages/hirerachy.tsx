import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import CommentIcon from '@mui/icons-material/Comment';
import { Typography } from '@mui/material';
import HighlightOffOutlinedIcon from '@mui/icons-material/HighlightOffOutlined';
import SpellcheckOutlinedIcon from '@mui/icons-material/SpellcheckOutlined';

export default function Hirerachy() {
  const [checked, setChecked] = React.useState([0]);

  const handleToggle = (value: number) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  return (
    <List className="block-type-list">
      {[0, 1, 2, 3].map((value) => {
        const labelId = `checkbox-list-label-${value}`;
        return (
          <ListItem className="block-type-list-item"
            key={value}
            secondaryAction={
              <IconButton edge="end" aria-label="comments">
                <SpellcheckOutlinedIcon />
                <HighlightOffOutlinedIcon />
              </IconButton>
            }
            disablePadding
          >
            <ListItemButton role={undefined} onClick={handleToggle(value)} dense>
              <ListItemIcon>
                <Checkbox
                  edge="start"
                  checked={checked.indexOf(value) !== -1}
                  tabIndex={-1}
                  disableRipple
                  inputProps={{ 'aria-labelledby': labelId }}
                />
              </ListItemIcon>
              <ListItemText id={labelId} 
              primary={
                    <div>
                        <div className="block-type-list-item-text">Asset Code : CAR-001</div>
                        <div className="block-type-list-item-text">Equipment Code :</div>
                        <div className="block-type-list-item-text">Assignee Type : TECHNICIAN</div>
                    </div>
              }  />
               <ListItemText id={labelId} 
              primary={
                    <div>
                        <div className="block-type-list-item-text">Department : CARDIOLOGY</div>
                        <div className="block-type-list-item-text">Sub Department : Sub Department</div>
                    </div>
              }  />
              <ListItemText id={labelId} 
             primary={
                   <div>
                       <div className="block-type-list-item-text">Assigned Date : 10/05/2022</div>
                       <div className="block-type-list-item-text">Assigned End Date : 10/05/2022</div>
                   </div>
             }  />
             <ListItemText id={labelId} 
            primary={
                  <div>
                      <div className="block-type-list-item-text">Assigned By : LIBESH</div>
                      <div className="block-type-list-item-text">Phone No : 9876543210</div>
                  </div>
            }  />
            </ListItemButton>
          </ListItem>
        );
      })}
    </List>
  );
}
