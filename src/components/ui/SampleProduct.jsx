/** @format */

import { Button, Grid, Typography } from "@mui/material";
import React from "react";
import ipadProLaptop from "../../assets/ipadProLaptop.png";
import { styled, useTheme } from "@mui/material/styles";
import ButtonArrow from "./ButtonArrow";
const StyledEstimateButton = styled(Button)(({ theme }) => ({
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
const SampleProduct = () => {
  const theme = useTheme();
  return (
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
            <StyledEstimateButton variant="contained">
              <span style={{ marginRight: 10 }}>Shop Now</span>
              <ButtonArrow
                width={19}
                height={19}
                fill={"white"}
              />
            </StyledEstimateButton>
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
  );
};

export default SampleProduct;
