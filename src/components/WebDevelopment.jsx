import React, { Component } from "react";

class WebDevelopment extends Component {


    handleClick = (e) => {
        let langName = e.target.innerText;
        var i;
        var x = document.getElementsByClassName("language");
        // console.log(x + "Click")
        for (i = 0; i < x.length; i++) {
            console.log(x[i])
          x[i].style.display = "none";  
        }
        document.getElementById(langName).style.display = "block";  
    }
    render() {
        return (
            <div>
                <div className="web">
                    <div className="container">
                        <h1 className="h1-websiteDeveloment mb-0 pt-5 pb-4">Web and Mobile Development</h1>
                        <p className="mb-0 pb-3">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci, accusantium reprehenderit at beatae et quidem quisquam libero accusamus. Maxime facilis inventore recusandae, eum labore a quia nihil, ullam enim adipisci, porro accusamus similique tempore voluptate tenetur culpa fugiat numquam in eveniet ratione nam. Reiciendis, nisi alias nihil debitis amet dolorum corporis quis vero, accusantium atque laboriosam quo quasi tempora quae quisquam tempore quas id perspiciatis consequatur repellat, fuga et. Eligendi temporibus vitae porro nam necessitatibus error dolorum quaerat, perspiciatis minus impedit non quibusdam cum voluptatem nemo obcaecati laboriosam et repellendus aut provident inventore numquam ipsa enim sit! Dolor officia voluptas, ratione eaque nobis alias molestias perferendis officiis exercitationem totam quas aperiam commodi voluptatum saepe quos dolore magnam distinctio at ad amet magni temporibus accusantium eligendi? Fugit, tempore est nostrum ab vel sunt asperiores. Illum ab eum fugiat repellat nostrum incidunt voluptate aspernatur rerum, laborum facilis eligendi dolore unde odit sit?
                        </p>
                        <h2 className="h2-Languages mb-0 pb-4">Languages</h2>
                        <div className="container">
                            <ul className="ul-languages mb-0 pb-3">
                                <li className="btn btn-info btn-sm p-3 li-btn" onClick={this.handleClick} >HTML</li>
                                <li className="btn btn-info btn-sm p-3 li-btn" onClick={this.handleClick} >CSS</li>
                                <li className="btn btn-info btn-sm p-3 li-btn" onClick={this.handleClick} >Javascript</li>
                                <li className="btn btn-info btn-sm p-3 li-btn" onClick={this.handleClick} >React</li>
                                <li className="btn btn-info btn-sm p-3 li-btn" onClick={this.handleClick} >Node</li>
                            </ul>
                            <div id="HTML" className="language">
                                <h3>HTML</h3>
                                <p className="mb-0 pb-3">
                                    Html Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique officiis ratione pariatur enim provident atque, quaerat dignissimos et est adipisci. Debitis iusto fuga earum? Velit officiis corrupti debitis amet expedita consequatur, aliquam animi eaque odit quas tempora aliquid laborum ad sunt sequi aut? Obcaecati quae facere quaerat tempore doloremque. Repellendus.
                                </p>
                            </div>
                            <div id="CSS" className="language">
                                <h3>CSS</h3>
                                <p className="mb-0 pb-3">
                                    Css Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique officiis ratione pariatur enim provident atque, quaerat dignissimos et est adipisci. Debitis iusto fuga earum? Velit officiis corrupti debitis amet expedita consequatur, aliquam animi eaque odit quas tempora aliquid laborum ad sunt sequi aut? Obcaecati quae facere quaerat tempore doloremque. Repellendus.
                                </p>
                            </div>
                            <div id="Javascript" className="language">
                                <h3>Javascript</h3>
                                <p className="mb-0 pb-3">
                                Javascript Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique officiis ratione pariatur enim provident atque, quaerat dignissimos et est adipisci. Debitis iusto fuga earum? Velit officiis corrupti debitis amet expedita consequatur, aliquam animi eaque odit quas tempora aliquid laborum ad sunt sequi aut? Obcaecati quae facere quaerat tempore doloremque. Repellendus.
                                </p>
                            </div>
                            <div id="React" className="language">
                                <h3>React</h3>
                                <p className="mb-0 pb-3">
                                React Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique officiis ratione pariatur enim provident atque, quaerat dignissimos et est adipisci. Debitis iusto fuga earum? Velit officiis corrupti debitis amet expedita consequatur, aliquam animi eaque odit quas tempora aliquid laborum ad sunt sequi aut? Obcaecati quae facere quaerat tempore doloremque. Repellendus.
                                </p>
                            </div>
                            <div id="Node" className="language">
                                <h3>Node.js</h3>
                                <p className="mb-0 pb-3">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique officiis ratione pariatur enim provident atque, quaerat dignissimos et est adipisci. Debitis iusto fuga earum? Velit officiis corrupti debitis amet expedita consequatur, aliquam animi eaque odit quas tempora aliquid laborum ad sunt sequi aut? Obcaecati quae facere quaerat tempore doloremque. Repellendus.
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default WebDevelopment;