import { PDFDownloadLink } from "@react-pdf/renderer";
import styled from "styled-components";
import PDFDocument from "../../components/PDFDocument";
import { useEffect, useState } from "react";
import { Chart } from "primereact/chart";

const DashboardContainer = styled.section`
    padding: 60px;
    & h1{
        display: flex;
        justify-content: space-between;
        align-items: center;
        letter-spacing: 1px;
        & a{
            display: inline-block;
            line-height: 46px;
            background-color: #ff00a2;
            padding: 0 26px;
            border-radius: 5px;
            color: white;
            font-size: 14px;
            text-transform: uppercase;
            text-decoration: none;
            letter-spacing: .75px;
        }
    }
    & .graficos{
        display: flex;
        flex-wrap: wrap;
        gap: 16px;
        margin-top: 26px;
        & div{
            width: calc(70% - 16px);
            padding: 16px;
            border-radius: 5px;
            border: 1px solid #DDD;
            &:nth-child(even){
                width: 30%;
            }
            & .grafico{
                width: 100%;
                /* height: 250px; */
                border: 0;
            }
        }
    }
`;

const Dashboard = () => {

    const [chartData, setChartData] = useState({});
    const [chartOptions, setChartOptions] = useState({});
    const [chartDataPie, setChartDataPie] = useState({});
    const [chartOptionsPie, setChartOptionsPie] = useState({});

    // CONFIGURAÇÃO DO GRAFICO DE BARRAS
    useEffect(() => {
        const data = {
            labels: ['Q1', 'Q2', 'Q3', 'Q4'],
            datasets: [
                {
                    label: 'Sales',
                    data: [540, 325, 702, 620],
                    backgroundColor: [
                        'rgba(255, 159, 64, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(153, 102, 255, 0.2)'
                    ],
                    borderColor: [
                        'rgb(255, 159, 64)',
                        'rgb(75, 192, 192)',
                        'rgb(54, 162, 235)',
                        'rgb(153, 102, 255)'
                    ],
                    borderWidth: 1
                }
            ]
        };
        const options = {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        };

        setChartData(data);
        setChartOptions(options);
    }, []);

    // CONFIGURAÇÃO DO GRAFICO DE PIZZAS (cHART PIE)

    useEffect(() => {
        const documentStyle = getComputedStyle(document.documentElement);
        const charDataPie = {
            labels: ['A', 'B', 'C'],
            datasets: [
                {
                    data: [540, 325, 702],
                    backgroundColor: [
                        documentStyle.getPropertyValue('--blue-500'), 
                        documentStyle.getPropertyValue('--yellow-500'), 
                        documentStyle.getPropertyValue('--green-500')
                    ],
                    hoverBackgroundColor: [
                        documentStyle.getPropertyValue('--blue-400'), 
                        documentStyle.getPropertyValue('--yellow-400'), 
                        documentStyle.getPropertyValue('--green-400')
                    ]
                }
            ]
        }
        const chartOptionsPie = {
            plugins: {
                legend: {
                    labels: {
                        usePointStyle: true
                    }
                }
            }
        };

        setChartDataPie(data);
        setChartOptionsPie(options);
    }, []);

    return(
        <>
        <DashboardContainer>
            <h1>
                DASHBOARD
                <PDFDownloadLink
                document={<PDFDocument />} 
                fileName={'registros.pdf'}
                >
                    BAIXAR PDF
                </PDFDownloadLink>
            </h1>
            <div className="graficos">
                <div >
                    <h6>Total de Visitantes</h6>
                    <Chart className="grafico" type="bar" data={chartData} options={chartOptions} />

                </div>
                <div>
                    grafico de pizza
                    <Chart type="pie" data={chartData} options={chartOptions} className="grafico" />
                </div>
                <div>grafico de linhas</div>
                <div>grafico de pizzas</div>
            </div>

        </DashboardContainer>
        </>
    );
}

export default Dashboard;