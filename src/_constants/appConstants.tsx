import { LicenseInfo, DataGridPro, DataGridProProps, GridRenderCellParams, GridRowId } from '@mui/x-data-grid-pro';
import { Avatar, Box, Button, Chip, Grid, IconButton, InputAdornment, Pagination, Paper, Rating, Stack, TextField, Typography } from '@mui/material';
import GamingSet from '../_images/gaming-set.jpg';
import GamingController from '../_images/game-controller.jpg';
import GalaxyEarings from '../_images/galaxy-earrings.jpg';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';


export const rows = [
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

const testing = {
    Branch: 'KMC - KUMARAN MEDICAL CENTER',
        Asset_Code: 'KMC/BME/CATH/001',
        Asset_Desc: 'PATIENT MONITOR',
        Asset_SR: 'CN50806299',
        Category: 'BIOMEDICAL',
        Sub_Category: 'EQUIPMENTS',
        Asset_Group: 'BIOMED',
        Model: 'GOLDWAY G30E',
        Maker: 'PHILIPS',
        Supplier: 'SAM ENTERPRISES',
        Department: 'LEVEL 3',
        Functionality: 'NON CRITICAL',
        Priority: 'test',
        Risk: 'test',
        Asset_Status: 'INSTALLED/IN STOCK',
        Approval_Status: 'LEVEL 1 APPROVAL IS PENDING',
        Ownership_type: 'OWN'
}

export const tester=(loadedRows: any, newRows: any)=>{
    let demo : any = [];
        for(let i = loadedRows+1; i<=(loadedRows+newRows);i++){
            demo.push({ id: i, ...testing}) 
        }
    return demo;
    
}

// export const assets = [
//     {
//         id: 1,
//         ...testing
//     },
//     {
//         id: 2,
//         ...testing
//     },
//     {
//         id: 3,
//         ...testing
//     },
//     {
//         id: 4,
//         ...testing
//     },
//     {
//         id: 5,
//         ...testing
//     },
//     {
//         id: 6,
//         ...testing
//     },
//     {
//         id: 7,
//         ...testing
//     },
//     {
//         id: 8,
//         ...testing
//     },
//     {
//         id: 9,
//         ...testing
//     },
//     {
//         id: 10,
//         ...testing
//     },
//     {
//         id: 11,
//         ...testing
//     },
//     {
//         id: 12,
//         ...testing
//     },
//     {
//         id: 13,
//         ...testing
//     },
//     {
//         id: 14,
//         ...testing
//     },
//     {
//         id: 15,
//         ...testing
//     },
//     {
//         id: 16,
//         ...testing
//     },
//     {
//         id: 17,
//         ...testing
//     },
//     {
//         id: 18,
//         ...testing
//     },
//     {
//         id: 19,
//         ...testing
//     },
//     {
//         id: 20,
//         ...testing
//     },
//     {
//         id: 21,
//         ...testing
//     },
//     {
//         id: 22,
//         ...testing
//     },
//     {
//         id: 23,
//         ...testing
//     }
// ];

const common_column_properties = {
    width: 200, 
    sortable: true, 
    type: 'string', 
    // hide: false, 
    // filterable: true, 
    // headerAlign: 'center',
    //  align: 'center'
}

export const assets_columns: GridColDef[] = [
    { field: 'id', headerName: 'id', ...common_column_properties },
    { field: 'Branch', headerName: 'Branch', ...common_column_properties },
    { field: 'Asset_Code', headerName: 'Asset_Code', ...common_column_properties },
    { field: 'Asset_Desc', headerName: 'Asset_Desc', ...common_column_properties },
    { field: 'Asset_SR', headerName: 'Asset_SR', ...common_column_properties },
    { field: 'Category', headerName: 'Category', ...common_column_properties },
    { field: 'Sub_Category', headerName: 'Sub_Category', ...common_column_properties },
    { field: 'Asset_Group', headerName: 'Asset_Group', ...common_column_properties },
    { field: 'Model', headerName: 'Model', ...common_column_properties },
    { field: 'Maker', headerName: 'Maker', ...common_column_properties },
    { field: 'Supplier', headerName: 'Supplier', ...common_column_properties },
    { field: 'Department', headerName: 'Department', ...common_column_properties },
    { field: 'Functionality', headerName: 'Functionality', ...common_column_properties,
    renderCell: (params: GridRenderCellParams) => {
        if (params.value === 'NON CRITICAL') {
            return (<Chip label='NON CRITICAL' variant="filled" color='success' />)
        }}
     },
    { field: 'Priority', headerName: 'Priority', ...common_column_properties,
    renderCell: (params: GridRenderCellParams) => {
        if (params.value === 'test') {
            return (<Chip label='test' variant="filled" color='success' />)
        }}
     },
    { field: 'Risk', headerName: 'Risk', ...common_column_properties,
    renderCell: (params: GridRenderCellParams) => {
        if (params.value === 'test') {
            return (<Chip label='test' variant="filled" color='success' />)
        }}
     },
    { field: 'Asset_Status', headerName: 'Asset_Status', ...common_column_properties,
    renderCell: (params: GridRenderCellParams) => {
        if (params.value === 'INSTALLED/IN STOCK') {
            return (<Chip label='INSTALLED/IN STOCK' variant="filled" color='success' />)
        }}
     },
    { field: 'Approval_Status', headerName: 'Approval_Status', ...common_column_properties },
    { field: 'Ownership_type', headerName: 'Ownership_type', ...common_column_properties,
    renderCell: (params: GridRenderCellParams) => {
        if (params.value === 'OWN') {
            return (<Chip label='OWN' variant="filled" color='success' />)
        }}
    }
]

export const treeData = [
    {
        id: 1,
        name : 'Branch 1',
        childs: [
            {
                id: 1,
                name : 'Branch 3',
                childs: [{
                    id: 1,
                    name : 'Branch 4',
                }]
            }
        ]
    },
    {
        id: 1,
        name : 'Branch 2'
    }
]