import React from 'react'
import { Card, CardContent, Typography } from '@material-ui/core'
import TripInfoItem from './TripInfoitem'

const TripInfo = () => {
    return <div>
        <Card>
            <CardContent>
            <Typography  variant={'h5'} gutterBottom>
                Informações da Viagem
            </Typography>
            <TripInfoItem infoName={'Nome'} info={'Viagem para marte'} />
            <TripInfoItem infoName={'Planeta'} info={'Marte'} />
            <TripInfoItem infoName={'Data'} info={'01/12/2020'} />
            <TripInfoItem infoName={'Descrição'} info={'Viagem maneira pra colonizar marte'} />
            <TripInfoItem infoName={'Duração em dias'} info={'228'} />
            </CardContent>            
        </Card>
    </div>
}

export default TripInfo