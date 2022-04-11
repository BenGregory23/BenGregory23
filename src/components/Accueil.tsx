import { IonApp, IonButtons,IonCardContent, useIonToast, IonBackButton, IonItem, IonLabel, IonRouterOutlet, IonCard, setupIonicReact, IonHeader, IonToolbar, IonTitle,IonCardHeader, IonCardSubtitle, IonCardTitle,IonIcon, IonSegment, IonBadge, IonButton, IonPage } from '@ionic/react';
import { Redirect, Route,useHistory, useLocation } from 'react-router-dom';
import { IonReactRouter } from '@ionic/react-router';
import { useState, useEffect, useRef } from 'react';


const Accueil: React.FC = () =>{
    let location = useLocation<any>();
    let history = useHistory();

    const [present, dismiss] = useIonToast();
    const [info, setInfo] = useState(location);


    useEffect(()=>{
      setInfo(location.state)
    })
    
    
 
    const handleClick = (path:string) => {
      console.log(info)
        history.push({
          pathname: path,
          state: { info: info }
        });
    }


    return(
        <IonPage >

          <IonHeader translucent>
            <IonToolbar>
              <IonTitle>Wemed</IonTitle>
              <IonButtons slot='start'>
                <IonBackButton color="success" defaultHref='/Join' mode='ios' />
              </IonButtons>
            </IonToolbar>
          </IonHeader>

         
            <IonCard className='ion-align-items-center ion-align-self-center ion-padding'>
                <IonCardHeader className='ion-text-center'>
                <IonCardTitle>Choisir son rôle</IonCardTitle>
                </IonCardHeader>
            
                <IonCardContent>
                    <IonButton onClick={(e) => {
                               e.preventDefault();
                              handleClick("/Patient");
                              present({
                                buttons: [{ text: 'hide', handler: () => dismiss() }],
                                message: 'Vous avez choisi le rôle Patient ',
                                onDidDismiss: () => console.log('dismissed'),
                                onWillDismiss: () => console.log('will dismiss'),
                              })
                               
                    }} color='success'>Patient</IonButton>
                    <IonButton color='success' onClick={(e) => {
                                                        e.preventDefault();
                                                        
                                                       handleClick("/Medecin");
                                                       present({
                                                        buttons: [{ text: 'hide', handler: () => dismiss() }],
                                                        message: 'Vous avez choisi le rôle Médecin ',
                                                        onDidDismiss: () => console.log('dismissed'),
                                                        onWillDismiss: () => console.log('will dismiss'),
                                                      })
                                                        }}>Médecin</IonButton>
                    
                </IonCardContent>
            </IonCard>

           <IonCard></IonCard>
        </IonPage>
    
       
    )}

export default Accueil;