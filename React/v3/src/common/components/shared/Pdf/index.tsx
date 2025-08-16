// src/components/Pdf/index.tsx
import type { PDFViewerProps } from "../../../interfaces/components/shared/Pdf";
const PDFViewer = ({ fileUrl }: PDFViewerProps) => (<iframe src={fileUrl} className="fixed inset-0 w-full h-full z-50" style={{ border: 'none' }} title="PDF Viewer" />);
export { PDFViewer };
