import { useState, useCallback, useEffect } from 'react';

type SearchParamValue = string | null;

interface PushStateEvent extends Event {
  readonly type: 'pushstate';
}

interface ReplaceStateEvent extends Event {
  readonly type: 'replacestate';
}

declare global {
  interface WindowEventMap {
    'pushstate': PushStateEvent;
    'replacestate': ReplaceStateEvent;
  }
}

export const useSearchParam = (param: string): SearchParamValue => {
  const getValue = useCallback(
    (): SearchParamValue => 
      new URLSearchParams(window.location.search).get(param),
    [param]
  );

  const [value, setValue] = useState<SearchParamValue>(getValue);

  useEffect(() => {
    const onChange = (): void => {
      setValue(getValue());
    };
    
    window.addEventListener('popstate', onChange);
    window.addEventListener('pushstate', onChange);
    window.addEventListener('replacestate', onChange);

    return () => {
      window.removeEventListener('popstate', onChange);
      window.removeEventListener('pushstate', onChange);
      window.removeEventListener('replacestate', onChange);
    };
  }, [getValue]);

  return value;
};

// Helper functions to trigger the custom events
export const pushState = (url: string): void => {
  history.pushState(null, '', url);
  window.dispatchEvent(new Event('pushstate'));
};

export const replaceState = (url: string): void => {
  history.replaceState(null, '', url);
  window.dispatchEvent(new Event('replacestate'));
};