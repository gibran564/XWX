import React, { lazy, Suspense } from 'react';

const LazyCardSlider2 = lazy(() => import('./CardSlider2'));

const CardSlider2 = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyCardSlider2 {...props} />
  </Suspense>
);

export default CardSlider2;
