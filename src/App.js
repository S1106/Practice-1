import React from "react";
//import { useState } from "react";
import Count from "./Count";
import Button from "./Button";
import Description from "./Description";
import Loto from "./Loto";
import Ssylka from "./Ssylka";
import Menu from "./Menu";
import "./style.css";

import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

export default function App() {

  return (
    // <div className="wrapper">
    //     <Button />
    //     <Count />
    //     <Description />
    //     <Loto />
    // </div>
<>
          <Router>
              <div className = "wrapper">
                <div className = "navick">
                    <span>Now {Math.floor(Date.now() / (60*60*1000)%24) + 3} pm</span>
                    <span className="status"></span>
                            <form id="dateForm" onSubmit={(e) => {
                                e.preventDefault();
                                const timerElement = document.getElementById('timer');
                                const countdownDateInput = document.getElementById('countdownDate');
                                const countdownDate = new Date(countdownDateInput.value).getTime();
                                const timerInterval = setInterval(function() {
                                        const now = new Date().getTime();
                                        const distance = countdownDate - now;
                                        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
                                        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                                        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                                        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
                                        timerElement.innerHTML = `${days}д ${hours}ч ${minutes}м ${seconds}с`;
                                        if (distance < 0) {
                                          clearInterval(timerInterval);
                                          timerElement.innerHTML = 'Время истекло';
                                        }
                              }, 1000);
                            }}>
                            <label htmlFor="countdownDate">Введите дату:</label>
                            <input type="date" id="countdownDate" required/>
                            <button type="submit">Установить таймер</button>
                            </form>
                            <div id="timer"></div>
                    <iframe className="map" src=""></iframe>
                    <button className="place" onClick={() => {

                                const status = document.querySelector(".status");
                            
                                if(!navigator.geolocation) {
                                  status.textContent = "geolocation failed ((("
                                } else {
                                  navigator.geolocation.getCurrentPosition(success,error);
                                  status.textContent = "Download successfull"
                                }

                                const map = document.querySelector(".map");

                                function success(position) {
                                  const {longitude,latitude} = position.coords;
                                  map.src = `https://www.openstreetmap.org/export/embed.html?bbox=${longitude}%2C${latitude}&amp;layer=mapnik`;
                                }
                                
                                function error() {
                                  status.textContent = "i will find you soon";
                                }
                              
                    }}>Where am I</button>
                </div>
                   <Routes>
                        <Route path = '/' element={<Menu/>}/>
                        <Route path = '/button' element={<Button/>}/>
                        <Route path = '/count' element={<Count/>}/>
                        <Route path = '/description' element={<Description/>}/>
                        <Route path = '/loto' element={<Loto/>}/>
                    </Routes>
               </div>
         </Router>
     
</>
    );
 }