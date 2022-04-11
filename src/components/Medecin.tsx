import { IonApp, IonButtons, IonBackButton,IonCardContent, IonItem, IonLabel, IonRouterOutlet, IonCard, setupIonicReact, IonHeader, IonToolbar, IonTitle,IonCardHeader, IonCardSubtitle, IonCardTitle,IonIcon, IonSegment, IonBadge, IonButton, IonPage, IonToggle } from '@ionic/react';
import { Link, Redirect, Route, useHistory, useLocation } from 'react-router-dom';
import { OTSession, OTPublisher, OTStreams, OTSubscriber} from 'opentok-react';
import { useState, useEffect } from 'react';




const Medecin: React.FC = () =>{
    let history = useHistory();
    let location = useLocation();
    const [info, setInfo] = useState<any>(location);
    const [mute, setMute] = useState(false)

    useEffect(()=>{
      setInfo(location)
    })

    
    return(
      <IonPage>

<IonHeader translucent>
            <IonToolbar>
              <IonTitle>Wemed</IonTitle>
              <IonButtons slot='start'>
                {/* <IonBackButton color="success" defaultHref='/Join' mode='ios' /> */}
                
              </IonButtons>
              <IonButton color='success' routerLink='/Join'/>
            </IonToolbar>
          </IonHeader>
      {
        info != undefined ||  info.state != undefined || info.state.info != undefined 
        ? <IonItem className='ion-hide' >
              <OTSession apiKey={info.state.info.credentials.apiKey}
                     sessionId={info.state.info.credentials.sessionId}
                     token={info.state.info.credentials.token}>
                  <OTPublisher 
                        properties={{  width : 0, height : 0, publishVideo: false, publishAudio: !mute,name : "publisher" }}
                  />
      
                  <OTStreams >
                    <OTSubscriber
                    properties={{subscribeToVideo : false}}
                    />
                  </OTStreams>
              </OTSession>
          </IonItem> 
        : ""
      }
      <IonItem  className='ion-padding' color='success' lines='none'>
          <IonLabel>Mute microphone</IonLabel>
          <IonToggle checked={mute} onIonChange={e => setMute(e.detail.checked)} />
      </IonItem>
      
        
   
      <IonCard></IonCard>
    </IonPage>
    
       
    )}

export default Medecin;