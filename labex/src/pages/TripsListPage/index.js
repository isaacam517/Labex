import React from 'react';
import PageTitle from '../../components/PageTitle';
import { Button, List, ListItem, ListItemText } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { TripsListPageContainer } from './styles';

const TripsListPage = () => {
    return <TripsListPageContainer>
        <PageTitle title={'Lista de Viagens'}/>
        <Link to={'/viagens/criar'}>
            <Button variant={'contained'} color={'primary'} >Criar Viagem</Button>
        </Link>

        <List component="nav" aria-label="secondary mailbox folders">
       
        <Link to={`/viagens/detalhe/`}>
            <ListItem button>
                <ListItemText primary={'viagem para Marte'} />
            </ListItem>
        </Link>
        <Link to={`/viagens/detalhe/`}>
            <ListItem button>
                <ListItemText primary={'viagem para a Lua'} />
            </ListItem>
        </Link>
              
      </List>
    </TripsListPageContainer>
}

export default TripsListPage