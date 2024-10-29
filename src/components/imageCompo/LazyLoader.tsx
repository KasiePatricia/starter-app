import React from 'react';

interface LazyLoadImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  alt: string;
  src: string;
  className?: string;
  loadInitially?: boolean;
  observerOptions?: IntersectionObserverInit;
}

const LazyLoadImage: React.FC<LazyLoadImageProps> = ({
  alt,
  src,
  className,
  loadInitially = false,
  observerOptions = { root: null, rootMargin: '200px 0px' },
  ...props
}) => {
  const observerRef = React.useRef<IntersectionObserver | null>(null);
  const imgRef = React.useRef<HTMLImageElement | null>(null);
  const [isLoaded, setIsLoaded] = React.useState(loadInitially);

  const observerCallback = React.useCallback(
    (entries: IntersectionObserverEntry[]) => {
      if (entries[0].isIntersecting) {
        observerRef.current?.disconnect();
        setIsLoaded(true);
      }
    },
    []
  );

  React.useEffect(() => {
    if (loadInitially) return;

    if ('loading' in HTMLImageElement.prototype) {
      setIsLoaded(true);
      return;
    }

    observerRef.current = new IntersectionObserver(observerCallback, observerOptions);
    if (imgRef.current) observerRef.current.observe(imgRef.current);

    return () => {
      observerRef.current?.disconnect();
    };
  }, [loadInitially, observerCallback, observerOptions]);

  return (
    <img
      alt={alt}
      src={isLoaded ? src : ''}
      ref={imgRef}
      className={className}
      loading={loadInitially ? undefined : 'lazy'}
      {...props}
    />
  );
};

export const LazyLoadImageMain = () => {
  return (
    <div className="my-9">
      <LazyLoadImage
        src="https://picsum.photos/id/1080/600/600"
        alt="Strawberries"
        className="example-class"
      />
    </div>
  )
}


