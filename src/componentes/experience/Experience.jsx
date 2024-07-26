import React, { useState } from 'react'
import './experience.css'

const Experience = () => {
  const [toggleState,setToggleState]=useState(1);
  const toggleTab=(index)=>{
    setToggleState(index)
  }
  return (
    <section className="experience section" id="experience">
      <h2 className="section__title">Experience</h2>
      <span className='section__subtitle'>My personel journey</span>

      <div className="experience__container container">
        <div className="experience__tabs">
          <div 
          className={
            toggleState === 1 
            ? "experience__button experience__active button--flex" 
            : "experience__button button--flex"}
            onClick={()=>toggleTab(1)}
            >
            <i className="uil uil-graduation-cap experience__icon"></i> Education
          </div>
   
          <div className={
            toggleState === 2 
            ? "experience__button experience__active button--flex" : "experience__button button--flex"}
            onClick={()=>toggleTab(2)}
            >
            <i className="uil uil-briefcase-alt experience__icon"></i> Experience
          </div>
        </div>

        <div className="experience__sections">
          <div className={toggleState === 1 ? "experience__content experience__content-active"
            : "experience__content"}>
            <div className="experience__data">
              <div>
                <h3 className="experience__title">Web Design</h3>
                <span className="experience__subtitle">Spain - Institute</span>
                <div className="experience__calender">
                  <i className="uil uil-calendar-alt"></i> 2021 - Present
                </div>
              </div>

              <div>
                <span className="experience__rounder"></span>
                <span className="experience__line"></span>
              </div>
            </div>

            <div className="experience__data">
              <div></div>
              <div>
                <span className="experience__rounder"></span>
                <span className="experience__line"></span>
              </div>
              <div>
                <h3 className="experience__title">Art Director</h3>
                <span className="experience__subtitle">Spain - Institute</span>
                <div className="experience__calender">
                  <i className="uil uil-calendar-alt"></i> 2020 - 2021
                </div>
              </div>

            </div>

            <div className="experience__data">
              <div>
                <h3 className="experience__title">Web Development</h3>
                <span className="experience__subtitle">Spain - Institute</span>
                <div className="experience__calender">
                  <i className="uil uil-calendar-alt"></i> 2015 - 2016
                </div>
              </div>

              <div>
                <span className="experience__rounder"></span>
                <span className="experience__line"></span>
              </div>
            </div>

            <div className="experience__data">
              <div></div>
              <div>
                <span className="experience__rounder"></span>
                <span className="experience__line"></span>
              </div>
              <div>
                <h3 className="experience__title">UX Expert</h3>
                <span className="experience__subtitle">Spain - Institute</span>
                <div className="experience__calender">
                  <i className="uil uil-calendar-alt"></i> 2021 - 2018
                </div>
              </div>

            </div>
          </div>


          <div className={toggleState === 2 ? "experience__content experience__content-active"
            : "experience__content"}>
            <div className="experience__data">
              <div>
                <h3 className="experience__title">Product Designer</h3>
                <span className="experience__subtitle">Microsoft - Spain</span>
                <div className="experience__calender">
                  <i className="uil uil-calendar-alt"></i> 2021 - Present
                </div>
              </div>

              <div>
                <span className="experience__rounder"></span>
                <span className="experience__line"></span>
              </div>
            </div>

            <div className="experience__data">
              <div></div>
              <div>
                <span className="experience__rounder"></span>
                <span className="experience__line"></span>
              </div>
              <div>
                <h3 className="experience__title">UX Designer</h3>
                <span className="experience__subtitle">Apple - Spain</span>
                <div className="experience__calender">
                  <i className="uil uil-calendar-alt"></i> 2020 - 2021
                </div>
              </div>

            </div>

            <div className="experience__data">
              <div>
                <h3 className="experience__title">Web Designer</h3>
                <span className="experience__subtitle">Figma - Spain</span>
                <div className="experience__calender">
                  <i className="uil uil-calendar-alt"></i> 2015 - 2016
                </div>
              </div>

              <div>
                <span className="experience__rounder"></span>
                <span className="experience__line"></span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience