export default function validarCrearProducto(valores){

    let errores = {};


    //validar nombre de usuario

    if(!valores.nombre){
        errores.nombre = "El nombre es obligatorio"
    }

    //validar empresa

    if(!valores.empresa){
        errores.empresa = "El nombre de la empresa es obligatorio"
    }

    //validar url

    if(!valores.url){
        errores.url = "La URL es obligatorio"
    }else if(!/^(ftp|http|https):\/\/[^ "]+$/.test(valores.url)){
        errores.url = "La URL tiene un mal formato o no es valida"
    }

    //validar descripcion

    if(!valores.descripcion){
        errores.descripcion = "Agrega una descripcion a tu producto"
    }
    

    return errores;
}