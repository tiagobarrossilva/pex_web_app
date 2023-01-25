import BlocoModelo3 from "./BlocoModelo3";

// frases utilizadas nos blocos
const frase1 = "Cotações realizadas";
const frase2 = "Vendas finalizadas";
const frase3 = "Cotações não concluidas";
const frase4 = "Cotações não respondidas";

// variaveis para passar os valores para os campos nos blocos
// em uma aplicação real os valores colocados nas variaveis seriam obtidos de uma api
let bloco1Valor1 = "312.321";
let bloco1Valor2 = "+15,3% (+223)";

let bloco2Valor1 = "212.012";
let bloco2Valor2 = "+15,3% (+223)";

let bloco3Valor1 = "42.021";
let bloco3Valor2 = "+15,3% (+223)";

let bloco4Valor1 = "3.122";
let bloco4Valor2 = "15.3% (+223)";

const Parte4Pagina = () => {
    return(
        <div className="Parte4Pagina">
            <div id="b1_m3">
                <BlocoModelo3 valor1={bloco1Valor1} frase={frase1} valor2={bloco1Valor2} />
            </div>
            <div id="b2_m3">
                <BlocoModelo3 valor1={bloco2Valor1} frase={frase2} valor2={bloco2Valor2}/>
            </div>
            <div id="b3_m3">
                <BlocoModelo3 valor1={bloco3Valor1} frase={frase3} valor2={bloco3Valor2}/>
            </div>
            <div id="b4_m3">
                <BlocoModelo3 valor1={bloco4Valor1} frase={frase4} valor2={bloco4Valor2}/>
            </div>
        </div>
    );
}

export default Parte4Pagina;