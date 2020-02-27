import { useContext } from 'react';
import { Context } from '../context/GlobalState';

export default function useGlobalState() {
  return useContext(Context);
}