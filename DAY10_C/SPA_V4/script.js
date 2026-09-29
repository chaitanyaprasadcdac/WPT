var obj = document.getElementById("data");
function change(ch){
             switch(ch){
            case "home":
                obj.innerHTML= home();
                break;
            case "about":
                obj.innerHTML= about();
                break;
            case "contact":
                obj.innerHTML= contact();
                break;
            case "danger":
                obj.innerHTML= danger();
                break;
           default:
                break;
        }
        }
