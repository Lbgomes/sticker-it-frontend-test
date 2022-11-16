import { styled } from "@mui/material/styles";
import { theme } from "../..";

export const DropdownContainer = styled("div")(() => ({
  marginLeft: "-7.5rem",
  border: "2px solid #00B19D",
  background: theme.colors.white,
  padding: "7px 15px 7px 7px",
  borderRadius: "4px 0 4px 4px",
  fontFamily: theme.default.typography.fontFamily,
  fontWeight: "500",
  display: "flex",
  flexDirection: "column",
}));
