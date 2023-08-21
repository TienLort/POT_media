import React, { FormEvent, useEffect, useState } from 'react';
import {
    createSearchParams,
    useNavigate,
    useSearchParams,
} from 'react-router-dom';
import { motion, useAnimation } from 'framer-motion';
import { RiSearchLine } from 'react-icons/ri';
import CusButton from '../button';
import './styles.css';

const SearchBar = () => {
    const [inputValue, setInputValue] = useState('');
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();
    const formControls = useAnimation();

    const setFormMaxWidth = (width: number) => {
        formControls.start({ maxWidth: width });
    };
    const search = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (!inputValue) return;
        const searchParams = createSearchParams({ search: inputValue });
        navigate({
            pathname: '/games',
            search: searchParams.toString(),
        });
    };

    useEffect(() => setInputValue(searchParams.get('search') || ''), []);

    return (
        <motion.form
            className='SearchBar'
            initial={{ maxWidth: 400 }}
            animate={formControls}
            onSubmit={search}
        >
            <input
                className='InputBar'
                type="text"
                placeholder="Search games..."
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onFocus={() => setFormMaxWidth(700)}
                onBlur={() => setFormMaxWidth(400)}
            />
            <CusButton type="submit" title="Search" className="search-button">
                <RiSearchLine style={{ fontSize: '20px', color: "#fff" }} />
            </CusButton>
        </motion.form>
    );
}

export default SearchBar;
