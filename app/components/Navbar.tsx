import Image from 'next/image'
import { Settings, User } from 'lucide-react'
import React from 'react'

const Navbar = () => {
    return (
        <nav className="bg-[#020617] p-4">
            <div className="container mx-auto">
                <div className="flex justify-between items-center">
                    <div className="flex items-center gap-4">
                        <Image src="/icons/logo.png" alt="Logo" width={30} height={30} />
                        <div className="text-white font-bold text-xl">Calendaar</div>
                    </div>
                    <div className="flex items-center gap-10">
                        <Settings className="text-white" size={24} />
                        <Image src="/icons/edit-user.png" alt="User" width={35} height={35} />
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar