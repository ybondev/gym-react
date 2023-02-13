import { React } from "react";

// COMPONENTS
import Navbar from "./Navbar";

// ASSETS
import logo from "./assets/logo.png";
import services1 from "./assets/services-1.webp";
import services2 from "./assets/services-2.webp";
import services3 from "./assets/services-3.webp";
import services4 from "./assets/services-4.avif";
import vid1 from "./assets/pexels-tima-miroshnichenko-6390399.mp4";

function App() {
  return (
    <>
      <Navbar />
      <div className="container-app">
        <section className="index" id="home">
          <div
            id="carouselExampleAutoplaying"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              <div
                className="carousel-item active"
                style={{ position: "relative" }}
              >
                <div className="image1"></div>
                <div className="row">
                  <div className="col-md-6 caption">
                    <span className="title-q">Decide. Commit. Succeed.</span>
                    <div className="caption-text mb-3">
                      “Ability is what you’re capable of doing. Motivation
                      determines what you do. Attitude determines how well you
                      do it.”
                    </div>
                    <div>
                      <a href="#" className="btn-member">
                        Become a member
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="image2"></div>
                <div className="row">
                  <div className="col-md-6 caption">
                    <span className="title-q">Every day is a choice.</span>
                    <div className="caption-text mb-3">
                      “I hated every minute of training, but I said, ‘Don’t
                      quit. Suffer now and live the rest of your life as a
                      champion.”
                    </div>
                    <div>
                      <a href="#" className="btn-member">
                        Become a member
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="image3"></div>
                <div className="row">
                  <div className="col-md-6 caption">
                    <span className="title-q">Make yourself proud.</span>
                    <div className="caption-text mb-3">
                      “The mind is the most important part of achieving any
                      fitness goal. Mental change always comes before physical
                      change.”
                    </div>
                    <div>
                      <a href="#" className="btn-member">
                        Become a member
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="about" id="about">
          <div className="container">
            <div className="row">
              <div className="col-md-8">
                <h1>About us</h1>
                <span>
                  <span id="lakeside">Lakeside</span> Gym & Fitness
                </span>
                <p>
                  Nestled near the beautiful Taal Volcano Lake, Lakeside Gym &
                  Fitness is built to make you strong.
                </p>
                <p>
                  As a member, you get access to beautifully designed gym space,
                  top-tier equipment, and amenities—as well as digital apps, and
                  experience the service that’ll make you feel cared for.
                </p>
                <p>
                  Every space is cleaned consistently during the day—with a deep
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="services" id="services">
          <div className="container">
            <div className="row gy-3">
              <h1 className="title">Our Services</h1>
              <div className="col-md-6">
                <div className="image-bx">
                  <img src={services1} alt="" className="img-fluid" />
                  <h1>Body Building</h1>
                  <div className="caption">
                    <p>
                      Strengthen and enlarge the muscles of your body. Build
                      strong muscles. Be built different.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="image-bx">
                  <img src={services2} alt="" className="img-fluid" />
                  <h1>WEIGHT LIFTING</h1>
                  <div className="caption">
                    <p>
                      Get access to premium weights and barbell for your muscle
                      strengthening activities.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="image-bx">
                  <img src={services3} alt="" className="img-fluid" />
                  <h1>BATTLE ROPE</h1>
                  <div className="caption">
                    <p>
                      Battle ropes are a useful exercise tool for those looking
                      to lose weight and gain muscle mass.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="image-bx">
                  <img src={services4} alt="" className="img-fluid" />
                  <h1>YOGA</h1>
                  <div className="caption">
                    <p>
                      Yoga improves strength, balance and flexibility. Slow
                      movements and deep breathing increase blood flow.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="promo" id="promo">
          <div className="container">
            <div className="row gy-3">
              <h1 className="title">Choose your pricing plan</h1>
              <span>
                Lakeside Gym & Fitness offers membership in three tiers
              </span>
              <div className="col-md-4">
                <div className="card">
                  <h1 className="card-header">₱1,500.00</h1>
                  <div className="card-body">
                    <span className="text-muted">PLATINUM MEMBERSHIP</span>
                    <br />
                    <p>
                      Inclusions: Exclusive use of the equipment every day from
                      9 p.m. to 11 p.m. (you can still come everyday from
                      opening time but Platinum Members have the privilege to
                      use the facility from 9pm until closing time) Exclusive
                      use every FRIDAY and SUNDAY
                    </p>
                    <div className="btn-register mt-3">
                      <a href="#">Register now!!</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card">
                  <h1 className="card-header">₱800.00</h1>
                  <div className="card-body">
                    <span className="text-muted">GOLD MEMBERSHIP</span>
                    <br />
                    <p>
                      Inclusions: Gold Member will be able to use all equipment
                      from 6am to 9pm (Monday, Tuesday, Wednesday, Thursday, and
                      Saturday) for a maximum of 12 visits monthly.
                    </p>
                    <div className="btn-register mt-3">
                      <a href="#">Register now!!</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card">
                  <h1 className="card-header">₱500.00</h1>
                  <div className="card-body">
                    <span className="text-muted">BLACK MEMBERSHIP</span>
                    <br />
                    <p>
                      Inclusions: Black Member will be able to use all equipment
                      from 6am to 9pm (Monday, Tuesday, Wednesday, Thursday, and
                      Saturday) for a maximum of 6 visits monthly.
                    </p>
                    <div className="btn-register mt-3">
                      <a href="#">Register now!!</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="section video" id="video">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <video
                  loop
                  muted
                  playsInline
                  autoPlay
                  width="100%"
                  data-type="mp4"
                  src={vid1}
                ></video>
                <div className="caption">
                  <p>
                    "Never give up on a dream just because of the time it will
                    take to accomplish it. The time will pass anyway."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="section contact" id="contact">
          <div className="container">
            <h1 className="title">Contact Us</h1>
            <div className="row gy-3">
              <div className="col-md-3">
                <img src={logo} alt="" className="img-fluid" />
              </div>
              <div className="col-md-3">
                <div className="details">
                  <label htmlFor="address">Address:</label>
                  <a>Parkville Pointe, Park Avenue, Balete Batangas</a>
                  <label htmlFor="contact">Contact No:</label>
                  <a href="tel:0917-1895-623">0917-1895-623</a>
                  <label htmlFor="email">Email:</label>
                  <a href="mailto:lakesidegymfitness@gmail.com">
                    lakesidegymfitness@gmail.com
                  </a>
                </div>
              </div>
              <div className="col-md-6">
                <div className="card">
                  <div className="card-body">
                    <form action="" method="POST">
                      <div className="form-floating mb-3">
                        <input
                          type="text"
                          name=""
                          id="floatingInput"
                          className="form-control"
                          placeholder="Enter your name"
                        />
                        <label htmlFor="floatingInput">Enter your name</label>
                      </div>
                      <div className="form-floating mb-3">
                        <input
                          type="email"
                          name=""
                          id="floatingInput"
                          className="form-control"
                          placeholder="Enter your name"
                        />
                        <label htmlFor="floatingInput">Enter your email</label>
                      </div>
                      <div className="form-floating mb-3">
                        <textarea
                          name=""
                          id="floatingInput"
                          cols="30"
                          rows="10"
                          className="form-control"
                          placeholder="Enter your message"
                        ></textarea>
                        <label htmlFor="floatingInput">
                          Enter your message
                        </label>
                      </div>
                      <button type="submit" className="form-control">
                        Send
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
