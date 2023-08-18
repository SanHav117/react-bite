import React from 'react';
// import { render } from 'react-dom';
import bitelogo from '../Assets/bitelogo.png';
import '../Styles.css';

import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import FilledInput from '@mui/material/FilledInput';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Button from '@mui/material/Button';

export default function LoginPage (){
    const [showPassword, setShowPassword] = React.useState(false);
  
    const handleClickShowPassword = () => setShowPassword((show) => !show);
  
    const handleMouseDownPassword = (event) => {
      event.preventDefault();
    };

    let name = "SUS";
    let pass = "sussybaka";

    function handleHm(){
        console.log(document.getElementById("name").innerHTML);
    }

    return(
        <>
        <div class="LoginComponent" >
            <span style={{ fontSize: "36px" , marginBlock: "10px" , fontWeight: "bold" }} >Login / SignUp</span>
        <TextField style={{ width: "270px" , marginBlock: "10px" , backgroundColor: "white" }} id="outlined-basic name" label="Username" variant="outlined" />
        <FormControl style={{ width: "270px" , marginBlock: "10px" , backgroundColor: "white" }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={showPassword ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>
        <span style={{ display: "flex" , justifyContent: "space-between" , width: "270px" }} >
        <Button onClick={handleHm} style={{ width: "130px" , marginBlock: "10px" }} variant="contained">Log in</Button>
        <Button style={{ width: "130px" , marginBlock: "10px" }} variant="contained">Sign up</Button>
        </span>
        <Button style={{ width: "270px" , marginBlock: "10px" }} variant="outlined">Skip for now</Button>
        </div>
        </>
    )
}

// do validation , routing and data storage
// home routing