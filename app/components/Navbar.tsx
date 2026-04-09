'use client'

import Image from 'next/image'
import { Settings, Menu, X } from 'lucide-react'
import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

const DAYS = Array.from({ length: 31 }, (_, i) => i + 1)
const MONTHS = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
]
const YEARS = Array.from({ length: 2050 - 1990 + 1 }, (_, i) => 1990 + i)

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false)

    const handleClearSelection = () => {
        window.dispatchEvent(new CustomEvent('calendaar-clear'))
        setMenuOpen(false)
    }

    const handleNavigate = (type: 'day' | 'month' | 'year', value: string) => {
        window.dispatchEvent(new CustomEvent('calendaar-navigate', {
            detail: { type, value }
        }))
        setMenuOpen(false)
    }

    return (
        <nav className="bg-[#020617]/90 border-b border-white/[0.08] px-4 py-3 sticky top-0 z-50 backdrop-blur-xl">
            <div className="max-w-[1600px] mx-auto w-full">
                <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                        <div className="relative">
                            <Image src="/icons/logo.png" alt="Logo" width={28} height={28} className="relative z-10" />
                            <div className="absolute inset-0 bg-indigo-500/20 blur-md rounded-full" />
                        </div>
                        <div className="text-white font-bold text-lg tracking-tight bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent">Calendaar</div>
                    </div>

                    <button
                        type="button"
                        onClick={() => setMenuOpen((open) => !open)}
                        className="sm:hidden inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/[0.08] border border-white/10 text-white/80 hover:bg-white/[0.14] transition-all"
                        aria-label="Toggle navigation"
                    >
                        {menuOpen ? <X size={18} /> : <Menu size={18} />}
                    </button>

                    <div className="hidden sm:flex items-center gap-6">
                        <div className="flex items-center gap-2">
                            <Select onValueChange={(v: string | null) => v && handleNavigate('day', v)}>
                                <SelectTrigger className="w-[75px] bg-white/[0.04] border-white/10 text-white/90 hover:bg-white/[0.08] hover:border-white/30 transition-all rounded-full h-8 px-3 text-xs font-bold cursor-pointer focus:ring-2 focus:ring-amber-500/20 shadow-lg shadow-black/20">
                                    <SelectValue placeholder="Day" />
                                </SelectTrigger>
                                <SelectContent className="bg-[#0f172a]/95 backdrop-blur-2xl border-white/10 text-white min-w-[80px] shadow-[0_20px_50px_rgba(0,0,0,0.5)] max-h-60">
                                    {DAYS.map(day => (
                                        <SelectItem key={day} value={day.toString()} className="focus:bg-indigo-500/30 focus:text-white cursor-pointer py-2 px-3 text-xs rounded-md mx-1 my-0.5">
                                            {day}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>

                            <Select onValueChange={(v: string | null) => v && handleNavigate('month', v)}>
                                <SelectTrigger className="w-[110px] bg-white/[0.04] border-white/10 text-white/90 hover:bg-white/[0.08] hover:border-white/30 transition-all rounded-full h-8 px-3 text-xs font-bold cursor-pointer focus:ring-2 focus:ring-indigo-500/20 shadow-lg shadow-black/20">
                                    <SelectValue placeholder="Month" />
                                </SelectTrigger>
                                <SelectContent className="bg-[#0f172a]/95 backdrop-blur-2xl border-white/10 text-white min-w-[140px] shadow-[0_20px_50px_rgba(0,0,0,0.5)] max-h-60">
                                    {MONTHS.map((month, idx) => (
                                        <SelectItem key={month} value={idx.toString()} className="focus:bg-indigo-500/30 focus:text-white cursor-pointer py-2 px-3 text-xs rounded-md mx-1 my-0.5">
                                            {month}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>

                            <Select onValueChange={(v: string | null) => v && handleNavigate('year', v)}>
                                <SelectTrigger className="w-[85px] bg-white/[0.04] border-white/10 text-white/90 hover:bg-white/[0.08] hover:border-white/30 transition-all rounded-full h-8 px-3 text-xs font-bold cursor-pointer focus:ring-2 focus:ring-indigo-500/20 shadow-lg shadow-black/20">
                                    <SelectValue placeholder="Year" />
                                </SelectTrigger>
                                <SelectContent className="bg-[#0f172a]/95 backdrop-blur-2xl border-white/10 text-white min-w-[100px] shadow-[0_20px_50px_rgba(0,0,0,0.5)] max-h-60">
                                    {YEARS.map(year => (
                                        <SelectItem key={year} value={year.toString()} className="focus:bg-indigo-500/30 focus:text-white cursor-pointer py-2 px-3 text-xs rounded-md mx-1 my-0.5">
                                            {year}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        </div>

                        <Button
                            variant="outline"
                            onClick={handleClearSelection}
                            className="border-purple-500/40 text-indigo-400 rounded-full bg-transparent cursor-pointer hover:bg-purple-500/10 hover:border-purple-400 hover:text-indigo-300 transition-all text-sm h-8 px-4"
                        >
                            Clear Selection
                        </Button>
                        <Settings className="text-white/40 cursor-pointer hover:text-white hover:rotate-90 transition-all duration-500" size={18} />
                        <div className="relative w-8 h-8 rounded-full overflow-hidden border border-white/10 hover:border-white/20 transition-colors cursor-pointer group">
                            <Image src="/icons/edit-user.png" alt="User" fill className="object-cover opacity-80 group-hover:opacity-100 transition-opacity brightness-100" sizes="32px" />
                        </div>
                    </div>
                </div>

                <div className={`mt-3 sm:hidden ${menuOpen ? 'block' : 'hidden'}`}>
                    <div className="flex flex-col gap-3 rounded-3xl bg-white/[0.04] border border-white/10 p-4">
                        <div className="flex flex-col gap-2">
                            <Select onValueChange={(v: string | null) => v && handleNavigate('day', v)}>
                                <SelectTrigger className="w-full bg-white/[0.04] border-white/10 text-white/90 hover:bg-white/[0.08] hover:border-white/30 transition-all rounded-full h-10 px-3 text-xs font-bold cursor-pointer focus:ring-2 focus:ring-amber-500/20 shadow-lg shadow-black/20">
                                    <SelectValue placeholder="Day" />
                                </SelectTrigger>
                                <SelectContent className="bg-[#0f172a]/95 backdrop-blur-2xl border-white/10 text-white min-w-[80px] shadow-[0_20px_50px_rgba(0,0,0,0.5)] max-h-60">
                                    {DAYS.map(day => (
                                        <SelectItem key={day} value={day.toString()} className="focus:bg-indigo-500/30 focus:text-white cursor-pointer py-2 px-3 text-xs rounded-md mx-1 my-0.5">
                                            {day}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        </div>

                        <div className="flex flex-col gap-2">
                            <Select onValueChange={(v: string | null) => v && handleNavigate('month', v)}>
                                <SelectTrigger className="w-full bg-white/[0.04] border-white/10 text-white/90 hover:bg-white/[0.08] hover:border-white/30 transition-all rounded-full h-10 px-3 text-xs font-bold cursor-pointer focus:ring-2 focus:ring-indigo-500/20 shadow-lg shadow-black/20">
                                    <SelectValue placeholder="Month" />
                                </SelectTrigger>
                                <SelectContent className="bg-[#0f172a]/95 backdrop-blur-2xl border-white/10 text-white min-w-[140px] shadow-[0_20px_50px_rgba(0,0,0,0.5)] max-h-60">
                                    {MONTHS.map((month, idx) => (
                                        <SelectItem key={month} value={idx.toString()} className="focus:bg-indigo-500/30 focus:text-white cursor-pointer py-2 px-3 text-xs rounded-md mx-1 my-0.5">
                                            {month}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        </div>

                        <div className="flex flex-col gap-2">
                            <Select onValueChange={(v: string | null) => v && handleNavigate('year', v)}>
                                <SelectTrigger className="w-full bg-white/[0.04] border-white/10 text-white/90 hover:bg-white/[0.08] hover:border-white/30 transition-all rounded-full h-10 px-3 text-xs font-bold cursor-pointer focus:ring-2 focus:ring-indigo-500/20 shadow-lg shadow-black/20">
                                    <SelectValue placeholder="Year" />
                                </SelectTrigger>
                                <SelectContent className="bg-[#0f172a]/95 backdrop-blur-2xl border-white/10 text-white min-w-[100px] shadow-[0_20px_50px_rgba(0,0,0,0.5)] max-h-60">
                                    {YEARS.map(year => (
                                        <SelectItem key={year} value={year.toString()} className="focus:bg-indigo-500/30 focus:text-white cursor-pointer py-2 px-3 text-xs rounded-md mx-1 my-0.5">
                                            {year}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        </div>

                        <Button
                            variant="outline"
                            onClick={handleClearSelection}
                            className="w-full border-purple-500/40 text-indigo-400 rounded-full bg-transparent hover:bg-purple-500/10 hover:border-purple-400 hover:text-indigo-300 transition-all text-sm h-10 px-4"
                        >
                            Clear Selection
                        </Button>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar