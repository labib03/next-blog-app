import React from 'react';
import Link from "next/link";
import Image from "next/image";

const Header = () => {
    return (
        <header className='flex items-center justify-between space-x-2 font-bold px-10 py-5'>
            <div className='flex items-center space-x-2'>
                <Link href='/'>
                    <Image src="https://links.papareact.com/1m8" alt='logo' width={50} height={50} className='rounded-full' />
                </Link>
                <h1>Blog APPs</h1>
            </div>

            <div>

            </div>
        </header>
    );
};

export default Header;