import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'store/api';

import css from './ListContacts.module.css';
export const ItemContact = ({ dataItem: { id, name, number } }) => {
  const dispatch = useDispatch();

  const deleteContactHandler = evt => {
    dispatch(deleteContact(evt.target.dataset.id));
  };

  return (
    <li className={css.item}>
      {name}: {number}
      <button
        className={css.btnDel}
        data-id={id}
        type="button"
        onClick={deleteContactHandler}
      >
        Delete
      </button>
    </li>
  );
};
ItemContact.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  number: PropTypes.string,
  onDeleteItemHandler: PropTypes.func,
};
