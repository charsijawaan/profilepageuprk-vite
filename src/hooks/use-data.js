import { useContext } from 'react';
import { MyContext } from '../context/context-provider';

const UseData = () => {
    return (
        useContext(MyContext)
    )
};

export default UseData;