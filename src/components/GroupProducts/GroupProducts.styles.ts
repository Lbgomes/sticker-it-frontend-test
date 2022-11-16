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

export const ItensContainer = styled("div")(() => ({
  background: theme.colors.white,
  padding: "7px 15px 7px 7px",
  borderRadius: "4px 0 4px 4px",
  fontFamily: theme.default.typography.fontFamily,
  fontWeight: "500",
  display: "flex",
  alignItems: "center",
  gap: "3rem",
}));

export const Line = styled("div")(() => ({
  width: "0px",
  height: "215px",
  borderRight: `1px solid ${theme.colors.greenLight}`,
}));
