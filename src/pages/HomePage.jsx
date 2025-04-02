import { Home } from '../components/Home'
import '../css/Home/HomePage.css'

export function HomePage () {
    return (
        <main className='home_container'>
            <h1>Bienvenidos al restaurante rojo</h1>
            <Home />            
        </main>
    )
}
