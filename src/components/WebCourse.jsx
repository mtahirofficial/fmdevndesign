import React, { Component } from 'react';

class WebCourse extends Component {
    // constructor(props) {
    //     super(props)

    // }
    render() {
        return (
            <div>
                <div className="webCourse">
                    <div className="container-fluid webCourseHeading">
                        <div className="row">
                            <div className="col-sm-6">
                                <h1 className="webAndMobileApp">
                                    Web and Mobile App Development
                                </h1>
                            </div>
                            <div className="col-sm-6">
                                <img src="./images/web.jpg" alt="web" />
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12 col-md-8 col-lg 8">
                                <div>
                                    <p className="text-justify">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis nobis, veritatis quia maxime similique assumenda qui dolor adipisci quasi ipsum enim temporibus, ea delectus at quos architecto itaque vitae, dolorum magnam. Veritatis animi libero exercitationem voluptatum possimus inventore laboriosam repellendus vero laborum aspernatur dolorum ad enim id in nostrum, iusto illo, omnis iste, sit blanditiis! Ipsum sunt illo, eaque pariatur vel repudiandae repellat fuga quod doloribus quaerat cum ipsam atque quos eius? Voluptatibus, ad, voluptatum dignissimos reprehenderit saepe maiores iusto accusamus tenetur beatae in non harum aperiam? Officia, quam debitis! Deserunt magnam id delectus sed nulla doloribus voluptas totam!
                                    </p>
                                </div>
                            </div>
                            <div className="col-sm-12 col-md-4 col-lg 4">
                                <img src="./images/web.jpg" alt="Web and Mobile App" title="Web and Mobile App Development" />
                                <div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default WebCourse;