import {components, ValueContainerProps} from "react-select";
import {OptionType} from "../../types/OptionType";
import React from "react";

export const CustomValueContainer = (props: ValueContainerProps<OptionType, true>) => {
    const {getValue, hasValue, selectProps, children} = props;
    const selected = getValue();
    const [first, ...restSelected] = selected;

    const firstStyles = {
        borderRadius: 4,
        padding: '2px 6px',
        fontSize: 14,
        color: 'var(--white)',
        backgroundColor: 'var(--red)',
        display: 'flex',
        alignItems: 'center',
        gap: 8,
        lineHeight: 1.5,
    }

    const clearStyles = {
        display: 'flex',
        alignItems: 'center',
        cursor: 'pointer',
        fontSize: 10,
        lineHeight: 1.5,
    }

    const restStyles = {
        fontSize: 14,
        borderRadius: 4,
        padding: '2px 4px',
        color: 'var(--white)',
        backgroundColor: 'var(--red)',
    }

    const handleClick = (e: React.MouseEvent<HTMLSpanElement>) => {
        e.stopPropagation(); // чтобы клик на крестик не открывал дропдаун
        const newValue = selected.filter((v) => v !== first);
        selectProps.onChange?.(newValue, {
            action: 'remove-value',
            removedValue: first,
        });
    }

    // Если есть выбор — показываем кастомный блок и НЕ рендерим оригинальные выбранные значения из children
    if (hasValue && first) {
        return (
            <components.ValueContainer {...props}>
                <div style={{display: 'flex', alignItems: 'center', gap: 4}}>
                    <div style={firstStyles}> {first.label}
                        <span onClick={handleClick} style={clearStyles}>✕</span>
                    </div>

                    {restSelected.length > 0 && (
                        <div style={restStyles}> ... </div>
                    )}
                </div>
            </components.ValueContainer>
        );
    }

    // Если выбора нет, просто рендерим стандартный ValueContainer (без изменений)
    return <components.ValueContainer {...props}>{children}</components.ValueContainer>;
};