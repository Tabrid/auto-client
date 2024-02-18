import ReactApexChart from "react-apexcharts";
import { GearChart } from "../../Component/GearChart/GearChart";
import { useEffect, useState } from "react";
import ColumChart from "../../Component/ColumChart/ColumChart";
import QuantityChart from "../../Component/QuantityChart/QuantityChart";
import Table from "../../Component/Table/Table";



const Live = () => {
  const [timeStamps, setTimeStamps] = useState([]);
  const [quantities, setQuantities] = useState([]);
  
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('https://script.googleusercontent.com/a/macros/diu.edu.bd/echo?user_content_key=zWDMbFUNe4EFd__YrFJgIQiFnfysZknjTcX5AlSQmh-nLsqxaPlasqlD8cXCODuZxaLjuLnt99LGRwSFiWJ-Hk5qoxi1CRagm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_nRPgeZU6HP_5pVAdmiWFEnW-8Pwym1VN_NZzBRiv_ji0o3u1WKByCNNAxFChsw4R4pPmrmp93AlmdGVZgqzuQ4HQKmOM6OUxEhWLvpUm80IraADzQpm-AL08JnfJHc9ypX6tX3KFDfw&lib=M_2NPOkepqPZSFRQyQ--C5IJkX9Q1PdN0');
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const jsonData = await response.json();
      const dataLength = jsonData.data.length;
      const dataWithoutFirst = jsonData.data.slice(1);
      const dataWithoutFirstEntry = dataWithoutFirst.slice(dataLength - 50);

      const extractedTimeStamps = dataWithoutFirstEntry.map(item => item['cTime Stamp']);
      const extractedQuantities = dataWithoutFirstEntry.map(item => item['Quantity ']);
      setTimeStamps(extractedTimeStamps);
      setQuantities(extractedQuantities);
      setLoading(false);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };
  console.log(timeStamps, quantities);
 
  const data = {

    series: [{
      name: "Quantity",
      data: quantities
    }],
    options: {
      chart: {
        height: 350,
        type: 'line',
        zoom: {
          enabled: false
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: 'straight'
      },
      title: {
        text: 'Product Trends by time',
        align: 'left'
      },
      grid: {
        row: {
          colors: ['#E8F6FF', 'transparent'], // takes an array which will be repeated on columns
          opacity: 0.5
        },
      },
      xaxis: {
        categories: timeStamps,
      }
    },


  };

  return (
    <div>
      <div className="hero    bg-[#E8F6FF]">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="w-1/2 flex justify-center items-center mt-14">
            <GearChart />
          </div>
          <div className="w-1/2">
            <h1 className="text-5xl font-bold">Box Office News!</h1>
            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
          </div>
        </div>


      </div>
      <div className="m-14 ">
        <ReactApexChart options={data.options} series={data.series} type="line" height={350} />

      </div>
      <div className="m-14">
        <ColumChart />
      </div>
      <div className="m-14 ">
        <QuantityChart />
      </div>
      <div className="m-14">
        <Table />
      </div>
    </div>
  );
};

export default Live;