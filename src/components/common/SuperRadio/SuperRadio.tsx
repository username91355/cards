import React, {ChangeEvent} from 'react';
import s from './SuperRadio.module.css';

interface IProps extends React.HTMLProps<HTMLInputElement> {
    valueCheckbox?: boolean
    onChangeChecked?: (value: boolean) => void
    spanClassName?: string
}

export const SuperRadio: React.FC<IProps> = props => {

    const {
        valueCheckbox,
        onChange,
        onChangeChecked,
        className,
        spanClassName,
        children,
        checked,
        ...restProps
    } = props;

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        onChange && onChange(e)
        onChangeChecked && onChangeChecked(e.currentTarget.checked)
    }

    return (
        <label className={s.superRadio__wrapper}>
            <input type={'checkbox'}
                   onChange={onChangeHandler}
                   checked={valueCheckbox || checked}
                   className={`
                           ${className ? className : ''} 
                           ${s.superRadio__input} 
                           ${checked
                       ? s.superRadio__input_select
                       : s.superRadio__input_not_select}
                           `}
                   {...restProps}/>
            <span className={`${s.superRadio__span} ${spanClassName}`}>{children}</span>
        </label>
    );
};