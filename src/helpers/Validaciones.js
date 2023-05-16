
const largoInput=(dato)=>{
    if(dato.trim().length >0){
        return true;
    }else{
        return false;
    }
}

const topePrecio=(dato)=>{
    if(dato>0 && dato<5000){
        return true;
    }else{
        return false;
    }

}
export {largoInput,topePrecio}