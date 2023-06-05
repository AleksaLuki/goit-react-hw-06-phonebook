import { useDispatch, useSelector } from 'react-redux';
import css from '../Filter/Filter.module.css';
import { getFilterValue } from 'redux/selectors';
import { changeFilter } from 'redux/filterSlice';

export function Filter() {
  const dispatch = useDispatch();

  const filter = useSelector(getFilterValue);

  return (
    <div>
      Find contact by name
      <input
        className={css.inputName}
        type="text"
        value={filter}
        onChange={ev => dispatch(changeFilter(ev.target.value))}
        name="filter"
        placeholder="Search by name"
      />
    </div>
  );
};
