import { useState, type MouseEventHandler } from "react";

interface MenuPosition {
  x: number;
  y: number;
}

interface ContextMenuHook {
  menuVisible: boolean;
  menuPosition: MenuPosition | null;
  onContextMenu: MouseEventHandler<HTMLDivElement>;
  closeContextMenu: () => void;
}

export const useContextMenu = (): ContextMenuHook => {
  const [menuVisible, setMenuVisible] = useState(false);
  const [menuPosition, setMenuPosition] = useState<MenuPosition | null>(null);

  const onContextMenu: MouseEventHandler<HTMLDivElement> = (event) => {
    event.preventDefault();
    const { clientX, clientY } = event;
    setMenuPosition({ x: clientX, y: clientY });
    setMenuVisible(true);
  };

  const closeContextMenu = () => {
    setMenuVisible(false);
  };

  return { menuVisible, menuPosition, onContextMenu, closeContextMenu };
};

