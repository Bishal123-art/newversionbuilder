import React from "react";
import { Link } from "react-router-dom";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import "./middleComponent.css";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import MailIcon from "@mui/icons-material/Mail";
import work_1 from "./assest/work_1.jpeg";
import work_2 from "./assest/work_2.jpeg";
import work_3 from "./assest/work_3.jpeg";
import work_4 from "./assest/work_4.jpeg";
import work_5 from "./assest/work_5.jpeg";
import s_1 from "./assest/s_1.jpg";
import s_5 from "./assest/s_1.png";
import s_2 from "./assest/s_2.jpg";
import s_3 from "./assest/s_3.jpg";
import s_4 from "./assest/s_4.jpg";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const array = [
  {
    img: "https://media.pixeltuner.de/wp-content/uploads/2018/06/london-3078109_640.jp",
    name: "Builders",
    desc: " Whether you're just starting out with content marketing or you've been using the same approach for a while, it never hurts to revisit your content strategy plan and make sure it's  up-to-date, innovative, and engaging for your prospects and customers  no matter when or how they intend to buy",
  },
  {
    img: "https://media.pixeltuner.de/wp-content/uploads/2018/06/london-3078109_640.jp",
    name: "Builders",
    desc: " Whether you're just starting out with content marketing or you've been using the same approach for a while, it never hurts to revisit your content strategy plan and make sure it's  up-to-date, innovative, and engaging for your prospects and customers  no matter when or how they intend to buy",
  },
];

const MiddleComponent = () => {
  const settings = {
    dots: true,
    autoplay: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  return (
    <>
      <div style={{ color: "#494949", textAlign: "center" }} id="services">
        <h2 style={{ textDecoration: "underline", fontSize: "28px" }}>
          Service
        </h2>
      </div>
      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <div class="card card__dark card__dark--magenta">
            <div class="media media--16-9">
              {" "}
              <img src={s_5} alt="" width="640" height="426" />{" "}
            </div>
            <div class="primary-title">
              <div class="primary-text" style={{ textAlign: "center" }}>
                Building Construction
              </div>
            </div>
          </div>
        </Grid>
        <Grid item xs={12} md={4}>
          <div class="card card__dark card__dark--magenta">
            <div class="media media--16-9">
              {" "}
              <img src={s_4} alt="" width="640" height="426" />{" "}
            </div>
            <div class="primary-title">
              <div class="primary-text" style={{ textAlign: "center" }}>
                Renovation Works
              </div>
            </div>
          </div>
        </Grid>
        <Grid item xs={12} md={4}>
          <div class="card card__dark card__dark--magenta">
            <div class="media media--16-9">
              {" "}
              <img src={s_3} alt="" width="640" height="426" />{" "}
            </div>
            <div class="primary-title">
              <div class="primary-text" style={{ textAlign: "center" }}>
                3D Services
              </div>
            </div>
          </div>
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <div class="card card__dark card__dark--magenta">
            <div class="media media--16-9">
              {" "}
              <img src={s_1} alt="" width="640" height="426" />{" "}
            </div>
            <div class="primary-title">
              <div class="primary-text" style={{ textAlign: "center" }}>
                Architectural Service
              </div>
            </div>
          </div>
        </Grid>
        <Grid item xs={12} md={4}>
          <div class="card card__dark card__dark--magenta">
            <div class="media media--16-9">
              {" "}
              <img src={s_2} alt="" width="640" height="426" />{" "}
            </div>
            <div class="primary-title">
              <div class="primary-text" style={{ textAlign: "center" }}>
                Interior Design
              </div>
            </div>
          </div>
        </Grid>
      </Grid>
      {/*  work */}
      <div style={{ color: "#494949", textAlign: "center" }} id="services">
        <h2 style={{ textDecoration: "underline", fontSize: "28px" }}>
          Our Work
        </h2>
      </div>
      <div className="container">
        <Slider {...settings}>
          <div>
            <img src={work_1} alt="work 1" />
          </div>
          <div>
            <img src={work_2} alt="work 2" />
          </div>
          <div>
            <img src={work_3} alt="work 3" />
          </div>
          <div>
            <img src={work_4} alt="work 4" />
          </div>
          <div>
            <img src={work_5} alt="work 5" />
          </div>
        </Slider>
      </div>
      {/* footer */}
      <div className="phone-container">
        <h4 className="phone">
          <a href="tel://+9989970200">
            <LocalPhoneIcon />
          </a>
        </h4>
        <h4 className="phone">
          <a href="mailto:newversionbuilder@gmail.com">
            <MailIcon />
          </a>
        </h4>
      </div>
      <footer class="footer-section">
        <div class="copyright-area">
          <div>
            <p style={{ textAlign: "center" }}>
              <LocalPhoneIcon /> +91 9989970200 / 6363696408
            </p>
          </div>
          <div>
            <p style={{ textAlign: "center" }}>
              <MailIcon /> newversionbuilder@gmail.com
            </p>
          </div>
          <div>
            <p style={{ textAlign: "center" }}>
              Copyright &copy; 2022, All Right Reserved{" "}
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};
export default MiddleComponent;
