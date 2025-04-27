import React, { useState } from 'react';
import linksData from '@/assets/data/dataLinksNavbar';
import PdfViewerModal from '@/components/shared/PdfViewerModal/PdfViewerModal';

export default function Links() {
  const [pdfUrl, setPdfUrl] = useState(null);

  const openPdf = (url) => window.open(url, '_blank');  // Abrir en nueva pestaña
  const closePdf = () => setPdfUrl(null);

  return (
    <>
      <nav className="flex space-x-4 mr-4 text-sm text-white">
        {linksData.map((link, index) => {
          const isCV = link.title === 'CV';
          return isCV ? (
            <button
              key={index}
              onClick={() => openPdf(link.href)}  // Usar `openPdf` para abrir en nueva pestaña
              className="flex items-center hover:text-amber-300 transition bg-transparent border-none p-0"
            >
              {link.icon}
              {link.title}
            </button>
          ) : (
            <a
              key={index}
              href={link.href}
              className="flex items-center hover:text-amber-300 transition"
              target="_blank"
              rel="noopener noreferrer"
            >
              {link.icon}
              {link.title}
            </a>
          );
        })}
      </nav>

      {pdfUrl && (
        <PdfViewerModal url={pdfUrl} onClose={closePdf} />
      )}
    </>
  );
}
