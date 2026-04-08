export const BackgroundBlooms = () => {
    return (
        <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden select-none">
            {/* Primary Teal Splash - Scale up to feel like a 'wash' */}
            <img
                src="/images/watercolor/splash-teal.png"
                className="absolute -top-[10%] -right-[15%] w-[80vw] max-w-[1200px] opacity-15 mix-blend-multiply transition-opacity duration-1000"
                alt=""
            />

            {/* Mint Green Drip - Scale up and pull further into the corner */}
            <img
                src="/images/watercolor/drip-mint.png"
                className="absolute -bottom-[15%] -left-[10%] w-[70vw] max-w-[1000px] opacity-10 mix-blend-multiply transition-opacity duration-1000"
                alt=""
            />

            {/* Subtle Mustard Splatter - Positioned to highlight content flow */}
            <img
                src="/images/watercolor/splatter-yellow.png"
                className="absolute top-[25%] right-[5%] w-[30vw] max-w-[500px] opacity-10 rotate-12 mix-blend-multiply"
                alt=""
            />
        </div>
    )
}