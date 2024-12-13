import { useEffect, useRef } from 'react';

interface Position {
  x: number;
  y: number;
}

interface ContextMenuProps {
  position: Position;
  onClose: () => void;
}

export const ContextMenu = ({ position, onClose }: ContextMenuProps) => {
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [onClose]);

  return (
    <div
      ref={menuRef}
      className={"fixed z-50 min-w-[180px] bg-black/90 backdrop-blur-md border border-blue-500/20 rounded-lg shadow-xl animate-in fade-in zoom-in-95 duration-200"}
      style={{
        top: position.y,
        left: position.x,
      }}
    >
      <ul className="py-2 px-1">
        <li
          onClick={() => {
            console.log('Sobre o Muve clicked');
            onClose();
          }}
          className={"px-4 py-2 text-sm text-white/90 hover:text-white cursor-pointer transition-colors duration-200 rounded-md select-none hover:bg-blue-600/20"}
        >
          Sobre o Muve
        </li>
        
        <li
          onClick={() => {
            console.log('Reportar Erro clicked');
            onClose();
          }}
          className={"px-4 py-2 text-sm cursor-pointer transition-colors duration-200 rounded-md select-none text-red-400 hover:text-red-300 hover:bg-red-500/10"}
        >
          Reportar Erro
        </li>
      </ul>
    </div>
  );
};