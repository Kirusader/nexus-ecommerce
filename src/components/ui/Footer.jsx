/** @format */

import { Grid, Typography } from "@mui/material";
import React from "react";

import visaCard from "../../assets/visa.svg";
import masterCard from "../../assets/mastercard.svg";
import payPalPay from "../../assets/paypal.svg";
import applePay from "../../assets/applepay.svg";
import googlePay from "../../assets/goolepay.svg";
import twitter1 from "../../assets/twitter1.svg";
import facebook2 from "../../assets/facebook2.svg";
import instagram3 from "../../assets/instagram3.svg";
import github4 from "../../assets/github.svg";
const Footer = () => {
  return (
    <Grid
      item
      sx={{
        width: "100%",
        backgroundColor: "rgba(64, 64, 64, 0.23)",
        mx: "auto",
        padding: 5,
        paddingBottom: 8,
      }}>
      <Grid item container justifyContent="space-around">
        <Grid item>
          <Grid item container direction="column">
            <Grid item>
              <Typography variant="body1" component={"div"}>
                Company
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="footer" component={"a"}>
                About
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="footer" component={"a"}>
                Features
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="footer" component={"a"}>
                Works
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="footer" component={"a"}>
                Career
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Grid item container direction="column">
            <Grid item>
              <Typography variant="body1" component={"div"}>
                HELP
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="footer" component={"span"}>
                Customer Support
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="footer" component={"span"}>
                Delivery Details
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="footer" component={"span"}>
                Terms & Conditions
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="footer" component={"span"}>
                Privacy Policy
              </Typography>
            </Grid>
          </Grid>
        </Grid>

        <Grid item>
          <Grid item container direction="column">
            <Grid item>
              <Typography variant="body1" component={"a"}>
                FAQ
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="footer" component={"span"}>
                Account
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="footer" component={"span"}>
                Manage Deliveries
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="footer" component={"span"}>
                Orders
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="footer" component={"span"}>
                Payments
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Grid item container direction="column">
            <Grid item>
              <Typography variant="body1" component={"a"}>
                RESOURCES
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="footer" component={"span"}>
                Free eBooks
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="footer" component={"span"}>
                Development Tutorial
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="footer" component={"span"}>
                How to Blog
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="footer" component={"span"}>
                Youtube Playlist
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Grid item container direction="column">
            <Grid item sx={{ marginBottom: 1 }}>
              <Typography variant="body1" component={"a"}>
                Payment Types
              </Typography>
            </Grid>
            <Grid item>
              <Grid
                item
                container
                justifyContent="space-around"
                alignItems="center">
                <Grid item>
                  <img src={visaCard} />
                </Grid>
                <Grid item>
                  <img src={masterCard} />
                </Grid>
                <Grid item>
                  <img src={payPalPay} />
                </Grid>
                <Grid item>
                  <img src={applePay} />
                </Grid>
                <Grid item>
                  <img src={googlePay} />
                </Grid>
              </Grid>
            </Grid>
            <Grid item sx={{ marginBottom: 1 }}>
              <Typography variant="body1" component={"a"}>
                Connect with Us
              </Typography>
            </Grid>
            <Grid item>
              <Grid
                item
                container
                justifyContent="space-around"
                alignItems="center">
                <Grid item>
                  <img src={twitter1} />
                </Grid>
                <Grid item>
                  <img src={facebook2} />
                </Grid>
                <Grid item>
                  <img src={instagram3} />
                </Grid>
                <Grid item>
                  <img src={github4} />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Footer;

//background: rgba(64, 64, 64, 0.23);
