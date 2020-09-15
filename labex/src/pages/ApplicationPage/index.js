import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Button, TextField, FormControl, InputLabel, Select, MenuItem } from '@material-ui/core';
import PageTitle from '../../components/PageTitle';
import { FormContainer } from '../../components/FormContainer';

const ApplicationPage = () => {
    const [trips, setTrips] = useState([])
    const [form, setForm] = useState({
    name: '',
    age: 0,
    applicationText: '',
    profession: '',
    country: '',
    trip: null
  })

  const onChangeInput = (event) => {
    const newValue = event.target.value
    const fieldName = event.target.name

    setForm({...form, [fieldName]: newValue})
  }

  useEffect(() => {axios.get ("https://us-central1-labenu-apis.cloudfunctions.net/labeX/isaac-julian/trips").then((response) => {
      setTrips(response.data.trips)
  })

  }, [])



    return <div>
        <PageTitle title={'Aplicar para viagem'} />
        <FormContainer>
            <TextField 
                label={'Nome do candidato'}
                onChange={onChangeInput}
                value={form['name']}
                name={'name'} 
            />
            <TextField 
                label={'Idade'} type={'number'}
                onChange={onChangeInput}
                value={form['age']}
                name={'age'} 
            />
            <TextField 
                label={'Texto de aplicação'} 
                helperText="Explique por que você é uma boa pessoa candidata"
                onChange={onChangeInput}
                value={form['applicationText']}
                name={'applicationText'}
            />
            
            <TextField 
                label={'Profissão'}
                onChange={onChangeInput}
                value={form['profession']}
                name={'profession'} 
            />
        <FormControl>
            <InputLabel
                id="select-paises" >Países</InputLabel>
            <Select
                labelId="select-paises"
                onChange={onChangeInput}
                value={form['country']}
                name={'country'} 
            >
                <MenuItem value={`brasil`}>Brasil</MenuItem>
                <MenuItem value={`argentina`}>Argentina</MenuItem>
                <MenuItem value={`eua`}>Estados Unidos</MenuItem>
            </Select>
        </FormControl>
            <FormControl>
                <InputLabel id="select-viagens" >Viagens</InputLabel>
                <Select
                    labelId="select-viagens"
                    onChange={onChangeInput}
                    value={form['trip']}
                    name={'trip'} 
                >
                    {trips.map((trip) => {
                        return <MenuItem value={trip}>{trip.name}</MenuItem>
                    })}
                </Select>
            </FormControl>
            
            <TextField label={'Duração em Dias'} type={'number'} />
            <Button variant={'contained'} color={'primary'} type={'submit'}>Entrar</Button>
        </FormContainer>
        <Link to={'/'}>
            <Button variant={'contained'}>Voltar para Home</Button>
        </Link>
    </div>
}

export default ApplicationPage