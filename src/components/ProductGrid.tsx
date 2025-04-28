
import React, { useState } from 'react';
import { ProductCard, Product } from './ProductCard';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';

interface ProductGridProps {
  products: Product[];
}

export function ProductGrid({ products }: ProductGridProps) {
  const [searchTerm, setSearchTerm] = useState('');
  
  const filteredProducts = products.filter(product => 
    product.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    product.description.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  return (
    <div className="w-full">
      <div className="relative mb-8 max-w-md mx-auto">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gold/60" />
        <Input 
          type="search"
          placeholder="Buscar produtos..." 
          className="pl-10 bg-shop-light border-gold/30 focus:border-gold text-white placeholder:text-white/50"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      
      {filteredProducts.length === 0 ? (
        <div className="text-center py-10">
          <p className="text-gold">Nenhum produto encontrado. Tente outra busca.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}
