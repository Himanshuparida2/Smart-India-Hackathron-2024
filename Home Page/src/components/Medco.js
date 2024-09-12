import React from 'react'
import { Link } from 'react-router-dom'

function Medco() {
  return (
    <div>
      <div>
            <div className="medco-bg">
                <div className="medco-text">
                    Welcome to Health Harmony
                </div>
                <div className="medco-button">
                    <div>
                        <Link to="/manage-inventory">
                            <button className="medco-btn M-i" type="button">Manage Inventory</button>
                        </Link>
                    </div>
                    <div >
                        <button className="medco-btn Hos" type="button">
                            Hospital
                        </button>
                    </div>        
                </div>
            </div>
        </div>
    </div>
  )
}

export default Medco
