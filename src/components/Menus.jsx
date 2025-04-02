import { MenuCard } from "./MenuCard"
import '../css/Menus/Menus.css'

export function Menus () {
    const MENUS = [
        {
            name: 'Menú 1',
            description: 'Esta es la descripción del primer menú',
            price: 10.00
        },
        {
            name: 'Menú 2',
            description: 'Esta es la descripción del segundo menú',
            price: 10.00
        },
        {
            name: 'Menú 3',
            description: 'Esta es la descripción del tercer menú',
            price: 10.00
        }
    ]

    return (
        <main className="menus_container">
            <h1>Menús</h1>
            {
                MENUS.map((menu, index) => (
                    <div className="menu_cards" key={index}>
                        <MenuCard name={menu.name} description={menu.description} price={menu.price} />
                    </div>
                ))
            }
        </main>
        
    )
}
