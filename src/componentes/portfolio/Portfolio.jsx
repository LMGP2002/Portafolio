import React from 'react'
import './portfolio.css';
import P1 from '../../assets/p1.jpg';
import P2 from '../../assets/p2.jpg';
import P3 from '../../assets/p3.jpeg';


const Portfolio = () => {
    return (
        <section className="portafolio section" id="portfolio">
            <h2 className="section__title">Portafolio</h2>
            <span className='section__subtitle'>Mis proyectos</span>
            <div id="card__area">
                <div className="wrapper">
                    <div className="box__area">
                        <div className="box">
                            <img alt="" src={P1} />
                            <div className="overlay">
                                <div className='technologies__container'>
                                    <p className='project__technologies'><i className='bx bxl-html5'></i><span>HTML</span></p>
                                    <p className='project__technologies'><i className='bx bxl-css3' ></i><span>CSS</span></p>
                                    <p className='project__technologies'><i className='bx bxl-php' ></i></p>
                                    <p className='project__technologies'><i className='bx bxs-data'></i><span>MySQL</span></p>
                                    <p className='project__technologies'><i className='bx bxs-file-js'></i><span>JS</span></p>

                                </div>

                                <h3>HardWork</h3>
                                <p>¿Quieres adquirir un plan deportivo? <br /> ¡No esperes más!"</p>

                                <div className='project__icon'>
                                    <a target="_blank" href="#"><i className='bx bx-play-circle'></i><span>Demo</span></a>
                                    <a target="_blank" href="#"><i className='bx bxl-github'></i></a>
                                </div>


                            </div>
                        </div>
                        <div className="box">
                            <img alt="" src={P2} />
                            <div className="overlay">
                                <div className='technologies__container'>
                                    <p className='project__technologies'><i className='bx bxl-html5'></i><span>HTML</span></p>
                                    <p className='project__technologies'><i className='bx bxl-css3' ></i><span>CSS</span></p>
                                    <p className='project__technologies'><i className='bx bxs-file-js'></i><span>JS</span></p>
                                </div>
                                <h3>VitalSport</h3>
                                <p>Sitio web responsive con principios de usabilidad y accesibilidad web para que su navegación sea más inclusiva.</p>
                                <div className='project__icon'>
                                    <a target="_blank" href="#"><i className='bx bx-play-circle'></i><span>Demo</span></a>
                                    <a target="_blank" href="https://github.com/LMGP2002/ProyectoUsabilidad"><i className='bx bxl-github'></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="box">
                            <img alt="" src={P3} />
                            <div className="overlay">
                                <div className='technologies__container'>
                                    <p className='project__technologies'><i className='bx bxl-html5'></i><span>HTML</span></p>
                                    <p className='project__technologies'><i className='bx bxl-css3' ></i><span>CSS</span></p>
                                    <p className='project__technologies'><i className='bx bxl-php' ></i></p>
                                    <p className='project__technologies'><i className='bx bxs-data'></i><span>MySQL</span></p>
                                    <p className='project__technologies'><i className='bx bxs-file-js'></i><span>JS</span></p>
                                </div>
                                <h3>Inventario</h3>
                                <p>Sistema de inventario diseñado para la empresa Cafe Arte Villa Monguí, ubicada en Duitama, Boyacá.</p>
                                <div className='project__icon'>
                                    <a target='_blank' href="https://github.com/LMGP2002/ProyectoSistemaInventario"><i className='bx bxl-github'></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Portfolio