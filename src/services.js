const products = [
    {
        id: "1",
        name: "Cessna 150",
        price: "55,000",
        category: "Monomotor.",
        description: "El Cessna 150 es un avión biplaza de propósito general equipado con tren de aterrizaje triciclo fijo y ala alta, diseñado originalmente para realizar labores de entrenamiento, turismo y uso personal. El Cessna 150 es simple, robusto y relativamente fiable. Por estas razones se convirtió en uno de los aviones de entrenamiento básico más populares del mundo. Con una muy buena estabilidad y manejo. Su velocidad ronda entre los 70 a 109nudos(130 a 202 km/h).",
        img: "../public/Cessna150.png",
        tripulacion: "1 Piloto.",
        capacidad: " 1 Pasajero.",
        motor: "Continental O-200A.",
        helice: "Paso fijo.",
        potencia: "100 HP.",
        consumo: "20 Litros por hora.",
        comb: "98 Litros.",
        autonomia: "4 Horas."
    },

    {
        id: "2",
        name: "Piper PA-11 ",
        price: "35,000",
        category: "Monomotor",
        description: "El PA-11 es un avion biplaza con tren de aterrizaje convencional fijo y ala alta, utilizado principalmente para entrenamiento y turismo. El PA-11 a diferencia de su hermano el J-3 permite realizar vuelos en solitario sentado en el asiento delantero, debido a que se altera el centro de gravedad, teniendo el motor situado mas abajo y los tanques de combustible en las alas. Sus velocidades rondan entre los 53 a 98 nudos (100 a 181 km/h). ",
        img: "../public/Pa11.jpg",
        tripulacion: "1 Piloto.",
        capacidad: " 1 Pasajero.",
        motor: "Continental A65-8. ",
        helice: "Paso fijo.",
        potencia: "65 HP.",
        consumo: "16 Litros por hora.",
        comb: "68 Litros.",
        autonomia: "4 Horas."
    },

    {
        id: "3",
        name: "Piper PA-38 Tomahawk",
        price: "65,000",
        category: "Monomotor",
        description: "El Piper PA-38 Tomahawk es un avion biplaza con tren de aterrizaje triciclo fijoy ala baja. Además de su amplio uso como primer avión de entrenamiento, también es efectivo como avión turístico para dos personas gracias a un amplia y cómoda cabina. Aunque comparte rendimiento y coste similares con el Cessna 152, el PA-38 tiene una mejor ventilación de cabina basada en los sistemas de ventilación de los automóviles. Las velocidades de crucero oscilan entre los 90 y 110 nudos (de 167 a 204 km/h).",
        img: "../public/Tomahawk.jpg",
        tripulacion: "1 Piloto.",
        capacidad: "1 Pasajero.",
        motor: "Lycoming O-235-L2C.",
        helice: "Paso fijo.",
        potencia: "112 HP.",
        consumo: "22 Litros por hora.",
        comb: "121 Litros.",
        autonomia: "5 Horas."
    },

    {
        id: "4",
        name: "Piper PA-23 Aztec",
        price: "125,000",
        category: "Bimotor",
        description: "El piper PA-23 es un avion Bimotor con tren tricilo retractil. Entre otros aviones ligeros con dos motores de su generación, el Aztec fue conocido por su buena carga de tracción, su gran durabilidad, su fácil manejo, rendimiento respetable de los motores. Contando con piloto automatico, sus velocidades rondan entre 150 a 187 nudos (277 a 346 km/h).",
        img: "../public/pa23.jpg",
        tripulacion: "1 Piloto.",
        capacidad: "5 Pasajeros.",
        motor: "2 Lycoming IO-540-C4B5.",
        helice: "Paso variable.",
        potencia: "262 HP Cada motor.",
        consumo: "88 Litros por hora.",
        comb: "530 Litros + Depositos opcionales de 150 Litros",
        autonomia: "6 Horas sin depositos extras."
    },

    {
        id: "5",
        name: "Beechcraft King Air",
        price: "5,750,000",
        category: "Bimotor",
        description: "El Beechcraft King Air es un avion bimotor, turbo helice con tren triciclo retractil. Capaz de volar a gran altura y grandes distancias con las mayores comodidades, equipado con la ultima tecnologia en navegacion aerea. Sus velocidades rondan entre 289 (536 km/h). ",
        img: "../public/KingAir.jpg",
        tripulacion: "1-2 Pilotos.",
        capacidad: "6-7 Pasajeros",
        motor: "2 Turbohélice Pratt & Whitney Canada PT6A-42",
        helice: "Cuatripala de paso variable.",
        potencia: "875 HP Cada motor.",
        consumo: "300 Litros por hora.",
        comb: "2.230 Litros.",
        autonomia: "7 Horas."
    },

    {
        id: "6",
        name: "Cessna 425",
        price: "700,000", category: "Bimotor",
        description: "Experimenta la unión perfecta entre lujo y potencia con el Cessna 425 Conquest I. Su diseño aerodinámico y cabina de lujo te llevan a tu destino con estilo. Equipado con motores Pratt & Whitney PT6A-112, ofrece rendimiento excepcional y alcance prolongado. Versátil y seguro, este avión es la elección definitiva para viajes ejecutivos y más allá. Descubre un nuevo nivel de vuelo en el Cessna 425 Conquest I. Sus velocidades rondan entre 200 a 216 nudos (370 a 400 km/h).",
        img: "../public/Cessna425.jpg",
        tripulacion: "1 Piloto.",
        capacidad: "7 Pasajeros.",
        motor: "2 Turbohelice Pratt & Whitney Canada PT6A-112.",
        helice: "Catripala de paso variable.",
        potencia: "550 HP Cada motor.",
        consumo: "189 Litros por hora.",
        comb: "2.045 Litros.",
        autonomia: "5 Horas."
    },

    {
        id: "7",
        name: "Tecnam P92 ECHO MKII",
        price: "160,000",
        category: "Ultraliviano",
        description: "El Tecnam P92 Echo MkII es un avión ligero diseñado para aventuras en el aire. Con su diseño aerodinámico y opciones de motorización eficiente, te ofrece la oportunidad de disfrutar de vuelos escénicos y entrenamiento de pilotos con comodidad y seguridad. Su cabina acogedora y controles intuitivos hacen que volar sea una experiencia emocionante y placentera. Ya sea que estés buscando tus primeras horas de vuelo o desees explorar el mundo desde las alturas, el Tecnam P92 Echo MkII te llevará allí con estilo y confiabilidad. Sus velocidades rondan entre 86 a 97 nudos (160 a 180 km/h). ",
        img: "../public/Tecnamp92.jpg",
        tripulacion: "1 Piloto.",
        capacidad: "1 Pasajero.",
        motor: " Rotax 912.",
        helice: "Paso fijo.",
        potencia: "100 HP.",
        consumo: "15-23 Litros por hora",
        comb: "90 Litros.",
        autonomia: "5 Horas."
    },

    {
        id: "8",
        name: "Tecnam P2008 JC MKII",
        price: "145,000",
        category: "Ultraliviano",
        description: "Descubre el Tecnam P2008, un avión ligero diseñado para combinar elegancia y eficiencia en cada vuelo. Con su motor Rotax 912 y diseño aerodinámico, experimentarás la emoción del cielo con comodidad y estilo. La cabina del P2008 te envuelve en una atmósfera de lujo y funcionalidad, mientras los controles intuitivos te ponen al mando con confianza. Su eficiente consumo de combustible y tanques generosos te permiten explorar el horizonte durante horas, sin preocuparte por paradas frecuentes.tiene una velocidad de aproximadamente 90-100 nudos (167-185 km/h). ",
        img: "../public/Tecnam2008.jpg",
        tripulacion: "1 Piloto.",
        capacidad: "1 Pasajero.",
        motor: " Rotax 912.",
        helice: "Paso fijo.",
        potencia: "100 HP.",
        consumo: "15-22 Litros por hora.",
        comb: "144 Litros.",
        autonomia: "9 Horas."
    },
]

export const getProduct = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            //Buscar producto
            const product = products.find((p) => p.id === id);

            if (product) {
                resolve(product);
            } else {
                reject("No existe producto")
            }
        }, 1500)
    });
}

export const getProducts = (category) => {
    return new Promise((resolve) => {
        setTimeout(() => {

            const productsFilter = category ? products.filter((product) => product.category === category) : products;

            resolve(productsFilter);
        }, 1500);
    })
}