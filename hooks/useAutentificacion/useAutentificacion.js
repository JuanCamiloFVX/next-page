import { onAuthStateChanged } from 'firebase/auth';
import React,{useEffect,useState} from 'react';
import firebase from '../../firebase';

function useAtentificacion (){
    const [ usuarioAtenticado, guardarUsuarioAtenticado ] = useState (null);
    
    useEffect(()=>{

        const auth = firebase.getAuth
        const onSuscribe = onAuthStateChanged(auth, (usuario)=>{
            if(usuario ){
                guardarUsuarioAtenticado(usuario);
            }else{
                guardarUsuarioAtenticado(null);
            }
        });
        return ()=> onSuscribe();
        
    },[]);

    return usuarioAtenticado;
}

export default useAtentificacion;