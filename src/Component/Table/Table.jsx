import { useEffect, useState } from "react";

const Table = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await fetch('https://script.googleusercontent.com/a/macros/diu.edu.bd/echo?user_content_key=0ge3Cf5nWwAafLdrDL1v9m1GKzAF4phZ4LZgrsk0O6UBz-MT0ovoNY_SIFZIt33eLGUiaADJE-ce22jdvUGT_QgG_08PQb9Bm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_nRPgeZU6HP_5pVAdmiWFEnW-8Pwym1VNLgCPuhNvcw_3ceZg76v-bq-sPCG-GlpDTZkYlHfC1edny8hqcYpxnKt_ZRi2GYFhWVc_a4YxpqJ9081TnasQnh7PoYdGMqBmXMuqa_jo9BU&lib=M9k4f-31TTPr9YCxniOGGeQD4F1LFMboN');
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const jsonData = await response.json();
            setData(jsonData.data.Sheet3);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    if (!data) {
        return <div>Loading...</div>;
    }

    // Ensure data is not empty before transposing
    if (data.length === 0) {
        return <div>No data available</div>;
    }

    const transposedData = Object.keys(data[0]).map((key) =>
        data.map((item) => item[key])
    );
    return (
        <div className="flex justify-center items-center w-full">
            <div className="overflow-x-auto ">
                <table className="table-auto">
                    <tbody>
                        {transposedData.map((row, rowIndex) => (
                            <tr key={rowIndex} className={rowIndex % 2 === 0 ? 'bg-gray-100' : ''}>
                                {row.map((cell, cellIndex) => (
                                    <td key={cellIndex} className="border px-4 py-2">{cell}</td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Table;
