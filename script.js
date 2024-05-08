//-- Variabili --\\
let form = document.forms.iscrizione;

//-- Div errore --\\
let div = document.getElementById("errore");

//-- Funzione check form --\\
function check() {

    //-- Dati anagrafici --\\
    let nome = form.nome.value;
    let cognome = form.cognome.value;

    //-- Dati web --\\
    let password = form.password.value;

    //-- Check nome --\\
    if(nome.charAt(0)!==nome.charAt(0).toUpperCase()){
        div.innerHTML = "Errore: il nome deve iniziare con la lettera maiuscola";
        div.style.visibility = "visible";
        return false;
    }else{
        //-- Check cognome --\\
        if(cognome.charAt(0)!==cognome.charAt(0).toUpperCase()){
            div.innerHTML = "Errore: il cognome deve iniziare con la lettera maiuscola";
            div.style.visibility = "visible";
            return false;
        }else{
            //-- Check lunghezza password --\\
            if(password.length<8){
                div.innerHTML = "Errore: la password deve essere lunga almeno 8 caratteri";
                div.style.visibility = "visible";
                return false;
            }else{
                return true;
            }
        }
    }
}

//-- Funzione reset form --\\
function conferma() {
    return confirm("Vuoi resettare tutti i campi?");
}