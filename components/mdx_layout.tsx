export default function MdxLayout({ children }: { children: React.ReactNode }) {
    // Create any shared layout or styles here
    return <div className="max-w-3xl mx-auto pt-24">{children}</div>
}