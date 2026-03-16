
type Props = {
    children?: React.ReactNode;
}

const HeroExp = ({children}:Props) => {
    return(
        <section className="text-center">
            {children}
        </section>
    )
}

export default HeroExp;