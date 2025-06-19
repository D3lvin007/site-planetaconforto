// Main JavaScript for Planeta Conforto

document.addEventListener('DOMContentLoaded', function() {
    // Inicializar a aplicação
    initApp();
});

// Função principal de inicialização
function initApp() {
    // Carregar produtos
    loadProducts();
    
    // Inicializar navegação mobile
    initMobileNav();
    
    // Inicializar modais
    initModals();
    
    // Inicializar carrinho
    initCart();
    
    // Inicializar WhatsApp
    initWhatsApp();
    
    // Inicializar formulários
    initForms();
    
    // Inicializar animações
    initAnimations();
    
    // Inicializar filtros
    initFilters();
    
    // Adicionar tags de promoção em vermelho
    addPromotionTags();
}

// Carregar produtos na página
function loadProducts() {
    // Carregar produtos para cada categoria
    loadCategoryProducts('sala-estar', produtos['sala-estar']);
    loadCategoryProducts('sala-jantar', produtos['sala-jantar']);
    loadCategoryProducts('quarto', produtos['quarto']);
}

// Adicionar tags de promoção em vermelho a produtos selecionados
function addPromotionTags() {
    // Selecionar alguns produtos aleatoriamente para adicionar tags de promoção
    const allProducts = document.querySelectorAll('.produto-card');
    const productsToTag = Math.floor(allProducts.length * 0.3); // 30% dos produtos
    
    const selectedIndices = [];
    while (selectedIndices.length < productsToTag) {
        const randomIndex = Math.floor(Math.random() * allProducts.length);
        if (!selectedIndices.includes(randomIndex)) {
            selectedIndices.push(randomIndex);
            
            // Criar e adicionar a tag de promoção
            const promotionTag = document.createElement('div');
            promotionTag.className = 'produto-tag';
            promotionTag.textContent = 'PROMOÇÃO';
            
            // Adicionar a tag ao produto
            allProducts[randomIndex].appendChild(promotionTag);
            
            // Adicionar animação pulsante à tag
            setInterval(() => {
                promotionTag.style.transform = 'scale(1.1)';
                setTimeout(() => {
                    promotionTag.style.transform = 'scale(1)';
                }, 500);
            }, 2000);
        }
    }
}

// Carregar produtos de uma categoria específica
function loadCategoryProducts(categoryId, productsList) {
    const container = document.getElementById(`produtos-${categoryId}`);
    if (!container) return;
    
    // Limpar o container
    container.innerHTML = '';
    
    // Adicionar cada produto
    productsList.forEach(product => {
        const productCard = createProductCard(product);
        container.appendChild(productCard);
    });
}

// Criar card de produto
function createProductCard(product) {
    const card = document.createElement('div');
    card.className = 'produto-card';
    card.dataset.id = product.id;
    
    // Estrutura do card
    card.innerHTML = `
        <div class="produto-img-container">
            <img src="${product.imagem}" alt="${product.nome}" class="produto-img">
        </div>
        <div class="produto-info">
            <h3 class="produto-nome">${product.nome}</h3>
            <div class="produto-preco">${Number(product.preco).toFixed(2).replace('.', ',')}Mzn</div>
            <div class="produto-avaliacao">
                <div class="stars">${generateStars(product.avaliacao)}</div>
                <span>${Number(product.avaliacao).toFixed(1)}</span>
            </div>
            <div class="produto-acoes">
                <button class="btn-info produto-info-btn" data-id="${product.id}">
                    <i class="fas fa-info-circle"></i>
                </button>
                <button class="btn-carrinho add-to-cart-btn" data-id="${product.id}">
                    <i class="fas fa-shopping-cart"></i> Adiciona
                </button>
            </div>
        </div>
    `;
    
    // Adicionar event listeners
    card.querySelector('.produto-info-btn').addEventListener('click', () => showProductModal(product));
    card.querySelector('.add-to-cart-btn').addEventListener('click', () => addToCart(product));
    
    return card;
}

// Gerar estrelas para avaliação
function generateStars(rating) {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);
    
    let starsHTML = '';
    
    // Estrelas cheias
    for (let i = 0; i < fullStars; i++) {
        starsHTML += '<i class="fas fa-star"></i>';
    }
    
    // Meia estrela
    if (halfStar) {
        starsHTML += '<i class="fas fa-star-half-alt"></i>';
    }
    
    // Estrelas vazias
    for (let i = 0; i < emptyStars; i++) {
        starsHTML += '<i class="far fa-star"></i>';
    }
    
    return starsHTML;
}

// Inicializar navegação mobile
function initMobileNav() {
    const mobileToggle = document.querySelector('.mobile-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (mobileToggle && navMenu) {
        mobileToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            mobileToggle.classList.toggle('active');
        });
    }
}

// Inicializar modais
function initModals() {
    // Criar o container de modal se não existir
    if (!document.getElementById('modal-container')) {
        const modalContainer = document.createElement('div');
        modalContainer.id = 'modal-container';
        document.body.appendChild(modalContainer);
    }
}

// Mostrar modal de produto
function showProductModal(product) {
    const modalContainer = document.getElementById('modal-container');
    
    // Criar conteúdo do modal
    modalContainer.innerHTML = `
        <div class="modal produto-modal">
            <div class="modal-content">
                <button class="modal-close">&times;</button>
                <div class="modal-body">
                    <div class="produto-modal-img">
                        <img src="${product.imagem}" alt="${product.nome}">
                    </div>
                    <div class="produto-modal-info">
                        <h3>${product.nome}</h3>
                        <div class="produto-modal-preco">${product.preco.toFixed(2).replace('.', ',')}Mzn</div>
                        <div class="produto-modal-avaliacao">
                            <div class="stars">${generateStars(product.avaliacao)}</div>
                            <span>${product.avaliacao.toFixed(1)}</span>
                        </div>
                        <div class="produto-modal-descricao">
                            <p>${product.descricao || 'Sem descrição disponível.'}</p>
                        </div>
                        <button class="btn btn-destaque add-to-cart-btn" data-id="${product.id}">
                            <i class="fas fa-shopping-cart"></i> Adicionar ao Carrinho
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    // Mostrar o modal
    modalContainer.style.display = 'flex';
    
    // Adicionar event listeners
    modalContainer.querySelector('.modal-close').addEventListener('click', () => {
        modalContainer.style.display = 'none';
    });
    
    modalContainer.querySelector('.add-to-cart-btn').addEventListener('click', () => {
        addToCart(product);
        modalContainer.style.display = 'none';
    });
    
    // Fechar ao clicar fora do modal
    modalContainer.addEventListener('click', (e) => {
        if (e.target === modalContainer) {
            modalContainer.style.display = 'none';
        }
    });
}

// Inicializar carrinho
function initCart() {
    // Carregar carrinho do localStorage
    loadCart();
    
    // Adicionar event listeners para botões do carrinho
    document.addEventListener('click', (e) => {
        if (e.target.closest('.carrinho-btn-checkout')) {
            e.preventDefault();
            checkoutCart();
        } else if (e.target.closest('.carrinho-btn-ver')) {
            e.preventDefault();
            showCartModal();
        }
    });
}

// Carregar carrinho do localStorage
function loadCart() {
    const cart = JSON.parse(localStorage.getItem('planetaConfortoCart')) || [];
    updateCartUI(cart);
}

// Adicionar produto ao carrinho
function addToCart(product) {
    // Obter carrinho atual
    const cart = JSON.parse(localStorage.getItem('planetaConfortoCart')) || [];
    
    // Verificar se o produto já está no carrinho
    const existingProductIndex = cart.findIndex(item => item.id === product.id);
    
    if (existingProductIndex >= 0) {
        // Incrementar quantidade
        cart[existingProductIndex].quantidade += 1;
    } else {
        // Adicionar novo produto
        cart.push({
            id: product.id,
            nome: product.nome,
            preco: product.preco,
            imagem: product.imagem,
            quantidade: 1
        });
    }
    
    // Salvar carrinho atualizado
    localStorage.setItem('planetaConfortoCart', JSON.stringify(cart));
    
    // Atualizar UI
    updateCartUI(cart);
    
    // Mostrar notificação
    showNotification(`${product.nome} adicionado ao carrinho!`);
}

// Atualizar UI do carrinho
function updateCartUI(cart) {
    // Atualizar contador
    const cartCount = document.querySelector('.carrinho-count');
    const totalItems = cart.reduce((total, item) => total + item.quantidade, 0);
    cartCount.textContent = totalItems;
    
    // Atualizar dropdown
    const cartItems = document.querySelector('.carrinho-items');
    const cartTotal = document.querySelector('.carrinho-total span:last-child');
    
    if (cart.length === 0) {
        cartItems.innerHTML = '<div class="carrinho-empty">O seu carrinho está vazio</div>';
        cartTotal.textContent = '0,00 Mzn';
    } else {
        // Limpar itens
        cartItems.innerHTML = '';
        
        // Adicionar cada item
        cart.forEach(item => {
            const cartItem = document.createElement('div');
            cartItem.className = 'carrinho-item';
            cartItem.innerHTML = `
                <div class="carrinho-item-img">
                    <img src="${item.imagem}" alt="${item.nome}">
                </div>
                <div class="carrinho-item-info">
                    <h4>${item.nome}</h4>
                    <div class="carrinho-item-preco">${Number(item.preco).toFixed(2).replace('.', ',')}Mzn x ${item.quantidade}</div>
                </div>
                <button class="carrinho-item-remove" data-id="${item.id}">
                    <i class="fas fa-trash"></i>
                </button>
            `;
            
            cartItems.appendChild(cartItem);
            
            // Adicionar event listener para remover
            cartItem.querySelector('.carrinho-item-remove').addEventListener('click', () => removeFromCart(item.id));
        });
        
        // Atualizar total
        const total = cart.reduce((sum, item) => sum + (item.preco * item.quantidade), 0);
        cartTotal.textContent = `${total.toFixed(2).replace('.', ',')} Mzn`;
    }
}

// Remover produto do carrinho
function removeFromCart(productId) {
    // Obter carrinho atual
    const cart = JSON.parse(localStorage.getItem('planetaConfortoCart')) || [];
    
    // Encontrar o produto
    const productIndex = cart.findIndex(item => item.id === productId);
    
    if (productIndex >= 0) {
        // Remover produto
        cart.splice(productIndex, 1);
        
        // Salvar carrinho atualizado
        localStorage.setItem('planetaConfortoCart', JSON.stringify(cart));
        
        // Atualizar UI
        updateCartUI(cart);
    }
}

// Mostrar modal do carrinho
function showCartModal() {
    const cart = JSON.parse(localStorage.getItem('planetaConfortoCart')) || [];
    const modalContainer = document.getElementById('modal-container');
    
    // Criar conteúdo do modal
    modalContainer.innerHTML = `
        <div class="modal carrinho-modal">
            <div class="modal-content">
                <button class="modal-close">&times;</button>
                <div class="modal-header">
                    <h3>Seu Carrinho</h3>
                </div>
                <div class="modal-body">
                    ${cart.length === 0 ? 
                        '<div class="carrinho-empty">O seu carrinho está vazio</div>' : 
                        `<div class="carrinho-modal-items">
                            ${cart.map(item => `
                                <div class="carrinho-modal-item">
                                    <div class="carrinho-modal-item-img">
                                        <img src="${item.imagem}" alt="${item.nome}">
                                    </div>
                                    <div class="carrinho-modal-item-info">
                                        <h4>${item.nome}</h4>
                                        <div class="carrinho-modal-item-preco">${item.preco.toFixed(2).replace('.', ',')} Mzn</div>
                                    </div>
                                    <div class="carrinho-modal-item-quantidade">
                                        <button class="quantidade-btn menos" data-id="${item.id}">-</button>
                                        <span>${item.quantidade}</span>
                                        <button class="quantidade-btn mais" data-id="${item.id}">+</button>
                                    </div>
                                    <button class="carrinho-modal-item-remove" data-id="${item.id}">
                                        <i class="fas fa-trash"></i>
                                    </button>
                                </div>
                            `).join('')}
                        </div>
                        <div class="carrinho-modal-total">
                            <span>Total:</span>
                            <span>${cart.reduce((sum, item) => sum + (item.preco * item.quantidade), 0).toFixed(2).replace('.', ',')} Mzn</span>
                        </div>
                        <div class="carrinho-modal-buttons">
                            <button class="btn btn-secundario limpar-carrinho">Limpar Carrinho</button>
                            <button class="btn btn-destaque finalizar-compra">Finalizar Compra</button>
                        </div>`
                    }
                </div>
            </div>
        </div>
    `;
    
    // Mostrar o modal
    modalContainer.style.display = 'flex';
    
    // Adicionar event listeners
    modalContainer.querySelector('.modal-close').addEventListener('click', () => {
        modalContainer.style.display = 'none';
    });
    
    // Fechar ao clicar fora do modal
    modalContainer.addEventListener('click', (e) => {
        if (e.target === modalContainer) {
            modalContainer.style.display = 'none';
        }
    });
    
    // Event listeners para botões de quantidade
    if (cart.length > 0) {
        // Botões de menos
        modalContainer.querySelectorAll('.quantidade-btn.menos').forEach(btn => {
            btn.addEventListener('click', () => {
                updateCartItemQuantity(btn.dataset.id, -1);
            });
        });
        
        // Botões de mais
        modalContainer.querySelectorAll('.quantidade-btn.mais').forEach(btn => {
            btn.addEventListener('click', () => {
                updateCartItemQuantity(btn.dataset.id, 1);
            });
        });
        
        // Botões de remover

        
        modalContainer.querySelectorAll('.carrinho-modal-item-remove').forEach(btn => {
            btn.addEventListener('click', () => {
                removeFromCart(btn.dataset.id);
                showCartModal(); // Reabrir o modal atualizado
            });
        });
        
        // Botão de limpar carrinho
        modalContainer.querySelector('.limpar-carrinho').addEventListener('click', () => {
            clearCart();
            modalContainer.style.display = 'none';
        });
        
        // Botão de finalizar compra
        modalContainer.querySelector('.finalizar-compra').addEventListener('click', () => {
            checkoutCart();
            modalContainer.style.display = 'none';
        });
    }
} 

// Atualizar quantidade de item no carrinho
function updateCartItemQuantity(productId, change) {
    // Obter carrinho atual
    const cart = JSON.parse(localStorage.getItem('planetaConfortoCart')) || [];
    
    // Encontrar o produto
    const productIndex = cart.findIndex(item => item.id === productId);
    
    if (productIndex >= 0) {
        // Atualizar quantidade
        cart[productIndex].quantidade += change;
        
        // Remover se quantidade <= 0
        if (cart[productIndex].quantidade <= 0) {
            cart.splice(productIndex, 1);
        }
        
        // Salvar carrinho atualizado
        localStorage.setItem('planetaConfortoCart', JSON.stringify(cart));
        
        // Atualizar UI
        updateCartUI(cart);
        showCartModal(); // Reabrir o modal atualizado
    }
}

// Limpar carrinho
function clearCart() {
    localStorage.removeItem('planetaConfortoCart');
    updateCartUI([]);
}

// Finalizar compra
function checkoutCart() {
    const cart = JSON.parse(localStorage.getItem('planetaConfortoCart')) || [];
    
    if (cart.length === 0) {
        showNotification('O seu carrinho está vazio!');
        return;
    }
    
    // Preparar mensagem para WhatsApp
    const total = cart.reduce((sum, item) => sum + (item.preco * item.quantidade), 0);
    let message = 'Olá! Gostaria de fazer um pedido:\n\n';
    
    cart.forEach(item => {
        message += `${item.nome} x${item.quantidade} - ${(item.preco * item.quantidade).toFixed(2).replace('.', ',')}Mzn\n`;
    });
    
    message += `\nTotal: ${total.toFixed(2).replace('.', ',')}Mzn`;
    
    // Codificar mensagem para URL
    const encodedMessage = encodeURIComponent(message);
    
    // Abrir WhatsApp
    window.open(`https://wa.me/843684546?text=${encodedMessage}`, '_blank');
    
    // Limpar carrinho após finalizar
    clearCart();
}

// Inicializar WhatsApp
function initWhatsApp() {
    // Adicionar botão de WhatsApp se não existir
    if (!document.querySelector('.whatsapp-btn')) {
        const whatsappBtn = document.createElement('a');
        whatsappBtn.className = 'whatsapp-btn';
        whatsappBtn.href = 'https://wa.me/871545168';
        whatsappBtn.target = '_blank';
        whatsappBtn.innerHTML = '<i class="fab fa-whatsapp"></i>';
        document.body.appendChild(whatsappBtn);
        
        // Adicionar animação pulsante
        setInterval(() => {
            whatsappBtn.classList.add('pulse');
            setTimeout(() => {
                whatsappBtn.classList.remove('pulse');
            }, 1000);
        }, 3000);
    }  
}

// Inicializar formulários
function initForms() {
    const contactForm = document.getElementById('contacto-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Simular envio
            const submitBtn = contactForm.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            
            submitBtn.disabled = true;
            submitBtn.textContent = 'A enviar...';
            
            setTimeout(() => {
                showNotification('Mensagem enviada com sucesso!');
                contactForm.reset();
                submitBtn.disabled = false;
                submitBtn.textContent = originalText;
            }, 1500);
        });
    }
}

// Inicializar animações
function initAnimations() {
    // Animação de fade-in para elementos ao fazer scroll
    const animateOnScroll = () => {
        const elements = document.querySelectorAll('.produto-card, .categoria-card, .vantagem-item');
        
        elements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const elementBottom = element.getBoundingClientRect().bottom;
            
            // Verificar se o elemento está visível
            if (elementTop < window.innerHeight && elementBottom > 0) {
                element.classList.add('fade-in');
            }
        });
    };
    
    // Adicionar classe para animação
    document.querySelectorAll('.produto-card, .categoria-card, .vantagem-item').forEach(element => {
        element.classList.add('animate');
    });
    
    // Executar no carregamento e no scroll
    animateOnScroll();
    window.addEventListener('scroll', animateOnScroll);
    
    // Adicionar efeito de destaque vermelho nos preços ao passar o mouse
    document.querySelectorAll('.produto-preco').forEach(priceElement => {
        priceElement.addEventListener('mouseenter', () => {
            priceElement.style.transform = 'scale(1.1)';
            priceElement.style.textShadow = '0 0 5px rgba(230, 57, 70, 0.5)';
        });
        
        priceElement.addEventListener('mouseleave', () => {
            priceElement.style.transform = 'scale(1)';
            priceElement.style.textShadow = 'none';
        });
    });
}

// Inicializar filtros
function initFilters() {
    const filterSelects = document.querySelectorAll('.filtro-select');
    
    filterSelects.forEach(select => {
        select.addEventListener('change', function() {
            const categoryId = this.closest('.produtos-section').id;
            const filterValue = this.value;
            
            // Obter produtos da categoria
            const categoryProducts = [...produtos[categoryId.replace('sala-', '')]];
            
            // Aplicar filtro
            switch (filterValue) {
                case 'preco-asc':
                    categoryProducts.sort((a, b) => a.preco - b.preco);
                    break;
                case 'preco-desc':
                    categoryProducts.sort((a, b) => b.preco - a.preco);
                    break;
                case 'avaliacao':
                    categoryProducts.sort((a, b) => b.avaliacao - a.avaliacao);
                    break;
                default:
                    // Relevância (ordem original)
                    break;
            }
            
            // Recarregar produtos
            loadCategoryProducts(categoryId.replace('sala-', ''), categoryProducts);
        });
    });
}

// Mostrar notificação
function showNotification(message) {
    // Criar elemento de notificação se não existir
    if (!document.getElementById('notification')) {
        const notification = document.createElement('div');
        notification.id = 'notification';
        document.body.appendChild(notification);
    }
    
    const notificationElement = document.getElementById('notification');
    notificationElement.textContent = message;
    notificationElement.classList.add('show');
    
    // Adicionar borda vermelha à notificação
    notificationElement.style.borderLeft = '4px solid var(--cor-destaque)';
    
    // Esconder após 3 segundos
    setTimeout(() => {
        notificationElement.classList.remove('show');
    }, 3000);
}

