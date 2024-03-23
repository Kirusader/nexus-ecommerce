/** @format */

import { Button, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import ipadProLaptop from "../../assets/ipadProLaptop.png";
import { styled, useTheme } from "@mui/material/styles";
import ButtonArrow from "./ButtonArrow";
import avatarReview from "../../assets/UserCircle.svg";
import avatarCalander from "../../assets/CalendarBlank.svg";
import avatarMessageReview from "../../assets/ChatCircleDots.svg";
import readMoreImage1 from "../../assets/readmoreImg1.svg";
import readMoreImage2 from "../../assets/readmoreImg2.svg";
import readMoreImage3 from "../../assets/readmoreImg3.svg";
const StyledShopNowButton = styled(Button)(({ theme }) => ({
  ...theme.typography.shopnow,
  backgroundColor: theme.palette.common.orange,
  borderRadius: 50,
  height: 45,
  width: 145,
  marginRight: 40,
  "&:hover": {
    backgroundColor: theme.palette.secondary.light,
  },
}));
const StyledReadMoreButton = styled(Button)(({ theme }) => ({
  ...theme.typography.readMore,
  fontSize: "0.9rem",
  height: 45,
  width: 160,
  [theme.breakpoints.down("sm")]: {
    marginBottom: "2em",
    marginTop: "1em",
  },
}));

const SampleProduct = () => {
  const theme = useTheme();
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const getProducts = async () => {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      setProducts(data);
    };
    getProducts();
  }, []);

  return (
    <Grid item>
      <Grid
        item
        container
        justifyContent="space-around"
        alignItems="center"
        sx={{ backgroundColor: "#FFE7D6", mx: "auto", my: 5, width: "90%" }}>
        <Grid item>
          <Grid item container direction="column" sx={{ marginLeft: 4 }}>
            <Grid item>
              <Button
                sx={{
                  borderRadius: "2px",
                  backgroundColor: "#2DA5F3",
                  color: "#fff",
                  padding: 2,
                  my: 2,
                  width: "200px",
                  height: "32px",
                }}
                variant="contained"
                size="xs">
                SAVE UP TO £200.00
              </Button>
            </Grid>
            <Grid item>
              <Typography variant="h1" component="div">
                Macbook Pro
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                variant="subtitle2"
                paragraph
                sx={{ fontWeight: 300, fontSize: "1.2rem", maxWidth: 300 }}>
                Apple M1 Max Chip, 32GB Unified Memory, 1TB SSD Storage
              </Typography>
            </Grid>
            <Grid item>
              <StyledShopNowButton variant="contained">
                <span style={{ marginRight: 10 }}>Shop Now</span>
                <ButtonArrow width={19} height={19} fill={"white"} />
              </StyledShopNowButton>
            </Grid>
          </Grid>
        </Grid>

        <Grid item>
          <Grid item container direction="column">
            <Grid item>
              <Typography
                variant="body1"
                component="span"
                sx={{
                  position: "relative",
                  top: 120,
                  right: -10,
                  border: "6px solid #FFFFFF",
                  backgroundColor: "#FFCEAD",
                  borderRadius: 1000,
                  width: 30,
                  height: 30,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "15px",
                }}>
                £1999
              </Typography>
            </Grid>
            <Grid item>
              <img src={ipadProLaptop} alt="ipad pro laptop" />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <Typography variant="h2" component="div" sx={{ marginLeft: 6 }}>
          Products
        </Typography>{" "}
      </Grid>
      <Grid item>
        <div
          style={{
            marginBottom: 20,
            borderTop: "2px dashed red",
            width: "92%",
            marginLeft: 40,
          }}></div>
      </Grid>
      <Grid item sx={{ mx: "auto", width: "94%", marginTop: 5 }}>
        <Grid item container>
          {products.map((product) => (
            <Grid
              item
              key={product.id}
              sx={{
                border: "1px solid #E4E7E9",
                borderRadius: "3px",
                marginLeft: 2,
                paddingBottom: 0,
                my: 3,
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
                height: "100%",
              }}>
              <Grid
                item
                container
                direction="column"
                justifyContent="center"
                alignItems="center">
                <Grid item>
                  <Typography
                    variant="h6"
                    component="div"
                    sx={{
                      width: 200,
                      textAlign: "left",
                      display: "inline-block",
                      color: "white",
                      marginTop: 2,
                      paddingLeft: 1,
                      marginBottom: 2,
                    }}>
                    {product.price * 100 < 10000 ? (
                      <Button
                        sx={{ backgroundColor: "#2DA5F3", color: "white" }}>
                        Best deals
                      </Button>
                    ) : product.price * 100 > 70000 ? (
                      <Button
                        sx={{ backgroundColor: "#EE5858", color: "white" }}>
                        Hot
                      </Button>
                    ) : (
                      <Button
                        sx={{ backgroundColor: "#2DB324", color: "white" }}>
                        Sale
                      </Button>
                    )}
                  </Typography>
                </Grid>
                <Grid item>
                  <Button>
                    <img
                      src={product.image}
                      style={{ width: "160px", height: "160px" }}
                      alt="galaxy phone"
                    />
                  </Button>
                </Grid>
                <Grid item sx={{ marginTop: 3 }}>
                  ⭐⭐⭐⭐⭐({product.price * 100})
                </Grid>
                <Grid item>
                  <Typography
                    variant=" subtitle1"
                    component="div"
                    sx={{ maxWidth: 200, my: 2, mx: 1 }}>
                    {product.title}
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography
                    variant="body1"
                    sx={{
                      width: 200,
                      marginBottom: 0,
                      textAlign: "left",
                      fontSize: "1.2rem",
                      fontWeight: 600,
                      color: "#3261e3",
                      paddingBottom: 0,
                      mx: 1,
                      marginTop: "auto",
                    }}
                    component="div">
                    £{product.price}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          ))}
        </Grid>
      </Grid>
      <Grid
        item
        sx={{ backgroundColor: "#F2F4F5", width: "100%", marginTop: 2 }}>
        <Grid item container direction="column">
          <Grid item>
            <Typography
              variant="h5"
              component="div"
              sx={{ textAlign: "center", fontWeight: 500, paddingTop: 4 }}>
              Latest News
            </Typography>
          </Grid>
          <Grid
            item
            sx={{
              width: "90%",
              mx: "auto",
              my: 5,
            }}>
            <Grid
              item
              container
              justifyContent="space-around"
              alignItems="center">
              <Grid item>
                <Grid item container direction="column">
                  <Grid item>
                    <img src={readMoreImage1} alt="" />
                  </Grid>
                  <Grid item>
                    <Grid item container spacing={2} sx={{ marginTop: 1 }}>
                      <Grid item>
                        <Grid item container>
                          <Grid item>
                            <img src={avatarReview} />
                          </Grid>
                          <Grid item>
                            <Typography variant="subtitle2" component={"span"}>
                              Kristin
                            </Typography>
                          </Grid>
                        </Grid>
                      </Grid>
                      <Grid item>
                        <Grid item container>
                          <Grid item>
                            <img src={avatarCalander} />
                          </Grid>
                          <Grid item>
                            <Typography variant="subtitle2" component={"span"}>
                              19Dec,2023
                            </Typography>
                          </Grid>
                        </Grid>
                      </Grid>
                      <Grid item>
                        <Grid item container>
                          <Grid item>
                            <img src={avatarMessageReview} />
                          </Grid>
                          <Grid item>
                            <Typography variant="subtitle2" component={"span"}>
                              453
                            </Typography>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item>
                    <Typography
                      variant="body1"
                      component={"div"}
                      sx={{
                        fontSize: "1.0rem",
                        maxWidth: 300,
                        lineHeight: "20px",
                      }}>
                      Cras nisl dolor, accumsan et metus sit amet, vulputate
                      condimentum dolor.
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography
                      variant="subtitle2"
                      component={"div"}
                      sx={{
                        width: 300,
                        fontWeight: 300,
                        fontSize: "0.8rem",
                        my: 1,
                      }}>
                      Maecenas scelerisque, arcu quis tempus egestas, ligula
                      diam molestie lectus, tincidunt malesuada arcu metus
                      posuere metus.
                    </Typography>
                  </Grid>
                  <Grid item>
                    <StyledReadMoreButton variant="outlined">
                      {" "}
                      <span style={{ marginRight: 10 }}>READ MORE</span>
                      <ButtonArrow width={19} height={19} fill={"orange"} />
                    </StyledReadMoreButton>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item>
                <Grid item container direction="column">
                  <Grid item>
                    <img src={readMoreImage2} alt="" />
                  </Grid>
                  <Grid item>
                    <Grid item container spacing={2} sx={{ marginTop: 1 }}>
                      <Grid item>
                        <Grid item container>
                          <Grid item>
                            <img src={avatarReview} />
                          </Grid>
                          <Grid item>
                            <Typography variant="subtitle2" component={"span"}>
                              Kristin
                            </Typography>
                          </Grid>
                        </Grid>
                      </Grid>
                      <Grid item>
                        <Grid item container>
                          <Grid item>
                            <img src={avatarCalander} />
                          </Grid>
                          <Grid item>
                            <Typography variant="subtitle2" component={"span"}>
                              19Dec,2023
                            </Typography>
                          </Grid>
                        </Grid>
                      </Grid>
                      <Grid item>
                        <Grid item container>
                          <Grid item>
                            <img src={avatarMessageReview} />
                          </Grid>
                          <Grid item>
                            <Typography variant="subtitle2" component={"span"}>
                              453
                            </Typography>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item>
                    <Typography
                      variant="body1"
                      component={"div"}
                      sx={{
                        fontSize: "1.0rem",
                        maxWidth: 300,
                        lineHeight: "20px",
                      }}>
                      Cras nisl dolor, accumsan et metus sit amet, vulputate
                      condimentum dolor.
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography
                      variant="subtitle2"
                      component={"div"}
                      sx={{
                        width: 300,
                        fontWeight: 300,
                        fontSize: "0.8rem",
                        my: 1,
                      }}>
                      Maecenas scelerisque, arcu quis tempus egestas, ligula
                      diam molestie lectus, tincidunt malesuada arcu metus
                      posuere metus.
                    </Typography>
                  </Grid>
                  <Grid item>
                    <StyledReadMoreButton variant="outlined">
                      {" "}
                      <span style={{ marginRight: 10 }}>READ MORE</span>
                      <ButtonArrow width={19} height={19} fill={"orange"} />
                    </StyledReadMoreButton>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item>
                <Grid item container direction="column">
                  <Grid item>
                    <img src={readMoreImage3} alt="" />
                  </Grid>
                  <Grid item>
                    <Grid item container spacing={2} sx={{ marginTop: 1 }}>
                      <Grid item>
                        <Grid item container>
                          <Grid item>
                            <img src={avatarReview} />
                          </Grid>
                          <Grid item>
                            <Typography variant="subtitle2" component={"span"}>
                              Kristin
                            </Typography>
                          </Grid>
                        </Grid>
                      </Grid>
                      <Grid item>
                        <Grid item container>
                          <Grid item>
                            <img src={avatarCalander} />
                          </Grid>
                          <Grid item>
                            <Typography variant="subtitle2" component={"span"}>
                              19Dec,2023
                            </Typography>
                          </Grid>
                        </Grid>
                      </Grid>
                      <Grid item>
                        <Grid item container>
                          <Grid item>
                            <img src={avatarMessageReview} />
                          </Grid>
                          <Grid item>
                            <Typography variant="subtitle2" component={"span"}>
                              453
                            </Typography>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item>
                    <Typography
                      variant="body1"
                      component={"div"}
                      sx={{
                        fontSize: "1.0rem",
                        maxWidth: 300,
                        lineHeight: "20px",
                      }}>
                      Cras nisl dolor, accumsan et metus sit amet, vulputate
                      condimentum dolor.
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography
                      variant="subtitle2"
                      component={"div"}
                      sx={{
                        width: 300,
                        fontWeight: 300,
                        fontSize: "0.8rem",
                        my: 1,
                      }}>
                      Maecenas scelerisque, arcu quis tempus egestas, ligula
                      diam molestie lectus, tincidunt malesuada arcu metus
                      posuere metus.
                    </Typography>
                  </Grid>
                  <Grid item>
                    <StyledReadMoreButton variant="outlined">
                      {" "}
                      <span style={{ marginRight: 10 }}>READ MORE</span>
                      <ButtonArrow width={19} height={19} fill={"orange"} />
                    </StyledReadMoreButton>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default SampleProduct;
