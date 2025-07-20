import { useState } from 'react';
import { useLanguage, useTheme } from '../../../context';
import { getThemeClasses } from '../../../../assets/styles/Navbar';
import { FaChevronDown, FaDownload, FaEye, FaMoon, FaSun, FaX } from 'react-icons/fa6';
import { MX, US } from 'country-flag-icons/react/3x2';
import { dataLinksNavbar } from '../../../../assets/data/Navbar/dataLinksNavbar';
import { getDataSocialLinksNavbar } from '../../../../assets/data/Navbar/dataSocialLinksNavbar';
import { IoIosMenu } from 'react-icons/io';
import { PDFViewer } from '../Pdf';

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const { theme, toggleTheme } = useTheme();
    const [cvDropdown, setCvDropdown] = useState(false);
    const [mobileCvDropdown, setMobileCvDropdown] = useState(false);
    const [pdfUrl, setPdfUrl] = useState<string | null>(null);
    const [pvOpen, setPvOpen] = useState(false);
    const { toggleLang, lang } = useLanguage();
    const { navBg, navText, socialText, hoverBg } = getThemeClasses(theme);
    const socialLinks = getDataSocialLinksNavbar(lang);

    const getFileName = (url: string) => {
        const baseName = url.split('/').pop()?.replace('.pdf', '') || 'file';
        const langSuffix = lang === 'es' ? 'español' : 'english';
        return `${baseName}-${langSuffix}.pdf`;
    };

    const handleViewCV = (href: string) => {
        setPdfUrl(href);
        window.open(href, '_blank'); // <-- abre en nueva pestaña
    };

    return (
        <nav className={`fixed top-0 left-0 w-full z-40 flex items-center justify-between p-5  ${navBg}`}>
            {/* Desktop Routes */}
            <div className="hidden md:flex  items-center gap-6">
                {dataLinksNavbar.map(link => (
                    <a key={link.href.es} href={link.href[lang]} className={`flex items-center text-balance font-medium hover:underline capitalize ${navText}`}>
                        {link.icon}
                        <span>{link.title[lang]}</span>
                    </a>
                ))}
            </div>

            {/* Mobile Sidebar Toggle */}
            <button onClick={() => setOpen(true)} className={`md:hidden ${navText}`}>
                <IoIosMenu />
            </button>

            {/* Desktop Socials + Controls */}
            <div className="hidden md:flex items-center gap-4 relative">
                {socialLinks.map(({ href, icon, title, isCV, onClick }) =>
                    onClick ? (
                        <button
                            key={title[lang]}
                            onClick={onClick}
                            className={`flex items-center hover:cursor-pointer text-balance ${socialText}`}
                        >
                            {icon}
                            <span>{title[lang]}</span>
                        </button>
                    ) : isCV ? (
                        <div key="cv" className="relative">
                            <button
                                onClick={() => setCvDropdown(prev => !prev)}
                                className={`flex items-center text-balance hover:underline ${socialText}`}
                            >
                                {icon}
                                <span className="flex items-center text-balance gap-1">
                                    {title[lang]}
                                    <FaChevronDown size={10} />
                                </span>
                            </button>
                            {cvDropdown && (
                                <div className={`absolute top-full left-0 mt-2 w-32 border rounded shadow z-50 ${navBg}`}>
                                    <a
                                        href={href}
                                        download={getFileName(href)}
                                        type="application/pdf"
                                        className={`block px-4 py-2 text-left text-balance w-full ${hoverBg}`}
                                    >
                                        <div className="flex items-center gap-2 justify-start">
                                            <FaDownload className="inline" />
                                            <span className="text-sm">{lang === 'es' ? 'Descargar' : 'Download'}</span>
                                        </div>
                                    </a>
                                    <button
                                        onClick={() => handleViewCV(href)}
                                        className={`block px-4 py-2 text-left w-full ${hoverBg}`}
                                    >
                                        <div className="flex items-center gap-2 justify-start">
                                            <FaEye className="inline" />
                                            <span className="text-sm">{lang === 'es' ? 'Ver' : 'View'}</span>
                                        </div>
                                    </button>
                                </div>
                            )}

                            {/* Visor embebido */}
                            {pvOpen && pdfUrl && (
                                <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50">
                                    <div className="bg-white dark:bg-gray-900 p-4 rounded max-w-3xl max-h-[90vh] overflow-auto relative">
                                        <button onClick={() => setPvOpen(false)} className="absolute top-2 right-2 text-lg font-bold">
                                            <FaX />
                                        </button>
                                        <PDFViewer fileUrl={pdfUrl} />
                                    </div>
                                </div>
                            )}
                        </div>
                    ) : (
                        <a
                            key={href}
                            href={href}
                            className={`flex items-center text-sm hover:underline ${socialText}`}
                        >
                            {icon}
                            <span>{title[lang]}</span>
                        </a>
                    )
                )}
                <button onClick={toggleTheme} aria-label="Toggle theme" className={`p-2 rounded ${hoverBg}`}>
                    {theme === 'light' ? <FaSun /> : <FaMoon />}
                </button>
                <button onClick={toggleLang} aria-label="Toggle language" className={`p-2 rounded ${hoverBg}`}>
                    {lang === 'es' ? <MX className="size-4" /> : <US className="size-4" />}
                </button>
            </div>

            {/* Mobile Controls */}
            <div className="md:hidden flex items-center gap-4">
                <button onClick={toggleTheme} aria-label="Toggle theme" className={`p-2 rounded ${hoverBg}`}>
                    {theme === 'light' ? <FaSun /> : <FaMoon />}
                </button>
                <button onClick={toggleLang} aria-label="Toggle language" className={`p-2 rounded ${hoverBg}`}>
                    {lang === 'es' ? <MX className="size-4" /> : <US className="size-4" />}
                </button>
            </div>

            {/* Mobile Sidebar Overlay */}
            {open && (
                <div className={`fixed  inset-0 z-50 p-6 md:hidden flex flex-col ${navBg}`}>
                    <div className="flex justify-between items-center">
                        <button onClick={() => setOpen(false)} className={`text-2xl ${navText}`}>
                            <FaX className="size-4 object-contain" />
                        </button>
                        {/* Colocamos los botones del tema e idioma aquí */}
                        <div className="flex gap-4">
                            <button onClick={toggleTheme} aria-label="Toggle theme" className={`p-2 rounded ${hoverBg}`}>
                                {theme === 'light' ? <FaSun /> : <FaMoon />}
                            </button>
                            <button onClick={toggleLang} aria-label="Toggle language" className={`p-2 rounded ${hoverBg}`}>
                                {lang === 'es' ? <MX className="size-4" /> : <US className="size-4" />}
                            </button>
                        </div>
                    </div>

                    <div className="mt-4 space-y-4">
                        {dataLinksNavbar.map(link => (
                            <a
                                key={link.href.es}
                                href={link.href[lang]}
                                className={`flex items-center text-sm font-medium hover:underline capitalize ${navText}`}
                            >
                                {link.icon}
                                <span>{link.title[lang]}</span>
                            </a>
                        ))}
                        <hr className={`border ${theme === 'light' ? 'border-gray-300' : 'border-gray-600'}`} />
                        {socialLinks.map(({ href, icon, title, isCV, onClick }) =>
                            onClick ? (
                                <button
                                    key={title[lang]}
                                    onClick={onClick}
                                    className={`flex items-center hover:cursor-pointer text-sm ${socialText}`}
                                >
                                    {icon}
                                    <span>{title[lang]}</span>
                                </button>
                            ) : isCV ? (
                                <div key="cv-mobile" className="relative">
                                    <button
                                        onClick={() => setMobileCvDropdown(prev => !prev)}
                                        className={`flex items-center text-sm ${socialText}`}
                                    >
                                        {icon}
                                        <span className="flex items-center gap-1">
                                            {title[lang]}
                                            <FaChevronDown size={10} />
                                        </span>
                                    </button>
                                    {mobileCvDropdown && (
                                        <div className={`absolute top-full left-0 mt-2 w-32 border rounded shadow z-50 ${navBg}`}>
                                            <a
                                                href={href}
                                                download={getFileName(href)}
                                                type="application/pdf"
                                                className={`block px-4 py-2 text-left w-full ${hoverBg}`}
                                            >
                                                <div className="flex items-center gap-2 justify-start">
                                                    <FaDownload className="inline" />
                                                    <span className="text-sm">{lang === 'es' ? 'Descargar' : 'Download'}</span>
                                                </div>
                                            </a>
                                            <button
                                                onClick={() => handleViewCV(href)}
                                                className={`block px-4 py-2 text-left w-full ${hoverBg}`}
                                            >
                                                <div className="flex items-center gap-2 justify-start">
                                                    <FaEye className="inline" />
                                                    <span className="text-sm">{lang === 'es' ? 'Ver' : 'View'}</span>
                                                </div>
                                            </button>
                                        </div>
                                    )}
                                </div>
                            ) : (
                                <a
                                    key={href}
                                    href={href}
                                    className={`flex items-center text-sm ${socialText}`}
                                >
                                    {icon}
                                    <span>{title[lang]}</span>
                                </a>
                            )
                        )}
                    </div>
                </div>
            )}

            {/* Visor embebido móvil */}
            {pvOpen && pdfUrl && (
                <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50">
                    <div className="bg-white dark:bg-gray-900 p-4 rounded max-w-3xl max-h-[90vh] overflow-auto relative">
                        <button onClick={() => setPvOpen(false)} className="absolute top-2 right-2 text-lg font-bold">
                            ✕
                        </button>
                        <PDFViewer fileUrl={pdfUrl} />
                    </div>
                </div>
            )}
        </nav>
    );
}
