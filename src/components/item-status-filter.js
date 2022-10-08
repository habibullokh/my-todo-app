import React from "react";

import './item-status-filter.css'

const ItemStatusFilter = () => {
    return(
        <div className="btn-group">
            <button className="btn btn-info" type="button">All</button>
            <button className="btn btn-outline-secondry" type="button">Active</button>
            <button className="btn btn-outline-secondry" type="button">Done</button>
        </div>
    )
}

export default ItemStatusFilter