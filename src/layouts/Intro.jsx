import Showreel from "../components/Showreel";

const Intro = () => {
    return (
        <div className="relative z-10 -mt-32 md:-mt-40 lg:-mt-56" id="whyus">
            <div className="relative container h-[480px] md:h-[560px] lg:h-[640px]">
                <Showreel />
                <div
                    className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-48 md:h-64 lg:h-80 bg-gradient-to-t from-background from-[25%] via-background/85 to-transparent"
                    aria-hidden
                />
            </div>
        </div>

    );
};

export default Intro;
