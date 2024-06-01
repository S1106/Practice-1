import { useContext } from "react";
import { global } from "./Context";
import "./style.css";

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
                <div className="span">
                <form action="">
                    <h3>Fill the form</h3>
                    <label for="name"></label>
                    <input type="text" id="name"></input>
                    <label for="email"></label>
                    <input type="email" id="email"></input>
                    <label>Press for privacy registration</label>
                    <input type="checkbox"></input>
                    
                    <input value="Log registration" type="submit"/>
                </form>
                
                &#9742; <a href="#">+38(093)502-47-99</a>
                </div>

                
        </>
    );
}