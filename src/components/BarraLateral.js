import img1 from "../images/logo.png";
import icone1 from "../icons/dashboard.png"
import icone2 from "../icons/vendas.png"
import icone3 from "../icons/relatorios.png"
import icone4 from "../icons/lojas_parceiras.png"
import icone5 from "../icons/clientes.png"

const BarraLateral = () => {
    return(
        <div className="BarraLateral">
            <img src={img1} alt="" id="logo"/>
            
                <div className="itemBarraLateral">
                    <img src={icone1} alt=""/><p>Dashboard</p>
                </div>
                <div className="itemBarraLateral">
                    <img src={icone2} alt=""/><p>Vendas</p>
                </div>
                <div className="itemBarraLateral">
                    <img src={icone3} alt=""/><p>Relatorios</p>
                </div>
                <div className="itemBarraLateral">
                    <img src={icone4} alt=""/><p>Lojas parceiras</p>
                </div>
                <div className="itemBarraLateral">
                    <img src={icone5} alt=""/><p>clientes</p>
                </div>
           
            
            
        </div>
    );
}

export default BarraLateral;