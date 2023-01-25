import icone1 from "../icons/filtrar_por_data.png";
const FiltroPorData = () => {
    return(
        <div className="FiltroPorData">
            <p>Filtrar por data</p>
            <div className="filtro1">
                <img src={icone1} alt=""/>
                <input placeholder='Data inicial'/>
            </div>
            <div className="filtro2">
                <img src={icone1} alt=""/>
                <input placeholder='Data final'/>
            </div>
            
        </div>
    );
}

export default FiltroPorData;