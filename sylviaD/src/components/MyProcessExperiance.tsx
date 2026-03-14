

const MyProcess = ({label, title, description}) => {
    return(
        <div>
            <p className="bg-white text-terracotta-light rounded-3xl px-4 py-1 w-10 h-10 flex items-center justify-center border border-terracotta-dark border-3 mx-auto mb-5">{label}</p>
            <h3 className="text-black text-xl">{title}</h3>
            <p className="text-gray-500 font-medium font-mono">{description}</p>
            
        </div>
    )
}
export default MyProcess