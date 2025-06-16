import {StylesConfig} from "react-select";
import {OptionType} from "../../types/OptionType";

export const countStyleSelect: StylesConfig<OptionType, false> = {
    container: (base, state) => ({
        ...base,
        width: 88,
        height: 40,
        outline: state.isFocused ? 'none' : 'none',
    }),
    control: (base, state) => ({
        ...base,
        outline: 'none',
        boxShadow: 'none',
        borderColor: 'var(--lightestGrey)',
        '&:hover': {
            borderColor: 'var(--lightestGrey)',
        },
    }),
    singleValue: (base) => ({
        ...base,
        textAlign: 'center',
        width: '100%',
    }),

    option: (base, state) => ({
        ...base,
        paddingLeft: 22,
        backgroundColor: state.isSelected ? 'var(--white)' : 'var(--white)',
        color: 'var(--lightGrey)',
        cursor: 'pointer',
    }),


}