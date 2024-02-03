import { PDFDownloadLink, PDFViewer } from '@react-pdf/renderer';
import PDFDocument from './components/PDFDocument';

const App = () => {

  return (
    <>
      <PDFViewer>
        <PDFDocument />
      </PDFViewer>
      <PDFDownloadLink document={<PDFDocument />} fileName={'registros.pdf'}>
        BAIXAR PDF
      </PDFDownloadLink>
    </>
  );
}

export default App;