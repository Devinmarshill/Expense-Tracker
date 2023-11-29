
// import image from
<<<<<<< HEAD:client/src/pages/Home.jsx
import alexDelvaPhoto from '../assets/images/alexDelva.jpg';
// import hero from '../images/hero-bg.png'
=======
import alexDelvaPhoto from '../images/alexDelva.jpg';
import devinPhoto from '../images/devinPhoto.png';
import hero from '../images/hero-bg.png'
>>>>>>> default:client/src/components/pages/Home.jsx

const Home = () => {
  return (
    <>
     <div className="hero_area">

<div className="hero_bg_box">
  <div className="bg_img_box">
    <img src="{hero}" alt=""/>
  </div>
</div>


<section className="slider_section purple-box ">
  <div id="customCarousel1" className="carousel slide" data-ride="carousel">
    <div className="carousel-inner">
      <div className="carousel-item active">
        <div className="container ">
          <div className="row">
            <div className="col-md-6 ">
              <div className="detail-box">
                <h1>
                  Expense and Budget Tracking made Simple 
                </h1>
                <p>
                SpendSmart is not just an expense tracker; it's a financial companion committed to simplifying your financial journey. We stand out with an intuitive design, real-time tracking, and powerful features that make managing your money effortless.
                </p>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* <ol className="carousel-indicators">
      <li data-target="#customCarousel1" data-slide-to="0" className="active"></li>
    </ol> */}
  </div>

</section>

</div>

    <section className="about_section layout_padding">
    <div className="container  ">
      <div className="heading_container heading_center">
        <h2>
          About <span>Us</span>
        </h2>
        <p>
        Our team is dedicated to providing you with an intuitive and powerful expense tracker app designed to transform the way you manage your money. Discover a seamless experience that puts you in control of your finances
        </p>
      </div>
      <div className="row">
        <div className="col-md-6 ">
          <div className="img-box">
            {/* <img src="images/about-img.png" alt=""/> */}
          </div>
        </div>
        <div className="col-md-6">
          <div className="detail-box">
            <h3>
              We Are SpendSmart
            </h3>
            <p>
              Welcome to SpendSmart, your go to solution for effortless expense tracking and finanical managment. Say goodbye to the hassle of manual expense tracking and hello to a streamlined, user-friendly experience. With powerful features like real-time expense tracking, insightful reports, and customizable categories, managing your money has never been this convenient. SpendSmart is here to simplify the process and provide you with valuable insights to make informed financial decisions.
            </p>
            <p>
            Choose SpendSmart for unparalleled simplicity and control over your finances. Our user-friendly interface, real-time tracking, and robust features make managing expenses a breeze. Gain insights, set budgets, and achieve financial goals effortlessly, SpendSmart is your key to financial freedom.
            </p>
            <a href="">
              Read More
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>

  
  <section className="why_section layout_padding">
    <div className="container">
      <div className="heading_container heading_center">
        <h2>
          Why Choose <span>Us</span>
        </h2>
      </div>
      <div className="why_container">
        <div className="box">
          <div className="img-box">
            {/* <img src="images/w1.png" alt=""> */}
          </div>
          <div className="detail-box">
            <h5>
              Expert Management
            </h5>
            <p>
            Our team of financial experts has meticulously crafted this app to ensure it goes beyond basic expense tracking. Benefit from industry-leading insights, tailored budgeting strategies, and comprehensive financial analysis tools that empower you to make informed decisions
            </p>
          </div>
        </div>
        <div className="box">
          <div className="img-box">
            {/* <img src="images/w2.png" alt=""> */}
          </div>
          <div className="detail-box">
            <h5>
              Secure Investment
            </h5>
            <p>
            Rest assured with SpendSmart, your gateway to a secure and reliable financial management experience. We prioritize the security of your financial data with state-of-the-art encryption, multi-layered authentication, and industry-leading privacy measures.
            </p>
          </div>
        </div>
        <div className="box">
          <div className="img-box">
            {/* <img src="images/w3.png" alt=""> */}
          </div>
          <div className="detail-box">
            <h5>
              Budget Tracking
            </h5>
            <p>
            With intuitive budget tracking features, SpendSmart ensures that you stay in control of your spending. Set personalized budgets, receive real-time updates, and gain valuable insights to make informed financial decisions. Experience the ease of budgeting like never before
            </p>
          </div>
        </div>
        <div className="box">
          <div className="img-box">
            {/* <img src="images/w4.png" alt=""> */}
          </div>
          <div className="detail-box">
            <h5>
              Happy Customers
            </h5>
            <p>
            "Discovering SpendSmart has been a game-changer for my financial journey. As someone who used to struggle with keeping tabs on expenses, this app has become my financial ally. The real-time tracking feature and intuitive interface have made budgeting a breeze, allowing me to stay on top of my spending effortlessly. Thanks to SpendSmart, I've not only achieved my financial goals but also gained a sense of control and confidence in managing my money. It's more than just an app it's a transformative tool that every savvy individual should have in their financial toolkit." - Sarah T., Satisfied SpendSmart User
            </p>
          </div>
        </div>
      </div>
      <div className="btn-box">
        <a href="">
          Read More
        </a>
      </div>
    </div>
  </section>
  
  <section className="team_section layout_padding">
  <div className="container-fluid">
    <div className="heading_container heading_center">
      <h2 className="">
        Our <span> Team</span>
      </h2>
    </div>

    <div className="team_container">
      <div className="row">
        <div className="col-lg-3 col-sm-6">
          <div className="box ">
            <div className="img-box">
              <img src={alexDelvaPhoto} className="img1" alt="Alex Delva Photo"/>
            </div>
            <div className="detail-box">
              <h5>
                Alex Delva
              </h5>
              <p>
                Marketing Head
              </p>
            </div>
            <div className="social_box">
              <a href="#">
                <i className="fa fa-facebook" aria-hidden="true"></i>
              </a>
              <a href="#">
                <i className="fa fa-twitter" aria-hidden="true"></i>
              </a>
              <a href="#">
                <i className="fa fa-linkedin" aria-hidden="true"></i>
              </a>
              <a href="#">
                <i className="fa fa-instagram" aria-hidden="true"></i>
              </a>
              <a href="#">
                <i className="fa fa-youtube-play" aria-hidden="true"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-sm-6">
          <div className="box ">
            <div className="img-box">
              {/* <img src="images/team-2.jpg" className="img1" alt=""> */}
            </div>
            <div className="detail-box">
              <h5>
                Felipe Sierra
              </h5>
              <p>
                Marketing Head
              </p>
            </div>
            <div className="social_box">
              <a href="#">
                <i className="fa fa-facebook" aria-hidden="true"></i>
              </a>
              <a href="#">
                <i className="fa fa-twitter" aria-hidden="true"></i>
              </a>
              <a href="#">
                <i className="fa fa-linkedin" aria-hidden="true"></i>
              </a>
              <a href="#">
                <i className="fa fa-instagram" aria-hidden="true"></i>
              </a>
              <a href="#">
                <i className="fa fa-youtube-play" aria-hidden="true"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-sm-6">
          <div className="box ">
            <div className="img-box">
            <img src={devinPhoto} className="img1" alt="Devin Photo"/>
            </div>
            <div className="detail-box">
              <h5>
                Devin Hill
              </h5>
              <p>
                Marketing Head
              </p>
            </div>
            <div className="social_box">
              <a href="#">
                <i className="fa fa-facebook" aria-hidden="true"></i>
              </a>
              <a href="#">
                <i className="fa fa-twitter" aria-hidden="true"></i>
              </a>
              <a href="#">
                <i className="fa fa-linkedin" aria-hidden="true"></i>
              </a>
              <a href="#">
                <i className="fa fa-instagram" aria-hidden="true"></i>
              </a>
              <a href="#">
                <i className="fa fa-youtube-play" aria-hidden="true"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-sm-6">
          <div className="box ">
            <div className="img-box">
              {/* <img src="images/team-4.jpg" className="img1" alt=""> */}
            </div>
            <div className="detail-box">
              <h5>
                David Molina
              </h5>
              <p>
                Marketing Head
              </p>
            </div>
            <div className="social_box">
              <a href="#">
                <i className="fa fa-facebook" aria-hidden="true"></i>
              </a>
              <a href="#">
                <i className="fa fa-twitter" aria-hidden="true"></i>
              </a>
              <a href="#">
                <i className="fa fa-linkedin" aria-hidden="true"></i>
              </a>
              <a href="#">
                <i className="fa fa-instagram" aria-hidden="true"></i>
              </a>
              <a href="#">
                <i className="fa fa-youtube-play" aria-hidden="true"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
</>
  );
};

export default Home;
