import { Document, Page, View, Text, StyleSheet, Image } from "@react-pdf/renderer";
import brasao from './brasao-do-ceara.png'
import { Html } from "react-pdf-html";

const PDFDocument = () => {

    const tabela = `
    <table>
        <tr>
            <td>Visitantes Total</td>
            <td>1000</td>
        </tr>
    </table>
    <table>
        <tr>
            <td>Visitantes Masculino</td>
            <td>300</td>
        </tr>
    </table>
    <table>
        <tr>
            <td>Visitantes Feminino</td>
            <td>600</td>
        </tr>
    </table>
    <table>
        <tr>
            <td>Visitantes Outros</td>
            <td>100</td>
        </tr>
    </table>
    `;
    
    const styles = StyleSheet.create({
        container: {
            position: 'relative'
        },
        bg_imagem: {
            width: '50%',
            position: 'absolute',
            left: '25%',
            top: '25%',
            opacity: .1,
            zIndex: 1,
        },
        main: {
            width: '100%',
            height: '100%',
            padding: '60px',
            position: 'absolute',
            left: 0,
            top: 0,
            zIndex: 2,
            fontSize: '12px'
        }
    });

    return (
        <>
            <Document style={styles.container}>
                <Page size={'A4'}>
                    <Image src={brasao} style={styles.bg_imagem} />
                    <View style={styles.main}>
                        <Text>{'Hello World!'}</Text>
                        <Html>{tabela}</Html>
                    </View>
                </Page>
            </Document>
        </>
    );
}

export default PDFDocument;