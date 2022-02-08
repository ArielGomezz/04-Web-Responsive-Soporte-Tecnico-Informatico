
/** VALIDAMOS EL NOMBRE QUE DEBE TENER AL MENOS TRES CARACTERES,
 *  EL EMAIL DEBE TENER @.COM, PARA QUE LO VALIDE COMO EMAIL,
 *  EL MENSAJE NO TIENE NINGUNA VALIDACIÓN, AL SER UN MJS LO DEJE LIBRE*/


const nombre = document.getElementById("name")
const email = document.getElementById("email")
const mensaje = document.getElementById("mensaje")
const telefono = document.getElementById("tel")
const form = document.getElementById("form")
const parrafo = document.getElementById("warnings")


/** SI LA LONGITUD DE NOMBRE ES MENOR A TRES CARACTERES QUE MUESTRE UNA ALERTA */
form.addEventListener ("submit", e=> {
    e.preventDefault()
    let warnings = ""
    let entrar = false
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/  /** EXPRESIÓN REGULAR QUE SIRVE PARA VALIDAR EMAIL */
    if(nombre.value.length <3){
        warnings += 'El nombre debe contener al menos 3 caracteres <br>'
        entrar = true /** VA A ENTRAR CUANDO SEA VERDADERO RECIEN */
    }


    /** VALIDAMOS EL EMAIL QUE DEBE TENER EL @.COM PARA VALIDARLO COMO EMAIL*/
    if(!regexEmail.test(email.value)){ /** SI ES FALSO QUE ENTRE */
        warnings += 'El email no es valido <br>'
        entrar = true /** VA A ENTRAR CUANDO SEA VERDADERO */
    }



    /** VALIDAMOS EL NUMERO DE TEL, QUE DEBE TENER AL MENOS 6 NÚMEROS */
    if(telefono.value.length <6){
        warnings += 'El teléfono debe tener al menos 6 caracteres'
        entrar = true /** VA A ENTRAR RECIEN CUANDO SER VERDADERO */
    }


    /** QUE MUESTRE POR PANTALLA SI SE CUMPLE LAS CONDICIONES O SI EXISTE UN ERROR */
    if(entrar){ /** SI ES VERDADERO SE HACE ALGO */
        parrafo.innerHTML = warnings /** QUE AL PARRAFO LE AGREGUE LA VARIABLE WARNINGS QUE SE ESTABA CONTATENANDO */
    } else{
        parrafo.innerHTML = "ENVIADO"
    }

})