"use client"

import type React from "react"
import { useState, useEffect, useRef } from "react"

// Placeholder components to avoid build errors
const SmartSimpleBrilliant = (props: any) => <div className="bg-blue-100 p-4 rounded text-xs text-blue-800 border border-blue-200" {...props}>SmartSimpleBrilliant Component Placeholder</div>
const YourWorkInSync = (props: any) => <div className="bg-green-100 p-4 rounded text-xs text-green-800 border border-green-200" {...props}>YourWorkInSync Component Placeholder</div>
const EffortlessIntegration = (props: any) => <div className="bg-purple-100 p-4 rounded text-xs text-purple-800 border border-purple-200" {...props}>EffortlessIntegration Component Placeholder</div>
const NumbersThatSpeak = (props: any) => <div className="bg-orange-100 p-4 rounded text-xs text-orange-800 border border-orange-200" {...props}>NumbersThatSpeak Component Placeholder</div>
const DocumentationSection = () => <div className="py-20 text-center bg-gray-50 border-b">Documentation Section Placeholder</div>
const TestimonialsSection = () => <div className="py-20 text-center bg-white border-b">Testimonials Section Placeholder</div>
const FAQSection = () => <div className="py-20 text-center bg-gray-50 border-b">FAQ Section Placeholder</div>
const PricingSection = () => <div className="py-20 text-center bg-white border-b">Pricing Section Placeholder</div>
const CTASection = () => <div className="py-20 text-center bg-gray-900 text-white">CTA Section Placeholder</div>
const FooterSection = () => <div className="py-10 text-center bg-gray-100 border-t">Footer Section Placeholder</div>

// Reusable Badge Component
function Badge({ icon, text }: { icon: React.ReactNode; text: string }) {
    return (
        <div className="px-[14px] py-[6px] bg-white shadow-[0px_0px_0px_4px_rgba(55,50,47,0.05)] overflow-hidden rounded-[90px] flex justify-start items-center gap-[8px] border border-[rgba(2,6,23,0.08)] shadow-xs">
            <div className="w-[14px] h-[14px] relative overflow-hidden flex items-center justify-center">{icon}</div>
            <div className="text-center flex justify-center flex-col text-[#37322F] text-xs font-medium leading-3 font-sans">
                {text}
            </div>
        </div>
    )
}

// FeatureCard component definition
function FeatureCard({
    title,
    description,
    isActive,
    progress,
    onClick,
}: {
    title: string
    description: string
    isActive: boolean
    progress: number
    onClick: () => void
}) {
    return (
        <div
            className={`w-full md:flex-1 self-stretch px-6 py-5 overflow-hidden flex flex-col justify-start items-start gap-2 cursor-pointer relative border-b md:border-b-0 last:border-b-0 ${isActive
                    ? "bg-white shadow-[0px_0px_0px_0.75px_#E0DEDB_inset]"
                    : "border-l-0 border-r-0 md:border border-[#E0DEDB]/80"
                }`}
            onClick={onClick}
        >
            {isActive && (
                <div className="absolute top-0 left-0 w-full h-0.5 bg-[rgba(50,45,43,0.08)]">
                    <div
                        className="h-full bg-[#322D2B] transition-all duration-100 ease-linear"
                        style={{ width: `${progress}%` }}
                    />
                </div>
            )}

            <div className="self-stretch flex justify-center flex-col text-[#49423D] text-sm md:text-sm font-semibold leading-6 md:leading-6 font-sans">
                {title}
            </div>
            <div className="self-stretch text-[#605A57] text-[13px] md:text-[13px] font-normal leading-[22px] md:leading-[22px] font-sans">
                {description}
            </div>
        </div>
    )
}

export default function LandingPage() {
    const [activeCard, setActiveCard] = useState(0)
    const [progress, setProgress] = useState(0)
    const mountedRef = useRef(true)

    useEffect(() => {
        const progressInterval = setInterval(() => {
            if (!mountedRef.current) return

            setProgress((prev) => {
                if (prev >= 100) {
                    if (mountedRef.current) {
                        setActiveCard((current) => (current + 1) % 3)
                    }
                    return 0
                }
                return prev + 2 // 2% every 100ms = 5 seconds total
            })
        }, 100)

        return () => {
            clearInterval(progressInterval)
            mountedRef.current = false
        }
    }, [])

    useEffect(() => {
        return () => {
            mountedRef.current = false
        }
    }, [])

    const handleCardClick = (index: number) => {
        if (!mountedRef.current) return
        setActiveCard(index)
        setProgress(0)
    }

    return (
        <div className="w-full min-h-screen relative bg-[#F7F5F3] overflow-x-hidden flex flex-col justify-start items-center font-sans">
            <div className="relative flex flex-col justify-start items-center w-full">
                {/* Main container with proper margins */}
                <div className="w-full max-w-none px-4 sm:px-6 md:px-8 lg:px-0 lg:max-w-[1060px] lg:w-[1060px] relative flex flex-col justify-start items-start min-h-screen">
                    {/* Left vertical line */}
                    <div className="w-[1px] h-full absolute left-4 sm:left-6 md:left-8 lg:left-0 top-0 bg-[rgba(55,50,47,0.12)] shadow-[1px_0px_0px_white] z-0"></div>

                    {/* Right vertical line */}
                    <div className="w-[1px] h-full absolute right-4 sm:right-6 md:right-8 lg:right-0 top-0 bg-[rgba(55,50,47,0.12)] shadow-[1px_0px_0px_white] z-0"></div>

                    <div className="self-stretch pt-[9px] overflow-hidden border-b border-[rgba(55,50,47,0.06)] flex flex-col justify-center items-center gap-4 sm:gap-6 md:gap-8 lg:gap-[66px] relative z-10 w-full">
                        {/* Navigation */}
                        <div className="w-full h-12 sm:h-14 md:h-16 lg:h-[84px] absolute left-0 top-0 flex justify-center items-center z-20 px-6 sm:px-8 md:px-12 lg:px-0">
                            <div className="w-full h-0 absolute left-0 top-6 sm:top-7 md:top-8 lg:top-[42px] border-t border-[rgba(55,50,47,0.12)] shadow-[0px_1px_0px_white]"></div>

                            <div className="w-full max-w-[calc(100%-32px)] sm:max-w-[calc(100%-48px)] md:max-w-[calc(100%-64px)] lg:max-w-[700px] lg:w-[700px] h-10 sm:h-11 md:h-12 py-1.5 sm:py-2 px-3 sm:px-4 md:px-4 pr-2 sm:pr-3 bg-[#F7F5F3] backdrop-blur-sm shadow-[0px_0px_0px_2px_white] overflow-hidden rounded-[50px] flex justify-between items-center relative z-30">
                                <div className="flex justify-center items-center">
                                    <div className="flex justify-start items-center">
                                        <div className="flex flex-col justify-center text-[#2F3037] text-sm sm:text-base md:text-lg lg:text-xl font-medium leading-5 font-sans pl-3">
                                            Brillance
                                        </div>
                                    </div>
                                    <div className="pl-3 sm:pl-4 md:pl-5 lg:pl-5 flex justify-start items-start hidden sm:flex flex-row gap-2 sm:gap-3 md:gap-4 lg:gap-4">
                                        <div className="flex justify-start items-center">
                                            <div className="flex flex-col justify-center text-[rgba(49,45,43,0.80)] text-xs md:text-[13px] font-medium leading-[14px] font-sans">
                                                Products
                                            </div>
                                        </div>
                                        <div className="flex justify-start items-center">
                                            <div className="flex flex-col justify-center text-[rgba(49,45,43,0.80)] text-xs md:text-[13px] font-medium leading-[14px] font-sans">
                                                Pricing
                                            </div>
                                        </div>
                                        <div className="flex justify-start items-center">
                                            <div className="flex flex-col justify-center text-[rgba(49,45,43,0.80)] text-xs md:text-[13px] font-medium leading-[14px] font-sans">
                                                Docs
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="h-6 sm:h-7 md:h-8 flex justify-start items-start gap-2 sm:gap-3">
                                    <div className="px-2 sm:px-3 md:px-[14px] py-1 sm:py-[6px] bg-white shadow-[0px_1px_2px_rgba(55,50,47,0.12)] overflow-hidden rounded-full flex justify-center items-center">
                                        <div className="flex flex-col justify-center text-[#37322F] text-xs md:text-[13px] font-medium leading-5 font-sans">
                                            Log in
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Hero Section */}
                        <div className="pt-16 sm:pt-20 md:pt-24 lg:pt-[216px] pb-8 sm:pb-12 md:pb-16 flex flex-col justify-start items-center px-2 sm:px-4 md:px-8 lg:px-0 w-full sm:pl-0 sm:pr-0 pl-0 pr-0">
                            <div className="w-full max-w-[937px] lg:w-[937px] flex flex-col justify-center items-center gap-3 sm:gap-4 md:gap-5 lg:gap-6">
                                <div className="self-stretch rounded-[3px] flex flex-col justify-center items-center gap-4 sm:gap-5 md:gap-6 lg:gap-8">
                                    <div className="w-full max-w-[748.71px] lg:w-[748.71px] text-center flex justify-center flex-col text-[#37322F] text-[24px] xs:text-[28px] sm:text-[36px] md:text-[52px] lg:text-[80px] font-normal leading-[1.1] sm:leading-[1.15] md:leading-[1.2] lg:leading-[1] font-serif px-2 sm:px-4 md:px-0 tracking-[-0.03em]">
                                        Effortless custom contract
                                        <br />
                                        billing by Brillance
                                    </div>
                                    <div className="w-full max-w-[506.08px] lg:w-[506.08px] text-center flex justify-center flex-col text-[rgba(55,50,47,0.80)] sm:text-lg md:text-xl leading-[1.4] sm:leading-[1.45] md:leading-[1.5] lg:leading-7 font-sans px-2 sm:px-4 md:px-0 lg:text-lg font-medium text-sm">
                                        Streamline your billing process with seamless automation
                                        <br className="hidden sm:block" />
                                        for every custom contract, tailored by Brillance.
                                    </div>
                                </div>
                            </div>

                            <div className="w-full max-w-[497px] lg:w-[497px] flex flex-col justify-center items-center gap-6 sm:gap-8 md:gap-10 lg:gap-12 relative z-10 mt-6 sm:mt-8 md:mt-10 lg:mt-12">
                                <div className="backdrop-blur-[8.25px] flex justify-start items-center gap-4">
                                    <div className="h-10 sm:h-11 md:h-12 px-6 sm:px-8 md:px-10 lg:px-12 py-2 sm:py-[6px] relative bg-[#37322F] shadow-[0px_0px_0px_2.5px_rgba(255,255,255,0.08)_inset] overflow-hidden rounded-full flex justify-center items-center cursor-pointer hover:bg-[#4a4441] transition-colors">
                                        <div className="w-20 sm:w-24 md:w-28 lg:w-44 h-[41px] absolute left-0 top-[-0.5px] bg-gradient-to-b from-[rgba(255,255,255,0)] to-[rgba(0,0,0,0.10)] mix-blend-multiply"></div>
                                        <div className="flex flex-col justify-center text-white text-sm sm:text-base md:text-[15px] font-medium leading-5 font-sans">
                                            Start for free
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Dashboard Preview - with placeholders */}
                            <div className="w-full max-w-[960px] lg:w-[960px] pt-2 sm:pt-4 pb-6 sm:pb-8 md:pb-10 px-2 sm:px-4 md:px-6 lg:px-11 flex flex-col justify-center items-center gap-2 relative z-5 my-8 sm:my-12 md:my-16 lg:my-16 mb-0 lg:pb-0">
                                <div className="w-full max-w-[960px] lg:w-[960px] h-[200px] sm:h-[280px] md:h-[450px] lg:h-[695.55px] bg-white shadow-[0px_0px_0px_0.9056603908538818px_rgba(0,0,0,0.08)] overflow-hidden rounded-[6px] sm:rounded-[8px] lg:rounded-[9.06px] flex flex-col justify-start items-start relative bg-[#FAFAFA]">
                                    <div className="absolute inset-0 flex items-center justify-center p-8 text-gray-400">
                                        {/* Placeholder for images */}
                                        <div className="text-center">
                                            <p className="mb-4">Dashboard Preview ({activeCard})</p>
                                            <div className="w-full h-full border-2 border-dashed border-gray-200 rounded-lg flex items-center justify-center p-12">
                                                Dynamic Content Placeholder
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Feature Cards Section */}
                            <div className="self-stretch border-t border-[#E0DEDB] border-b border-[#E0DEDB] flex justify-center items-start w-full">
                                <div className="w-4 sm:w-6 md:w-8 lg:w-12 self-stretch relative overflow-hidden bg-[#FAFAFA]/50">
                                    {/* Left Gutter */}
                                </div>

                                <div className="flex-1 px-0 sm:px-2 md:px-0 flex flex-col md:flex-row justify-center items-stretch gap-0">
                                    <FeatureCard
                                        title="Plan your schedules"
                                        description="Streamline customer subscriptions and billing with automated scheduling tools."
                                        isActive={activeCard === 0}
                                        progress={activeCard === 0 ? progress : 0}
                                        onClick={() => handleCardClick(0)}
                                    />
                                    <FeatureCard
                                        title="Analytics & insights"
                                        description="Transform your business data into actionable insights with real-time analytics."
                                        isActive={activeCard === 1}
                                        progress={activeCard === 1 ? progress : 0}
                                        onClick={() => handleCardClick(1)}
                                    />
                                    <FeatureCard
                                        title="Collaborate seamlessly"
                                        description="Keep your team aligned with shared dashboards and collaborative workflows."
                                        isActive={activeCard === 2}
                                        progress={activeCard === 2 ? progress : 0}
                                        onClick={() => handleCardClick(2)}
                                    />
                                </div>

                                <div className="w-4 sm:w-6 md:w-8 lg:w-12 self-stretch relative overflow-hidden bg-[#FAFAFA]/50">
                                    {/* Right Gutter */}
                                </div>
                            </div>

                            {/* Bento Grid */}
                            <div className="w-full border-b border-[rgba(55,50,47,0.12)] flex flex-col justify-center items-center">
                                {/* Placeholders for Bento items */}
                                <div className="p-20 text-center text-gray-400">
                                    Bento Grid Section Placeholder
                                </div>
                            </div>

                            <FooterSection />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
