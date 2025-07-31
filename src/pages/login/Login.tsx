import React, { useState } from 'react';
import {
  IonPage,
  IonContent,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonInput,
  IonItem,
  IonLabel,
  IonButton,
  IonAlert
} from '@ionic/react';
import { useHistory } from 'react-router';

const Login: React.FC = () => {
  const history = useHistory();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showAlert, setShowAlert] = useState(false);

  const handleLogin = () => {
    if (username === 'ali' && password === '123') {
      history.push('/home');
    } else {
      setShowAlert(true);
    }
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>تسجيل الدخول</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding" fullscreen>
        <IonItem>
          <IonInput label="اسم المستخدم" labelPlacement="floating"
            value={username}
            onIonChange={(e) => setUsername(e.detail.value!)}
            clearInput={true}
            type="text"
          />
        </IonItem>
        
        <IonItem className='ion-margin-top'>
          <IonInput label="كلمة المرور" labelPlacement="floating"
            value={password}
            clearInput={true}
            onIonChange={(e) => setPassword(e.detail.value!)}
            type="password"
          />
        </IonItem>
        <IonButton expand="block" onClick={handleLogin} className="ion-margin-top">
          تسجيل الدخول
        </IonButton>

        <IonAlert
          isOpen={showAlert}
          onDidDismiss={() => setShowAlert(false)}
          header="خطأ"
          message="اسم المستخدم أو كلمة المرور غير صحيحة"
          buttons={['موافق']}
        />
      </IonContent>
    </IonPage>
  );
};

export default Login;
