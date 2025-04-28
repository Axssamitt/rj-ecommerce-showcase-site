
import React from 'react';
import { ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface HeaderProps {
  className?: string;
}

export function Header({ className }: HeaderProps) {
  return (
    <header className={cn("w-full py-6 px-4 md:px-8 bg-shop-dark border-b border-gold/30", className)}>
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <Logo />
        </div>
        
        <div className="flex items-center gap-4">
          <Button variant="ghost" className="text-gold hover:text-gold-light hover:bg-shop-light">
            <ShoppingCart className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </header>
  );
}

function Logo() {
  return (
    <div className="flex items-center gap-2">
      <img 
        src="/lovable-uploads/b8bab588-acd4-42a9-881d-84990a3616bd.png" 
        alt="R&J Ecommerce" 
        className="h-12 w-auto"
      />
      <div className="flex flex-col">
        <h1 className="text-2xl font-bold text-gold">R&J</h1>
        <p className="text-sm text-white/80">Ecommerce</p>
      </div>
    </div>
  );
}
