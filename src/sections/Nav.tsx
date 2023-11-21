
type NavLinkProps = {
    text: string,
    href: string
}

function NavLink({ text , href}: NavLinkProps) {
    return (
        <li className="mx-5"><a href={href}>{text}</a></li>
    )
}

export default function Nav() {
    return (
        <div className="sticky top-0 z-50 w-full p-5 flex flex-row justify-between bg-opacity-50 bg-stone-900 backdrop-blur text-gray-50 shadow-md">

            {/*Logo*/}
            <div><a href="#">placeholder</a></div>

            {/*Nav Links*/}
            <ul className="flex flex-row justify-space-around">
                <NavLink text="About" href="/#about"/>
                <NavLink text="Achievements" href="/#achievements"/>
                <NavLink text="Projects" href="/#projects"/>
                <NavLink text="Contact" href="/#contacts"/>
            </ul>

        </div>
    )
}