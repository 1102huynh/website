import React from 'react';
import Header from '../header/header';
import Footer from '../footer/footer';
import '../mystyle.css';

function Home(props) {
    return (
        <div>
            <header>
            <script src="./vendor/jquery/jquery-3.2.1.min.js"></script>

            <script src="./vendor/animsition/js/animsition.min.js"></script>

            <script src="./vendor/bootstrap/js/popper.js"></script>
            <script src="./vendor/bootstrap/js/bootstrap.min.js"></script>

            <script src="./vendor/select2/select2.min.js"></script>

            <script src="./vendor/daterangepicker/moment.min.js"></script>
            <script src="./vendor/daterangepicker/daterangepicker.js"></script>

            <script src="./vendor/countdowntime/countdowntime.js"></script>
            </header>
            <Header></Header>
            <body>
                <div class = "left">

                </div>
                <div class = "right"></div>
            </body>
            <Footer></Footer>
        </div>
    );
}

export default Home;