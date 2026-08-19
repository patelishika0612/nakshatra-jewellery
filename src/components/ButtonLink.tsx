import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import type { ReactNode } from 'react';

interface ButtonLinkProps {
  to: string;
  children: ReactNode;
  variant?: 'primary' | 'outline' | 'gold';
  icon?: boolean;
  className?: string;
}

export default function ButtonLink({
  to,
  children,
  variant = 'primary',
  icon = false,
  className = '',
}: ButtonLinkProps) {
  const base =
    variant === 'primary'
      ? 'btn-primary'
      : variant === 'gold'
        ? 'btn-gold'
        : 'btn-outline';
  return (
    <Link to={to} className={`${base} ${className}`}>
      {children}
      {icon && <ArrowRight className="h-4 w-4" aria-hidden="true" />}
    </Link>
  );
}
