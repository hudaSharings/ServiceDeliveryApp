import { Asset } from 'expo-asset';
import servicesData from '../../assets/data/services.json';
export const loadServicesData = async () => {
  return servicesData;
  // const response = await fetch(uri);
  // return response.json();
};
