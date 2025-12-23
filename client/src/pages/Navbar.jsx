import React from 'react';
import {Button} from '@/components/ui/button.jsx';

const Navbar = ()=>{
    return (
        <div className='bg-gray-600'>
            <div className='flex items-center justify-between p-2'>
                <h1 className='text-white font-bold text-2xl'>TodoApp</h1>
                <Button>Logout</Button>

            </div>

        </div>
    )

}

export default Navbar;