import { useEffect, useState } from 'react';
/* useage:
  export default function Demo() {
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState('');
  const debouncedSearch = useDebounce(search);
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const loadUsers = async () => {
      setLoading(true);

      const users = await fetchUsers(debouncedSearch);
      setUsers(users);

      setLoading(false);
    };
    loadUsers();
  }, [debouncedSearch]);

  return (
    <div className='tutorial'>
      <SearchBar onChange={setSearch} />
      {loading && <div>Loading...</div>}
      {!loading &&
        users.map((user) => {
          return <div key={user.id}>{user.name}</div>;
        })}
    </div>
  );
}

*/


export const useDebounce = <T>(value: T, delay = 500) => {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => clearTimeout(timeout);
  }, [value, delay]);

  return debouncedValue;
};








