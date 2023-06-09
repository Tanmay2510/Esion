import { createContext, useReducer } from "react";
export const UserStoreContext = createContext();

const initialState ={
    theId:"",
    login:null,
    Msg:"",
    name:"",
    sideNavClicked:false,
    createPlaylistClicked:false,
    deletePlaylistClicked:false,
    yourPlaylistClicked:false,
    currentName:[],
    savedPlay:false,
    deletePlay:false,
    thePlaylists:[]
}
const userStoreReducer = (state, action) => {
    try {
      return action(state);
    } catch (error) {
      console.warn(
  error    );
      return initialState;
    }
  };

  const UserStore = ({ children }) => {
    const [state, userDispatch] = useReducer(userStoreReducer, initialState);
    return (
      <UserStoreContext.Provider value={{ ...state, userDispatch }}>
        {children}
      </UserStoreContext.Provider>
    );
  };

  export default UserStore;