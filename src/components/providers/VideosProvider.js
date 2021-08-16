import React, { createContext, useReducer, useState } from 'react';
// import {data} from '../../mock/mockedUTube'
import { useFetchVideos } from '../hooks/useFetchVideos';
import {reducer} from '../../helpers/reducer'
import { lightTheme } from '../../ThemeStyles';

export const VideosContext = createContext();

export function VideosProvider({children}){

    const [globalState, dispatch] = useReducer(reducer, {
        theme: lightTheme
    })

    const[busqueda, setBusqueda] = useState('Wizeline');

    let videosList = useFetchVideos(busqueda);
    return <VideosContext.Provider value={{videosList, setBusqueda, globalState, dispatch}}>{children}</VideosContext.Provider>;
}
