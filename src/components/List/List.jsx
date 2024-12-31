import React from 'react'
import "./List.css"
import { Link } from 'react-router-dom'
import {
  rajgeer,
  mechanic,
  mechanic_img,
  plumber,
  carpenter,
  constructor,
  electrician,
  technician,
  painter,
  tiler,
  cleaner,
  gardener,
  pest_controller,
  movers_packers,
  driver,
  decorator,
  cobler,
} from '../../assets'
const List = () => {
  return (
    <div>
      <div>
        <h1 className='section-heading'>Popular Categories</h1>
      </div>
      <div className="list">
        <div className="list-main-item">
          <Link to="/workers">
            <img src={constructor} alt="" />
            <h3>Rajgeer</h3>
          </Link>
        </div>
        <div className="list-main-item">
          <img src={plumber} alt="" />
          <h3>Plumber</h3>
        </div>
        <div className="list-main-item">
          <img src={carpenter} alt="" />
          <h3>Carpenter</h3>
        </div>
        <div className="list-main-item">
          <img src={electrician} alt="" />
          <h3>Electrician</h3>
        </div>
        <div className="list-main-item">
          <img src={technician} alt="" />
          <h3>Appliance Repair</h3>
        </div>
        <div className="list-main-item">
          <img src={mechanic} alt="" />
          <h3>Mechanic</h3>
        </div>
        <div className="list-main-item">
          <img src={painter} alt="" />
          <h3>Painter</h3>
        </div>
        <div className="list-main-item">
          <img src={tiler} alt="" />
          <h3>Flooring Specialist</h3>
        </div>
        <div className="list-main-item">
          <img src={cleaner} alt="" />
          <h3>Cleaning</h3>
        </div>
        <div className="list-main-item">
          <img src={gardener} alt="" />
          <h3>Gardner</h3>
        </div>
        <div className="list-main-item">
          <img src={pest_controller} alt="" />
          <h3>Pest Controller</h3>
        </div>
        <div className="list-main-item">
          <img src={movers_packers} alt="" />
          <h3>Movers & Packers</h3>
        </div>
        <div className="list-main-item">
          <img src={driver} alt="" />
          <h3>Driver</h3>
        </div>
        <div className="list-main-item">
          <img src={decorator} alt="" />
          <h3>Decorator</h3>
        </div>
        <div className="list-main-item">
          <img src={cobler} alt="" />
          <h3>Cobler</h3>
        </div>
      </div>
    </div>
  )
}

export default List
