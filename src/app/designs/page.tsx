import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
    title: "Designs - Cole Johnson",
};

export default function Designs() {
    return (
        <div className="mx-auto mb-8">
            <h1 className="text-center">
                Hi, I&apos;m Cole. This is a sample of things I&apos;ve worked on recently.
            </h1>

            <section className="text-center border-t border-black max-w-[800px] mx-auto mt-8 px-4">
                <h3>BoilerMake</h3>
                <a href="https://boilermake.org">
                    <Image
                        src="/designs/images/boilermake.png"
                        alt="BoilerMake"
                        width={800}
                        height={600}
                        className="w-full rounded shadow-md h-auto"
                    />
                    <Image
                        src="https://cdn.dribbble.com/users/432623/screenshots/4391886/bm_dribble.png"
                        alt="BoilerMake Dribbble"
                        width={800}
                        height={600}
                        className="w-full rounded shadow-md h-auto mt-4"
                    />
                </a>
            </section>

            <section className="text-center border-t border-black max-w-[800px] mx-auto mt-8 px-4">
                <h3>Rachis Studio</h3>
                <a href="https://rachis.io">
                    <Image
                        src="/designs/images/rachisio.png"
                        alt="Rachis Studio"
                        width={800}
                        height={600}
                        className="w-full rounded shadow-md h-auto"
                    />
                </a>
            </section>

            <section className="text-center border-t border-black max-w-[800px] mx-auto mt-8 px-4">
                <h3>Roo Storage</h3>
                <a href="https://roostorage.com">
                    <Image
                        src="/designs/images/5.png"
                        alt="Roo Storage"
                        width={800}
                        height={600}
                        className="w-full rounded shadow-md h-auto"
                    />
                </a>
            </section>

            <section className="text-center border-t border-black max-w-[800px] mx-auto mt-8 px-4">
                <h3>Kevy</h3>
                <a href="http://kevy.co">
                    <Image
                        src="/designs/images/kevy.jpg"
                        alt="Kevy"
                        width={800}
                        height={600}
                        className="w-full rounded shadow-md h-auto"
                    />
                </a>
            </section>

            <section className="text-center border-t border-black max-w-[800px] mx-auto mt-8 px-4">
                <h3>Fresh Budgets</h3>
                <a href="https://freshbudgets.com">
                    <Image
                        src="/designs/images/fb.png"
                        alt="Fresh Budgets"
                        width={800}
                        height={600}
                        className="w-full rounded shadow-md h-auto"
                    />
                </a>
            </section>
        </div>
    );
}
