'use client';

import {
  motion,
  MotionValue,
  useMotionValue,
  useSpring,
  useTransform,
  type SpringOptions,
  AnimatePresence
} from 'motion/react';
import React, { Children, cloneElement, useEffect, useRef, useState } from 'react';

export type DockItemData = {
  icon: React.ReactNode;
  label: React.ReactNode;
  onClick: () => void;
  className?: string;
};

export type DockProps = {
  items: DockItemData[];
  className?: string;
  distance?: number;
  panelSize?: number; // Renamed from panelHeight for clarity in both modes
  baseItemSize?: number;
  dockSize?: number; // Total length (width for H, height for V)
  magnification?: number;
  spring?: SpringOptions;
  direction?: 'horizontal' | 'vertical';
};

type DockItemProps = {
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
  mousePos: MotionValue<number>;
  spring: SpringOptions;
  distance: number;
  baseItemSize: number;
  magnification: number;
  direction?: 'horizontal' | 'vertical';
};

function DockItem({
  children,
  className = '',
  onClick,
  mousePos,
  spring,
  distance,
  magnification,
  baseItemSize,
  direction = 'horizontal'
}: DockItemProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isHovered = useMotionValue(0);

  const mouseDistance = useTransform(mousePos, val => {
    const rect = ref.current?.getBoundingClientRect() ?? {
      x: 0,
      y: 0,
      width: baseItemSize,
      height: baseItemSize
    };
    return val - (direction === 'vertical' ? rect.y : rect.x) - baseItemSize / 2;
  });

  const targetSize = useTransform(mouseDistance, [-distance, 0, distance], [baseItemSize, magnification, baseItemSize]);
  const size = useSpring(targetSize, spring);

  return (
    <motion.div
      ref={ref}
      style={{
        width: size,
        height: size
      }}
      onHoverStart={() => isHovered.set(1)}
      onHoverEnd={() => isHovered.set(0)}
      onFocus={() => isHovered.set(1)}
      onBlur={() => isHovered.set(0)}
      onClick={onClick}
      className={`relative inline-flex items-center justify-center rounded-full bg-[#060010] border-neutral-700 border-2 shadow-lg cursor-target ${className}`}
      tabIndex={0}
      role="button"
      aria-haspopup="true"
    >
      {Children.map(children, child =>
        React.isValidElement(child)
          ? cloneElement(child as React.ReactElement<{ isHovered?: MotionValue<number>; direction?: string }>, { isHovered, direction })
          : child
      )}
    </motion.div>
  );
}

type DockLabelProps = {
  className?: string;
  children: React.ReactNode;
  isHovered?: MotionValue<number>;
  direction?: 'horizontal' | 'vertical';
};

function DockLabel({ children, className = '', isHovered, direction = 'horizontal' }: DockLabelProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!isHovered) return;
    const unsubscribe = isHovered.on('change', latest => {
      setIsVisible(latest === 1);
    });
    return () => unsubscribe();
  }, [isHovered]);

  const labelStyles = direction === 'vertical' 
    ? { left: 'calc(100% + 20px)', top: '50%', y: '-50%', x: 0 } 
    : { top: '-40px', left: '50%', x: '-50%', y: 0 };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, ...labelStyles, scale: 0.8 }}
          animate={{ opacity: 1, ...labelStyles, scale: 1 }}
          exit={{ opacity: 0, ...labelStyles, scale: 0.8 }}
          transition={{ duration: 0.2 }}
          className={`${className} absolute w-fit whitespace-pre rounded-md border border-neutral-700 bg-[#060010] px-3 py-1.5 text-xs text-white z-50 shadow-xl`}
          role="tooltip"
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function DockIcon({ children, className = '' }: { className?: string; children: React.ReactNode }) {
  return <div className={`flex items-center justify-center ${className}`}>{children}</div>;
}

export default function Dock({
  items,
  className = '',
  spring = { mass: 0.1, stiffness: 150, damping: 12 },
  magnification = 70,
  distance = 200,
  panelSize = 64, // Width for vertical, Height for horizontal
  baseItemSize = 45,
  direction = 'horizontal'
}: DockProps) {
  const mousePos = useMotionValue(Infinity);
  const isHovered = useMotionValue(0);

  const maxHeight = magnification + magnification / 2 + 4;
  const sizeSpring = useSpring(useTransform(isHovered, [0, 1], [panelSize, maxHeight]), spring);

  const containerStyles = direction === 'vertical'
    ? { width: sizeSpring, height: 'fit-content', left: '20px', top: '50%', translateY: '-50%' }
    : { height: sizeSpring, width: 'fit-content', bottom: '20px', left: '50%', translateX: '-50%' };

  return (
    <motion.div
      onMouseMove={(e) => {
        isHovered.set(1);
        mousePos.set(direction === 'vertical' ? e.pageY : e.pageX);
      }}
      onMouseLeave={() => {
        isHovered.set(0);
        mousePos.set(Infinity);
      }}
      className={`${className} fixed flex ${direction === 'vertical' ? 'flex-col' : 'flex-row'} items-center gap-3 rounded-full border-neutral-700 border-2 p-3 bg-[#030303]/80 backdrop-blur-xl z-[1000] shadow-2xl`}
      style={containerStyles as any}
      role="toolbar"
    >
      {items.map((item, index) => (
        <DockItem
          key={index}
          onClick={item.onClick}
          className={item.className}
          mousePos={mousePos}
          spring={spring}
          distance={distance}
          magnification={magnification}
          baseItemSize={baseItemSize}
          direction={direction}
        >
          <DockIcon>{item.icon}</DockIcon>
          <DockLabel direction={direction}>{item.label}</DockLabel>
        </DockItem>
      ))}
    </motion.div>
  );
}
