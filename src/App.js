import './App.css';
import { FaArrowLeft } from 'react-icons/fa';
import { useEffect, useState } from 'react';

import Snowfall from 'react-snowfall';
function App() {
    const [card, setCard] = useState('');

    const handleClick = (event) => {
        event.stopPropagation();
        event.preventDefault();
        const item = event.target.closest('.item');
        setCard(item.classList[1]);
    };

    const handleCloseCard = (event) => {
        setCard('');
    };

    useEffect(() => {
        console.log(card);
    }, [card]);

    return (
        <div className="App">
            {/* Snow Effect */}
            <Snowfall style={{ zIndex: 2 }} />
            {/* Card */}

            <div className="card-container" style={{ display: card != '' ? 'flex' : 'none' }}>
                <div className="card candy" style={{ display: card === 'candy' ? 'flex' : 'none' }}>
                    <FaArrowLeft
                        onClick={(e) => handleCloseCard(e)}
                        style={{ fontSize: '40px', position: 'absolute', right: '20px', top: '10px' }}
                    />

                    <span className="card-header">Lorem Ipsum</span>
                    <span className="card-detail">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                        the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
                        of type and scrambled it to make a type specimen book.
                    </span>
                </div>

                <div className="card sock" style={{ display: card === 'sock' ? 'flex' : 'none' }}>
                    <FaArrowLeft
                        onClick={(e) => handleCloseCard(e)}
                        style={{ fontSize: '40px', position: 'absolute', right: '20px', top: '10px' }}
                    />

                    <span className="card-header">Lorem Ipsum</span>
                    <span className="card-detail">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                        the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
                        of type and scrambled it to make a type specimen book.
                    </span>
                </div>

                <div className="card leaves" style={{ display: card === 'leaves' ? 'flex' : 'none' }}>
                    <FaArrowLeft
                        onClick={(e) => handleCloseCard(e)}
                        style={{ fontSize: '40px', position: 'absolute', right: '20px', top: '10px' }}
                    />

                    <span className="card-header">Lorem Ipsum</span>
                    <span className="card-detail">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                        the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
                        of type and scrambled it to make a type specimen book.
                    </span>
                </div>

                <div className="card milk" style={{ display: card === 'milk' ? 'flex' : 'none' }}>
                    <FaArrowLeft
                        onClick={(e) => handleCloseCard(e)}
                        style={{ fontSize: '40px', position: 'absolute', right: '20px', top: '10px' }}
                    />

                    <span className="card-header">Lorem Ipsum</span>
                    <span className="card-detail">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                        the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
                        of type and scrambled it to make a type specimen book.
                    </span>
                </div>
            </div>

            <div className="item candy" onClick={(e) => handleClick(e)}>
                <svg
                    version="1.1"
                    id="sock_copy"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    x="0px"
                    y="0px"
                    viewBox="0 0 100 100"
                    enable-background="new 0 0 100 100"
                    xmlSpace="preserve"
                >
                    <g>
                        <path
                            fill="#E0E0E0"
                            d="M63.7,97.7c-3.7,0-6.8-3-6.8-6.8V27.1c0-0.3,0-0.6,0.1-0.9c0,0,0,0,0,0c0,0,0.2-2.8-1.2-4.3
              c-1.3-1.4-3.9-2.4-5.8-2.4c-2.8,0-4.8,1.3-6,2.5c-1.6,1.8-1.5,4.9-1.5,4.9c0.4,3.7-2.4,7.1-6.1,7.4c-3.7,0.4-7.1-2.4-7.4-6.1
              c-0.1-0.9-0.7-9.1,4.9-15.4c2.6-2.9,7.5-6.3,16-6.3c8.7,0,13.5,3.5,16.1,6.4c4.8,5.5,4.6,12.4,4.5,14.5v63.5
              C70.5,94.7,67.4,97.7,63.7,97.7z"
                        ></path>
                    </g>
                    <g>
                        <path
                            fill="#E9646A"
                            d="M29,28.2c0.1,1.1,0.5,2.1,1.1,3L54.6,7c-1.4-0.2-3-0.4-4.7-0.4c-2.5,0-4.6,0.3-6.5,0.8L29.6,21
              C28.7,24.7,28.9,27.7,29,28.2z"
                        ></path>
                        <polygon fill="#E9646A" points="56.9,75.9 70.5,62.5 70.5,51.9 56.9,65.3 	"></polygon>
                        <path fill="#E9646A" d="M56.9,90.9c0,2.4,1.2,4.5,3.1,5.7l10.5-10.4V75.6L56.9,89.1V90.9z"></path>
                        <polygon fill="#E9646A" points="56.9,52.2 70.5,38.7 70.5,28.1 56.9,41.5 	"></polygon>
                        <path
                            fill="#E9646A"
                            d="M55.8,21.9c1.4,1.6,1.2,4.3,1.2,4.3c0,0,0,0,0,0c0,0.3-0.1,0.6-0.1,0.9v1.3l11.7-11.6
              c-0.6-1.3-1.5-2.6-2.6-3.9c-0.6-0.7-1.3-1.4-2.2-2.1l-9.9,9.8C54.7,21,55.3,21.3,55.8,21.9z"
                        ></path>
                    </g>
                </svg>
                <span>Ngọt</span>
            </div>

            <div className="item sock" onClick={(e) => handleClick(e)}>
                <svg
                    version="1.1"
                    id="Layer_1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    x="0px"
                    y="0px"
                    viewBox="0 0 100 100"
                    enable-background="new 0 0 100 100"
                    xmlSpace="preserve"
                >
                    <rect display="none" fill="#468967" width="100" height="100"></rect>
                    <path
                        fill="#E9656B"
                        d="M41.1,16.1h44v58.6c0,0,3,22.9-22.9,22.9s-24.7,0-24.7,0s-23.1,1.1-23.1-16.2s17.9-16.7,21.8-16.7
          s5.2-1.7,5.2-7.8S41.1,16.1,41.1,16.1z"
                    ></path>
                    <path
                        fill="#DCDBDB"
                        d="M40.2,7c0,0-6.8,0.3-6.8,6.8s7.7,6.5,7.7,6.5h44c0,0,5.5-0.6,5.5-6.7S83.2,7,83.2,7H40.2z"
                    ></path>
                    <path
                        fill="#C95964"
                        d="M85.1,78.9c0,0-17.2-0.3-17.2,18.2l0,0C81.7,94.9,84.6,84.8,85.1,78.9z"
                    ></path>
                    <path
                        fill="#DCDBDB"
                        d="M63.7,33.9h-0.6L62.4,33l-0.7,0.8h-0.6l1.3-1.7L63.7,33.9z M62.4,34.7l-1.3,1.7h0.6l0.7-0.8l0.7,0.8h0.6
          L62.4,34.7z M62.4,37.5l-1.3,1.7h0.6l0.7-0.8l0.7,0.8h0.6L62.4,37.5z M62.4,40.4l-1.3,1.7h0.6l0.7-0.8l0.7,0.8h0.6L62.4,40.4z
           M62.4,43.5l-1.3,1.7h0.6l0.7-0.8l0.7,0.8h0.6L62.4,43.5z M62.4,46l-1.3,1.7h0.6l0.7-0.8l0.7,0.8h0.6L62.4,46z M62.4,48.8l-1.3,1.7
          h0.6l0.7-0.8l0.7,0.8h0.6L62.4,48.8z M62.4,51.7l-1.3,1.7h0.6l0.7-0.8l0.7,0.8h0.6L62.4,51.7z M66.6,51.7l-1.3,1.7h0.6l0.7-0.8
          l0.7,0.8h0.6L66.6,51.7z M71.4,51.7l-1.3,1.7h0.6l0.7-0.8l0.7,0.8h0.6L71.4,51.7z M76.5,51.7l-1.3,1.7h0.6l0.7-0.8l0.7,0.8h0.6
          L76.5,51.7z M70.2,46.8l-1.3,1.7h0.6l0.7-0.8l0.7,0.8h0.6L70.2,46.8z M74,47.1l-1.3,1.7h0.6L74,48l0.7,0.8h0.6L74,47.1z M70.7,42.6
          l-1.3,1.7H70l0.7-0.8l0.7,0.8H72L70.7,42.6z M66.6,42.6l-1.3,1.7h0.6l0.7-0.8l0.7,0.8h0.6L66.6,42.6z M66.6,38.3L65.3,40h0.6
          l0.7-0.8l0.7,0.8h0.6L66.6,38.3z M57.4,53.3H58l0.7-0.8l0.7,0.8H60l-1.3-1.7L57.4,53.3z M52.6,53.3h0.6l0.7-0.8l0.7,0.8h0.6
          l-1.3-1.7L52.6,53.3z M47.5,53.3h0.6l0.7-0.8l0.7,0.8h0.6l-1.3-1.7L47.5,53.3z M53.9,48.5h0.6l0.7-0.8l0.7,0.8h0.6l-1.3-1.7
          L53.9,48.5z M50,48.8h0.6l0.7-0.8l0.7,0.8h0.6l-1.3-1.7L50,48.8z M53.3,44.3h0.6l0.7-0.8l0.7,0.8h0.6l-1.3-1.7L53.3,44.3z
           M57.4,44.3H58l0.7-0.8l0.7,0.8H60l-1.3-1.7L57.4,44.3z M57.4,40H58l0.7-0.8l0.7,0.8H60l-1.3-1.7L57.4,40z M61.9,55.1l-1.3,1.7h0.6
          l0.7-0.8l0.7,0.8h0.6L61.9,55.1z M61.9,58l-1.3,1.7h0.6l0.7-0.8l0.7,0.8h0.6L61.9,58z M63.2,55.1l-1.3,1.7h0.6l0.7-0.8l0.7,0.8h0.6
          L63.2,55.1z M63.2,58l-1.3,1.7h0.6l0.7-0.8l0.7,0.8h0.6L63.2,58z"
                    ></path>
                </svg>
                <span>Ấm</span>
            </div>

            <div className="item leaves" onClick={(e) => handleClick(e)}>
                <svg
                    version="1.1"
                    id="leaves"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    x="0px"
                    y="0px"
                    viewBox="0 0 100 100"
                    enable-background="new 0 0 100 100"
                    xmlSpace="preserve"
                >
                    <path
                        fill="#468967"
                        d="M66,63.5c-0.1,0-0.9,0.1-2.1,0.5C52.2,65.4,40.2,46.7,40,47.1c3.6,10.4-18.8,14.3-19.5,14
          c3.2,9.4-11.7,22.4-11.7,22.4s19.5,0.4,22.7,9.8c0.3-0.7,20.4-11.4,24-1c0.4,0.2-1.7-21.7,8.2-27.9C65.1,63.9,65.9,63.5,66,63.5
           M53.1,67.9C37,75.9,18.7,79.7,18.7,79.7C23.8,78,53.1,67.8,53.1,67.9z"
                    ></path>
                    <path
                        fill="#468967"
                        d="M63.2,66.6c0-0.1,0.2-0.9,0.3-2.2c3.2-11.3,25.1-15.2,24.8-15.5c-11-0.7-6-22.9-5.4-23.4
          C72.9,24.9,66.6,6.2,66.6,6.2s-7.8,17.9-17.7,17.3c0.5,0.5,2.7,23.2-8.3,22.5c-0.3,0.3,20.7,6.8,22.7,18.3
          C63.2,65.7,63.2,66.5,63.2,66.6 M64.1,53c-1.3-18,2.2-36.3,2.2-36.3C65.9,22.1,64.1,53,64.1,53z"
                    ></path>
                    <circle fill="#C95964" cx="66.1" cy="62.3" r="4.5"></circle>
                    <ellipse
                        transform="matrix(0.9869 -0.1616 0.1616 0.9869 -9.2629 11.3133)"
                        fill="#E9656B"
                        cx="64.9"
                        cy="62.6"
                        rx="1.5"
                        ry="2.9"
                    ></ellipse>
                    <circle fill="#C95964" cx="60.4" cy="67" r="4.5"></circle>
                    <ellipse
                        transform="matrix(0.9869 -0.1616 0.1616 0.9869 -10.1498 10.3594)"
                        fill="#E9656B"
                        cx="58.6"
                        cy="67.6"
                        rx="1.5"
                        ry="2.9"
                    ></ellipse>
                    <circle fill="#C95964" cx="59.9" cy="60.7" r="4.5"></circle>
                    <ellipse
                        transform="matrix(0.9869 -0.1616 0.1616 0.9869 -9.1538 10.1793)"
                        fill="#E9656B"
                        cx="58"
                        cy="61.4"
                        rx="1.5"
                        ry="2.9"
                    ></ellipse>
                </svg>
                <span>May</span>
            </div>
            <div className="item milk" onClick={(e) => handleClick(e)}>
                <svg
                    version="1.1"
                    id="leaves_copy"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    x="0px"
                    y="0px"
                    viewBox="0 0 100 100"
                    enable-background="new 0 0 100 100"
                    xmlSpace="preserve"
                >
                    <g>
                        <path
                            fill="#DCDBDB"
                            d="M48.3,4.1c-18.5,0-33.5,2.8-33.5,6.2l8.7,83.5c0,2.5,11.1,4.6,24.8,4.6s24.8-2.1,24.8-4.6l8.7-83.5
              C81.8,6.9,66.8,4.1,48.3,4.1z M71.9,91.9c0,2.4-10.6,4.4-23.6,4.4s-23.6-2-23.6-4.4l-8.3-79.7c0-3.3,14.3-5.9,31.9-5.9
              s31.9,2.7,31.9,5.9L71.9,91.9z"
                        ></path>
                        <path
                            fill="#DCDBDB"
                            d="M48.3,32.3c-15.3,0-27.7,2.3-27.7,5.1l5.8,53c0,2.2,9.8,4.1,21.9,4.1c11.8,0,21.3-1.7,21.9-3.9l0.1,0
              L76,37.5c0,0,0-0.1,0-0.1C76,34.6,63.6,32.3,48.3,32.3z"
                        ></path>
                        <path
                            fill="#DCDBDB"
                            d="M28.3,32.3c0-0.1-2.5-22.4-2.5-22.4s-2.2,0.1-3.4,0.8L25.4,33C25.4,33,26.8,32.4,28.3,32.3z"
                        ></path>
                    </g>
                    <g>
                        <path
                            fill="#401819"
                            d="M90.4,96.3c2.9-2.2,1.8-9.5-2.6-16.5c-4.4-7.1-10.4-11.3-13.6-9.7l0,0l-1.4,0.9l0,0
              c-3,2.1-1.9,9.5,2.5,16.6c4.4,7.2,10.5,11.4,13.8,9.7l0,0L90.4,96.3L90.4,96.3z"
                        ></path>

                        <ellipse
                            transform="matrix(0.5259 0.8505 -0.8505 0.5259 109.6753 -31.7411)"
                            fill="#DCDBDB"
                            cx="83.3"
                            cy="82.5"
                            rx="15.5"
                            ry="6.8"
                        ></ellipse>
                        <path
                            fill="#401819"
                            d="M94.4,93.8c2.9-2.2,1.8-9.5-2.6-16.5c-4.4-7.1-10.4-11.3-13.6-9.7l0,0l-1.4,0.9l0,0
              c-3,2.1-1.9,9.5,2.5,16.6c4.4,7.2,10.5,11.4,13.8,9.7l0,0L94.4,93.8L94.4,93.8z"
                        ></path>
                    </g>
                </svg>
                <span>Đủ</span>
            </div>
        </div>
    );
}

export default App;
