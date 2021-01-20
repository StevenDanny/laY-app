import bcrypt from 'bcryptjs';

const data = {
    users: [
        {
            name: 'Steven',
            email: 'admin@example.com',
            password: bcrypt.hashSync('123', 8),
            isAdmin: true,
        },
        {
            name: 'Jose',
            email: 'user@example.com',
            password: bcrypt.hashSync('123', 8),
            isAdmin: false,
        }
    ],
    products: [
        {
            name: 'Nombre de prueba',
            category: 'Categoria de prueba',
            image: '/images/producto.png',
            price: 0.35,
            countInStock: 1,
            brand: 'Marca de prueba',
            rating: 0.5,
            numReviews: 35,
            description: 'Descripcion de prueba'
        },
        {
            name: 'Nombre de prueba2',
            category: 'Categoria de prueba',
            image: '/images/producto.png',
            price: 0.35,
            countInStock: 5,
            brand: 'Marca de prueba',
            rating: 2.5,
            numReviews: 35,
            description: 'Descripcion de prueba'
        },
        {
            name: 'Nombre de prueba3',
            category: 'Categoria de prueba',
            image: '/images/producto.png',
            price: 0.35,
            countInStock: 0,
            brand: 'Marca de prueba',
            rating: 3,
            numReviews: 35,
            description: 'Descripcion de prueba'
        }
    ]
}

export default data