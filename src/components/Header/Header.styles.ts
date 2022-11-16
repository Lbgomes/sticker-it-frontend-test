import { styled } from "@mui/material/styles";
import { theme } from "../..";

export const Container = styled("div")(() => ({
  height: "100vh",
  "@media(max-width: 1500px)": {
    display: "none",
  },
}));
export const WebContainer = styled("div")(() => ({
  color: theme.colors.blue,
  fontFamily: theme.default.typography.fontFamily,
  background: theme.colors.greenLightest,
  justifyContent: "space-between",
  display: "flex",
  alignItems: "center",
  height: "56px",
  gap: "60px",
  padding: "10px 20px",
  ".bag": {
    cursor: "pointer",
    color: theme.colors.greenDark,
  },
  h1: {
    margin: 0,
  },
}));

export const MobileContainer = styled("div")(() => ({
  color: theme.colors.blue,
  fontFamily: theme.default.typography.fontFamily,
  background: theme.colors.greenLightest,
  display: "flex",
  padding: "20px",
  justifyContent: "space-between",
  alignItems: "center",
  height: "56px",
  gap: "60px",
  ".hamburguer": {
    cursor: "pointer",
    color: theme.colors.greyLight,
  },
  ".bag": {
    cursor: "pointer",
    color: theme.colors.greenDark,
  },
  "@media(min-width: 1500px)": {
    display: "none",
  },
}));

export const Main = styled("div")(() => ({
  display: "flex",
  gap: "2.5rem",
  marginBlockEnd: "auto",
  marginTop: "1rem",
}));
export const Title = styled("h1")(() => ({
  cursor: "pointer",
  textTransform: "uppercase",
  fontFamily: theme.default.typography.fontFamily,
  fontWeight: "500",
  letterSpacing: "0.8px",
  fontSize: "16px",
  color: "#141B4D",
}));
export const Info = styled("div")(() => ({
  display: "flex",
  gap: "30px",
  marginBlockEnd: "auto",
  marginTop: "1rem",
  ".icon": {
    cursor: "pointer",
    color: theme.colors.greenDark,
  },
}));

export const HamburguerContainer = styled("div")(() => ({}));
