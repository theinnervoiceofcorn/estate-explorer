import React, { useEffect, useState } from "react";
import { AppHeading } from "../../ui/AppHeading/AppHeading";

interface UserData {
  email: string;
  password: string;
  name: string;
  city: string;
}

export const UserDataDisplay: React.FC = () => {
  const [userData, setUserData] = useState<UserData | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await retrieveUserDataFromIndexedDB();
        setUserData(data);
      } catch (error) {
        console.error("Error retrieving user data:", error);
      }
    };

    fetchData();
  }, []);

  const retrieveUserDataFromIndexedDB = async (): Promise<UserData | null> => {
    return new Promise((resolve, reject) => {
      const request = window.indexedDB.open("UserDataDB", 1);
      request.onerror = () => reject(request.error);
      request.onsuccess = () => {
        const db = request.result;
        const transaction = db.transaction(["userData"], "readonly");
        const objectStore = transaction.objectStore("userData");
        const getDataRequest = objectStore.getAll();

        getDataRequest.onerror = () => reject(getDataRequest.error);
        getDataRequest.onsuccess = () => {
          const userData = getDataRequest.result[0];
          resolve(userData ? (userData as UserData) : null);
        };
      };
    });
  };

  if (!userData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <AppHeading headingLevel="2" headingText="User Data" />
      <p>Name: {userData.name}</p>
      <p>Email: {userData.email}</p>
      <p>City: {userData.city}</p>
    </div>
  );
};
