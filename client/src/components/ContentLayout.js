import React from 'react';
import { Grid } from '@material-ui/core';

const ContentLayout = (props) => {

    return (
        <Grid container direction="column" spacing={4} justify="center" alignItems="center" style={{ minHeight: '50vh' }}>
            <Grid item xs={false} sm={2} />
            <Grid item xs={12} sm={8}>{props.component}</Grid>
            <Grid item xs={false} sm={2} />
        </Grid>

    );

}

export default ContentLayout;