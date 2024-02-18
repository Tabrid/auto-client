import { useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";


const QuantityChart = () => {
    const [date, setDate] = useState(null);
    const [quantity, setQuantity] = useState(null);
    const [actualQuantity, setActualQuantity] = useState(null);
    

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await fetch('https://script.googleusercontent.com/a/macros/diu.edu.bd/echo?user_content_key=RbPVVQEcNgn2i6_kPNhB90eHh1mAN4grFiL3KSNcEGHWgQIBMX10bONw3PJ5YnE3W83_R5z4uZbXvTjiNWp4rNy0pfDhtbw1m5_BxDlH2jW0nuo2oDemN9CCS2h10ox_nRPgeZU6HP_5pVAdmiWFEnW-8Pwym1VNYkhasK7A-PMSugd6InEXhLMV1V0borPXpW3Yj5UcHLbckWRMUpK6jo9C-WiAtKwTxAMWpEzpuZ4pO-T1fof4_dCvnQbrusYwXMuqa_jo9BU&lib=M9k4f-31TTPr9YCxniOGGeQD4F1LFMboN');
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const jsonData = await response.json();
            if (jsonData.data && jsonData.data.Sheet3) {
                const sheet3Data = jsonData.data.Sheet3;
                const actualQtyArray = [];
                const dateArray = [];
                const quantityArray = [];
                sheet3Data.forEach((item, index) => {
                    if (index !== 0) { // Skip data at index 0
                        // Format date (assuming the date is in MM/DD/YYYY format)

                        actualQtyArray.push(item['Actual Qty']);
                        dateArray.push(item.Date);
                        quantityArray.push(item.Quantity);
                    }

                });
                const formattedDates = dateArray.map(dateString => {
                    const date = new Date(dateString);
                    const options = { year: 'numeric', month: 'long', day: 'numeric' };
                    return date.toLocaleDateString('en-US', options);
                });
                setActualQuantity(actualQtyArray);
                setDate(formattedDates);
                setQuantity(quantityArray);
            }
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };
    const state = {

        series: [{
            name: 'Quantity',
            data: quantity
        }, {
            name: 'Actual Quantity',
            data: actualQuantity
        }],
        options: {
            chart: {
                type: 'bar',
                height: 350
            },
            plotOptions: {
                bar: {
                    horizontal: false,
                    columnWidth: '55%',
                    endingShape: 'rounded'
                },
            },
            dataLabels: {
                enabled: false
            },
            stroke: {
                show: true,
                width: 2,
                colors: ['transparent']
            },
            xaxis: {
                categories: date,
            },
            yaxis: {
                title: {
                    text: 'Quantity'
                }
            },
            fill: {
                opacity: 1
            },
            tooltip: {
                y: {
                    formatter: function (val) {
                        return val
                    }
                }
            }
        },
    };
    return (
        <div>
            <ReactApexChart options={state.options} series={state.series} type="bar" height={350} />

        </div>
    );
};

export default QuantityChart;