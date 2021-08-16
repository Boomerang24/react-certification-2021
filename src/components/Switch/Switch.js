import React from 'react';
import Switch from '@material-ui/core/Switch';

export default function Switches() {
  const [state, setState] = React.useState({
    lightTheme: true,
    darkTheme: true,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  return (
      <Switch
        className="darkmode-switch"
        checked={state.lightTheme}
        onChange={handleChange}
        name="lightTheme"
        inputProps={{ 'aria-label': 'secondary checkbox' }}
      />
  );
}
