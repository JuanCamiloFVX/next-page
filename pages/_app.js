import App from "next/app";
import firebase from "../firebase";
import FirebaseContext from "../firebase/context/context";
import useAtentificacion from "../hooks/useAutentificacion/useAutentificacion";

const MyApp = props =>{

    const usuario = useAtentificacion();
    const {Component, pageProps} = props;
    return(
        <FirebaseContext.Provider
        value={{
            firebase,
            usuario
        }}
        >
            <Component {...pageProps} />
            
        </FirebaseContext.Provider>
    );
}


export default MyApp;