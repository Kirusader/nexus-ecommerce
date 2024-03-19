/** @format */

import Header from "@/components/header";
import Footer from "@/components/footer";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import { ThemeProvider } from "@mui/material/styles";
import theme from "@/theme";
export default function RootLayout(props) {
  return (
    <html lang="en">
      <body>
        <AppRouterCacheProvider>
          <Header />
          <ThemeProvider theme={theme}>{props.children} </ThemeProvider>
          <Footer />
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}

export const metadata = {
  title: "Nexus Ecommerce",
  description: "world wide delivery",
};
