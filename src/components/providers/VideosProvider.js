import React, { createContext, useState } from 'react';
// import {data} from '../../mock/mockedUTube'
import { useFetchVideos } from '../hooks/useFetchVideos';

export const VideosContext = createContext();

export function VideosProvider({children}){

    const[busqueda, setBusqueda] = useState('Wizeline');

    let videosList = useFetchVideos(busqueda);
    return <VideosContext.Provider value={{videosList, setBusqueda}}>{children}</VideosContext.Provider>;
}
