// import { Link } from 'react-router-dom';

export default function Homes() {
    return (
        <>

            <div className="card border-success " style={{ maxWidth: "100rem" }}>
                <div className="card-header bg-transparent border-secondary">
                    <nav className="navbar navbar-expand-lg bg-body-tertiary">
                        <div class="container-fluid">
                            <a class="navbar-brand" href="#">Navbar</a>
                            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span class="navbar-toggler-icon"></span>
                            </button>
                            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                                    <li class="nav-item">
                                        <a class="nav-link active" aria-current="page" href="#">Home</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="#">Link</a>
                                    </li>
                                    <li class="nav-item dropdown">
                                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            Dropdown
                                        </a>
                                        <ul className="dropdown-menu">
                                            <li><a className="dropdown-item" href="#">Action</a></li>
                                            <li><a className="dropdown-item" href="#">Another action</a></li>
                                            <li></li>
                                            <li><a className="dropdown-item" href="#">Something else here</a></li>
                                        </ul>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link disabled" aria-disabled="true">Disabled</a>
                                    </li>
                                </ul>
                                <form className="d-flex" role="search">
                                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                    <button className="btn btn-primary" type="submit">Search</button>
                                </form>
                            </div>
                        </div>
                    </nav>
                </div >
                <div className="card-body text-primary d-flex flex-column justify-content-center align-items-center" style={{ height: "200px" }}>
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text text-success ">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>



                </div >

                <div style={{ display: "flex", width: "100%", border: "2px solid black", borderRadius: "20px", padding: "20px" }}>
                    <div style={{ width: "50%" }}>
                        <div className="progress" role="progressbar" ariaLabel="Info striped example" ariaValuenow="50" ariaValuemin="0" ariaValuemax="100" style={{ marginBottom: "10px" }}>
                            <div className="progress-bar progress-bar-striped bg-info" style={{ width: "50%" }}></div>
                        </div>
                        <div className="progress" role="progressbar" ariaLabel="Warning striped example" ariaValuenow="75" ariaValuemin="0" ariaValuemax="100" style={{ marginBottom: "10px" }}>
                            <div className="progress-bar progress-bar-striped bg-warning" style={{ width: "75%" }}></div>
                        </div>
                        <div className="progress" role="progressbar" aria-label="Danger striped example" ariaValuenow="100" ariaValuemin="0" ariaValuemax="100" style={{ marginBottom: "10px" }}>
                            <div className="progress-bar progress-bar-striped bg-danger" style={{ width: "100%" }}></div>

                            <div style={{ width: "50%", marginTop: "20px", marginLeft: "20px", border: "3px solid black", padding: "10px", borderRadius: "10px" }}>
                                <div className="progress" role="progressbar" ariaLabel="Default striped example" ariaValuenow="10" ariaValuemin="0" ariaValuemax="100" style={{ marginBottom: "10px" }}>
                                    <div className="progress-bar progress-bar-striped" style={{ width: "10%" }}></div>
                                </div>
                                <div className="progress" role="progressbar" ariaLabel="Success striped example" ariaValuenow="25" ariaValuemin="0" ariaValuemax="100" style={{ marginBottom: "10px" }}>
                                    <div className="progress-bar progress-bar-striped bg-success" style={{ width: "25%" }}></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="col" style={{ display: "flex", justifyContent: "center", alignItems: "center", marginLeft: "20px" }} >
                            <h3 className=" text-bold">Progress Bar</h3>

                        </div>
                    </div>
                </div>

                {/* contact  */}
                <div className="row justify-content-evenly pt-2 pb-5" style={{ backgroundColor: "#f1f1f1" }}>
                    <div className="col-md-5 mt-5">
                        <h3 className="mb-4">Contact Form </h3>

                        <form>
                            <div className="mb-3">
                                <label for="name" className="form-label">Full Name</label>
                                <input type="text" className="form-control" id="name"></input>
                            </div>
                            <div className="mb-3">
                                <label for="exampleInputEmail1" className="form-label">Email address</label>
                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"></input>
                                <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                            </div>
                            <div className="mb-3">
                                <label for="exampleFormControlTextarea1" className="form-label">Message</label>
                                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                            </div>
                            <button type="submit" className="btn btn-danger">Submit</button>
                        </form>
                    </div>
                    <div className="col-md-5 mt-5">
                        <h3 className="mb-4">Address</h3>
                        <p>1180 kimberly way,WILLISTON PARK
                            New York -11596
                            <i className="bi bi-telephone"></i>:917-772-5081
                        </p>


                    </div>
                </div>

                {/*  faq  */}
                <div className="row justify-content-evenly pt-5 pb-5">
                    <div className="col-md-10">
                        <h3 className="text-center pb-4">FAQ</h3>
                        <div class="accordion accordion-flush border" id="accordionFlushExample">
                            <div className="accordion-item">
                                <h2 className="accordion-header">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                        Accordion Item #1
                                    </button>
                                </h2>
                                <div id="flush-collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                    <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the
                                        <code>.accordion-flush</code> class. This is the first item’s accordion body.</div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                        Accordion Item #2
                                    </button>
                                </h2>
                                <div id="flush-collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                    <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the
                                        <code>.accordion-flush</code> class. This is the second item’s accordion body. Let’s imagine this being
                                        filled with some actual content.</div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                        Accordion Item #3
                                    </button>
                                </h2>
                                <div id="flush-collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                    <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the
                                        <code>.accordion-flush</code> class. This is the third item’s accordion body. Nothing more exciting
                                        happening here in terms of content, but just filling up the space to make it look, at least at first
                                        glance, a bit more representative of how this would look in a real-world application.</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            {/*  footer */}
            <div>
                <div className="row justify-content-evenly bg-dark text-white ">
                    <div class="col-md-3 pt-4">
                        <h5 className="pb-2">Tech Gun</h5>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur iste suscipit quis assumenda quos
                            molestiae velit nam dolorem exercitationem? Quia praesentium aut voluptatum quaerat, odit quis omnis rerum magni
                            hic.</p>
                    </div>
                    <div className="col-md-3 pt-4">
                        <h5 className="pb-2">Important Links</h5>
                        {/* <p>


                        <Link className='lnk link-light text-decoration-none' to="/">Home</Link>
                        <Link className='lnk link-light text-decoration-none' to="/">About Us</Link>
                        <Link className='lnk link-light text-decoration-none' to="/">Contact Us</Link>|
                        <Link className='lnk link-light text-decoration-none' to="/">Our Team</Link>
                        <Link className='lnk link-light text-decoration-none' to="/">Our Client</Link>

                    </p> */}
                    </div>
                    <div className="col-md-3 pt-4">
                        <h5 className="pb-2">Contact Us</h5>
                        <p>
                            1180 kimberly way,WILLISTON PARK
                            New York -11596
                            <i className="bi bi-telephone"></i>:917-772-5081
                        </p>
                    </div>

                </div>


                {/* copyright */}
                <div className="row justify-content-evenly bg-secondary text-center text-white p-2">
                    <div className="col-12">
                        <p>Copyright 1999-2021 by TechGun. All Ribhts Reserved.</p>
                    </div>
                </div>
            </div>
        </>
    )
}
