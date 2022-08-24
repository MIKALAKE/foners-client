import { useDispatch } from 'react-redux';

const dispatch = useDispatch;

const onFieldChange = (key, value, updateProps) =>
  dispatch(updateProps({ [key]: value }));

export { onFieldChange };
