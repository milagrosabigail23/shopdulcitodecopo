const Item = ({id, name, img, price, stock}) => {


    return (
        <article className="CardItem" >
            <header className="Header">
                <h2 className= "ItemHeader">
                    {name}
                </h2>
            </header>
            <picture>
                <img>Aca va la imagen</img>
            </picture>
            <section>
                <p className="Info">
                    Precio: ${price}
                </p>
                <p className="Info">
                    Stock disponible: {stock}
                </p>
            </section>
            <footer className='itemFooter'></footer>
            <button className='Option'>Ver detalle</button>
            </article>
    ) 
    
}
