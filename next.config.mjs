import remarkGfm from 'remark-gfm'
import createMDX from '@next/mdx'
import remarkToc from 'remark-toc'
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
}
const autoLink =   [
  rehypeAutolinkHeadings,
  {
      behaviour: 'append',
      properties: {
          ariaHidden: true,
          tabIndex: -1,
          className: 'hash-link'
      }
  }
]
const withMDX = createMDX({
  options: {
    remarkPlugins: [remarkGfm, remarkToc],
    rehypePlugins: [rehypeSlug, autoLink],
    
  },
})
 
// Wrap MDX and Next.js config with each other
export default withMDX(nextConfig)