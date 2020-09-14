import React from 'react';
import PageTitle from '../../components/PageTitle';
import { TextField, Button } from '@material-ui/core' 
import { FormContainer } from '../../components/FormContainer';
import { KeyboardDatePicker } from '@material-ui/pickers';


const CreateTripPage = () => {
    return <div>
        <PageTitle title={'Criar Viagem'} />
        <FormContainer>
            <TextField label={'Nome'} />
            <TextField label={'Planeta'} />
            <KeyboardDatePicker
                disableToolbar
                variant="inline"
                format="MM/dd/yyyy"
                margin="normal"                
                label="Data"                         
            />
            <TextField label={'Descrição'} />
            <TextField label={'Duração em Dias'} type={'number'} />
            <Button variant={'contained'} color={'primary'} type={'submit'}>Entrar</Button>
        </FormContainer>
    </div>
}

export default CreateTripPage