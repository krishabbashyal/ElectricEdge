import { createContext, useState, useEffect, useContext } from "react";
import { UserContext } from "./UserContext";
import { db } from "./firebaseConfig";
import { doc, getDoc } from "firebase/firestore";

export const UserProfileContext = createContext();

const UserProfileProvider = ({ children }) => {
  const { currentUser } = useContext(UserContext);
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const getUserData = async () => {
      if (currentUser) {  
        const profileRef = doc(db, "profiles", currentUser.uid);
        const profileSnap = await getDoc(profileRef);
  
        if (profileSnap.exists()) {
          setUserData(profileSnap.data());
          console.log("Data fetched for current user in the user profile data context");
          console.log(profileSnap.data())
        } else {
          console.log("No profile data available.");
          setUserData(null);
        }
      } else {
        console.log("No current user. Skipping data fetch.");
        setUserData(null);
      }
    };

    getUserData();
  }, [currentUser]);

  return (
    <UserProfileContext.Provider value={{ userData, setUserData }}>
      {children}
    </UserProfileContext.Provider>
  );
}

export default UserProfileProvider;
