const productos = [
    {
        nombre: "Messi",
        id: "1ed",
        precio: 1200,
        palo:"Espada",
        tier:"Dorada",
        img:"https://i.imgur.com/9IkxSKe.png",
        text:"La Copa me llamaba. La vi ahi brillando y la fui a besar.",
    },
    {
        nombre: "Dibala",
        id: "12on",
        precio: 2600,
        palo:"Oro",
        tier:"Normal",
        img:"https://i.imgur.com/hyulj3c.png",
        text:"No dudé ni un segundo en tirarla a Ia mier...",
    },
    {
        nombre: "Emiliano Martinez",
        id: "1bo",
        precio: 2600,
        palo:"Basto",
        tier:"Dorada",
        img:"https://i.imgur.com/u7Z6zUJ.png",
        text:"Me estiré bien para ese lado, rezando que vaya ahi!.",
    },
    {
        nombre: "Gonzalo Montiel",
        id: "2en",
        precio: 2200,
        palo:"Espada",
        tier:"Normal",
        img:"https://i.imgur.com/QsuOVsC.png",
        text:"Es el penal soñado para cualquier pibe",
    },
    {
        nombre: "Franco Armani",
        id: "1co",
        precio: 5200,
        palo:"Copa",
        tier:"Dorada",
        img:"https://i.imgur.com/vxATeZV.png",
        text:"El mundial es un recuerdo para toda la vida",
    },
    {
        nombre: "El bailecito",
        id: "5en",
        precio: 9500,
        palo:"Espada",
        tier:"Normal",
        img:"https://i.imgur.com/bNrQUi4.png",
        text:"Nunca habia hecho el bailecito en mi Vida. Solo celebré asi en momentos decisivos con Argentina.",
    },
    {
        nombre: "Messi",
        id: "1en",
        precio: 2300,
        palo:"Espada",
        tier:"Normal",
        img:"https://i.imgur.com/diNnv6u.png",
        text:"Pudimos darle una alegria a nuestro pueblo después de tantos años",
    },
    {
        nombre: "MC Alister",
        id: "3on",
        precio: 10200,
        palo:"Oro",
        tier:"Normal",
        img:"https://i.imgur.com/LWflqwF.png",
        text:"Molina viene el centro, le queda a Mac Allister... Goooooooooool!.",
    },
    {
        nombre: "Rodrigo De Paul",
        id: "1o",
        precio: 15200,
        palo:"Oro",
        tier:"Normal",
        img:"https://i.imgur.com/BXAvNRg.png",
        text:"No caigo. Somos eternos. Toda la vida vamos a pertenecer a ese grupo selecto que levanto la Copa del Mundo.",
    }
]

export const getProducts = () =>{
    return new Promise((res, rej) => {
        setTimeout(() => {
        res(productos)
        rej("error") 
        }, 1000)
    })
    
}

export const getProduct = (id) => {
    return productos.find((e) => e.id == id) 
         
}


export const getProductsByCategory = (palo) =>{
    return new Promise((res, rej) => {
    setTimeout(() => {
       res(productos.filter(e => e.palo === palo))
       rej("error") 
    }, 1000)
    })
    
}