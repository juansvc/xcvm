import { ButtonHTMLAttributes, FC } from 'react';

import clsxm from '@/lib/clsxm';

enum ButtonVariant {
  'primary',
  'outline',
  'secondary',
  'text',
  'soft'
}

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: keyof typeof ButtonVariant;
  icon?: JSX.Element;
  active?: boolean;
}

export const Button: FC<ButtonProps> = (
  {
    children,
    className,
    disabled: buttonDisabled,
    variant = 'primary',
    icon,
    active = false,
    ...rest
  }
) => {
  const disabled = buttonDisabled;

  return (
    <button
      type='button'
      disabled={disabled}
      className={clsxm(
        'inline-flex items-center justify-center rounded-3xl py-6',
        //#region  //*=========== Variants ===========
        [
          variant === 'primary' && [
            'bg-gradient-to-r from-gradient-light-50 via-gradient-light-100 to-gradient-light-200 text-white',
            'hover:from-purple-dark hover:to-purple-dark',
            'active:from-gradient-light-50 active:via-gradient-light-100 active:to-gradient-light-200',
            'disabled:opacity-20 disabled:from-purple-dark disabled:to-purple-dark',
            active && [
              'from-gradient-light-50 via-gradient-light-100 to-gradient-light-200'
            ],
          ],
          variant === 'outline' && [
            // 'bg-[linear-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, 0)), linear-gradient(to right, #8a2387, #a21e81, #b71d7a, #ca2170, #d92c66, #e2355d, #e93f54, #ef4b4b, #f25442, #f35d38, #f3672d, #f27121)] bg-origin-border shadow-[2px 1000px 1px #fff inset] text-white',
            'text-white border-gradient-r-gradient-light-transparent gradient-border-2',
            'hover:border-gradient-r-gradient-light-colored',
            'active:border-gradient-r-gradient-light-transparent',
            'disabled:opacity-20 disabled:border-gradient-r-gradient-light-transparent',
            active && [
              'border-gradient-r-gradient-light-transparent'
            ],
          ],
          variant === 'secondary' && [
            'text-white border-white/20 border-2',
            'hover:border-gradient-r-gradient-light-colored',
            'active:border-gradient-r-gradient-light-colored',
            'disabled:opacity-20 disabled:border-gradient-r-gradient-light-transparent',
            active && [
              'border-gradient-r-gradient-light-colored'
            ],
          ],
          variant === 'soft' && [
            'text-white border-white/20 border-2',
            'hover:border-gradient-r-gradient-light-transparent',
            'active:border-gradient-r-gradient-light-transparent',
            'disabled:opacity-20 disabled:border-gradient-r-gradient-soft-transparent',
            active && [
              'border-gradient-r-gradient-light-transparent'
            ],
          ],
          variant === 'text' && [
            'text-purple',
            'shadow-none',
            'hover:text-[#FF33AD]',
            'active:text-purple',
            'disabled:opacity-20',
            active && [
              'text-purple'
            ],
          ],
        ],
        //#endregion  //*======== Variants ===========
        'disabled:cursor-not-allowed',
        className
      )}
      {...rest}
    >
      {icon && (variant === 'outline' || variant === 'secondary' || variant === 'soft') && (
        <div className={clsxm([children && ['mr-[16px]']])}>{icon}</div>
      )}
      {children}
    </button>
  );
}
