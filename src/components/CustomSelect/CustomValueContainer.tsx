import {components, ValueContainerProps} from "react-select";
import {OptionType} from "../../types/OptionType";

export const CustomValueContainer = (props: ValueContainerProps<OptionType, true>) => {
    const {getValue, hasValue, selectProps, children} = props;
    const selected = getValue();
    const [first, ...restSelected] = selected;

    // Если есть выбор — показываем кастомный блок и НЕ рендерим оригинальные выбранные значения из children
    if (hasValue && first) {
        return (
            <components.ValueContainer {...props}>
                <div style={{display: 'flex', alignItems: 'center', gap: 4}}>
                    <div
                        style={{
                            borderRadius: 4,
                            padding: '2px 6px',
                            fontSize: 14,
                            color: 'var(--white)',
                            backgroundColor: 'var(--red)',
                            display: 'flex',
                            alignItems: 'center',
                            gap: 8,
                            lineHeight: 1.5,
                        }}
                    >
                        {first.label}
                        <span
                            onClick={(e) => {
                                e.stopPropagation(); // чтобы клик на крестик не открывал дропдаун
                                const newValue = selected.filter((v) => v !== first);
                                selectProps.onChange?.(newValue, {
                                    action: 'remove-value',
                                    removedValue: first,
                                });
                            }}
                            style={{
                                // marginLeft: 16,
                                display: 'flex',
                                alignItems: 'center',
                                cursor: 'pointer',
                                // fontWeight: 'bold',
                                fontSize: 10,
                                lineHeight: 1.5,
                            }}
                        >
              ✕
            </span>
                    </div>

                    {restSelected.length > 0 && (
                        <div
                            style={{
                                fontSize: 14,
                                borderRadius: 4,
                                padding: '2px 4px',
                                color: 'var(--white)',
                                backgroundColor: 'var(--red)',
                            }}
                        >
                            ...
                        </div>
                    )}
                </div>
                {/* Не рендерим children, чтобы не дублировалось */}
            </components.ValueContainer>
        );
    }

    // Если выбора нет, просто рендерим стандартный ValueContainer (без изменений)
    return <components.ValueContainer {...props}>{children}</components.ValueContainer>;
};