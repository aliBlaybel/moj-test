import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonInput, IonButton, IonItem, IonLabel, IonToast } from '@ionic/react';
import { useHistory } from 'react-router-dom';
import React, { useState } from 'react';

const Login: React.FC = () => {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showToast, setShowToast] = useState(false);

    const handleLogin = () => {
        if (email === 'ali' && password === '123456') {
            history.push('/home');
        } else {
            setShowToast(true);
        }
    };

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Login</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding">
                <IonItem>
                    <IonLabel position="floating">Email</IonLabel>
                    <IonInput type="email" value={email} onIonChange={(e) => setEmail(e.detail.value!)} />
                </IonItem>

                <IonItem>
                    <IonLabel position="floating">Password</IonLabel>
                    <IonInput type="password" value={password} onIonChange={(e) => setPassword(e.detail.value!)} />
                </IonItem>

                <IonButton expand="block" className="ion-margin-top" onClick={handleLogin}>
                    Login
                </IonButton>

                <IonToast isOpen={showToast} color="danger" duration={2000}
                    message="Invalid credentials" onDidDismiss={() => setShowToast(false)} />
            </IonContent>
        </IonPage>
    );
};

export default Login;
