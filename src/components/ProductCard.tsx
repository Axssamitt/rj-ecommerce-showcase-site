
import React from 'react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  externalUrl: string;
}

interface ProductCardProps {
  product: Product;
  className?: string;
}

export function ProductCard({ product, className }: ProductCardProps) {
  return (
    <Card className={cn("overflow-hidden bg-shop-light border-gold/20 product-card", className)}>
      <div className="relative aspect-square overflow-hidden">
        <img 
          src={product.image} 
          alt={product.name} 
          className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
        />
        <div className="absolute top-2 right-2 bg-gold px-2 py-1 rounded text-shop-dark font-medium text-sm">
          R$ {product.price.toFixed(2)}
        </div>
      </div>
      
      <CardContent className="p-4">
        <h3 className="text-lg font-serif font-semibold text-gold mb-2">{product.name}</h3>
        <p className="text-sm text-white/70 line-clamp-3">{product.description}</p>
      </CardContent>
      
      <CardFooter className="p-4 pt-0 flex justify-end">
        <Button 
          onClick={() => window.open(product.externalUrl, '_blank')}
          className="bg-gold hover:bg-gold-light text-shop-dark font-medium"
        >
          Ver produto <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </CardFooter>
    </Card>
  );
}
