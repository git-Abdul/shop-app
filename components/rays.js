export function Rays() {
    return (
        <>
            {/* Rays */}
            <div
                className="absolute left-1 transform -translate-x-1/2 md:-mt-96 -mt-10 h-72 w-72 md:h-auto md:w-auto"
                style={{ zIndex: -1 }}
            >
                <img
                    src="rays.png"
                    alt="rays"
                    loading="lazy"
                    className="rays-img select-none"
                />
            </div>
        </>
    )
}