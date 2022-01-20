import React, {ChangeEvent} from 'react';
import s from './SuperCheckbox.module.css';

interface IProps extends React.HTMLProps<HTMLInputElement> {
    valueCheckbox?: boolean
    onChangeChecked?: (value: boolean) => void
    spanClassName?: string
}

export const SuperCheckbox: React.FC<IProps> = props => {

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
        <label className={s.superCheckbox__wrapper}>
            <input type={'checkbox'}
                   onChange={onChangeHandler}
                   checked={valueCheckbox || checked}
                   className={`
                           ${className ? className : ''} 
                           ${s.superCheckbox__input} 
                           ${checked
                       ? s.superCheckbox__input_select
                       : s.superCheckbox__input_not_select}
                           `}
                   {...restProps}/>
            <span className={`${s.superCheckbox__span} ${spanClassName}`}>{children}</span>
        </label>
    );
};