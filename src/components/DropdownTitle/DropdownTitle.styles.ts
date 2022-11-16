import { styled } from "@mui/material/styles";
import { theme } from "../..";

export const Container = styled("div")(() => ({
  display: "flex",
  alignSelf: "flex-end",
}));

type DropdownProps = {
  dropdownType?: "main" | "second";
  isOpen: boolean;
};
export const Dropdown = styled("div")<DropdownProps>(
  ({ dropdownType = "main", isOpen }) => ({
    cursor: "pointer",
    textTransform: "uppercase",
    fontFamily: theme.default.typography.fontFamily,
    fontWeight: "500",
    letterSpacing: dropdownType === "main" ? "0.8px" : "0.65px",
    fontSize: dropdownType === "main" ? "16px" : "13px",
    color: dropdownType === "main" ? "#141B4D" : "#00B19D",
    display: "flex",
    alignItems: "center",
    transition: "0.4s",
    "svg:last-child": {
      transition: "0.2s",
      transform: isOpen ? "rotate(0)" : "rotate(180deg)",
      color: dropdownType === "main" ? "#141B4D" : "#00B19D",
    },
  })
);
