export const Footer = () => {
  return (
    <footer className='bg-card border-t border-border py-6 mt-10'>
      <div className='container mx-auto px-4 text-center text-sm text-muted-foreground'>
        <p>
          © {new Date().getFullYear()} Hecho por{' '}
          <span className='font-medium text-primary'>Andy Torres</span>
        </p>
        <p className='mt-1 text-xs'>
          Construido con React, Vite y Tailwind CSS · Desplegado en Vercel
        </p>
      </div>
    </footer>
  );
};
