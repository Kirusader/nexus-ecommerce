/** @format */

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useTheme } from "@mui/material/styles";
import { Button, Grid, Typography, Box, Paper } from "@mui/material";
import forwardArrow from "../assets/forwardArrow.svg";
import backArrow from "../assets/backArrow.svg";
//Images Resource Imports
import ComputerLaptop from "../assets/Computer & Laptop.png";
import Accessories from "../assets/Accessories.png";
import TvHomes from "../assets/TV & Homes.png";
import HeadPhone from "../assets/Headphones.png";
import SmartPhone from "../assets/SmartPhone.png";
import CameraPhoto from "../assets/Camera & Photo.png";
import HomeAccessory from "../assets/HomeAccessory.png";
import Watches from "../assets/Watch.png";
import GamesDevice from "../assets/GameDevice.png";
import ZebronicsGaming from "../assets/Zebronicsgaming.png";
import ZebronicsTransformer from "../assets/ZebronicsTransformer.png";
import TPLINKUSB from "../assets/TP-LinkUsb.png";
import ScarterMouse from "../assets/ScaterMouse.png";
import HyperStreamer from "../assets/HyperXStreamer.png";
import { Link } from "react-router-dom";
function NextArrow(props) {
  const { style, onClick } = props;
  return (
    <Button
      style={{
        ...style,

        display: "block",
        bottom: 100,
        right: -1000,
      }}
      onClick={onClick}>
      <img src={forwardArrow} alt="Next" />
    </Button>
  );
}

function PrevArrow(props) {
  const { style, onClick } = props;
  return (
    <Button
      style={{
        ...style,

        display: "block",
        bottom: -90,
        left: -80,
        zIndex: 1,
      }}
      onClick={onClick}>
      <img src={backArrow} alt="Previous" />
    </Button>
  );
}

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 6,
  slidesToScroll: 1,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
};
const productCategories = [
  {
    image: ComputerLaptop,
    category: "Computer & Laptop",
    link: "/computers",
  },
  {
    image: SmartPhone,
    category: "Smart Phone",
    link: "/smartphones",
  },
  {
    image: HeadPhone,
    category: "HeadPhones",
    link: "/headphones",
  },
  {
    image: Accessories,
    category: "Accessories",
    link: "/accessories",
  },
  {
    image: CameraPhoto,
    category: "Camera & Photo",
    link: "/cameraphoto",
  },
  {
    image: TvHomes,
    category: "TV & Homes",
    link: "/tvhomes",
  },
  {
    image: Watches,
    category: "Watches",
    link: "/watches",
  },
  {
    image: GamesDevice,
    category: "Game Console",
    link: "/gameconsole",
  },
  {
    image: HomeAccessory,
    category: "Home Accessories",
    link: "/homeaccessories",
  },
];
const hotDealProducts = [
  {
    image: ZebronicsGaming,
    title: "ZEBRONICS Zeb-Reaper 2.4GHZ Wireless Gaming Mouse",
    price: 1599.0,
    dealOff: "-40% Off",
  },
  {
    image: ZebronicsTransformer,
    title: "Zebronics Zeb-Transformer-k USB Gaming Keyboard | RGB LED lighting",
    price: 999.0,
    dealOff: "-36% Off",
  },
  {
    image: TPLINKUSB,
    title: "TP-Link Powerd USB Hub with 7 Data Smart Charging hub",
    price: 1999.0,
    dealOff: "-36% Off",
  },
  {
    image: ScarterMouse,
    title:
      "Scarter Mouse Pad, Deskmat Extended for work from Home/Office/Gaming",
    price: 1599.0,
    dealOff: "-30% Off",
  },
  {
    image: HyperStreamer,
    title: "HyperX Streamer Starter Pack (HBNDL0001), Black",
    price: 11599.0,
    dealOff: "-26% Off",
  },
];
const Home = () => {
  return (
    <Grid container direction="column" justifyContent="center">
      <Grid item>
        <Typography variant="h2" component="div">
          Today's hot deals
        </Typography>{" "}
      </Grid>
      <Grid item>
        <div
          style={{
            marginBottom: 20,
            borderTop: "2px dashed red",
            width: "90%",
            marginLeft: 40,
          }}></div>
      </Grid>
      <Grid item>
        <Grid
          container
          justifyContent="space-around"
          alignItems="center"
          sx={{}}>
          {hotDealProducts.map((product, index) => (
            <Grid
              key={index}
              item
              sx={{ maxWidth: 200, height: "auto", margin: 0 }}>
              <Grid
                container
                direction="column"
                alignItems="center"
                spacing={2}>
                <Grid item>
                  <Button>
                    <img
                      src={product.image}
                      style={{ maxWidth: 100, height: 100 }}
                      alt={product.title}
                    />
                  </Button>
                </Grid>
                <Grid item>
                  <Typography
                    variant="body1"
                    sx={{ wordWrap: "break-word", width: 150, height: "auto" }}>
                    {product.title}
                  </Typography>
                </Grid>
                <Grid item sx={{ width: 160 }}>
                  <Grid
                    container
                    direction="row"
                    justifyContent="space-around"
                    spacing={2}>
                    <Grid item>
                      <Typography sx={{ fontWeight: 400 }} variant="body1">
                        £{product.price}
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Typography
                        sx={{ fontWeight: 400, color: "#ff2c2c" }}
                        variant="body1">
                        {product.dealOff}
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          ))}
        </Grid>
      </Grid>
      <Grid item>
        <Typography
          variant="h2"
          component="div"
          sx={{
            textAlign: "center",
            marginTop: 10,
            fontSize: "1.3rem",
            fontWeight: 600,
          }}>
          Shop with Categories
        </Typography>
      </Grid>
      <Grid item sx={{ width: "80%", margin: "auto" }}>
        <Slider {...settings}>
          {productCategories.map((product, index) => (
            <Paper
              component={Link}
              to={product.link}
              key={index}
              sx={{
                padding: 2,
                textDecoration: "none",
                margin: "auto",
                border: 0,
                boxShadow: "none",
              }}>
              <img
                src={product.image}
                style={{ maxWidth: 100,alignContent:"left", height: 100 }}
                alt="Slide"
              />
              <Typography
                variant="body1"
                sx={{
                  textAlign: "left",
                  textDecoration: "none",
                  marginTop: 1,marginLeft:2,
                  textTransform: "none",
                }}>
                {product.category}
              </Typography>
            </Paper>
          ))}
        </Slider>
      </Grid>
    </Grid>
  );
};

export default Home;
