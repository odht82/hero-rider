import * as React from 'react';
import Grid from '@mui/material/Grid';
import ManageUsers from '../ManageUsers/ManageUsers';

const DashboardHome = () => {
    return (
        <Grid container spacing={2}>
            <Grid item xs={12} sm={12}>
                <ManageUsers></ManageUsers>
            </Grid>
        </Grid>
    );
};

export default DashboardHome;