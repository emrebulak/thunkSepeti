const Error = ({ message, event }) => {
    return (
        <div className="flex flex-col gap-8 justify-center items-center bg-transparent w-full h-[90vh]">
            <div className="bg-red-500 p-4 rounded-md text-white flex flex-col gap-2 w-1/3">
                <h3>Üzgünüz bir hata oluştu: </h3>
                <h2 className="font-semibold">{message}</h2>
            </div>

            <button onClick={event} className="border py-3 px-4 rounded-md text-base hover:bg-gray-100 transition">Tekrar Deneyin</button>
        </div>
    )
}

export default Error