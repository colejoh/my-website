import Link from "next/link";

export default function NotFound() {
    return (
        <div className="flex items-center justify-center h-screen w-full">
            <div className="text-center">
                <h1 className="text-[100px] m-0">404</h1>
                <Link href="/">
                    <h3>return home</h3>
                </Link>
            </div>
        </div>
    );
}
