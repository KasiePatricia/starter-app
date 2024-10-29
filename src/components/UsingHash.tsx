import { useHash } from "@hooks/useHash";
import { useSearchParam } from "@hooks/useSearchParams";
import { useEffect } from "react";

export const UsingHash = () => {
  const [hash, setHash] = useHash();
  const searchValue = useSearchParam('query');

  useEffect(() => {
    setHash('#list');
  }, []);

  return (
    <section className="my-9">
      <div>
        <p>window.location.href: {window.location.href}</p>
        <p>Edit hash: </p>
        <input value={hash} onChange={e => setHash(e.target.value)} className="text-black" />
      </div>
      <div>
        <p>Current hash: {hash}</p>
        <button onClick={() => setHash('#new-section')}>
          Update Hash
        </button>
      </div>
      <div className="my-6">
        <p>Search parameter 'query' value: {searchValue ?? 'not set'}</p>
    </div>
    <div>
      <p>Post param value: {searchValue || 'null'}</p>
      <button
        onClick={() =>
          history.pushState({}, '', location.pathname + '?post=42')
        }
      >
        View post 42
      </button>
      <button onClick={() => history.pushState({}, '', location.pathname)} className="block">
        Exit
      </button>
    </div>
    </section>
  );
};