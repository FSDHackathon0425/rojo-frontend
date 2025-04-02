import '../css/Orders/OrderCard.css'

export function OrderCard () {
    const ORDERS_CARDS = [
        {
            name: 'Test',
            user: 'Usuario 1',
            menu: 'Menú 1',
            done: 'completed'
        },
        {
            name: 'Test 2',
            user: 'Usuario 2',
            menu: 'Menú 2',
            done: 'no completed'
        },
        {
            name: 'Test 3',
            user: 'Usuario 3',
            menu: 'Menú 3',
            done: 'completed'
        }
    ]

    return (
        <section className="order_card__container">
        {
            ORDERS_CARDS.map((order, index) => (
                <section className='order_card' key={index}>
                    <h3>{order.name}</h3>
                    <p>{order.user}</p>
                    <p>{order.menu}</p>
                    <p>{order.done}</p>
                </section>
            ))
        }
        </section>
    )
}
