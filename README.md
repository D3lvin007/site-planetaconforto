# Planeta Conforto - Website de Mobiliário

Um website responsivo e moderno para venda de mobiliário para sala de estar, sala de jantar e quarto.

## Características

- Design responsivo para todos os dispositivos (desktop, tablet, mobile)
- Catálogo de produtos organizado por categorias
- Sistema de carrinho de compras funcional
- Integração com WhatsApp para atendimento ao cliente
- Animações e transições suaves para melhor experiência do utilizador
- Formulário de contacto
- Filtros de produtos por preço e avaliação
- Modal de detalhes do produto
- Armazenamento local do carrinho de compras

## Tecnologias Utilizadas

- HTML5
- CSS3 (com variáveis CSS para fácil personalização)
- JavaScript (Vanilla JS, sem frameworks)
- Font Awesome para ícones
- Google Fonts para tipografia
- LocalStorage para persistência de dados do carrinho

## Estrutura de Ficheiros

```
planeta-conforto/
├── css/
│   ├── styles.css       # Estilos base e variáveis
│   ├── components.css   # Estilos de componentes específicos
│   └── forms.css        # Estilos de formulários
├── js/
│   ├── config.js        # Configuração de produtos e dados do site
│   └── main.js          # Funcionalidades principais do site
├── images/
│   ├── produtos/
│   │   ├── sala-estar/  # Imagens de produtos da sala de estar
│   │   ├── sala-jantar/ # Imagens de produtos da sala de jantar
│   │   └── quarto/      # Imagens de produtos do quarto
│   ├── icons/           # Ícones do site
│   └── assets/          # Outras imagens do site
├── index.html           # Página principal
└── README.md            # Este ficheiro
```

## Como Executar

1. Clone este repositório ou faça o download dos ficheiros
2. Abra o ficheiro `index.html` no seu navegador
3. Para uma experiência completa, adicione imagens de produtos nas pastas correspondentes:
   - `images/produtos/sala-estar/`
   - `images/produtos/sala-jantar/`
   - `images/produtos/quarto/`
4. Adicione também uma imagem de logo em `images/logo.png` e uma imagem de fundo para o hero em `images/hero-bg.jpg`

## Personalização

### Cores e Estilos

Para personalizar as cores e estilos do site, edite as variáveis CSS no início do ficheiro `css/styles.css`:

```css
:root {
  /* Cores Principais */
  --cor-primaria: #3a5a40;       /* Verde escuro - cor principal */
  --cor-secundaria: #a3b18a;     /* Verde claro - cor secundária */
  --cor-destaque: #e76f51;       /* Laranja - cor de destaque para CTAs */
  /* ... outras variáveis ... */
}
```

### Produtos

Para adicionar, remover ou modificar produtos, edite o ficheiro `js/config.js`:

```javascript
const produtosConfig = {
  salaEstar: [
    {
      id: 'se001',
      nome: 'Sofá Moderno Cinzento',
      preco: 899.99,
      descricao: 'Sofá de 3 lugares em tecido cinzento com pés em madeira...',
      avaliacao: 4.8,
      categoria: 'sala-estar',
      imagem: 'sofa-moderno-cinzento.jpg'
    },
    // ... outros produtos ...
  ],
  // ... outras categorias ...
};
```

### Informações do Site

Para modificar as informações de contacto, formas de pagamento e outras configurações do site, edite a secção `siteConfig` no ficheiro `js/config.js`:

```javascript
const siteConfig = {
  nome: 'Planeta Conforto',
  telefone: '+351 912 345 678',
  email: 'info@planetaconforto.pt',
  // ... outras configurações ...
};
```

## Funcionalidades Adicionais

- **Carrinho Persistente**: O carrinho de compras é salvo no localStorage do navegador, permitindo que os utilizadores mantenham os seus itens mesmo após fechar o navegador.
- **Animações**: O site inclui animações suaves para melhorar a experiência do utilizador, como fade-in de elementos ao entrar na viewport.
- **Notificações**: Sistema de notificações para informar o utilizador sobre ações como adicionar produtos ao carrinho.
- **Filtros de Produtos**: Possibilidade de ordenar produtos por preço ou avaliação.
- **Integração WhatsApp**: Botão flutuante para contacto direto via WhatsApp.

## Compatibilidade

O site é compatível com os seguintes navegadores:
- Google Chrome (versão 60+)
- Mozilla Firefox (versão 60+)
- Safari (versão 12+)
- Microsoft Edge (versão 79+)
- Opera (versão 60+)

## Licença

Este projeto está disponível para uso livre, modificação e distribuição.

## Contacto

Para mais informações, contacte:
- Email: info@planetaconforto.pt
- Telefone: +351 912 345 678

