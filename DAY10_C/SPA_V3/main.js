var obj = document.getElementById("data");
function change(ch){
             switch(ch){
            case "home":
                obj.innerHTML=`  <h2>HOME</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus voluptate fugiat inventore vero quam laboriosam at rerum aperiam ex ut. Cupiditate, doloremque recusandae! Iure quis sit doloremque libero numquam laborum.</p>`;
                break;
            case "about":
                obj.innerHTML=` <h2>ABOUT</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus voluptate fugiat inventore vero quam laboriosam at rerum aperiam ex ut. Cupiditate, doloremque recusandae! Iure quis sit doloremque libero numquam laborum.</p>`;
                break;
            case "contact":
                obj.innerHTML=` <h2>CONTACT</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus voluptate fugiat inventore vero quam laboriosam at rerum aperiam ex ut. Cupiditate, doloremque recusandae! Iure quis sit doloremque libero numquam laborum.</p>`;
                break;
            case "danger":
                obj.innerHTML=` <h2>DANGER</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus voluptate fugiat inventore vero quam laboriosam at rerum aperiam ex ut. Cupiditate, doloremque recusandae! Iure quis sit doloremque libero numquam laborum.</p>`;
                break;
           default:
                break;
        }
        }