import { styled } from "@mui/material/styles";
import { theme } from "../..";
export const Container = styled("div")(() => ({
  display: "flex",
  height: "10rem",
}));

export const DropdownContainer = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
}));
type ChildContainerProps = {
  isVisible: boolean;
};

export const ChildContainer = styled("div")<ChildContainerProps>(
  ({ isVisible }) => ({
    left: 0,
    top: "90px",
    position: "absolute",
    background: theme.colors.white,
    borderRadius: "4px 0 4px 4px",
    fontFamily: theme.default.typography.fontFamily,
    fontWeight: "500",
    display: "flex",
    flexDirection: "column",
    animation: "ease-in",
    transition: "0.4s",
    zIndex: isVisible ? 2 : 0,
    cursor: isVisible ? "pointer" : "default",
    opacity: isVisible === true ? 1 : 0,
  })
);
