import Link from 'next/link';
import React from 'react';

type ButtonProps = {
  href?: string;
  title: string;
  target?: '_blank';
  onClick?: () => void;
  className?: string;
};

const Button: React.FC<ButtonProps> = ({ href, title, target, onClick, className }) => {
  const buttonContent = (
    <button
      onClick={onClick}
      className={`w-full h-16 flex items-center justify-center rounded-lg shadow-md font-bold text-black bg-grey hover:bg-teal transition-colors ${className}`}
    >
      {title}
    </button>
  );

  return href ? (
    <Link href={href} target={target} className='w-full'>
      {buttonContent}
    </Link>
  ) : (
    buttonContent
  );
};

export default Button;
