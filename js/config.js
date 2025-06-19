// Configuração de produtos para o site Planeta Conforto

const produtos = {
    "sala-estar": [
        {
            id: "conjunto-1",
            nome: "conjunto 1",
            preco: "2500",
            avaliacao: 4.8,
            descricao: "Sofá de 3 lugares com design moderno e estofamento em tecido cinzento de alta qualidade. Conforto e estilo para a sua sala de estar.",
            imagem: "./images/produtos/sala-estar/conjunto-1.png"
        },
        {
            id: "conjunto-2",
            nome: "conjunto 2",
            preco: "1999",
            avaliacao: 4.5,
            descricao: "Mesa de centro elegante com tampo de vidro temperado e base em metal cromado. Perfeita para complementar a sua sala.",
            imagem: "./images/produtos/sala-estar/conjunto-2.jpg"
        },
        {
            id: "conjunto-3",
            nome: "conjunto 3",
            preco: "1499Mzn",
            avaliacao: 4.7,
            descricao: "Poltrona reclinável com sistema manual, estofada em tecido macio. Ideal para momentos de relaxamento.",
            imagem: "./images/produtos/sala-estar/conjunto-3.jpg"
        },
        {
            id: "conjunto-4",
            nome: "conjunto 4",
            preco: "16 000,00 Mzn",
            avaliacao: 4.6,
            descricao: "Estante modular com prateleiras ajustáveis, ideal para organizar livros e objetos decorativos. Design moderno e adaptável.",
            imagem: "./images/produtos/sala-estar/conjunto-4.jpg"
        },
        {
            id: "conjunto-5",
            nome: "conjunto 5",
            preco: "Mzn",
            avaliacao: 4.9,
            descricao: "Tapete com padrão persa moderno, confeccionado em materiais resistentes e de fácil limpeza. Adiciona um toque de sofisticação ao ambiente.",
            imagem: "./images/produtos/sala-estar/conjunto-5.jpg"
        },
        {
            id: "conjunto-6",
            nome: "conjunto 6",
            preco: "Mzn",
            avaliacao: 4.7,
            descricao: "Aparador de TV suspenso com design minimalista e gavetas espaçosas. Otimiza o espaço e moderniza a sua sala.",
            imagem: "./images/produtos/sala-estar/conjunto-6.jpg"
        },
        {
            id: "conjunto-7",
            nome: "conjunto 7",
            preco: "Mzn",
            avaliacao: 4.4,
            descricao: "Candeeiro de pé com iluminação LED ajustável, ideal para criar um ambiente acolhedor e funcional na sala de estar.",
            imagem: "./images/produtos/sala-estar/conjunto-7.jpg"
        },
        {
            id: "puff-cores-diversas",
            nome: "Puff cores",
            preco: "Mzn",
            avaliacao: 4.6,
            descricao: "Puff redondo estofado em veludo macio, perfeito como assento extra ou apoio para os pés. Disponível em várias cores.",
            imagem: "./images/produtos/sala-estar/puff-cores-diversas.jpg"
        },
     /*   {
            id: "quadros-set",
            nome: "Conjunto de Quadros Decorativos",
            preco: "Mzn",
            avaliacao: 4.8,
            descricao: "Conjunto de 3 quadros decorativos com molduras elegantes, ideais para dar vida às paredes da sua sala de estar.",
            imagem: "./images/produtos/sala-estar/quadros-set.jpg"
        },
        {
            id: "biombo-divisorio",
            nome: "Biombo Divisório Moderno",
            preco: "Mzn",
            avaliacao: 4.5,
            descricao: "Biombo divisório com design moderno, ideal para criar ambientes distintos em espaços abertos. Leve e fácil de mover.",
            imagem: "./images/produtos/sala-estar/biombo-divisorio.jpg"
        } */
    ],
    "sala-jantar": [
        {
            id: "mesa-jantar-extensivel",
            nome: "Mesa de Jantar Extensível",
            preco: "Mzn",
            avaliacao: 4.9,
            descricao: "Mesa de jantar extensível em madeira maciça, perfeita para acomodar mais convidados. Design robusto e elegante.",
            imagem: "./images/produtos/sala-jantar/mesa-jantar-extensivel.jpg"
        },
        {
            id: "mesa-centro",
            nome: "mesa de centro",
            preco: "Mzn",
            avaliacao: 4.7,
            descricao: "Conjunto de 4 cadeiras estofadas em tecido resistente, com design ergonómico para máximo conforto na sala de jantar.",
            imagem: "./images/produtos/sala-jantar/mesa-centro.jpg"
        },
     /*   {
            id: "buffet-moderno",
            nome: "Buffet Moderno 4 Portas",
            preco: "Mzn",
            avaliacao: 4.8,
            descricao: "Buffet com 4 portas e amplo espaço interno, ideal para guardar louças e utensílios. Design moderno e acabamento de alta qualidade.",
            imagem: "./images/produtos/sala-jantar/buffet-moderno.jpg"
        },
        {
            id: "lustre-cristal",
            nome: "Lustre de Cristal Elegance",
            preco: "Mzn",
            avaliacao: 4.9,
            descricao: "Lustre de cristal com design sofisticado, ideal para iluminar e decorar a sua sala de jantar com um toque de glamour.",
            imagem: "./images/produtos/sala-jantar/lustre-cristal.jpg"
        },
        {
            id: "banco-corrido",
            nome: "Banco Corrido Estofado",
            preco: "Mzn",
            avaliacao: 4.6,
            descricao: "Banco corrido estofado, perfeito para otimizar o espaço na sala de jantar e acomodar mais pessoas de forma confortável.",
            imagem: "./images/produtos/sala-jantar/banco-corrido.jpg"
        },
        {
            id: "cristaleira-vintage",
            nome: "Cristaleira Vintage",
            preco: "Mzn",
            avaliacao: 4.7,
            descricao: "Cristaleira com estilo vintage, ideal para exibir as suas peças de louça e cristal. Adiciona um charme clássico à sala de jantar.",
            imagem: "./images/produtos/sala-jantar/cristaleira-vintage.jpg"
        },
        {
            id: "mesa-lateral-redonda",
            nome: "Mesa Lateral Redonda",
            preco: "Mzn",
            avaliacao: 4.5,
            descricao: "Mesa lateral redonda com tampo em madeira e pés em metal. Versátil e prática para apoiar objetos na sala de jantar.",
            imagem: "./images/produtos/sala-jantar/mesa-lateral-redonda.jpg"
        },
        {
            id: "cadeira-presidente",
            nome: "Cadeira Presidente Jantar",
            preco: "Mzn",
            avaliacao: 4.8,
            descricao: "Cadeira presidente estofada, com braços e encosto alto, ideal para proporcionar máximo conforto durante as refeições.",
            imagem: "./images/produtos/sala-jantar/cadeira-presidente.jpg"  
        } */
    ],
    "quarto": [
        {
            id: "cama-1",
            nome: "Cama Casal 1",
            preco: "Mzn",
            avaliacao: 4.9,
            descricao: "Cama de casal estofada com cabeceira acolchoada, proporcionando conforto e elegância ao seu quarto. Disponível em vários tamanhos.",
            imagem: "./images/produtos/quarto/cama-1.jpg"
        },
        {
            id: "cama-2",
            nome: "Cama Casal 3",
            preco: "Mzn",
            avaliacao: 4.7,
            descricao: "Mesa de cabeceira com gaveta e nicho, ideal para organizar os seus pertences. Design moderno e funcional.",
            imagem: "./images/produtos/quarto/cama-2.jpg"
        },
        {
            id: "cama-3",
            nome: "cama casal 3",
            preco: "Mzn",
            avaliacao: 4.8,
            descricao: "Guarda-roupa de casal com portas de correr e espelho, otimizando o espaço e adicionando funcionalidade ao quarto.",
            imagem: "./images/produtos/quarto/cama-3.jpg"
        },
        {
            id: "cama-4",
            nome: "cama casal 4",
            preco: "1700",
            avaliacao: 4.6,
            descricao: "Cómoda com 6 gavetas espaçosas, ideal para organizar roupas e acessórios. Design moderno e acabamento de alta qualidade.",
            imagem: "./images/produtos/quarto/cama-4.jpg"
        }
    ]
};


