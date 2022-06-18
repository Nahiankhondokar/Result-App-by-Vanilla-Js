

class Validate{


    /**
     *  Empty function
     */
    static empty(value){
        if(value == ''){
            return true;
        }else{
            return false;
        }
    }


    /**
     *  Validation Message
     */
     static setMsg(msg, clr){
        return `<p style="color: ${clr};">${msg}</p>`;
    }



}

