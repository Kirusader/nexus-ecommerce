/** @format */
import React, { useContext } from "react";
import HeaderTop from "./HeaderTop";
import Galaxy21Image from "../../assets/samsung s21.jpeg";
import GalaxyA12Image from "../../assets/Galaxy A12.jpeg";
import SonyPlayStation from "../../assets/Sonyplaystation.jpeg";
import drawerBackground from "../../assets/plates.png";
import {
  Button,
  AppBar,
  Toolbar,
  Tabs,
  Tab,
  Box,
  Typography,
  InputBase,
  IconButton,
  Drawer,
  List,
  ListItemText,
  ListItemButton,
  Grid,
  ListItemIcon,
  ListSubheader,
  Badge,
  Menu,
  MenuItem,
  Tooltip,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from "@mui/material";
import AccountCircleIcon from "../../assets/UserCircle.svg";
import {
  Menu as MenuIcon,
  Search as SearchIcon,
  ShoppingCart as ShoppingCartIcon,
  ChevronRight as ChevronRightIcon,
  RemoveCircleOutline,
  AddCircleOutline,
} from "@mui/icons-material";
import { styled, useTheme } from "@mui/material/styles";
import { alpha } from "@mui/material";
import { Link } from "react-router-dom";
import { useState } from "react";
import CartContext from "../../store/CartContext";
import UserProgressContext from "../../store/UserProgressContext";
import { currencyFormatter } from "../../util/formatting";
const StyledTab = styled(Tab)(({ theme }) => ({
  ...theme.typography.subtitle2,
  marginLeft: "2px",
  padding: "2px",
  opacity: 0.7,
  "&:hover": {
    opacity: 1,
  },
}));
const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: 20,
    top: 3,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));
const StyledMenuItem = styled(MenuItem)({
  "&:hover": {
    backgroundColor: "#eeeeee",
    fontWeight: 500,
  },
});
const Search = styled("div")(({ theme }) => ({
  position: "relative",
  flexGrow: 1,
  height: "34px",
  display: "flex",
  alignItems: "center",
  borderRadius: 30,
  backgroundColor: alpha(theme.palette.common.grey, 0.24),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.grey, 0.6),
  },
  marginLeft: 4,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  fontSize: "1.1rem",
  color: "#000",
  width: "100%",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    [theme.breakpoints.up("sm")]: {
      width: "15ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));
const StyledListItemButton = styled(ListItemButton)(({ theme, selected }) => ({
  "&.Mui-selected, &.Mui-selected:hover": {
    backgroundColor: alpha(theme.palette.common.grey, 0.2),
  },
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.grey, 0.24),
  },
}));

export default function Header() {
  const [value, setValue] = useState(0);
  const [cart, setCart] = useState(0);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedSubCategory, setSelectedSubCategory] = useState(null);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [checkoutDialogOpen, setCheckoutDialogOpen] = useState(false);
  const cartCtxt = useContext(CartContext);
  const categories = {
    "Computer & Laptop": ["dell", "hp", "apple"],
    "Computer Accessories": ["Keyboard", "Mouse", "Printers"],
    "Smart Phone": [
      "iphone",
      "Samsung",
      "Realme",
      "Xiaomi",
      "Oppo",
      "Vivo",
      "OnePlus",
      "Huawei",
      "Infinix",
      "Tecno",
      "Nokia",
    ],
    HeadPhone: ["airpods", "sony"],
    "Mobile Accessories": ["screen protector", "memory card"],
    "Game Console": ["Xbox"],
    "Camera & Photo": ["Sony digital"],
    "TV & Home Appliances": ["Fridge"],
    "Watches & Accessories": ["Sekko"],
    "GPS & Navigation": ["Alto Sat Nav"],
    "Warable Technology": ["Cleaning Solution"],
    homeaccessories: ["kitchen", "living room", "bedroom"],
  };
  const featuredItems = {
    iphone: [
      {
        productImage: Galaxy21Image,
        phoneType: "Samsung Electronics",
        model: "Samsung Galaxy S21 5G",
        price: 160,
      },
      {
        productImage: GalaxyA12Image,
        phoneType: "Simple Mobile 5G LTE Galaxy",
        model: "12 Mini 512GB Gaming Phone",
        price: 100,
      },
      {
        productImage: SonyPlayStation,
        phoneType: "Sony DSCHX8 High Zoom",
        model: "Point & Shoot Camera",
        price: 2300,
      },
    ],
    Samsung: [
      {
        productImage: Galaxy21Image,
        phoneType: "Samsung Electronics",
        model: "Samsung Galaxy S21 5G",
        price: 160,
      },
      {
        productImage: GalaxyA12Image,
        phoneType: "Simple Mobile 5G LTE Galaxy",
        model: "12 Mini 512GB Gaming Phone",
        price: 100,
      },
      {
        productImage: SonyPlayStation,
        phoneType: "Sony DSCHX8 High Zoom",
        model: "Point & Shoot Camera",
        price: 2300,
      },
    ],
  };

  const totalCartItems = cartCtxt.items.reduce((totalNumberOfItems, item) => {
    return totalNumberOfItems + item.quantity;
  }, 0);
  const cartTotal = cartCtxt.items.reduce((totalPrice, item) => {
    return totalPrice + item.quantity * item.price;
  }, 0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const handleMenuClick = () => {
    setDrawerOpen(!drawerOpen);
  };

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    if (!drawerOpen) {
      setDrawerOpen(true);
    }
  };
  const handleSubCategoryClick = (subCategory) => {
    setSelectedSubCategory(subCategory);
  };
  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
  };
  function handleDialogOpen() {
    setDialogOpen(true);
  }
  function handleDialogClose() {
    setDialogOpen(false);
  }
  function handleOpenCheckoutDialog() {
    setCheckoutDialogOpen(true);
  }
  function handleCloseCheckoutDialog() {
    setCheckoutDialogOpen(false);
  }
  return (
    <div>
      <HeaderTop />
      <Box>
        <hr style={{ color: "gray", width: "80%" }} />
        <Box>
          <AppBar
            position="static"
            elevation={0}
            sx={{ width: "85%", marginLeft: 11, marginBottom: 5 }}>
            <Toolbar disableGutters>
              <Typography variant="h2" component={Link} to="/">
                ShopMe
              </Typography>

              <Tabs
                sx={{ marginRight: 4 }}
                value={value}
                onChange={handleChange}
                indicatorColor="transparent">
                <StyledTab icon={<MenuIcon onClick={handleMenuClick} />} />
                <StyledTab label="On Sale" component={Link} to="/onsales" />
                <StyledTab
                  label="New Arrivals"
                  component={Link}
                  to="/newarrivals"
                />
                <StyledTab label="Brands" component={Link} to="/brands" />
              </Tabs>
              <Search>
                <SearchIconWrapper>
                  <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                  placeholder="Search for products…"
                  inputProps={{ "aria-label": "search" }}
                />
              </Search>
              <StyledBadge
                badgeContent={totalCartItems}
                color="primary"
                showZero>
                <IconButton onClick={handleDialogOpen}>
                  <ShoppingCartIcon color="error" />
                </IconButton>
              </StyledBadge>
              <Tooltip title={"User Account"}>
                <IconButton
                  aria-controls="account-menu"
                  aria-haspopup="true"
                  onClick={handleMenuOpen}>
                  <img src={AccountCircleIcon} />
                </IconButton>
              </Tooltip>

              <Menu
                id="account-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleMenuClose}>
                <StyledMenuItem
                  component={Link}
                  to="/useraccount"
                  onClick={handleMenuClose}>
                  Your Account
                </StyledMenuItem>
                <StyledMenuItem onClick={handleMenuClose}>
                  Your Orders
                </StyledMenuItem>
                <StyledMenuItem onClick={handleMenuClose}>
                  Your Favourites
                </StyledMenuItem>
                <StyledMenuItem onClick={handleMenuClose}>
                  Customer Contact
                </StyledMenuItem>
                <StyledMenuItem onClick={handleMenuClose}>
                  Log Out
                </StyledMenuItem>
              </Menu>
              <Dialog
                open={dialogOpen}
                onClose={handleDialogClose}
                PaperProps={{
                  style: { minWidth: 700, py: "3em", px: "2em" },
                }}>
                <DialogContent>
                  <Grid container direction="column">
                    <Grid item>
                      <Typography
                        variant="h4"
                        component="div"
                        sx={{
                          width: "100%",
                          textAlign: "center",
                          marginBottom: 2,
                        }}>
                        Your Cart
                      </Typography>
                    </Grid>
                    {cartCtxt.items.map((item) => (
                      <Grid item>
                        <Grid item container justifyContent="space-around">
                          <Grid item>
                            <Typography
                              variant="body1"
                              component={"div"}
                              sx={{
                                width: 300,
                                textAlign: "left",
                                paddingBottom: 2,
                              }}>
                              {item.title}-{item.quantity} *
                              {currencyFormatter.format(item.price)}
                            </Typography>
                          </Grid>
                          <Grid
                            item
                            sx={{
                              width: "auto",
                              alignSelf: "right",
                              marginLeft: 2,
                            }}>
                            <Grid
                              item
                              container
                              justifyContent="space-around"
                              alignItems="center">
                              <Grid item>
                                <IconButton
                                  onClick={() => cartCtxt.removeItem(item.id)}>
                                  <RemoveCircleOutline />
                                </IconButton>
                              </Grid>
                              <Grid item>
                                <Typography
                                  variant="subtitle2"
                                  component={"span"}>
                                  {item.quantity}
                                </Typography>
                              </Grid>
                              <Grid item>
                                <IconButton
                                  onClick={() => cartCtxt.addItem(item)}>
                                  <AddCircleOutline />
                                </IconButton>
                              </Grid>
                            </Grid>
                          </Grid>
                        </Grid>
                      </Grid>
                    ))}
                    <Grid item>
                      <Typography
                        variant="h3"
                        component={"div"}
                        textAlign="right"
                        sx={{ paddingRight: 3 }}>
                        {currencyFormatter.format(cartTotal)}
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Grid
                        item
                        container
                        justifyContent={"space-around"}
                        sx={{ my: 2 }}>
                        <Grid item>
                          <Button onClick={handleDialogClose}>Cancel</Button>
                        </Grid>
                        <Grid item>
                          {cartCtxt.items.length > 0 && (
                            <Button
                              onClick={() => {
                                handleOpenCheckoutDialog();
                                handleDialogClose();
                              }}>
                              Checkout
                            </Button>
                          )}
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </DialogContent>
              </Dialog>
              <Dialog
                open={checkoutDialogOpen}
                onClose={handleCloseCheckoutDialog}>
                <DialogTitle>WelCome to Checkout</DialogTitle>
              </Dialog>
            </Toolbar>
          </AppBar>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          margin: 5,
          backgroundImage: `url(${drawerBackground})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}>
        <Drawer
          variant="persistent"
          elevation={10}
          sx={{
            "& .MuiDrawer-paper": {
              width: 240,
              height: "auto",
              position: "relative",
              bgcolor: "background.paper",
              border: "1px solid #ccc",
              boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.2)",
            },
          }}
          anchor="left"
          open={drawerOpen}>
          <List
            sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
            {Object.keys(categories).map((category) => (
              <StyledListItemButton
                sx={{
                  backgroundColor:
                    selectedCategory === category ? "#eeeeee" : undefined,
                }}
                key={category}
                onClick={() => handleCategoryClick(category)}>
                <ListItemText
                  primary={category}
                  primaryTypographyProps={{
                    variant: "subtitle2",
                    style: {
                      fontWeight: selectedCategory === category ? 500 : 300,
                    },
                  }}
                />

                <ListItemIcon>
                  {selectedCategory === category ? <ChevronRightIcon /> : null}
                </ListItemIcon>
              </StyledListItemButton>
            ))}
          </List>
        </Drawer>

        <Drawer
          anchor="left"
          variant="persistent"
          open={drawerOpen}
          sx={{
            "& .MuiDrawer-paper": {
              marginLeft: 2,
              width: 450,
              height: "auto",
              position: "relative",
              bgcolor: "background.paper",
              border: "1px solid #ccc",
              boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.2)",
            },
          }}>
          <Grid container spacing={6}>
            <Grid item lg={4}>
              <List
                subheader={
                  <ListSubheader component="div" id="nested-list-subheader">
                    All
                  </ListSubheader>
                }>
                {selectedCategory &&
                  categories[selectedCategory].map((subCategory) => (
                    <Grid item>
                      <StyledListItemButton
                        alignItems="center"
                        key={subCategory}
                        sx={{
                          backgroundColor:
                            selectedSubCategory === subCategory
                              ? "#eeeeee"
                              : undefined,
                        }}
                        onClick={() => handleSubCategoryClick(subCategory)}>
                        <ListItemText
                          primary={subCategory}
                          primaryTypographyProps={{
                            variant: "subtitle2",
                            style: {
                              fontWeight:
                                selectedSubCategory === subCategory ? 500 : 300,
                            },
                          }}
                        />
                        {selectedSubCategory === subCategory ? (
                          <ChevronRightIcon />
                        ) : null}
                      </StyledListItemButton>
                    </Grid>
                  ))}
              </List>
            </Grid>
            <Grid item lg={8}>
              <Grid item container direction="column">
                <Grid item>
                  <Typography variant="h6" component="div">
                    FEATURED PHONES
                  </Typography>
                </Grid>

                <Grid item>
                  <List>
                    {selectedSubCategory ? (
                      featuredItems[selectedSubCategory].map((item, index) => (
                        <Box
                          sx={{
                            border: "1px solid #ccc",
                            margin: 2,
                            paddingLeft: 2,
                          }}>
                          <Grid
                            item
                            container
                            key={index}
                            alignItems="center"
                            justifyContent="flex-start"
                            sx={{ maxWidth: "100%" }}>
                            <Grid item xs={12} sm={4}>
                              <img
                                src={item.productImage}
                                alt={item.model}
                                style={{ maxWidth: 60, height: "auto" }}
                              />
                            </Grid>
                            <Grid
                              item
                              xs={12}
                              sm={8}
                              sx={{ maxWidth: 300, margin: 0 }}>
                              <Grid item container direction="column">
                                <Box padding={2}>
                                  <Grid item>
                                    <Typography variant="subtitle2">
                                      {item.phoneType}
                                    </Typography>
                                  </Grid>
                                  <Grid item>
                                    <Typography variant="subtitle2">
                                      {item.model}
                                    </Typography>
                                  </Grid>
                                  <Grid item>
                                    <Typography variant="h4">
                                      ${item.price}
                                    </Typography>
                                  </Grid>
                                </Box>
                              </Grid>
                            </Grid>
                          </Grid>
                        </Box>
                      ))
                    ) : (
                      <Grid item>
                        <StyledListItemButton>
                          <ListItemText primary="Select the product category to view our featured products." />
                        </StyledListItemButton>
                      </Grid>
                    )}
                  </List>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Drawer>
      </Box>
    </div>
  );
}
