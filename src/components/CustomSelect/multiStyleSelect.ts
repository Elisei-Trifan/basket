import { StylesConfig } from "react-select";
import { OptionType } from "../../types/OptionType";

export const multiStyleSelect: StylesConfig<OptionType> = {
  container: (base) => ({
    ...base,
    width: 366,
    height: 40,
  }),
  control: (base) => ({
    ...base,
    outline: "none",
    boxShadow: "none",
    borderColor: "var(--lightestGrey)",
    "&:hover": {
      borderColor: "var(--lightestGrey)",
    },
  }),
  option: (base, state) => ({
    ...base,
    paddingLeft: 22,
    backgroundColor: state.isSelected ? "var(--white)" : "var(--white)",
    color: "var(--lightGrey)",
    cursor: "pointer",
  }),
};
