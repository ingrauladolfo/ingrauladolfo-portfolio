// src/components/Pdf/index.tsx

type PDFViewerProps = {
  fileUrl: string;
};

const PDFViewer = ({ fileUrl }: PDFViewerProps) => (
  <iframe
    src={fileUrl}
    className="fixed inset-0 w-full h-full z-50"
    style={{ border: 'none' }}
    title="PDF Viewer"
  />
);

export { PDFViewer };
