const productos = [
    {
        nombre: "Messi",
        nCarta: 52,
        precio: 1200,
        palo:"Espada",
        tier:"dorada",
        img:"https://http2.mlstatic.com/D_NQ_NP_749192-MLA76668935840_062024-O.webp",
    },
    {
        nombre: "Dibala",
        nCarta: 24,
        precio: 2200,
        palo:"Oro",
        tier:"normal",
        img:"https://http2.mlstatic.com/D_NQ_NP_749192-MLA76668935840_062024-O.webp",
    },
    {
        nombre: "Dibu Martines",
        nCarta: 16,
        precio: 9500,
        palo:"Espada",
        tier:"dorada",
        img:"https://http2.mlstatic.com/D_NQ_NP_749192-MLA76668935840_062024-O.webp",
    },
    {
        nombre: "Grupo1",
        nCarta: 41,
        precio: 2300,
        palo:"Copa",
        tier:"normal",
        img:"https://http2.mlstatic.com/D_NQ_NP_749192-MLA76668935840_062024-O.webp",
    },
    {
        nombre: "MC Alister",
        nCarta: 12,
        precio: 10200,
        palo:"Palo",
        tier:"dorada",
        img:"https://http2.mlstatic.com/D_NQ_NP_749192-MLA76668935840_062024-O.webp",
    }
]

export const getProducts = () =>{
    return new Promise((res, rej) => {
    setTimeout(() => {
       res(productos)
       rej("error") 
    }, 3000)
    })
    
}

export const getProductsByPalo = (palo) =>{
    return new Promise((res, rej) => {
    setTimeout(() => {
       res(productos.filter(e => e.palo === palo))
       rej("error") 
    }, 3000)
    })
    
}