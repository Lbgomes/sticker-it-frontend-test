import { styled } from "@mui/material/styles";
import { theme } from "../..";

type ItemContainerProps = {
  isVisible: boolean;
};

export const ItemContainer = styled("div")<ItemContainerProps>(
  ({ isVisible }) => ({
    fontFamily: theme.default.typography.fontFamily,
    cursor: isVisible ? "pointer" : "default",
    padding: "8px",
    borderRadius: "8px",
    color: theme.colors.blue,
    letterSpacing: "-0.16px",
    fontWeight: "500",
    display: "flex",
    alignItems: "center",
    transition: "0.3s",
    gap: "17px",

    "&:hover": {
      background: "#cce4f6c4",
    },
  })
);
