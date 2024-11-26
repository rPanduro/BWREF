// menu-movil
// Mostrar/Ocultar el menú principal
document.querySelector("#menu-movil button").addEventListener("click", () => {
    const menu = document.querySelector("#menu-movil ul");
    menu.classList.toggle("active");


});

//user//
const btnUser = 
document.querySelector(".user_icon");

btnUser.addEventListener("click",()=>{
    window.location.href = "u.html";
})


//carrito//
const btnCart = 
document.querySelector(".container_cart_icon");
const containerCartProducts = 
document.querySelector(".container_cart_products");

btnCart.addEventListener("click",()=>{
    containerCartProducts.classList.toggle('hidden_cart');
})

//carrito responsive//
const cartInfo = 
document.querySelector('.cart_product');
const rowProduct = 
document.querySelector('.row_product');

//lista de todos los contenedores de productos//
const productList = document.querySelector('#container_items');

//Variables de arreglos de productos//
let allProducts = [];

const valorTotal =document.querySelector('.total_pagar');

const countProducts = document.querySelector('#contador_productos');

//Añadir al carrito//
productList.addEventListener('click', e => {

    if(e.target.classList.contains('btn_add_cart')) {
        const product = e.target.parentElement;

        const infoProduct = {
            quantity: 1,
            title: product.querySelector('h3').textContent,
            price: product.querySelector('p').textContent,
        };

        const exits = allProducts.some(
            product => product.title === infoProduct.title
        );
        
        if (exits) {
            const products = allProducts.map(product => {
                if(product.title === infoProduct.title) {
                    product.quantity++;
                    return product;
                }else{
                    return product;
                }
            });
            allProducts = [...products];
        }else{
            allProducts = [...allProducts, infoProduct];
        }

        showHTML();

    }

});

//filtrar productos //
rowProduct.addEventListener('click', (e) => {
    if(e.target.classList.contains('icon_close')){
        const product = e.target.parentElement;
        const title = product.querySelector('p').textContent;

        allProducts = allProducts.filter(
            product => product.title !== title
        );

        console.log(allProducts);
        showHTML();
    }
})

//funcion para mostrar en html//
const showHTML = () => {

    if(!allProducts.length){
        containerCartProducts.innerHTML=`
        <p class= "cart_empty"> El carrito está vacío</p>
        `
    }

    //limpiar html//
    rowProduct.innerHTML='';

    let total = 0;
    let totalOfProducts = 0;

    //Agregar productos//
    allProducts.forEach(product => {
        const containerProduct = document.createElement('div');
        containerProduct.classList.add('cart_product');

        containerProduct.innerHTML = `
        <div class="row_product">
            <div class="info_cart_product">
                <span class="cantidad_producto_carrito">${product.quantity}</span>
                <p class="titulo_producto_carrito">${product.title}</p>
                <span class="precio_producto_carrito">${product.price}</span>
            </div>
            <svg 
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" viewBox="0 0 24 24" 
                stroke-width="1.5" 
                stroke="currentColor" 
                class="icon_close"
            >
                <path 
                    stroke-linecap="round" 
                    stroke-linejoin="round" 
                    d="M6 18 18 6M6 6l12 12" 
                />
            </svg>
        </div>
        `;

        rowProduct.append(containerProduct);

        total = total + (product.quantity * parseFloat(product.price.slice(1)));
        totalOfProducts = totalOfProducts + product.quantity;

    });

    valorTotal.innerText = `$${total}`;
    countProducts.innerText = totalOfProducts;

};



/*BOTON IR PAGAR */
// Seleccionar el botón de "Ir a pagar"
const btnIrAPagar = document.getElementById('btn_ir_a_pagar');
const totalPagar = document.querySelector('.total_pagar');

// Función para actualizar el total y el estado del botón
function actualizarTotal(total) {
    totalPagar.textContent = `$${total}`;
    btnIrAPagar.disabled = total === 0; // Habilitar si el total es mayor a 0
}

// Ejemplo de uso: esta función debe llamarse cada vez que se actualicen los productos en el carrito
function actualizarCarrito() {
    let total = calcularTotalCarrito(); // Función que calcula el total
    actualizarTotal(total);
}

// Simulación de una función que calcula el total 
function calcularTotalCarrito() {
    // Aquí puedes calcular el total de los productos en el carrito
    return 1; 
}

// Llama a la función para actualizar el carrito cuando se cargue la página o cambie el carrito
actualizarCarrito();


//Modales//
/*modal1*/
const btnAbrirModal1 =
document.querySelector("#btn_abrir_modal1");
const btnCerrarModal1 =
document.querySelector("#btn_cerrar_modal1");
const modal1 =
document.querySelector("#modal1");

btnAbrirModal1.addEventListener("click",()=>{
    modal1.showModal();
    })

btnCerrarModal1.addEventListener("click",()=>{
    modal1.close();
})

/*modal2*/
const btnAbrirModal2 =
document.querySelector("#btn_abrir_modal2");
const btnCerrarModal2 =
document.querySelector("#btn_cerrar_modal2");
const modal2 =
document.querySelector("#modal2");

btnAbrirModal2.addEventListener("click",()=>{
    modal2.showModal();
    })

btnCerrarModal2.addEventListener("click",()=>{
    modal2.close();
})

/*modal3*/
const btnAbrirModal3 =
document.querySelector("#btn_abrir_modal3");
const btnCerrarModal3 =
document.querySelector("#btn_cerrar_modal3");
const modal3 =
document.querySelector("#modal3");

btnAbrirModal3.addEventListener("click",()=>{
    modal3.showModal();
    })

btnCerrarModal3.addEventListener("click",()=>{
    modal3.close();
})

/*modal4*/
const btnAbrirModal4 =
document.querySelector("#btn_abrir_modal4");
const btnCerrarModal4 =
document.querySelector("#btn_cerrar_modal4");
const modal4 =
document.querySelector("#modal4");

btnAbrirModal4.addEventListener("click",()=>{
    modal4.showModal();
    })

btnCerrarModal4.addEventListener("click",()=>{
    modal4.close();
})

/*modal5*/
const btnAbrirModal5 =
document.querySelector("#btn_abrir_modal5");
const btnCerrarModal5 =
document.querySelector("#btn_cerrar_modal5");
const modal5 =
document.querySelector("#modal5");

btnAbrirModal5.addEventListener("click",()=>{
    modal5.showModal();
    })

btnCerrarModal5.addEventListener("click",()=>{
    modal5.close();
})

/*modal6*/
const btnAbrirModal6 =
document.querySelector("#btn_abrir_modal6");
const btnCerrarModal6 =
document.querySelector("#btn_cerrar_modal6");
const modal6 =
document.querySelector("#modal6");

btnAbrirModal6.addEventListener("click",()=>{
    modal6.showModal();
    })

btnCerrarModal6.addEventListener("click",()=>{
    modal6.close();
})

/*modal7*/
const btnAbrirModal7 =
document.querySelector("#btn_abrir_modal7");
const btnCerrarModal7 =
document.querySelector("#btn_cerrar_modal7");
const modal7 =
document.querySelector("#modal7");

btnAbrirModal7.addEventListener("click",()=>{
    modal7.showModal();
    })

btnCerrarModal7.addEventListener("click",()=>{
    modal7.close();
})

/*modal8*/
const btnAbrirModal8 =
document.querySelector("#btn_abrir_modal8");
const btnCerrarModal8 =
document.querySelector("#btn_cerrar_modal8");
const modal8 =
document.querySelector("#modal8");

btnAbrirModal8.addEventListener("click",()=>{
    modal8.showModal();
    })

btnCerrarModal8.addEventListener("click",()=>{
    modal8.close();
})

/*modal9*/
const btnAbrirModal9 =
document.querySelector("#btn_abrir_modal9");
const btnCerrarModal9 =
document.querySelector("#btn_cerrar_modal9");
const modal9 =
document.querySelector("#modal9");

btnAbrirModal9.addEventListener("click",()=>{
    modal9.showModal();
    })

btnCerrarModal9.addEventListener("click",()=>{
    modal9.close();
})


/*modal10*/
const btnAbrirModal10 =
document.querySelector("#btn_abrir_modal10");
const btnCerrarModal10 =
document.querySelector("#btn_cerrar_modal10");
const modal10 =
document.querySelector("#modal10");

btnAbrirModal10.addEventListener("click",()=>{
    modal10.showModal();
    })

btnCerrarModal10.addEventListener("click",()=>{
    modal10.close();
})


/*modal11*/
const btnAbrirModal11 =
document.querySelector("#btn_abrir_modal11");
const btnCerrarModal11 =
document.querySelector("#btn_cerrar_modal11");
const modal11 =
document.querySelector("#modal11");

btnAbrirModal11.addEventListener("click",()=>{
    modal11.showModal();
    })

btnCerrarModal11.addEventListener("click",()=>{
    modal11.close();
})


/*modal12*/
const btnAbrirModal12 =
document.querySelector("#btn_abrir_modal12");
const btnCerrarModal12 =
document.querySelector("#btn_cerrar_modal12");
const modal12 =
document.querySelector("#modal12");

btnAbrirModal12.addEventListener("click",()=>{
    modal12.showModal();
    })

btnCerrarModal12.addEventListener("click",()=>{
    modal12.close();
})


/*modal13*/
const btnAbrirModal13 =
document.querySelector("#btn_abrir_modal13");
const btnCerrarModal13 =
document.querySelector("#btn_cerrar_modal13");
const modal13 =
document.querySelector("#modal13");

btnAbrirModal13.addEventListener("click",()=>{
    modal13.showModal();
    })

btnCerrarModal13.addEventListener("click",()=>{
    modal13.close();
})


if (window.innerWidth <= 768) {
    console.log("Estás en un dispositivo móvil");
    // código específico para móviles
    
}

const btnForm = 
document.querySelector(".enviar");
const coment = 
document.querySelector("#name");

btnForm.addEventListener("click",()=>{
    coment.classList.toggle('hidden_cart');
})