import React from 'react'

const AddNavbar = () => {
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                        <div className="row g-3">
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <nav class="navbar bg-body-tertiary">
                                    <div class="container-fluid">
                                        <a class="navbar-brand" href="#">
                                            <img src="https://png.pngtree.com/png-clipart/20220628/original/pngtree-food-logo-png-image_8239850.png" alt="Logo" width="30" height="24" class="d-inline-block align-text-top" />
                                            QuickBites
                                        </a>
                                    </div>
                                </nav>


                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <a class="btn btn-primary" href="/home" role="button">HOME</a>
                                <a class="btn btn-primary" href="/" role="button">LOGIN</a>
                                <a class="btn btn-primary" href="/search" role="button">SEARCH</a>
                                <a class="btn btn-primary" href="/deals" role="button">DEALS</a>



                            </div>
                        </div>

                    </div>
                </div>
            </div>




        </div>
    )
}

export default AddNavbar