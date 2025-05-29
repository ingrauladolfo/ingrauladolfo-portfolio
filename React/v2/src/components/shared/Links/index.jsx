import React, { useState, useContext } from 'react';
import linksData from '@/assets/data/dataLinksNavbar';
import PdfViewerModal from '@/components/shared/PdfViewerModal/PdfViewerModal';
import { ThemeContext } from '@/context/ThemeContext';
export default function Links() {
  const [pdfUrl, setPdfUrl] = useState(null);
  const { theme } = useContext(ThemeContext);
  const isDark = theme === 'dark';
  const openPdf = url => window.open(url, '_blank');
  const closePdf = () => setPdfUrl(null);
  return (
    <>
      <nav className={`flex space-x-4 mr-4 text-sm ${isDark ? 'text-white' : 'text-gray-800'}`}>
        {linksData.map((link, index) => {
          const isCV = link.title === 'CV';
          const hoverColor = isDark ? 'hover:text-amber-300' : 'hover:text-red-600';
          const classes = `flex items-center gap-1 ${hoverColor} transition`;
          return isCV ? (
            <button key={index} onClick={() => openPdf(link.href)} className={`${classes} bg-transparent border-none p-0`}>
              {link.icon}
              {link.title}
            </button>
          ) : (
            <a key={index} href={link.href} target="_blank" rel="noopener noreferrer" className={classes}>
              {link.icon}
              {link.title}
            </a>
          );
        })}
      </nav>

      {pdfUrl && <PdfViewerModal url={pdfUrl} onClose={closePdf} />}
    </>
  );
}
