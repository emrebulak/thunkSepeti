const ProductCard = ({ data }) => {
    return (
        <div className="flex border border-gray-300 shadow-md p-4 rounded-md">
            <div className="flex-1">
                <h1>{data.title}</h1>
                <p>{data.desc}</p>
                <h2>{data.price} TL</h2>
            </div>

            <img className="w-36 h-36" src={data.photo} alt={data.title} />

        </div>
    )
}

export default ProductCard