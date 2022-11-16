import { styled } from "@mui/material/styles";
import { theme } from "../..";

export const Container = styled("div")(() => ({
  position: "absolute",
  left: 0,
  bottom: 0,
  width: "100%",
  height: "100vh",
  overflowY: "auto",
  background: "#00000052",
}));

export const SideBarContainer = styled("div")(() => ({
  maxHeight: "100vh",
  overflow: "auto",
  position: "absolute",
  background: theme.colors.white,
  left: 0,
  bottom: 0,
  width: "80%",
  height: "100%",
  input: {
    borderBottom: "none",
  },
}));

export const DropdownContainer = styled("div")(() => ({
  borderBottom: `1px solid ${theme.colors.greyLight}`,
}));

export const Title = styled("div")(() => ({
  userSelect: "none",
  padding: "13px",
  cursor: "pointer",
  textTransform: "uppercase",
  fontFamily: theme.default.typography.fontFamily,
  color: theme.colors.greyLight,
  fontWeight: "500",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
}));

export const SearchContainer = styled("div")(() => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  border: `1px solid ${theme.colors.greyLight}`,
  borderRadius: "4px",
  padding: "6px",
  margin: "15px",
}));
