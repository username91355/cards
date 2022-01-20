import React, {ChangeEvent} from 'react';
import s from './SuperSelect.module.css';

interface IProps extends React.HTMLProps<HTMLSelectElement> {
    childrenArray: string[]
    className?: string
    onChangeSelect?: (value: string) => void
}

export const SuperSelect: React.FC<IProps> = props => {

    const {
        childrenArray,
        className,
        onChange,
        onChangeSelect
    } = props;

    const options = childrenArray.map( (o,i) => <option key={i} className={s.option}>{o}</option>)

    const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        onChange && onChange(e)
        onChangeSelect && onChangeSelect(e.currentTarget.value)
    }

    return (
        <div className={s.select__wrapper}>
            <select className={`${s.select} ${className}`} onChange={onChangeHandler}>
                {options}
            </select>
        </div>
    );
};