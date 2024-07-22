// useMDXComponents.tsx
import React from 'react';
import type { MDXComponents } from 'mdx/types';
import renderCode from './components/renderCode/renderCode';
import Image, { ImageProps } from 'next/image';

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    pre: renderCode,
    h1: (props) => <h1 className="text-3xl font-bold my-4" {...props} />,
    h2: (props) => <h2 className="text-2xl font-semibold my-3" {...props} />,
    h3: (props) => <h3 className="text-xl font-semibold my-2" {...props} />,
    p: (props) => <p className="my-2" {...props} />,
    img: (props) => (
      <Image
        sizes="100vw"
        style={{ width: '100%', height: 'auto' }}
        {...(props as ImageProps)}
      />
    ),
    blockquote: (props) => <blockquote className="border-l-4 border-gray-300 pl-4 italic my-2" {...props} />,
    ...components,
  };
}
