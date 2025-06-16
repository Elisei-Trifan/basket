import React from 'react';
import Select, {
    GroupBase,
    MenuPlacement,
    StylesConfig,
} from "react-select";
import {OptionType} from "../../types/OptionType";
import {CustomValueContainer} from "./CustomValueContainer";


type CustomSelectProps = {
    data: OptionType[]
    styles?: StylesConfig<OptionType, boolean, GroupBase<OptionType>>;
    defaultValue?: OptionType;
    classNamePrefix?: string;
    isMulti?: boolean;
    menuPlacement?: MenuPlacement;

};
export const CustomSelect: React.FC<CustomSelectProps> = ({
                                                              data,
                                                              styles,
                                                              defaultValue,
                                                              classNamePrefix,
                                                              isMulti,
                                                              menuPlacement
                                                          }) => {


    const customComponents = isMulti ? {ValueContainer: CustomValueContainer as any} : undefined


    return (
        <Select options={data} styles={styles} defaultValue={defaultValue} classNamePrefix={classNamePrefix}
                isMulti={isMulti} menuPlacement={menuPlacement} components={customComponents}/>
    );
};