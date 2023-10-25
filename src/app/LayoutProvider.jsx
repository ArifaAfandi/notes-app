'use client'

import { usePathname } from 'next/navigation';
import Header from '@/components/layout/header/Header';
import ToDo from '@/components/to-do-container/ToDo';
import { Provider } from 'react-redux';
import store from '../redux/store'

export const LayoutProvider = ({ children }) => {
    const pathname = usePathname();
    return (
        <Provider store={store}>
            {pathname === "/" ? (
                <>
                    <ToDo/>
                    {children}
                </>
            ) : (
                <>
                    <Header pathname={pathname}/>
                    {children}
                </>
            )}
        </Provider>
    )
};