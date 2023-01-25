import Parte1Pagina from "./Parte1Pagina";
import Parte2Pagina from "./Parte2Pagina";
import Parte3Pagina from "./Parte3Pagina";
import Parte4Pagina from "./Parte4Pagina";
import Parte5Pagina from "./Parte5Pagina";

const Principal = () => {
    return(
        <div className="Principal">
            <Parte1Pagina/>
            <Parte2Pagina/>
            <Parte3Pagina/>
            <Parte4Pagina/>
            <Parte5Pagina/>
        </div>
    );
}

export default Principal;