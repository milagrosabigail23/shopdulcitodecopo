import ItemCount from '../ItemCount/ItemCount'


const ItemDetail = ({id ,name , img, category, description ,price ,stock }) => {
    return (
        <article className='CardItem'>
            <header className='Header'>
                <h2 className='ItemHeader'>
                    {name}
                </h2>
            </header>
            <picture>
                <img src={img} alt={name} className='ItemImg' />
            </picture>
            <section>
                <p className='Info'>
                    Categoría: ${category}
                </p>
                <p className='Info'>
                    Descripción: {description}
                </p>
                <p className='Info'>
                    Precio: {price}
                </p>
            </section>
            <footer className='ItemFooter'>
                <ItemCount initial={1} stock={stock} onAdd={(agregarUno) => console.log('Cantidad agregada al carrito' , agregarUno)} />
            </footer>
        </article>
    )}

    export default ItemDetail