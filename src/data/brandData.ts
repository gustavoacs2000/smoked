import { BrandColor, MenuItem, ProcessStep, MeatCut, FranchiseTier } from '../types';

export const BRAND_COLORS: BrandColor[] = [
  {
    name: 'Vermelho Carne',
    codeName: 'vermelho-carne',
    hex: '#a8160b',
    rgb: 'R168 G22 B11',
    cmyk: 'C22 M100 Y220 K18',
    description: 'Cor quente e primária que evoca o apetite, a carne in natura e a intensidade do churrasco.',
    contrastText: '#ffffff'
  },
  {
    name: 'Laranja Brasa',
    codeName: 'laranja-brasa',
    hex: '#ea5b13',
    rgb: 'R234 G91 B19',
    cmyk: 'C1 M75 Y98 K0',
    description: 'Simboliza a brasa ativa, a temperatura viva do pit e a energia vibrante do fogo.',
    contrastText: '#ffffff'
  },
  {
    name: 'Amarelo Mostarda',
    codeName: 'amarelo-mostarda',
    hex: '#ffb300',
    rgb: 'R255 G179 B0',
    cmyk: 'C0 M35 Y93 K0',
    description: 'Remete aos molhos clássicos de barbecue da Carolina do Sul e à mostarda artesanal.',
    contrastText: '#2b2b2b'
  },
  {
    name: 'Preto Carvão',
    codeName: 'preto-carvao',
    hex: '#2b2b2b',
    rgb: 'R43 G43 B43',
    cmyk: 'C71 M62 Y58 K71',
    description: 'Base sólida e nobre que remete ao carvão vegetal de qualidade, à noite e ao pit smoker.',
    contrastText: '#ffffff'
  },
  {
    name: 'Marrom Defumado',
    codeName: 'marrom-defumado',
    hex: '#3f2a22',
    rgb: 'R63 G42 B34',
    cmyk: 'C50 M65 Y65 K73',
    description: 'Tom da madeira nobre curada, do bark caramelizado da carne e da autoria artesanal.',
    contrastText: '#ffffff'
  },
  {
    name: 'Branco Sal',
    codeName: 'branco-sal',
    hex: '#e5e2df',
    rgb: 'R229 G226 B223',
    cmyk: 'C12 M10 Y12 K0',
    description: 'Neutro orgânico e texturizado inspirado no sal de parrilla e no papel manteiga de açougue.',
    contrastText: '#2b2b2b'
  }
];

export const MENU_ITEMS: MenuItem[] = [
  {
    id: 'brisket-angus-12h',
    name: 'Brisket Angus Defumado 12 Horas',
    category: 'pitsmoke',
    cut: 'Peito Bovino Black Angus',
    price: 89.90,
    originalPrice: 98.00,
    description: 'O ícone absoluto do pitsmoke americano em Brasília. Peito bovino Angus fatiado, bark caramelizado com pimenta-do-reino e sal de parrilla, smoke ring rosado e textura incrivelmente macia que desmancha na boca.',
    smokeHours: 12,
    serves: 'Serve 1 a 2 pessoas (350g)',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=900&q=80',
    tags: ['Especialidade do Chef', '12h no Pit', 'Angus Certificado'],
    isSpecialty: true
  },
  {
    id: 'pork-ribs-bbq',
    name: 'Costelinha Suína St. Louis com Glaze BBQ',
    category: 'pitsmoke',
    cut: 'Costela Suína Especial',
    price: 78.50,
    description: 'Costelinha suína defumada lentamente por 6 horas com lenha de macieira. Glazeada na brasa com nosso molho barbecue artesanal da casa, com toque de melaço e raspas de maçã verde.',
    smokeHours: 6,
    serves: 'Serve 2 pessoas (600g)',
    image: 'https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?auto=format&fit=crop&w=900&q=80',
    tags: ['Favorito da Galera', '6h no Pit', 'Glaze Exclusivo'],
    isSpecialty: true
  },
  {
    id: 'pulled-pork-artesanal',
    name: 'Pulled Pork Smoked Defumado',
    category: 'pitsmoke',
    cut: 'Sobrepaleta Suína',
    price: 64.00,
    description: 'Copa lombo desfiada suculenta, defumada em lenha de laranjeira, envolvida em molho barbecue da casa levemente picante. Acompanha picles artesanais de cebola roxa e jalapeño.',
    smokeHours: 8,
    serves: 'Serve 2 pessoas (400g)',
    image: 'https://images.unsplash.com/photo-1623653387945-2fd25214f8fc?auto=format&fit=crop&w=900&q=80',
    tags: ['8h no Pit', 'Defumação em Laranjeira'],
    isSpecialty: false
  },
  {
    id: 'cupim-defumado-manteiga',
    name: 'Cupim Manteiga Pitsmoke 10h',
    category: 'pitsmoke',
    cut: 'Cupim Bovino Selecionado',
    price: 84.90,
    description: 'Corte tradicional brasileiro reinterpretado na técnica de pitsmoke texano. 10 horas em fogo brando indireto, textura amanteigada que derrete ao garfo com toque sutil de pimenta defumada.',
    smokeHours: 10,
    serves: 'Serve 2 pessoas (350g)',
    image: 'https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&w=900&q=80',
    tags: ['10h no Pit', 'Tradição & Pit'],
    isSpecialty: true
  },
  {
    id: 'burger-smoked-brisket',
    name: 'Smoked Burger Duplo com Brisket Desfiado',
    category: 'burgers',
    price: 49.90,
    description: 'Dois blends angus de 120g chapeados na brasa, queijo cheddar inglês derretido, generosa porção de brisket defumado desfiado, bacon crocante em tiras e maionese defumada no pão brioche amanteigado tostado.',
    serves: 'Individual',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=900&q=80',
    tags: ['Campeão de Pedidos', 'Blend Angus 240g'],
    isSpecialty: true
  },
  {
    id: 'burger-pulled-digao',
    name: 'Sanduíche Pulled Pork do Digão',
    category: 'burgers',
    price: 42.00,
    description: 'Pão brioche selado na manteiga de garrafa, montanha de sobrepaleta desfiada e defumada 8h no pit, coleslaw fresca e crocante com toque de mostarda artesanal e molho BBQ da casa.',
    serves: 'Individual',
    image: 'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&w=900&q=80',
    tags: ['Receita Autoral', 'Coleslaw da Casa'],
    isSpecialty: false
  },
  {
    id: 'side-mac-cheese-smoked',
    name: 'Mac & Cheese Defumado com Crosta de Bacon',
    category: 'sides',
    price: 32.00,
    description: 'Caracóis de massa grano duro envoltos em fondue cremoso de quatro queijos (cheddar curado, gruyère, gouda e parmesão), finalizado dentro do smoker com farofa crocante de bacon.',
    serves: 'Acompanha 2 pessoas',
    image: 'https://images.unsplash.com/photo-1543339308-43e59d6b73a6?auto=format&fit=crop&w=900&q=80',
    tags: ['Finalizado no Pit', '4 Queijos'],
    isSpecialty: true
  },
  {
    id: 'side-farofa-bacon-alho',
    name: 'Farofa Crocante de Bacon & Cebola Tostada',
    category: 'sides',
    price: 24.00,
    description: 'Farinha de mandioca fina artesanal tostada na gordura do próprio brisket com cubos crocantes de bacon defumado, alho dourado e cebolinha fresca.',
    serves: 'Acompanha 2 a 3 pessoas',
    image: 'https://images.unsplash.com/photo-1608897013039-887f21d8c804?auto=format&fit=crop&w=900&q=80',
    tags: ['Receita de Família', 'Gordura de Brisket'],
    isSpecialty: false
  },
  {
    id: 'side-milho-parrilha',
    name: 'Milho Doce na Brasa com Manteiga de Pimenta',
    category: 'sides',
    price: 22.00,
    description: 'Espigas de milho verde tostadas na brasa viva, pinceladas com manteiga clarificada temperada com flor de sal e páprica defumada.',
    serves: 'Acompanha 2 pessoas',
    image: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d?auto=format&fit=crop&w=900&q=80',
    tags: ['Grelhado na Brasa'],
    isSpecialty: false
  },
  {
    id: 'combo-família-pitsmoke',
    name: 'Combo Asa Norte Pitmaster (Para Família)',
    category: 'combos',
    price: 198.00,
    originalPrice: 226.00,
    description: 'Experiência completa da Smoked by Digão: 400g de Brisket 12h, 400g de Costelinha BBQ Suína, 1 Mac & Cheese Defumado grande, 1 Farofa de Bacon Crocante e picles da casa.',
    serves: 'Serve 3 a 4 pessoas',
    image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=900&q=80',
    tags: ['Melhor Custo-Benefício', 'Banquete Completo'],
    isSpecialty: true
  },
  {
    id: 'drink-cerveja-ipa-artesanal',
    name: 'Chopp IPA Artesanal de Brasília (500ml)',
    category: 'drinks',
    price: 22.00,
    description: 'Chopp artesanal local lupulado e refrescante, com notas cítricas perfeitas para harmonizar com a intensidade da gordura e o defumado do brisket.',
    serves: '500ml',
    image: 'https://images.unsplash.com/photo-1608270116678-f7b233a1f819?auto=format&fit=crop&w=900&q=80',
    tags: ['Harmonização Perfeita', 'Cervejaria do DF'],
    isSpecialty: false
  },
  {
    id: 'drink-limonada-defumada',
    name: 'Limonada Siciliana com Xarope de Fumaça & Alecrim',
    category: 'drinks',
    price: 16.50,
    description: 'Limões sicilianos frescos espremidos na hora, xarope artesanal com sutil toque de fumaça líquida, ramo de alecrim tostado na brasa e gelo.',
    serves: '450ml',
    image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=900&q=80',
    tags: ['Não Alcoólico', 'Autoral'],
    isSpecialty: false
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: '01',
    title: 'Seleção Rígida & Dry Rub',
    subtitle: 'Origem Angus e blend secreto',
    description: 'Trabalhamos com carnes certificadas de alto marmoreio. O corte recebe nosso Dry Rub exclusivo: equilíbrio milimétrico de pimenta preta moída na hora, sal de parrilla e especiarias.',
    timeTemp: 'Preparo 24h antes',
    iconName: 'Flame'
  },
  {
    number: '02',
    title: 'A Lenha Certa',
    subtitle: 'Fumaça nobre e limpa',
    description: 'Usamos apenas lenhas de macieira, laranjeira e pecã devidamente curadas. Fumaça translúcida ("blue smoke") que perfuma a carne sem amargar, garantindo dulçor e aroma inigualáveis.',
    timeTemp: 'Curadoria 100% natural',
    iconName: 'Trees'
  },
  {
    number: '03',
    title: 'Fogo Indireto a 110°C',
    subtitle: '12 horas de paciência e respeito',
    description: 'O método Low & Slow não aceita atalhos. O calor suave e indireto por até 12 horas quebra o colágeno das fibras bovinas, gerando suculência inacreditável e o lendário Smoke Ring.',
    timeTemp: '105°C - 115°C constantes',
    iconName: 'Clock'
  },
  {
    number: '04',
    title: 'Bark Crocante & Descanso',
    subtitle: 'Equilíbrio térmico e corte',
    description: 'Após atingir a temperatura interna ideal (94°C), a carne repousa em papel de açougue térmico para redistribuição dos sucos. Fatiado apenas na hora de servir.',
    timeTemp: 'Descanso de 90 min',
    iconName: 'CheckCircle2'
  }
];

export const MEAT_CUTS: MeatCut[] = [
  {
    id: 'brisket',
    name: 'Brisket (Peito Bovino)',
    ptName: 'Peito Bovino Angus',
    tag: 'O Rei do Pitsmoke',
    portion: 'Fatias nobres de Flat & Point',
    description: 'Composto pela parte magra (flat) e a mais gorda (point), é o corte mais desafiador e premiado do barbecue mundial. Fica 12 horas no smoker a 110°C.',
    smokeTime: '12 Horas',
    woodType: 'Macieira e Pecã',
    flavorNotes: ['Bark apimentado', 'Gordura derretida', 'Smoke ring nítido']
  },
  {
    id: 'costela',
    name: 'Costela de Tiras / Janela',
    ptName: 'Costela Bovina ou Suína',
    tag: 'Suculência Máxima',
    portion: 'Costela St. Louis ou Angus',
    description: 'Os ossos soltam sozinhos com leve puxão. Glazeada na fase final com barbecue de melaço, concentrando sabores caramelizados e defumados.',
    smokeTime: '6 a 8 Horas',
    woodType: 'Laranjeira',
    flavorNotes: ['Maciez extrema', 'Notas caramelizadas', 'Acidez equilibrada']
  },
  {
    id: 'cupim',
    name: 'Cupim Brasileiríssimo',
    ptName: 'Cupim Bovina Gorda',
    tag: 'Identidade Nacional no Pit',
    portion: 'Pedaços desmanchando',
    description: 'Uma joia brasileira que adora o calor lento do pit smoker. Suas fibras entremeadas de gordura amaciam até virarem manteiga.',
    smokeTime: '10 Horas',
    woodType: 'Pecã e Lenha Nobre',
    flavorNotes: ['Manteiga pura', 'Aroma defumado profundo', 'Sem rigidez']
  },
  {
    id: 'paleta',
    name: 'Sobrepaleta (Pork Shoulder)',
    ptName: 'Copa Lombo Suína',
    tag: 'Para Sanduíches Únicos',
    portion: 'Desfiada no garfo',
    description: 'Base do lendário Pulled Pork. Suculência incomparável para misturar com molhos agridoces e montar no brioche tostado.',
    smokeTime: '8 Horas',
    woodType: 'Macieira frutada',
    flavorNotes: ['Doce sutil', 'Fibras soltas', 'Retrogosto defumado']
  }
];

export const FRANCHISE_TIERS: FranchiseTier[] = [
  {
    id: 'dark-kitchen',
    name: 'Modelo Smoked Delivery & Cloud',
    type: 'Operação Enxuta / Delivery',
    investment: 'A partir de R$ 130.000',
    spaceRequired: '35m² a 55m²',
    averageMonthlyRevenue: 'R$ 75.000 a R$ 120.000',
    netMargin: '18% a 24%',
    paybackMonths: '12 a 16 meses',
    suitableFor: 'Centros urbanos focados em iFood, WhatsApp delivery e retirada balcão sem salão físico.'
  },
  {
    id: 'container-drive',
    name: 'Modelo Container & Praça Aberta',
    type: 'Fast-Casual Outdoor',
    investment: 'A partir de R$ 210.000',
    spaceRequired: '60m² a 90m²',
    averageMonthlyRevenue: 'R$ 140.000 a R$ 210.000',
    netMargin: '20% a 26%',
    paybackMonths: '14 a 18 meses',
    suitableFor: 'Food parks, postos nobres, estacionamentos de polos gastronômicos e áreas abertas com clima rústico.'
  },
  {
    id: 'smokehouse-store',
    name: 'Loja Conceito Smokehouse & Bar',
    type: 'Experiência Completa & Salão',
    investment: 'A partir de R$ 340.000',
    spaceRequired: '110m² a 180m²',
    averageMonthlyRevenue: 'R$ 220.000 a R$ 380.000',
    netMargin: '22% a 28%',
    paybackMonths: '16 a 22 meses',
    suitableFor: 'Pontos de rua consagrados (como a matriz da Asa Norte em Brasília), shopping centers nobres e centros gastronômicos.'
  }
];

export const REVIEWS = [
  {
    name: 'Marcelo Guimarães',
    role: 'Morador da Asa Norte, Brasília',
    rating: 5,
    comment: 'O melhor brisket de Brasília sem comparação. O smoke ring é perfeito e a carne literalmente derrete na boca. Pedimos o combo da família e sobrou elogio de todo mundo!',
    date: 'Há 3 dias'
  },
  {
    name: 'Fernanda Peixoto',
    role: 'Foodie & Criadora de Conteúdo Gastronômico',
    rating: 5,
    comment: 'A identidade visual e a embalagem da Smoked by Digão são impecáveis, mas a comida consegue ser ainda melhor. O Mac & Cheese defumado é viciante.',
    date: 'Semana passada'
  },
  {
    name: 'Eduardo M. Siqueira',
    role: 'Chef e Investidor de Alimentação',
    rating: 5,
    comment: 'Padrão e consistência impressionantes. O Chef Rodrigo Lopes conseguiu traduzir a complexidade do pitsmoke americano em um processo padronizado que funciona todo dia.',
    date: 'Há 2 semanas'
  }
];
