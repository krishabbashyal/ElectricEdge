import { createContext, useState, useEffect, useContext } from "react";
import { UserContext } from "./UserContext";
import { db } from "./firebaseConfig";
import { doc, onSnapshot } from "firebase/firestore";

export const UserProfileContext = createContext();

const UserProfileProvider = ({ children }) => {
  const { currentUser } = useContext(UserContext);
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    if (currentUser) {
      const profileRef = doc(db, "profiles", currentUser.uid);

      const unsubscribe = onSnapshot(
        profileRef,
        (profileSnap) => {
          if (profileSnap.exists()) {
            setUserData(profileSnap.data());

          } else {

            setUserData(null);
          }
        },
        (error) => {
          console.error("Error fetching user data:", error);
          setUserData(null);
        }
      );

      return () => unsubscribe();
    } else {

      setUserData(null);
      return undefined;
    }
  }, [currentUser]);

  return <UserProfileContext.Provider value={{ userData, setUserData }}>{children}</UserProfileContext.Provider>;
};

export default UserProfileProvider;
