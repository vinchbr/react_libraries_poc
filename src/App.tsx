import React, { useState }  from 'react'
import './App.scss'
import logo from './genericLogo.svg'
import {
    Anchor,
    Box,
    Button,
    Form,
    FormField,
    grommet,
    Grommet,
    Header,
    Image,
    Layer,
    Nav,
    Text,
    TextInput
} from 'grommet'
import {Login, Logout} from 'grommet-icons'
import {deepMerge} from "grommet/utils";
import {NavButton} from "./component/NavButton";

const customTheme = deepMerge(grommet, {
    global: {
        colors: {
            brand: 'midnightblue'
        },
    },
    anchor: {
        color: {
            light: 'white',
        },
        hover: {
            textDecoration: 'none',
            extend: `
               border-bottom: solid 5px darkorange;
               margin-bottom: -.82rem;
            `
        },
        extend: `
                padding-top: .9rem;
            `
    },
})
const App = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [modalVisibility, setModalVisibility] = useState(false)
    const [activeNav, setActiveNav] = useState()
  return (
      <Grommet plain theme={customTheme}>
          <Header>
              <Box height="xxsmall" width="small">
                 <Image fill="vertical" src={logo}/>
              </Box>
              <Anchor icon={ <Logout/> } label="Logout" color="black"/>
          </Header>
          <Header background='brand' justify="start" height='xxsmall'>
              <Text size="large" weight="bold" className="app-name">Extra Long Apex App Name</Text>
              <Nav direction='row' background='brand'>
                  <NavButton label='Nav 1' active={activeNav} onClick={(e) => setActiveNav(e.currentTarget.value)}/>
                  <NavButton label='Nav 2' active={activeNav} onClick={(e) => setActiveNav(e.currentTarget.value)}/>
                  <NavButton label='Nav 3' active={activeNav} onClick={(e) => setActiveNav(e.currentTarget.value)}/>
                  <NavButton label='Nav 4' active={activeNav} onClick={(e) => setActiveNav(e.currentTarget.value)}/>
                  <NavButton label='Nav 5' active={activeNav} onClick={(e) => setActiveNav(e.currentTarget.value)}/>
              </Nav>
          </Header>
          <Box alignContent="center">
              <Box width="medium" alignSelf="center">
                  <Form>
                      <FormField name="username" htmlFor="username" label="Username / Email">
                          <TextInput id="username" name="username" onChange={(e) => setUsername(e.currentTarget.value)}/>
                      </FormField>
                      <FormField name="password" htmlFor="password" label="Password">
                          <TextInput id="password" name="password" type='password' onChange={(e) => setPassword(e.currentTarget.value)}/>
                      </FormField>
                      <Button label='Login' icon={<Login />} onClick={() => setModalVisibility(true)}/>
                  </Form>
              </Box>
          </Box>
          {modalVisibility &&
          <Layer onEsc={() => setModalVisibility(false)} onClickOutside={() => setModalVisibility(false)}>
              <Box pad="medium">
                <Text>You've entered a {username} and a password with length equal to {password.length}</Text>
                <Button primary size="small" alignSelf="end"
                        label="Close" onClick={() => setModalVisibility(false)} />
              </Box>
          </Layer>
          }
      </Grommet>
  )
}

export default App;
