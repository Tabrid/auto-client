import  { useState, useEffect } from 'react';
import { google } from 'googleapis';
const SPREADSHEET_ID = '1ypo6tobYgaruj3IbwaFRxLqvmF52xQQUEiT7yQSaGX4';
    const RANGE = 'Sheet1!A1:C'; // Range to read data
    
    const SCOPES = ['https://www.googleapis.com/auth/spreadsheets'];
    
    const getClient = async () => {
      const auth = new google.auth.GoogleAuth({
        scopes: SCOPES,
      });
      return await auth.getClient();
    };
    
    const readData = async () => {
      const client = await getClient();
      const sheets = google.sheets({ version: 'v4', auth: client });
      const response = await sheets.spreadsheets.values.get({
        spreadsheetId: SPREADSHEET_ID,
        range: RANGE,
      });
      const values = response.data.values;
      if (values) {
        // Assuming the first row contains headers
        const headers = values[0];
        // Filter out the header row and map each row to an object
        return values.slice(1).map(row => {
          // Create an object with keys from the headers array
          return headers.reduce((obj, header, index) => {
            // Add each value to the object with the corresponding key
            obj[header] = row[index] || ''; // handle empty values if needed
            return obj;
          }, {});
        });
      }
      return [];
    };
    
const Test = () => {
    
      const [data, setData] = useState([]);
    
      useEffect(() => {
        fetchData();
      }, []);
    
      const fetchData = async () => {
        try {
          const newData = await readData();
          setData(newData);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
    return (
        <div>
            <ul>
        {data.map((item, index) => (
          <li key={index}>
            Time Stamp: {item['Time Stamp']}, Line-1: {item['Line-1']}, Quantity: {item['Quantity']}
          </li>
        ))}
      </ul>
        </div>
    );
};

export default Test;