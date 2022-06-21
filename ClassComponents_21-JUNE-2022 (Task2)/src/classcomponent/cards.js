import React from "react";
import Un from "./images/un.jpg"

class Card extends React.Component {


    render() {
        return (
            <div class="card-group">
                <div class="card">
                    <img src={Un} className="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <button type="button" class="btn btn-primary">Click here</button>
                        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                    </div>

                </div>

                <div class="card">
                    <img src={Un} className="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <button type="button" class="btn btn-primary">Click here</button>
                        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                    </div>

                </div>
            
                <div class="card">
                    <img src={Un} className="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <button type="button" class="btn btn-primary">Click here</button>
                        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                    </div>

                </div>

                <div class="card">
                    <img src={Un} className="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <button type="button" class="btn btn-primary">Click here</button>
                        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                    </div>

                </div>
            </div>

        );
    }
}

export default Card;