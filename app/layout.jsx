// app/layout.jsx
import ClientProvider from '../src/components/ClientProvider';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-black text-white">
        <ClientProvider>
          {children}
        </ClientProvider>
      </body>
    </html>
  );
}
