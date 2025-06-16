import React from 'react';
import Select, {GroupBase, StylesConfig} from "react-select";
import {OptionType} from "../../types/OptionType";

type CustomSelectProps = {
    data: OptionType[]
    styles?: StylesConfig<OptionType, false, GroupBase<OptionType>>;
    defaultValue?: OptionType;
    classNamePrefix?: string;

};
export const CustomSelect: React.FC<CustomSelectProps> = ({data, styles, defaultValue, classNamePrefix}) => {


    return (
        <Select options={data} styles={styles} defaultValue={defaultValue} classNamePrefix={classNamePrefix}/>
    );
};