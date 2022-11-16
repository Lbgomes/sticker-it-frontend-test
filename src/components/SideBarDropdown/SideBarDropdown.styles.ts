import { styled } from "@mui/styles";
import { theme } from "../..";

export const Title = styled("div")(() => ({
  userSelect: "none",
  padding: "15px",
  cursor: "pointer",
  textTransform: "uppercase",
  fontFamily: theme.default.typography.fontFamily,
  fontWeight: "500",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
}));

export const Container = styled("div")(() => ({
  marginLeft: "1rem",
}));
