import React, { useContext, useState } from 'react';
import Switch from '@material-ui/core/Switch';
import { VideosContext } from '../providers/VideosProvider';
import { types } from '../../types/types';
import { lightTheme, darkTheme } from '../../ThemeStyles';

export default function Switches() {

  const {dispatch} = useContext(VideosContext);

  const [switchValue, setSwitchValue] = useState(true);

  const handleSwitchChange =() => {
    setSwitchValue(!switchValue);
    const themeOn = switchValue ? darkTheme : lightTheme;
    dispatch({type: types.theme, payload: themeOn});
  }

  
  return (
      <Switch
        value={switchValue}
        className="darkmode-switch"
        name="lightTheme"
        inputProps={{ 'aria-label': 'secondary checkbox' }}
        onClick={handleSwitchChange}
      />
  );
}
