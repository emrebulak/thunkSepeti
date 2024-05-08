import { Link } from "react-router-dom";
import Container from "./Container";
import Basket from "./Basket";

const Header = () => {
    return (

        <header className="shadow-md">
            <Container styles="flex justify-between items-center">
                
                <Link to={'/'} className="text-red-500 font-bold text-2xl">Thunksepeti</Link>
                <div className="flex gap-5 items-center">
                    <button className="py-1 px-3 border-red-500 border rounded text-red-500 hover:bg-red-500 hover:text-white transition duration-300">Giriş Yap</button>
                    <button className="py-1 px-3 bg-red-500 text-white rounded hover:brightness-90 transition duration-300">Kayıt Ol</button>
                    <Link to={'/cart'} className="p-3 hover:bg-red-100 rounded-full transition duration-300"> <Basket /></Link>
                   
                </div>
            </Container>
        </header>

    )
}

export default Header