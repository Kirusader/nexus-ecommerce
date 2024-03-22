/** @format */
"use client";
import { Grid, IconButton, Typography } from "@mui/material";
import { useTheme, styled } from "@mui/material/styles";

import {
  KeyboardArrowDown as KeyboardArrowDownIcon,
  Twitter,
  Facebook as FacebookIcon,
  Instagram,
  YouTube,
  MusicNote,
  Pinterest,
} from "@mui/icons-material";

const StyledIconButton = styled(IconButton)(({ theme }) => ({
  color: "white",
  width: 40,
  height: 40,
}));
export default function HeaderTop() {
  const theme = useTheme();
  return (
    <Grid
      container
      justifyContent="space-evenly"
      alignItems="center"
      sx={{ backgroundColor: theme.palette.common.orange }}>
      <Grid item>
        <Typography
          variant="subtitle1"
          component={"a"}
          href="/"
          sx={{ textDecoration: "none" }}>
          Welcome to ShopMe eCommerce store
        </Typography>
      </Grid>
      <Grid item>
        <Grid item container alignItems="center" justifyContent="space-evenly">
          <Grid item>
            <Grid item container alignItems="center">
              <Grid item>
                <Typography variant="subtitle1">Follow Us:</Typography>
              </Grid>
              <Grid item>
                <Grid item container>
                  <Grid item>
                    <StyledIconButton
                      rel="noopener noreferrer"
                      target="_blank"
                      component={"a"}
                      href="http://www.twitter.com">
                      <Twitter />
                    </StyledIconButton>
                  </Grid>
                  <Grid item>
                    <StyledIconButton
                      rel="noopener noreferrer"
                      target="_blank"
                      component={"a"}
                      href="http://www.facebook.com">
                      <FacebookIcon />
                    </StyledIconButton>
                  </Grid>
                  <Grid item>
                    <StyledIconButton
                      rel="noopener noreferrer"
                      target="_blank"
                      component={"a"}
                      href="http://www.pinterest.com">
                      <Pinterest />
                    </StyledIconButton>
                  </Grid>
                  <Grid item>
                    <StyledIconButton
                      rel="noopener noreferrer"
                      target="_blank"
                      component={"a"}
                      href="http://www.tiktok.com">
                      <MusicNote />
                    </StyledIconButton>
                  </Grid>
                  <Grid item>
                    <StyledIconButton
                      rel="noopener noreferrer"
                      target="_blank"
                      component={"a"}
                      href="http://www.youtube.com">
                      <YouTube />
                    </StyledIconButton>
                  </Grid>
                  <Grid item>
                    <StyledIconButton
                      rel="noopener noreferrer"
                      target="_blank"
                      component={"a"}
                      href="http://www.instagram.com">
                      <Instagram />
                    </StyledIconButton>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Grid
              item
              container
              justifyContent="space-around"
              alignItems="center"
              sx={{ marginLeft: 4 }}>
              <Grid item>
                <Grid
                  item
                  container
                  justifyContent="flex-end"
                  alignItems="center">
                  <Grid item>
                    <Typography variant="subtitle1">Eng</Typography>
                  </Grid>
                  <Grid item>
                    <StyledIconButton>
                      <KeyboardArrowDownIcon />
                    </StyledIconButton>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item>
                <Grid
                  item
                  justifyContent="flex-end"
                  alignItems="center"
                  container>
                  <Grid item>
                    <Typography variant="subtitle1">USD</Typography>
                  </Grid>
                  <Grid item>
                    <StyledIconButton>
                      <KeyboardArrowDownIcon />
                    </StyledIconButton>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
