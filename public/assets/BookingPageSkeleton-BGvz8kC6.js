import {
    j as e,
    t as o
} from "./@hy/experiences-909RjQqY.js";
import {
    A as l
} from "./index-CH6M7U1f.js";
import {
    r as i
} from "./vendor-DR5RWKqR.js";
import {
    A as g,
    m as c
} from "./framer-motion-CjpMPw5U.js";
const m = () => {
        const n = ["Creating Magical Connection ✨", "Checking Cosmic Availability 🚀", "Polishing Adventure Choices ✨", "Scoring Stellar Deals Just for You 🌟", "Dancing with Secure Systems 💃🕺", "Crafting Your One-of-a-Kind Itinerary 🗺️", "Prepping for a Seamlessly Epic Journey 🌈", "Summoning Dreamy Experiences ✨", "Exploring Galactic Options 🌌", "Crafting Joyful Moments 🎨", "Gathering Starlight Surprises 🌠", "Weaving Wonder Tales 📚", "Painting Rainbow Escapes 🌈", "Spinning Enchanted Tales 🧚", "Charting New Journeys 🗺️", "Unfolding Fantasy Worlds 🏰", "Mixing Magic Potions 🧪"],
            [t, s] = i.useState(-1);
        return i.useEffect(() => {
            const r = setInterval(() => {
                let a;
                do a = Math.floor(Math.random() * n.length); while (a === t);
                s(a)
            }, 2e3);
            return () => clearInterval(r)
        }, [t, n.length]), e.jsx(g, {
            mode: "wait",
            children: !!n[t] && e.jsx(c.div, {
                initial: {
                    opacity: 0
                },
                animate: {
                    opacity: .5
                },
                exit: {
                    opacity: 0
                },
                transition: {
                    duration: .15
                },
                className: "p-2 text-center text-sm",
                children: n[t]
            }, n[t])
        })
    },
    f = ({
        header: n = !0,
        sideBar: t = !0,
        className: s
    }) => e.jsxs(e.Fragment, {
        children: [e.jsx("style", {
            children: "body{overflow:hidden}"
        }), n && e.jsx("section", {
            className: "h-20 animate-pulse"
        }), e.jsxs("section", {
            className: o("container flex max-w-screen-2xl flex-col gap-4 overflow-hidden px-0 py-0 pb-12", "2lg:mt-0 2lg:flex-row 2lg:overflow-visible 2lg:bg-body-light 2lg:bg-transparent 2lg:px-6 2lg:py-8", s),
            children: [e.jsxs("div", {
                className: "2lg:h-auto 2lg:min-h-[500px] 2lg:bg-body-light flex h-[calc(100svh-150px)] grow flex-col items-center justify-center space-y-1 rounded-xl",
                children: [e.jsx(l, {
                    className: "h-20 w-52 md:h-32 md:w-72 md:py-4"
                }), e.jsx(m, {})]
            }), t && e.jsx("aside", {
                className: "2lg:block 2lg:max-w-md 2lg:bg-body-light flex min-h-[500px] w-full max-w-lg grow items-center justify-center rounded-xl"
            })]
        })]
    });
export {
    f as B
};
//# sourceMappingURL=BookingPageSkeleton-BGvz8kC6.js.map