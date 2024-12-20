import { ReactNode } from 'react';
import { createPortal } from 'react-dom';

type Props = {
  isOpen: boolean;
  positionTo?: HTMLElement | null;
  onClose: () => void;
  children: ReactNode;
  opacity?: string;
};

export function Popup({
  isOpen,
  positionTo,
  onClose,
  children,
  opacity,
}: Props) {
  if (!isOpen) return null;

  const r = positionTo?.getBoundingClientRect();
  const top = r ? r.top + r.height : '50%';
  const left = r ? r.left + r.width / 2 : '50%';

  return createPortal(
    <>
      <div
        style={{
          position: 'fixed',
          top: 0,
          width: '100vw',
          height: '100vh',
          background: '#000',
          opacity,
        }}
        onClick={onClose}></div>
      <div style={{ position: 'absolute', top, left }}>{children}</div>
    </>,
    document.body
  );
}
