const products = [
    {
        id:'1',
        name: 'Copos en frasco de vidrio',
        price: 400,
        category: 'Dulces personalizados',
        img:'https://i.pinimg.com/564x/3d/01/9a/3d019af079bac864b2a8d841e0c4cb87.jpg',
        stock: 30,
        description: 'Algodones de azucar personalizados envasados en frasco de vidrio'
    },
    { id: '2' , name: 'Copos con bolsa' , price: 400 , category: 'Copos y Pochoclos' , img: 'https://i.pinimg.com/736x/75/82/b2/7582b23e0a3e2dee5ef74d961a1240bc.jpg', stock: 30, description: 'Algodones de azucar en bolsa con etiquetas personalizadas '},
    { id: '3' , name: 'Copos envasados' , price: 300 , category: 'Dulces personalizados' , img: 'https://i.pinimg.com/564x/30/da/ec/30daeca4691ac2fe2927a97a4ebcf5b2.jpg' ,stock: 40,description: 'Aldogon de azucar en envase plastico'}, 
    { id: '4' , name: 'Alquiler Máquina Copera' , price: 30000 , category: 'Alquiler de máquina Copera y Pochoclera' , img: 'https://i.pinimg.com/564x/5c/ab/83/5cab8392fdf54d99ea89ae15ee02c818.jpg' , stock: 2,description: 'Máquina copera electrica con operador incluido'},
    { id: '5' , name: 'Alquiler Máquina Pochoclera' , price: 25000 , category: 'Alquiler de máquina Copera y Pochoclera' , img: 'https://i.pinimg.com/564x/7f/4a/fc/7f4afc20972c2401b43b2cf77c5ddf21.jpg' , stock: 2,description: 'Máquina pochoclera electrica con operador incluido'},
]


export const getProducts = () => {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 500)
    })
}    

export const getProductById = (productId) => {
    return new Promise ((resolve) => {
        setTimeout(() => {
             resolve(products.find(prod => prod.id === productId))
        }, 500)
    })
}    

export const getProductsByCategory = (categoryId) => {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === categoryId))
        }, 500)
    })
}    


