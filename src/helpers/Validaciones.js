
const largoInput=(dato)=>{
    if(dato.trim().length >0){
        return true;
    }else{
        return false;
    }
}

const topePrecio=(dato)=>{
    if(dato >= 0 || dato <= 50000 ){
        return true;
    }else{
        return false;
    }

}

const Logueo =()=>{
        const Token = localStorage.getItem ('token');
        if(!Token) {
            return window.location = '/';
         }


}
const emailValidation=(dato)=>{
    const regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    if(regex.test(dato)){
        return true;
    }else{
        return false;
    }
}
export {largoInput,topePrecio,Logueo,emailValidation}