import '../css/Menus/MenuCard.css'

export function MenuCard ({ name, description, price }) {
    return (
        <section>
            <h2>{name}</h2>
            <p>{description}</p>
            <p>{price}</p>
        </section>
    )
}
