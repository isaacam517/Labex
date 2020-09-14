import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';

const ApplicationPage = () => {
    return <div>
        ApplicationPage
        <Link to={'/'}>
            <Button variant={'contained'}>Voltar para Home</Button>
        </Link>
    </div>
}

export default ApplicationPage