import { useState } from 'react';

export function useDisable() {
  const [disabled, setDisabled] = useState<boolean>();

  function disable() {
    setDisabled(true);
  }

  function enable() {
    setDisabled(false);
  }

  return {
    disabled,
    disable,
    enable
  };
}