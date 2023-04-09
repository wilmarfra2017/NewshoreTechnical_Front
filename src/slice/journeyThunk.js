import axios from 'axios';
import { setJourneyData, startLoading } from './journeySlice';

export const fetchJourneyData = (origin, destination) => async dispatch => {
  try {
    dispatch( startLoading() );
    const response = await axios.post('http://localhost:25355/api/NewshoreTechnical/ProcessNewshoreTechnical', {
       journeys: { origin, destination },
    });
    dispatch(setJourneyData(response.data));
  } catch (error) {
    console.error('Error fetching journey data:', error);
  }
};
