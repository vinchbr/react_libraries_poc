import React, { useState }  from 'react'
import './App.scss'
import logo from './genericLogo.svg'
import {
    AppBar,
    Box,
    Button, Dialog,
    FormControl, Grid, IconButton,
    TextField,
    Toolbar,
    Typography,
    withStyles
} from "@material-ui/core"
import {ToggleButtonGroup, ToggleButton} from "@material-ui/lab"
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import {Visibility, VisibilityOff} from "@material-ui/icons";

const NavButton = withStyles({
    root: {
        borderRadius: 0,
        border: "unset",
        borderBottom: "solid 3px transparent",
        color: "white",
        maxHeight: "3.6rem",
        alignItems: "unset",
        '&:hover': {
            borderBottom: "coral solid 3px",
            backgroundColor: "unset"
        },
    },
    selected: {
        borderBottom: "coral solid 3px",
        color: "white !important"
    }
})(ToggleButton)

const App = () => {
    const [username, setUsername] = useState('')
    const [ password, setPassword] = useState('')
    const [modalVisibility, setModalVisibility] = useState(false)
    const [activeNav, setActiveNav] = useState()
    const [showPassword, setShowPassword] = useState(false)
    const handleActiveButton = (event: any, newActive: any) => {
        setActiveNav(newActive)
    }

    const handleClickShowPassword = () => {
       setShowPassword(!showPassword)
    }

    const handleMouseDownPassword = (event: any) => {
        event.preventDefault();
    };
  return (
      <>
          <div className='flex-grow'>
          <AppBar position='static' className="header-bar">
              <Toolbar variant="dense" className='top-logo-bar'>
                  <Box className='flex-grow'>
                    <img src={logo} className='logo' alt="logo"/>
                  </Box>
                 <Button>
                     Logout  <ExitToAppIcon/>
                 </Button>
              </Toolbar>
              <Toolbar disableGutters variant='dense' className='nav-bar'>
                  <Typography variant="h6" className='app-name'>
                      Extra Long Apex App Name
                  </Typography>
                  <ToggleButtonGroup exclusive size='large' value={activeNav} onChange={handleActiveButton}>
                    <NavButton value="nav-1" disableFocusRipple className="NavButton">Nav 1</NavButton>
                    <NavButton value="nav-2" disableFocusRipple className="NavButton">Nav 2</NavButton>
                    <NavButton value="nav-3" disableFocusRipple className="NavButton">Nav 3</NavButton>
                    <NavButton value="nav-4" disableFocusRipple className="NavButton">Nav 4</NavButton>
                  </ToggleButtonGroup>
              </Toolbar>
          </AppBar>
          </div>
          <Grid container spacing={3}>
              <Grid item xs={12}/>
              <Grid item xs={12}/>
              <Grid item xs={4}/>
              <Grid item xs={3}>
                  <FormControl fullWidth>
                      <TextField
                          type='text'
                          value={username}
                          onChange={(e) => setUsername(e.currentTarget.value)}
                          size="medium"
                          label="Username"
                      />
                      <TextField label="Password"
                                         type={showPassword ? 'text' : 'password'}
                                         value={password}
                                         onChange={(e) => setPassword(e.currentTarget.value)}
                                         size="medium"
                                 InputProps={{
                                     endAdornment: (
                                         <IconButton
                                             aria-label="toggle password visibility"
                                             onClick={handleClickShowPassword}
                                             onMouseDown={handleMouseDownPassword}
                                         >
                                             {showPassword ? <Visibility /> : <VisibilityOff />}
                                         </IconButton>
                                     )
                                 }}
                      />
                      <Button variant="contained" color="primary" className="SubmitButton"
                              onClick={() => setModalVisibility(true)}>Login</Button>
                  </FormControl>
              </Grid>
          </Grid>
          <Dialog onClose={()=>setModalVisibility(false)} open={modalVisibility}>
              <Typography>You've entered a {username} and a password with length equal to {password.length}</Typography>
              <Button variant="contained" color="primary" onClick={() => setModalVisibility(false)}>Close</Button>
          </Dialog>
          </>
  )
}

export default App
