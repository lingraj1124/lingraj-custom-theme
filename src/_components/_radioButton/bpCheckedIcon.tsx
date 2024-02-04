import { styled } from '@mui/material/styles';
import Radio from '@mui/material/Radio';

export default function BpRadio(props: any) {

    const BpIcon = styled('span')({
        borderRadius: '50%',
        width: 16,
        height: 16,
        boxShadow: 'inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)',
      });

    return (
      <Radio name="First"
        size="small"
        disableRipple
        color="default"
        checkedIcon={<BpIcon />}
        icon={<BpIcon />}
        {...props}
      />
    );
  }


