import React from 'react';
import './StarBorder.css';

type StarBorderProps<T extends React.ElementType> = {
  as?: T;
  className?: string;
  color?: string;
  speed?: string;
  thickness?: number;
  radius?: number;
  innerStyle?: React.CSSProperties;
  children?: React.ReactNode;
  style?: React.CSSProperties;
} & Omit<React.ComponentPropsWithoutRef<T>, 'as' | 'className' | 'style' | 'children'>;

const StarBorder = <T extends React.ElementType = 'button'>({
  as,
  className = '',
  color = 'white',
  speed = '6s',
  thickness = 1,
  radius = 20,
  innerStyle = {},
  children,
  style,
  ...rest
}: StarBorderProps<T>) => {
  const Component = as || 'button';

  return (
    <Component
      className={`star-border-container ${className}`}
      style={{
        padding: `${thickness}px 0`,
        borderRadius: radius,
        ['--star-speed' as any]: speed,
        ...(style || {})
      }}
      {...rest}
    >
      <div
        className="border-gradient-bottom"
        style={{
          background: `radial-gradient(circle, ${color}, transparent 10%)`,
        }}
      ></div>
      <div
        className="border-gradient-top"
        style={{
          background: `radial-gradient(circle, ${color}, transparent 10%)`,
        }}
      ></div>
      <div
        className="inner-content"
        style={{
          borderRadius: radius - 2,
          ...innerStyle
        }}
      >
        {children}
      </div>
    </Component>
  );
};

export default StarBorder;

