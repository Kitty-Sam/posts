import { ChangeEvent, useState, useTransition } from 'react';

export const useSearch = () => {
    const [_isPending, startTransition] = useTransition();
    const [search, setSearch] = useState('');

    const onChangeSearch = (e: ChangeEvent<HTMLInputElement>) => {
        startTransition(() => {
            setSearch(e.target.value);
        });
    };

    return {
        search,
        onChangeSearch,
    };
};
