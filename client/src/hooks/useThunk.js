import { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';

const useThunk = (thunk) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const dispatch = useDispatch();

  const runThunk = useCallback(
    (arg) => {
      setIsLoading(true);
      setError(null);
      dispatch(thunk(arg))
        .unwrap()
        .then()
        .catch((err) => setError(err))
        .finally(() => setIsLoading(false));
    },
    [dispatch, thunk]
  );

  return [runThunk, isLoading, error];
};

export default useThunk;
