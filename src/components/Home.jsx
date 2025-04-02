import { Link } from 'react-router-dom'

import '../css/Home/Home.css'

export function Home() {
    return (
        <div className='home_buttons'>
            <Link to='/orders'>Ver pedidos</Link>
            <Link to='/menus'>Ver menús</Link>
        </div>
    )
}
