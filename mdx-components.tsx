import type { MDXComponents } from 'mdx/types'

export function useMDXComponents(components: MDXComponents): MDXComponents {
    return {
        h1: ({ children }) => (
            <h1 className="text-3xl font-semibold mb-4 mt-8">{children}</h1>
        ),
        h2: ({ children }) => (
            <h2 className="text-xl font-semibold mb-2 mt-4">{children}</h2>
        ),
        h3: ({ children }) => (
            <h3 className="font-semibold mb-2 mt-4">{children}</h3>
        ),
        p: ({ children }) => (
            <p className="text-gray-300 mt-2">{children}</p>
        ),
        a: ({ children, href }) => (
            <a href={href}
                className="text-blue-400 hover:underline mt-2"
                target="_blank"
                rel="noopener noreferrer"
            >
                {children}
            </a>
        ),
        ...components,
    }
}
