import { styled } from "@mui/material/styles";
import { theme } from "../..";

export const Container = styled("div")(() => ({
  fontFamily: theme.default.typography.fontFamily,
  gap: "28px",
  padding: "28px",
  border: `2px solid ${theme.colors.greenLightest}`,
  display: "flex",
  placeContent: "center",
}));

export const ItemContainer = styled("div")(() => ({
  borderRadius: "9px",
  border: `1px solid ${theme.colors.greenLight}`,
  boxShadow: "0px 3px 6px #00000065",
}));
