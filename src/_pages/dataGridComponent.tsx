import { Avatar, Box, Button, Chip, Grid, IconButton, InputAdornment, Pagination, Paper, Rating, Stack, TextField, Typography } from '@mui/material';
import * as React from 'react';
import { LicenseInfo, DataGridPro, DataGridProProps, GridRenderCellParams, GridRowId } from '@mui/x-data-grid-pro';
import SearchIcon from '@mui/icons-material/Search';
import FilterAltOffIcon from '@mui/icons-material/FilterAltOff';
import GamingSet from '../_images/gaming-set.jpg';
import GamingController from '../_images/game-controller.jpg';
import GalaxyEarings from '../_images/galaxy-earrings.jpg';
import AddIcon from '@mui/icons-material/Add';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import RemoveIcon from '@mui/icons-material/Remove';
import { Item } from '../_components/item';

const data = [
    { field: 'id', headerName: 'ID', align: 'center' as const, width: 200, headerAlign: 'center' as const },
    { field: 'customer', headerName: 'Customer', align: 'center' as const, type: 'string', width: 200, headerAlign: 'center' as const },
    { field: 'date', headerName: 'Date', type: 'date', width: 200, headerAlign: 'center' as const, align: 'center' as const },
    { field: 'amount', headerName: 'Amount', type: 'number', width: 200, headerAlign: 'center' as const, },
    {
        field: 'status', headerName: 'Status', width: 200, headerAlign: 'center' as const, align: 'center' as const,
        renderCell: (params: GridRenderCellParams) => {
            if (params.value === 'DELIVERED') {
                return (<Chip label='DELIVERED' variant="filled" color='success' />)
            } else if (params.value === 'PENDING') {
                return (<Chip label='PENDING' variant="filled" color='warning' />)
            } else if (params.value === 'RETURNED') {
                return (<Chip label='RETURNED' variant="filled" color='info' />)
            }
        }
    }
]

const data2 = [
    { field: 'name', headerName: 'Name', width: 200, sortable: true, type: 'string', hide: false, filterable: true, headerAlign: 'center' as const, align: 'center' as const },
    {
        field: 'image', headerName: 'Image', width: 200, sortable: true, type: 'image', hide: false, filterable: true, headerAlign: 'center' as const, align: 'center' as const,
        renderCell: (params: GridRenderCellParams) => {
            return (
                <Avatar src={params.value} variant="square" className="MuiAvatar-root" />
            )
        }
    },
    {
        field: 'price', type: 'number', headerName: 'Price', width: 200, sortable: true, hide: false, filterable: true,
    },
    {
        field: 'category', headerName: 'Category', width: 200, sortable: true, type: 'string', hide: false, filterable: true,
        headerAlign: 'center' as const, align: 'center' as const
    },
    {
        field: 'reviews', headerName: 'Reviews', width: 200, sortable: true, type: 'string', hide: false, filterable: true,
        headerAlign: 'center' as const, align: 'center' as const,
        renderCell: (params: GridRenderCellParams) => {
            return (
                <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
            )
        }
    },
    {
        field: 'status', headerName: 'Status', width: 200, sortable: true, type: 'string', hide: false, filterable: true,
        headerAlign: 'center' as const, align: 'center' as const,
        renderCell: (params: GridRenderCellParams) => {
            if (params.value === 'INSTOCK') {
                return (<Chip label='INSTOCK' variant="filled" color='success' />)
            } else if (params.value === 'LOWSTOCK') {
                return (<Chip label='LOWSTOCK' variant="filled" color='warning' />)
            } else if (params.value === 'OUTOFSTOCK') {
                return (<Chip label='OUTOFSTOCK' variant="filled" color='error' />)
            }
        },
    }
]


const rows = [
    {
        id: 1,
        name: 'Gaming Set',
        image: GamingSet,
        price: '$299.00',
        category: 'Electronics',
        reviews: '',
        status: 'INSTOCK',
        products: [{
            id: 10000,
            customer: 'Kadeem Mujtaba',
            date: '2020-06-24',
            amount: '$299.00',
            status: 'PENDING'
        }, {
            id: 10001,
            customer: 'Leon Rodrigues',
            date: '2020-05-14',
            amount: '$130.00',
            status: 'DELIVERED'
        }]
    },
    {
        id: 2,
        name: 'Game Controller',
        image: GamingController,
        price: '$99.00',
        category: 'Electronics',
        reviews: '',
        status: 'LOWSTOCK',
        products: []
    },
    {
        id: 3,
        name: 'Galaxy Earrings',
        image: GalaxyEarings,
        price: '$34.00',
        category: 'Accessories',
        reviews: '',
        status: 'OUTOFSTOCK',
        products: [
            {
                id: 30001,
                customer: 'Leon Rodrigues',
                date: '2020-05-14',
                amount: '$130.00',
                status: 'RETURNED'
            }
        ]
    },
];

function DetailPanelContent(row: any) {
    return (
        <Stack
            className="mui-stack-1"
            sx={{ height: '100%', py: 1 }}
            direction="column"
        >
            <Paper
                className="mui-paper-1"
            >
                <DataGridPro
                className="mui-detail-panel"
                    columns={data}
                    rowHeight={60}
                    rows={row.row.row.products}
                    hideFooter={true}
                />
            </Paper>
        </Stack>
    );
}

export function CustomExpandIcon() {
    return <ArrowForwardIosIcon fontSize="small" />;
}

export function CustomCollapseIcon() {
    return <KeyboardArrowDownIcon fontSize="small" />;
}

export default function DataGridComponent() {
    const X_DATA_GRID_LICENSE_KEY = `39d775303784880f3a3f1d519897dc7cT1JERVI6MzYxNjUsRVhQSVJZPTE2NzQxMTQ1NjYwMDAsS0VZVkVSU0lPTj0x`.toString();
    LicenseInfo.setLicenseKey(
        X_DATA_GRID_LICENSE_KEY,
    );

    const getDetailPanelContent: DataGridProProps['getDetailPanelContent'] =
        React.useCallback((row: any) => <DetailPanelContent row={row} />, []);

    const getDetailPanelHeight = React.useCallback(() => 250, []);

    const [searchedRecords, setSearchedRecords] = React.useState('');
    const [expandAllRow, setExpandAllRow] = React.useState(false);

    const filteredRecords = rows.filter(item => {
        return item.name.toLowerCase().startsWith(searchedRecords.toLowerCase()) || item.category.toLowerCase().startsWith(searchedRecords.toLowerCase())
            || item.status.toLowerCase().startsWith(searchedRecords.toLowerCase());
    });

    const [detailPanelExpandedRowIds, setDetailPanelExpandedRowIds] = React.useState<
        GridRowId[]
    >([]);

    const handleDetailPanelExpandedRowIdsChange = React.useCallback(
        (newIds: GridRowId[]) => {
            setDetailPanelExpandedRowIds(newIds);
        },
        [],
    );

    return (
        <React.Fragment>
            <Box>
                <Grid container>
                    <Grid item xs={12} sm={12} md={12} lg={12}>
                        <Item>
                        <Typography variant="h5">Filter Menu</Typography>
                            <Box className="mui-box-1">
                                <Grid item container justifyContent="flex-start" alignItems="center">
                                    <Grid item container direction="row" alignItems="center" justifyContent="flex-start" xs={6} sm={6} md={9} lg={9}>
                                        <Button size="small" variant="outlined" color="primary" onClick={() => setSearchedRecords('')} >
                                            <FilterAltOffIcon fontSize="small" />
                                            <Typography>Clear</Typography>
                                        </Button>
                                        {expandAllRow === false ? <Button size="small" variant="outlined" onClick={() => setExpandAllRow(true)} >
                                            <AddIcon fontSize="small" />
                                            <Typography>EXPAND ALL</Typography>
                                        </Button> :
                                            <Button size="small" variant="outlined" onClick={() => { setExpandAllRow(false); setDetailPanelExpandedRowIds([]) }} >
                                                <RemoveIcon fontSize="small" />
                                                <Typography>COLLAPSE ALL</Typography>
                                            </Button>
                                        }
                                    </Grid>
                                    <Grid item container direction="row" alignItems="center" justifyContent="flex-end" xs={6} sm={6} md={3} lg={3}>
                                        <TextField
                                            InputProps={{
                                                endAdornment: (
                                                    <InputAdornment position="start">
                                                        <IconButton
                                                            edge="start"
                                                            size="small">
                                                            {<SearchIcon />}
                                                        </IconButton>
                                                    </InputAdornment>
                                                )
                                            }}
                                            onChange={(ev) => {
                                                if (
                                                    ev.target.value !== "" ||
                                                    ev.target.value !== null
                                                ) {
                                                    setSearchedRecords(ev.target.value);
                                                }
                                            }}
                                            placeholder="Select Keyword"
                                            size="small"
                                            id="outlined-size-small"
                                            InputLabelProps={{
                                                shrink: false,
                                            }}
                                        />
                                    </Grid>
                                </Grid>
                                <Box className='mui-box-2'>
                                    <DataGridPro
                                        rows={filteredRecords}
                                        columns={data2}
                                        pagination 
                                        scrollbarSize={30}
                                        pageSize={25}
                                        rowHeight={80}
                                        rowsPerPageOptions={[1, 2, 10, 25, 50, 100]}
                                        disableColumnFilter={true}
                                        disableSelectionOnClick={true}
                                        getDetailPanelHeight={getDetailPanelHeight}
                                        getDetailPanelContent={getDetailPanelContent}
                                        detailPanelExpandedRowIds={expandAllRow === true && detailPanelExpandedRowIds.length > 0 ? detailPanelExpandedRowIds : expandAllRow === true && detailPanelExpandedRowIds.length === 0 ? [1, 2, 3] : detailPanelExpandedRowIds}
                                        onDetailPanelExpandedRowIdsChange={handleDetailPanelExpandedRowIdsChange}
                                        components={{
                                            Pagination: () => {
                                                return (
                                                    <Grid container alignItems="center" justifyContent="center" >
                                                        <Pagination color="primary"
                                                            shape='rounded'
                                                            count={10}
                                                        />
                                                    </Grid>
                                                );
                                            },
                                            DetailPanelExpandIcon: CustomExpandIcon,
                                            DetailPanelCollapseIcon: CustomCollapseIcon,
                                        }}

                                    />
                                </Box>
                            </Box>
                        </Item>
                    </Grid>
                </Grid>
            </Box>
        </React.Fragment>
    )
}