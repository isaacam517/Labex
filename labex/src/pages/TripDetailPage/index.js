import React from 'react';
import PageTitle from '../../components/PageTitle';
import { ContentContainer } from './styles';
import TripInfo from './TripInfoCard';
import CandidatesList from './CandidatesList';

const TripDetailPage = () => {
    return <div>
        <PageTitle title={'Detalhes da Viagem'} />
        <ContentContainer>
            <TripInfo/>
            <CandidatesList/>
        </ContentContainer>
        </div>
}

export default TripDetailPage