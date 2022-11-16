import { styled } from "@mui/material/styles";
import { theme } from "../..";

export const Container = styled("div")(() => ({
  height: "285px",
  width: "230px",
  gap: "20px",
  display: "flex",
  flexDirection: "column",
  maxWidth: "270px",
}));

export const Title = styled("h1")(() => ({
  fontFamily: theme.default.typography.fontFamily,
  color: theme.colors.blue,
  alignSelf: "center",
  fontWeight: 500,
  fontSize: "21px",
  margin: 0,
}));
export const ContentContainer = styled("div")(() => ({
  width: "230px",
  height: "232px",
  placeItems: "end",
  display: "flex",
  button: {
    margin: "8px",
    background: " #FFFFFFBF ",
  },
  "button:hover": {
    background: " #ffffffda ",
  },
}));

export const ImageContainer = styled("img")(() => ({
  position: "absolute",
  width: "230px",
  height: "232px",
  borderRadius: "9px",
}));
