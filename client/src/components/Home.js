import {Fragment} from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'

const Home = () => {
    return (
    <Fragment>
        <Navbar>
            <Outlet />
        </Navbar>
    </Fragment>
    )
}

export default Home