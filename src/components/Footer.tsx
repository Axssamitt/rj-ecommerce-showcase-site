
import React from 'react';

export function Footer() {
  return (
    <footer className="mt-16 py-6 border-t border-gold/30 text-center">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h2 className="text-xl font-serif font-bold text-gold">R&J Ecommerce</h2>
            <p className="text-sm text-white/70 mt-1">Produtos de qualidade para você</p>
          </div>
          
          <div className="text-sm text-white/70">
            &copy; {new Date().getFullYear()} R&J Ecommerce. Todos os direitos reservados.
          </div>
        </div>
      </div>
    </footer>
  );
}
