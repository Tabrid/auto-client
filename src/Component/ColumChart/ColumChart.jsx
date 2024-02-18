import { useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";

const formatDate = (inputDate) => {
    const date = new Date(inputDate);
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const day = date.getDate();
    const month = months[date.getMonth()];
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
  };
const ColumChart = () => {
    const [dates, setDates] = useState([]);
  const [quantities, setQuantities] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('https://script.googleusercontent.com/a/macros/diu.edu.bd/echo?user_content_key=GDahbx8IVUYYuNsQaeYcn0R2_BWaJfT_xIKhmU2DR7y2Q9r_SWNufrLYhBbKyFAzNV1ZRQd9qAXm3VdTSZi7j_JJdLAsmcuGm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_nRPgeZU6HP_5pVAdmiWFEnW-8Pwym1VNOTgokLgBRRf7CDxd-8rn6yIprc8a-STLBcZJMFG30U8AdlaPKvJi8zULXbNVnKDcknwE_k9MqLcxiY5K5xBmmOqP9T9rZVpRpX6tX3KFDfw&lib=MH4tuVUvTW29-2yd_cUPU4xeQMcT7qx56');
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const jsonData = await response.json();
      // Get the last 50 entries
      const dataToShow = jsonData.data.slice(1);
      const extractedDates = dataToShow.map(item => formatDate(item['Date']));
      const extractedQuantities = dataToShow.map(item => item['Quantity']);
      setDates(extractedDates);
      setQuantities(extractedQuantities);
      setLoading(false);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };
  console.log(dates, quantities);
    const state = {

        series: [{
          name: 'Quantity vs Date',
          data: quantities
        }],
        options: {
          annotations: {
            points: [{
              x: 'Bananas',
              seriesIndex: 0,
              label: {
                borderColor: '#775DD0',
                offsetY: 0,
                style: {
                  color: '#fff',
                  background: '#775DD0',
                },
                text: 'Bananas are good',
              }
            }]
          },
          chart: {
            height: 350,
            type: 'bar',
          },
          plotOptions: {
            bar: {
              borderRadius: 10,
              columnWidth: '50%',
            }
          },
          dataLabels: {
            enabled: false
          },
          stroke: {
            width: 2
          },
    
          grid: {
            row: {
              colors: ['#fff', '#E8F6FF']
            }
          },
          xaxis: {
            labels: {
              rotate: -45
            },
            categories:dates,
            tickPlacement: 'on'
          },
          yaxis: {
            title: {
              text: 'Quantity ',
            },
          },
          fill: {
            type: 'gradient',
            gradient: {
              shade: 'light',
              type: "horizontal",
              shadeIntensity: 0.25,
              gradientToColors: undefined,
              inverseColors: true,
              opacityFrom: 0.85,
              opacityTo: 0.85,
              stops: [50, 0, 100]
            },
          }
        },
      };
    return (
        <div>
           <ReactApexChart options={state.options} series={state.series} type="bar" height={350} /> 
        </div>
    );
};

export default ColumChart;