import { PDFDownloadLink, PDFViewer } from '@react-pdf/renderer';
import PDFDocument from './components/PDFDocument';
import Ways from './routes';
import { AuthContext } from './contexts/AuthContext';
import { useState } from 'react';

const App = () => {
  const [isLogged, setIsLogged] = useState(true);
  return (
    <>
      {/* <PDFViewer>
        <PDFDocument />
      </PDFViewer>
       */}
      <AuthContext.Provider value={{ isLogged, setIsLogged }}>
        <Ways/>
      </AuthContext.Provider>
    </>
  );
}

export default App;