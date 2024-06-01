import { useContext } from "react";
import { global } from "./Context";

export default function Loto() {

    // let poz = 0;
    // let texto = document.querySelector(".span");
    // console.log(texto);
  
    // let position = () => {
    //     texto.style.left = poz + "px";
    // }
  
    let movement = (e) => { 
        // alert("Congratilations")
        // switch(e.key) {
        //     case "Pleft":
        //         poz += 10
        //         break;
        //     case "Pright":
        //         poz -= 10
        //         break;
        //     default:
        //     break;
        // }
        // position();
    }
  
    document.addEventListener("keydown",movement)

    return(
        <>
        <div className="span">&#9742; 
        <a href="#">+38(093)502-47-99</a>
        </div>
        </>
    );
}