import BlocoModelo2 from "./BlocoModelo2";

// frases utilizadas nos blocos
const frase1 = "Clientes ativos";
const frase2 = "Novos clientes";
const frase3 = "Clientes adicionadas";
const frase4 = "LTV";
const frase5 = "Turnover";
const frase6 = "Turnover recuperado";

// variaveis para passar os valores para os campos nos blocos
// em uma aplicação real os valores colocados nas variaveis seriam obtidos de uma api
let bloco1Valor1 = "3,12";
let bloco1Valor2 = "+2,6% (+12)";

let bloco2Valor1 = "12";
let bloco2Valor2 = "+15,3% (+2)";

let bloco3Valor1 = "42";
let bloco3Valor2 = "+42.6 (+8)";

let bloco4Valor1 = "142,32";
let bloco4Valor2 = "-22,6 (+$12,20)";

let bloco5Valor1 = "24,3%";
let bloco5Valor2 = "+42,60(3)";

let bloco6Valor1 = "54,42%";
let bloco6Valor2 = "+32,6% (+6)";

const Parte3Pagina = () => {
    return(
        <div className="Parte3Pagina">
            <div id="b1_m2">
                <BlocoModelo2 titulo={frase1} valor1={bloco1Valor1} valor2={bloco1Valor2}/>
            </div>
            <div id="b2_m2">
                <BlocoModelo2 titulo={frase2} valor1={bloco2Valor1} valor2={bloco2Valor2}/>
            </div>
            <div id="b3_m2">
                <BlocoModelo2 titulo={frase3} valor1={bloco3Valor1} valor2={bloco3Valor2}/>
            </div>
            <div id="b4_m2">
                <BlocoModelo2 titulo={frase4} valor1={bloco4Valor1} valor2={bloco4Valor2}/>
            </div>
            <div id="b5_m2">
                <BlocoModelo2 titulo={frase5} valor1={bloco5Valor1} valor2={bloco5Valor2}/>
            </div>
            <div id="b6_m2">
                <BlocoModelo2 titulo={frase6} valor1={bloco6Valor1} valor2={bloco6Valor2}/>
            </div>
        </div>
    );
}

export default Parte3Pagina;