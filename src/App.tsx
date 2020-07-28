import React, { useState }  from 'react'
import {TabMenu} from 'primereact/tabmenu'
import {Button} from 'primereact/button'
import './App.scss'
import logo from './genericLogo.svg'
import {Password} from "primereact/password";
import {InputText} from "primereact/inputtext";
import {Card} from "primereact/card";
import {Dialog} from "primereact/dialog";
import styled from "styled-components";

const LogoutButton = styled(Button)`
  background-color: transparent !important;
  border: none !important;
  color: black !important;
`

const ApexMenu = styled(TabMenu)`
    .p-tabmenu-nav {
        border-bottom: 0 !important;
        height: 100% !important;
    }

    .p-menuitem-text {
        color: white !important;
    }

    .p-menuitem {
        padding-top: .25rem;
    }
    
    .p-menuitem-link {
        background-color: transparent !important;
        border: 0 !important;
        height: 100%;
        padding-top: 1.3rem !important;
        &:focus {
            box-shadow: unset !important;
            -webkit-box-shadow: unset ! important;
        }
    }

    .p-tabmenuitem {
        height: 100%; 
        &.p-highlight {
            border-bottom: .3rem solid darkorange !important;
        }
        &:hover {
            border-bottom: .3rem solid darkorange !important;
        }
    }    

    height: 100%;  
`

const App = () => {
    const [items] = useState([
        {
            label: 'Nav Item 1',
        },
        {
            label: 'Nav Item 2',
        },
        {
            label: 'Nav Item 3',
        },
        {
            label: 'Nav Item 4',
        },
    ])
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [modalVisibility, setModalVisibility] = useState(false)
  return (
      <>
          <div className='p-grid'>
              <div className='p-grid p-justify-between top-header'>
                  <img src={logo} alt="Logo" className='p-col-2'/>
                  <LogoutButton label="Logout" className='p-col-1 p-nogutter' icon="pi pi-sign-out" iconPos="right"/>
              </div>
              <div className='p-grid bottom-header'>
                  <div className='app-name p-col'>
                      <p>APEX EXTRA LONG NAME FOR AN APPLICATION</p>
                  </div>
                  <ApexMenu model={items}/>
              </div>
                  <Card className='p-col-2 p-offset-4'>
                      <div className='p-fluid'>
                          <label htmlFor='username'>Username / Email</label>
                          <InputText id='username' value={username} onChange={(e) => setUsername(e.currentTarget.value)}/>
                          <label htmlFor='password'>Password</label>
                          <Password id='password' value={password} onChange={(e) => setPassword(e.currentTarget.value)}/>
                      </div>
                      <Button label='Login' icon='pi pi-sign-in' onClick={(e) => setModalVisibility(true)}/>
                  </Card>
          </div>
          <Dialog onHide={() => setModalVisibility(false)} visible={modalVisibility}>
              You've entered a {username} and a password with length equal to {password.length}
          </Dialog>
      </>
  )
}

export default App;
