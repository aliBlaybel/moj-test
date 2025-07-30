import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonLabel } from '@ionic/react';
// import { CourtDetails, JudicialStructure, PersonalStatusDepartment } from 'moj-org-management';

// helper
// import { getLiferayAuthDetails, getLiferayEnvDetails } from '../../helper/helper';

const Home: React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Home</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding">
                <IonLabel>Test Blaybel</IonLabel>
                {/* <PersonalStatusDepartment isMobileApp={true}
                    authDetails={getLiferayAuthDetails()}
                    envDetails={getLiferayEnvDetails()}

                    viewMode={false}
                    activeTabNumber="0"
                    departmentId="cee31494-90a5-ef11-a55a-00224886315d"
                    courtId="426e832c-4e9b-ef11-a559-00224886315d"
                    goToDepartment={() => alert("go to department: ")}
                    goToJudicialDayAgenda={(departmentId) => alert("go to judicial day agenda: " + departmentId)}
                    goBack={(courtId: string) => alert("go back courtId : " + courtId)}
                    onSave={(id) => alert("save: " + id)}
                    preferredLanguage="ar" /> */}
{/* 
                <CourtDetails
                    isMobileApp={true}
                    authDetails={getLiferayAuthDetails()}
                    envDetails={getLiferayEnvDetails()}
                    viewMode={false}
                    courtId="426e832c-4e9b-ef11-a559-00224886315d"
                    goToEditDepartment={(courtId, departmentId, viewMode) => alert("go to Edit department: " + "courtId: " + courtId + ", departmentId: " + departmentId + ", viewMode: " + viewMode)}
                    goToAddDepartment={(courtId, viewMode) => alert("go to Add department: " + courtId + ", viewMode: " + viewMode)}
                    goBack={() => alert("go back")}
                    onSave={(id) => alert("save : " + id)}
                    preferredLanguage="ar" /> */}

                {/* <JudicialStructure
                    isMobileApp={true}
                    authDetails={getLiferayAuthDetails()}
                    envDetails={getLiferayEnvDetails()}
                    goToCourt={(courtId, viewMode) => alert("go to department: " + courtId + ", viewMode: " + viewMode)}
                    preferredLanguage="ar" /> */}
            </IonContent>
        </IonPage>
    );
};

export default Home;
