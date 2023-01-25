import BlocoModelo1 from "./BlocoModelo1";

// frases usadas nos blocos
const Frase1 = "Receita total";
const Frase2 = "Media por cliente";
const Frase3 = "Lucro total";
const Frase4 = "Lucro por venda";

// variaveis para passar os valores para os campos nos blocos
// em uma aplicação real os valores colocados nas variaveis seriam obtidos de uma api
let bloco1valor1 = "312.321,00";
let bloco1Valor2 = "67,20";
let bloco2Valor1 = "74.421,00";
let bloco2Valor2 = "42,30";
let bloco3Valor1 = "3,12";
let bloco3Valor2 = "12,40";

const Parte2Pagina = () => {
    return(
        <div className="Parte2Pagina" >
            <div id="b1_m1">
                <BlocoModelo1 valorReceitaTotal={bloco1valor1} valorMediaCliente={bloco1Valor2} descricao1={Frase1} descricao2={Frase2}/>
            </div>
            <div id="b2_m1">
                <BlocoModelo1 valorReceitaTotal={bloco2Valor1} valorMediaCliente={bloco2Valor2} descricao1={Frase3} descricao2={Frase2}/>
            </div>
            <div id="b3_m1">
                <BlocoModelo1 valorReceitaTotal={bloco3Valor1} valorMediaCliente={bloco3Valor2} descricao1={Frase4} descricao2={Frase2}/>
            </div>
        </div>
    );
}

export default Parte2Pagina;