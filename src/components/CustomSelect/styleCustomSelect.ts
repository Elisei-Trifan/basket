import {StylesConfig} from "react-select";
import {OptionType} from "../../types/OptionType";

export const styleCustomSelect: StylesConfig<OptionType, false> = {
    container: (base) => ({
        ...base,
        width: 366,
        height:40,
    }),
    // control: (base) => ({
    //     ...base,
    //     minHeight: 50,
    // }),
    // valueContainer: (base) => ({
    //     ...base,
    //     height: 50,
    //     padding: '0 8px',
    // }),
    // indicatorsContainer: (base) => ({
    //     ...base,
    //     height: 50,
    // }),
}