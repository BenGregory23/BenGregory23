import { IonApp, IonCardContent, IonButtons, IonItem, IonLabel, IonInput, IonRouterOutlet, IonCard, setupIonicReact, IonHeader, IonToolbar, IonTitle,IonCardHeader, IonCardSubtitle, IonCardTitle,IonIcon, IonSegment, IonBadge, IonButton, IonPage, IonBackButton, IonContent } from '@ionic/react';
import { Link, Redirect, Route, useHistory, useLocation } from 'react-router-dom';
import { OTSession, OTPublisher, OTStreams, OTSubscriber } from 'opentok-react';
import { useState } from 'react';

import {SAMPLE_SERVER_BASE_URL} from '../config';



const Join: React.FC = () =>{
    let history = useHistory();
    let tmpCred:any;
    const [room, setRoom] = useState<string>('');
   
    const handleClick = () => {

        fetch(SAMPLE_SERVER_BASE_URL + '/room/' + room )
        .then(data => data.json()) 
        .then(data => {
            tmpCred = data;
            
        })
        .then(data =>{
            history.push('/Accueil', {room : room, credentials : tmpCred})
        })
        .catch((err) => {
          console.error('Failed to get session credentials', err);
          
        });
        
    }

    return(
        <IonPage>

        <IonHeader translucent>
            <IonToolbar>
              <IonTitle>Wemed</IonTitle>
              
            </IonToolbar>
          </IonHeader>
            

            
            <IonCard className='ion-align-items-center ion-align-self-center ion-padding' >
                <IonCardHeader className='ion-text-center'>
                    <IonCardTitle>
                      Numéro de salle
                    </IonCardTitle>
                </IonCardHeader>

                <IonCardContent className='ion-text-center' >
                    <IonItem lines='none'>
                        <IonInput value={room}  placeholder="Enter Number" onIonChange={e=>setRoom(e.detail.value!)}></IonInput>
                    </IonItem>
                <IonButton className='ion-padding'   color='success' onClick={(e) => {
                                                        e.preventDefault();
                                                        handleClick();
                                                        }}>Valider</IonButton>
                
                </IonCardContent>
            
           
            </IonCard>
       
            
            
         
                                                     
         <IonCard></IonCard>
        </IonPage>
    
       
    )}

export default Join;