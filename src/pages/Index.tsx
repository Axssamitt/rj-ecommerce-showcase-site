
import React from 'react';
import { Header } from '@/components/Header';
import { ProductGrid } from '@/components/ProductGrid';
import { Footer } from '@/components/Footer';
import { HeroSection } from '@/components/HeroSection';
import { Product } from '@/components/ProductCard';

// Salvamos o logo enviado pelo usuário
const logoPath = '/lovable-uploads/cb5722c9-203b-4b92-b2ef-386ee4364ba7.png';

// Produtos de exemplo (em um cenário real, viriam de uma API ou banco de dados)
const products: Product[] = [
  {
    id: '1',
    name: 'Smartphone Premium XS',
    description: 'Smartphone de última geração com câmera de alta resolução, bateria de longa duração e processador ultra-rápido.',
    price: 2999.99,
    image: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=500&h=500&fit=crop',
    externalUrl: 'https://example.com/produto-1',
  },
  {
    id: '2',
    name: 'Smartwatch Series Z',
    description: 'Relógio inteligente com monitoramento de saúde, GPS integrado e resistente à água. Perfeito para seus treinos e dia a dia.',
    price: 899.99,
    image: 'https://images.unsplash.com/photo-1500673922987-e212871fec22?w=500&h=500&fit=crop',
    externalUrl: 'https://example.com/produto-2',
  },
  {
    id: '3',
    name: 'Fones de Ouvido Bluetooth',
    description: 'Fones com cancelamento de ruído, qualidade de som premium e bateria que dura o dia todo. Design confortável para uso prolongado.',
    price: 459.90,
    image: 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=500&h=500&fit=crop',
    externalUrl: 'https://example.com/produto-3',
  },
  {
    id: '4',
    name: 'Notebook Ultrafino Pro',
    description: 'Notebook leve e poderoso com processador de última geração, SSD ultrarrápido e tela de alta resolução. Ideal para profissionais.',
    price: 5499.99,
    image: 'https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=500&h=500&fit=crop',
    externalUrl: 'https://example.com/produto-4',
  },
  {
    id: '5',
    name: 'Câmera DSLR Profissional',
    description: 'Câmera com sensor de alta resolução, gravação em 4K e sistema de foco automático preciso. Para fotógrafos exigentes.',
    price: 3299.90,
    image: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=500&h=500&fit=crop',
    externalUrl: 'https://example.com/produto-5',
  },
  {
    id: '6',
    name: 'Console de Jogos NextGen',
    description: 'Console com gráficos em 4K, armazenamento expandível e biblioteca de jogos exclusivos. A melhor experiência para gamers.',
    price: 4299.90,
    image: 'https://images.unsplash.com/photo-1500673922987-e212871fec22?w=500&h=500&fit=crop',
    externalUrl: 'https://example.com/produto-6',
  },
  {
    id: '7',
    name: 'Tablet Ultra HD',
    description: 'Tablet com tela de alta definição, processador potente e caneta sensível à pressão inclusa. Perfeito para criação e entretenimento.',
    price: 2599.90,
    image: 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=500&h=500&fit=crop',
    externalUrl: 'https://example.com/produto-7',
  },
  {
    id: '8',
    name: 'Caixa de Som Portátil',
    description: 'Caixa de som à prova d\'água com bateria de longa duração e qualidade de áudio superior. Leve a música para qualquer lugar.',
    price: 399.90,
    image: 'https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=500&h=500&fit=crop',
    externalUrl: 'https://example.com/produto-8',
  },
];

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-shop-dark">
      <Header />
      
      <main className="flex-grow">
        <HeroSection />
        
        <section className="py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-serif font-bold mb-8 text-center text-gold">
              Nossa Coleção
            </h2>
            
            <ProductGrid products={products} />
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
