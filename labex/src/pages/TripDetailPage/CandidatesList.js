import React from 'react'
import { Card, CardContent, Typography, List} from '@material-ui/core'
import CandidateItem from './CandidateItem'


const CandidatesList = () => {
    return <div>
        <Card>
            <CardContent>
                <Typography  variant={'h5'} gutterBottom>
                    Lista de Candidatos
                </Typography>
                <List>
                    <CandidateItem/>
                    <CandidateItem/>
                    <CandidateItem/>
                    <CandidateItem/>
                    <CandidateItem/>
                </List>
            </CardContent>           
        </Card>
    </div>
}

export default CandidatesList