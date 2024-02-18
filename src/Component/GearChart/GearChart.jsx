import { useEffect, useState } from "react";
import ReactSpeedometer from "react-d3-speedometer"

export const GearChart = () => {
    const textColor = "black"; // Define the textColor variable
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
            // Extracting only the "Quantity" values from the data array
            const extractedQuantities = jsonData.data.map(item => item['Quantity ']);
            setQuantities(extractedQuantities[1]);
            setLoading(false);
        } catch (error) {
            setError(error.message);
            setLoading(false);
        }
    };
    
    return (
        <ReactSpeedometer
            maxValue={5000}
            value={quantities}
            needleColor="red"
            startColor="green"
            segments={10}
            endColor="blue"
            textColor={textColor}
        />
    );
};
