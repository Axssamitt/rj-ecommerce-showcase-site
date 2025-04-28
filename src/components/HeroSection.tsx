
import React from 'react';
import { cn } from '@/lib/utils';

interface HeroSectionProps {
  className?: string;
}

export function HeroSection({ className }: HeroSectionProps) {
  return (
    <section className={cn("relative py-12 md:py-20", className)}>
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-serif font-bold mb-6">
          <span className="gold-gradient">Produtos Exclusivos</span>
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto text-white/80 mb-10">
          Descubra nossa coleção de produtos premium selecionados especialmente para você.
          Oferecemos qualidade, estilo e preços competitivos.
        </p>
        <div className="w-20 h-1 bg-gold mx-auto rounded-full"></div>
      </div>
    </section>
  );
}
