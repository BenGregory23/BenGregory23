import { Redirect, Route, useHistory } from 'react-router-dom';
import { IonApp, IonCardContent, IonItem, IonButtons, IonLabel, IonRouterOutlet, IonCard, setupIonicReact, IonHeader, IonToolbar, IonTitle,IonCardHeader, IonCardSubtitle, IonCardTitle,IonIcon, IonSegment, IonBadge, IonButton, IonPage, IonBackButton } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { pin, wifi, wine, warning, walk } from 'ionicons/icons';


/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

import { OTSession, OTPublisher, OTStreams, OTSubscriber } from 'opentok-react';

import Accueil from './components/Accueil';
import Patient from './components/Patient';
import Medecin from './components/Medecin';
import Join from './components/Join'
import { useState } from 'react';

setupIonicReact();




const App: React.FC = () => {

  let history = useHistory();

  return(
    <IonApp>
      <IonPage> 
        {/* <IonHeader>
          <IonToolbar>
            <IonItem lines='none'>
              <IonTitle>Wemed</IonTitle>
              <IonButton routerLink='/Join' routerDirection='back' color='success' className='ion-padding-horizontal'>Accueil</IonButton>
            </IonItem>
          </IonToolbar>
        </IonHeader> */}

          {/* <IonHeader translucent>
            <IonToolbar>
              <IonTitle>Wemed</IonTitle>
            </IonToolbar>
          </IonHeader> */}
         
          
  

          <IonReactRouter>
            <IonRouterOutlet>
              <Route path="/Join" component={Join}/>
              <Route path="/Accueil" component={Accueil}/>
              <Route path="/Patient" component={Patient}/>
              <Route path="/Medecin" component={Medecin}/>
              <Redirect exact from="/" to="/Join" />
            </IonRouterOutlet>
          </IonReactRouter>

          
      </IonPage>  
    </IonApp>
  );

}

export default App;




