import { IonApp, IonToggle, IonCardContent, IonItem, IonLabel, IonRouterOutlet, IonCard, setupIonicReact, IonHeader, IonToolbar, IonTitle,IonCardHeader, IonCardSubtitle, IonCardTitle,IonIcon, IonSegment, IonBadge, IonButton, IonPage } from '@ionic/react';
import { Redirect, Route, useHistory, useLocation } from 'react-router-dom';
import { OTSession, OTPublisher, OTStreams, OTSubscriber } from 'opentok-react';
import { useState, useEffect } from 'react';



const Patient: React.FC = () =>{
  let history = useHistory();
  let location = useLocation();
  const [info, setInfo] = useState<any>(location);
  const [mute, setMute] = useState(false)
  
    useEffect(()=>{
      setInfo(location)
    })
  
    console.log(info.state.info)
    return(
      <IonPage className='ion-justify-content-center ion-align-self-start'>
      {
        info != undefined ||  info.state != undefined || info.state.info != undefined 
        ? <IonItem className='' > 
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
      <IonCard  className='ion-padding'>
        <IonItem className='ion-text-center'>
          <IonLabel>Mute microphone</IonLabel>
          <IonToggle checked={mute} onIonChange={e => setMute(e.detail.checked)} />
        </IonItem>
  
      </IonCard>
      
  
        
  
      
      </IonPage>
      
  
          
    )}
  
  export default Patient;
  