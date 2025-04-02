import { Link } from "react-router-dom";
import { OrderCard } from "../components/OrderCard";
import '../css/Orders/OrdersPage.css'

export function OrdersPage () {
    return (
        <main className="orders_container">
            <Link to='/'>Volver</Link>
            <h1>Pedidos</h1>
            <OrderCard />
        </main>
    )
}
