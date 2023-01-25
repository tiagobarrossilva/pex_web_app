import Busca from "./Busca";
import TituloSuperior from "./TituloSuperior";
import FiltroPorData from "./FiltroPorData";

const Parte1Pagina = () => {
    return(
        <div className="Parte1Pagina">
            <TituloSuperior/>
            <Busca/>
            <FiltroPorData/>
        </div>
    );
}

export default Parte1Pagina;