

const MyProcess = ({label, title, description}) => {
    return(
        <section>
            <p className="bg-white text-terracotta-light rounded-2xl px-4 py-1 w-10 h-10 flex items-center justify-center">{label}</p>
            <h3 className="text-black text-xl">{title}</h3>
            <p className="text-gray-500 font-medium font-mono">{description}</p>
            
        </section>
    )
}
export default MyProcess