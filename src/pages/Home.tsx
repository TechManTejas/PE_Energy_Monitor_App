import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>
            <div style={{
              "fontFamily": "Helvetica",
            }}>
              PE Apps
            </div>  
            </IonTitle>
        </IonToolbar>
      </IonHeader>
        <div style={{
          background: '#fff',
          height: '100vh',
        }}>
          <ExploreContainer />
        </div>
    </IonPage>
  );
};

export default Home;
