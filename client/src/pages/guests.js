import React from "react";

function guests() {
    return (
        <div className="container">
            <div className="list-group">
                <a href="#" className="list-group-item list-group-item-action active">
                    Cras justo odio
                </a>
                <a href="#" className="list-group-item list-group-item-action">Dapibus ac facilisis in</a>
                <a href="#" className="list-group-item list-group-item-action">Morbi leo risus</a>
                <a href="#" className="list-group-item list-group-item-action">Porta ac consectetur ac</a>
                <a href="#" className="list-group-item list-group-item-action disabled" tabindex="-1" aria-disabled="true">Vestibulum at eros</a>
            </div>
        </div>
    )
}

export default guests