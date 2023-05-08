const products = [
    {
        id:'1',
        name: 'Copos',
        price: 400,
        category: 'Servicios personalizados',
        img:'https://www.infobae.com/new-resizer/JKnHI9JzrH00VzISp5BgREz_kek=/768x432/filters:format(webp):quality(85)/cloudfront-us-east-1.images.arcpublishing.com/infobae/XY4T4K5PQFCY7A52ONFLBGDZZA.jpg',
        stock: 30,
        description: 'Algodones de azucar personalizados'
    },
    { id: '2' , name: 'Copos' , price: 400 , category: 'Servicios personalizados' , img: 'https://www.infobae.com/new-resizer/JKnHI9JzrH00VzISp5BgREz_kek=/768x432/filters:format(webp):quality(85)/cloudfront-us-east-1.images.arcpublishing.com/infobae/XY4T4K5PQFCY7A52ONFLBGDZZA.jpg'}
]


export const getProducts = () => {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 500)
    })
}    
