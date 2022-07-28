// Carrinho
let cartIcon = document.querySelector('#carrinho-icone')
let cart = document.querySelector('.cart')
let closeCart = document.querySelector('#close-cart')

// Abrir Carrinho
cartIcon.onclick = () =>{
    cart.classList.add("active");
  };
  // Fechar Carrinho
  closeCart.onclick=()=>{
    cart.classList.remove("active");
  };