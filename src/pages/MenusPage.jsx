import { Link } from "react-router-dom";
import { Menus } from "../components/Menus";

export function MenusPage () {
    return (
        <main className="menus_container">
            <Link to='/'>Volver</Link>
            <Menus />
        </main>
    ) 
}
