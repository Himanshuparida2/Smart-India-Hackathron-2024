import React from 'react'

function Order() {
  return (
    <div id='order-body'>
      <div className="order-box">
        <h2>What do you want ?</h2>
        <form method="post">
            <div className="input_group">
                <div className="input_box">
                    <p>Medicine Name:
                        <input type="text" className="med-name" name="Medicine Name" placeholder="Enter Medicine Name"/>
                    </p>
                </div>
                <div className="input_box">
                <p>Quantity:
                    <input type="number" className="Quantity" name="Quantity" placeholder="Quantity" />
                </p>
                </div>
                <div className="input_box">
                <p>Your business address:
                    <input type="text" className="business-add" name="Business address" placeholder="Business address" />
                </p>
            </div>
            </div>
        </form>
        <button className="order-btn Order" type="button">Place Order</button>
    </div>
    </div>
  )
}

export default Order
