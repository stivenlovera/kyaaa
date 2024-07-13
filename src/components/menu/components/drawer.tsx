'use client'
import React, { useState } from 'react'
interface DrawerProps {
    open: boolean
    onPress: () => void
}
const Drawer = ({ open, onPress }: DrawerProps) => {
    return (
        <>
            <div className={`${!open && "hidden"} bg-dark-600/50 min-h-screen w-full fixed top-0 left-0 right-0 backdrop-blur-sm`} onClick={() => onPress()}></div>
            <div className={`${open ? "w-80" : "w-0"} bg-zinc-900 min-h-screen fixed top-0 left-0 transition-all duration-300`}>
                <div className={`${!open && "hidden"} pt-3`}>
                    <div className='text-center text-white text-xl hover:bg-orange-400 cursor-pointer py-3 mb-2'></div>
                    <div className='text-center text-white text-xl hover:bg-orange-400 cursor-pointer py-3 mb-2'>Link 2</div>
                    <div className='text-center text-white text-xl hover:bg-orange-400 cursor-pointer py-3 mb-2'>Link 3</div>
                    <div className='text-center text-white text-xl hover:bg-orange-400 cursor-pointer py-3 mb-2'>Link 4</div>
                    <div className='text-center text-white text-xl hover:bg-orange-400 cursor-pointer py-3 mb-2'>Link 5</div>
                </div>
            </div>
        </>
    )
}

export default Drawer
