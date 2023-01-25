import icone1 from "../icons/lupa_buscar.png";
import icone2 from "../icons/sininho.png";
import icone3 from "../icons/lua.png";
import icone4 from "../icons/exclamacao.png";
import icone5 from "../images/foto_usuario.png"

const Busca = () => {
    return(
        <div className="Busca">
            <div className="BuscaItens">
                <img src={icone1} alt=""/>
                <input placeholder='busca'/>
            </div>
            <div id="ic2">
                <img src={icone2} alt=""/>
            </div>
            <div id="ic3">
                <img src={icone3} alt=""/>
            </div>
            <div id="ic4">
                <img src={icone4} alt=""/>
            </div>
            <div id="ic5">
                <img src={icone5} alt=""/>
            </div>
        </div>
    );
}

export default Busca;