export default function AboutPage({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return(
        <div className="grid place-content-center h-screen text-6xl">
            <aside>About Menu</aside>
            {children}
        </div>
    );
}