import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'store/api';

import css from './ListContacts.module.css';
export const ItemContact = ({ dataItem: { id, name, phone } }) => {
  const dispatch = useDispatch();

  const deleteContactHandler = evt => {
    dispatch(deleteContact(evt.target.dataset.id));
  };

  //console.log(name);
  return (
    <li className={css.item}>
      {name}: {phone}
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
  number: PropTypes.number,
  onDeleteItemHandler: PropTypes.func,
};
