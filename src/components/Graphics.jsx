import React, { Component } from "react";

class Graphics extends Component {

    state = {
        show: ""
    }
    handleClick = (e) => {
        let toolName = e.target.innerText;
        // console.log("Tahir")
        // console.log(name)
        var i;
        var x = document.getElementsByClassName("tool");
        console.log(x)
        for (i = 0; i < x.length; i++) {
        console.log(x[i])
        x[i].style.display = "none";
        }
        document.getElementById(toolName).style.display = "block";

        // console.log(this.state.show + "Before")
        // this.setState({ show: name })
        // console.log(this.state.show + "After")
    }
    render() {
        return (
            <div>
                <div data-id="blkjdklj scrop-id-data" className="graphics">
                    <div className="container">
                        <h1 className="h1-graphics mb-0 pt-5 pb-4">Graphis Designing</h1>
                        <p className="mb-0 pb-3">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci, accusantium reprehenderit at beatae et quidem quisquam libero accusamus. Maxime facilis inventore recusandae, eum labore a quia nihil, ullam enim adipisci, porro accusamus similique tempore voluptate tenetur culpa fugiat numquam in eveniet ratione nam. Reiciendis, nisi alias nihil debitis amet dolorum corporis quis vero, accusantium atque laboriosam quo quasi tempora quae quisquam tempore quas id perspiciatis consequatur repellat, fuga et. Eligendi temporibus vitae porro nam necessitatibus error dolorum quaerat, perspiciatis minus impedit non quibusdam cum voluptatem nemo obcaecati laboriosam et repellendus aut provident inventore numquam ipsa enim sit! Dolor officia voluptas, ratione eaque nobis alias molestias perferendis officiis exercitationem totam quas aperiam commodi voluptatum saepe quos dolore magnam distinctio at ad amet magni temporibus accusantium eligendi? Fugit, tempore est nostrum ab vel sunt asperiores. Illum ab eum fugiat repellat nostrum incidunt voluptate aspernatur rerum, laborum facilis eligendi dolore unde odit sit?
                        </p>
                        <h2 className="h2-Tools mb-0 pb-4">Tools</h2>
                        <div className="container">
                            <ul className="mb-0 pb-3">
                                <li className="btn btn-info btn-sm p-3 li-btn" name="psd" onClick={this.handleClick} >Adobe Photoshop</li>
                                <li className="btn btn-info btn-sm p-3 li-btn" name="ai" onClick={this.handleClick}  >Adobe Illustrator</li>
                                <li className="btn btn-info btn-sm p-3 li-btn" name="id" onClick={this.handleClick} >Adobe InDesign</li>
                                <li className="btn btn-info btn-sm p-3 li-btn" name="cdr" onClick={this.handleClick} >Corel Draw</li>
                            </ul>
                            <div id="Adobe Photoshop"
                                // className={this.state.show === "psd" ? "tool" : "display-none"}
                                className="tool"
                            >
                                <h3>Adobe Photoshop</h3>
                                <p className="mb-0 pb-3">
                                    Adobe Photoshop Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique officiis ratione pariatur enim provident atque, quaerat dignissimos et est adipisci. Debitis iusto fuga earum? Velit officiis corrupti debitis amet expedita consequatur, aliquam animi eaque odit quas tempora aliquid laborum ad sunt sequi aut? Obcaecati quae facere quaerat tempore doloremque. Repellendus.
                                </p>
                            </div>
                            <div id="Adobe Illustrator"
                                //  className={this.state.show === "ai" ? "tool" : "display-none"}
                                className="tool"
                            >
                                <h3>Adobe Illustrator</h3>
                                <p className="mb-0 pb-3">
                                    Adobe Illustrator Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique officiis ratione pariatur enim provident atque, quaerat dignissimos et est adipisci. Debitis iusto fuga earum? Velit officiis corrupti debitis amet expedita consequatur, aliquam animi eaque odit quas tempora aliquid laborum ad sunt sequi aut? Obcaecati quae facere quaerat tempore doloremque. Repellendus.
                                </p>
                            </div>
                            <div id="Adobe InDesign"
                                //  className={this.state.show === "id" ? "tool" : "display-none"}
                                className="tool"
                            >
                                <h3>Adobe InDesign</h3>
                                <p className="mb-0 pb-3">
                                    Adobe InDesign Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique officiis ratione pariatur enim provident atque, quaerat dignissimos et est adipisci. Debitis iusto fuga earum? Velit officiis corrupti debitis amet expedita consequatur, aliquam animi eaque odit quas tempora aliquid laborum ad sunt sequi aut? Obcaecati quae facere quaerat tempore doloremque. Repellendus.
                                </p>
                            </div>
                            <div id="Corel Draw"
                                //  className={this.state.show === "cdr" ? "tool" : "display-none"}
                                className="tool"
                            >
                                <h3>Corel Draw</h3>
                                <p className="mb-0 pb-3">
                                    Corel Draw Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique officiis ratione pariatur enim provident atque, quaerat dignissimos et est adipisci. Debitis iusto fuga earum? Velit officiis corrupti debitis amet expedita consequatur, aliquam animi eaque odit quas tempora aliquid laborum ad sunt sequi aut? Obcaecati quae facere quaerat tempore doloremque. Repellendus.
                                </p>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default Graphics;