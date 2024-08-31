import React from 'react'
import { Link } from 'react-router-dom'

function ManageInventory() {
  return (
    <div id='manage-body'>
      <div className="contain-inventory">
        <div>
            <button className="manage-btn Stock" type="button">Track Medicine Stock level</button>
        </div>
        <div>
            <button className="manage-btn Upd" type="button">Updated quantity</button>
        </div>
        <div>
            <button className="manage-btn Expiry" type="button">Monitor Expiry date</button>
        </div>
        <div>
            <Link to="/order">
                <button className="manage-btn manage-order" type="button">Order</button>
            </Link>
        </div>
    </div>
    </div>
  )
}

export default ManageInventory
