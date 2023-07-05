import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface ButtonData {
  name: string;
  icon: string;
  url: string;
}

const ExploreContainer: React.FC = () => {

  const [buttonData, setButtonData] = useState<ButtonData[]>([]);

  useEffect(() => {
    // Make an Axios call to fetch data
    axios.get('http://13.235.134.49/icon-links/')
      .then(response => {
        setButtonData(response.data);
      })
      .catch(error => {
        console.error('Error fetching button data:', error);
      });
  }, []);

  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px' }}>
      {buttonData.map((button, index) => (
        <div key={index} style={{textAlign:"center", marginTop:'20px'}} onClick={() => {
          location.href = button.url;
        }}>
          <img src={button.icon} height={100} width={100} style={{
            border: '1px solid rgba(0, 0, 0, 1)',
            borderRadius: '5px',
          }}/>
          <div style={{ color: 'black', fontFamily:"Helvetica" }}>
            {button.name}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ExploreContainer;
