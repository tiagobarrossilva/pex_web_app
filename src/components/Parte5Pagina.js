import BlocoModelo4 from "./BlocoModelo4";

// frases utilizadas nos blocos
const frase1 = "Planos";
const frase2 = "123 Planos em uso";
const frase3 = "Categorias";
const frase4 = "4 Categorias em uso";
const frase5 = "Tipos de planos";
const frase6 = "2 tipos em uso";

// variaveis para passar os valores para os campos nos blocos
// em uma aplicação real os valores colocados nas variaveis seriam obtidos de uma api
let l1 = "Estagiaíos";
let l2 = "Diretoria";
let l3 = "Geral";
let l4 = "Almoxarifado";
let v1 = "312";
let v2 = "123.90";

let d1 = "CLUBE";
let d2 = "CLIENTES";
let d3 = "PREÇO";
let d4 = "PREÇO MEDIO";


const Parte5Pagina = () => {
    return(
        <div className="Parte5Pagina">
            <div id="b1_m4">
                <BlocoModelo4 titulo1={frase1} titulo2={frase2} desc1={d1} desc2={d2} desc3={d3} v1={l1} v2={v1} v3={v2} v4={l2} v5={v1} v6={v2} v7={l3} v8={v1} v9={v2} v10={l4} v11={v1} v12={v2}/>
            </div>
            <div id="b2_m4">
                <BlocoModelo4 titulo1={frase3} titulo2={frase4} desc1={d1} desc2={d2} desc3={d4} v1={"6 Vendas"} v2={v1} v3={v2} v4={"12 Vendas"} v5={v1} v6={v2} v7={"24 Vendas"} v8={v1} v9={v2} v10={"Personalizado"} v11={v1} v12={v2}/>
            </div>
            <div id="b3_m4">
                <BlocoModelo4 titulo1={frase3} titulo2={frase4} desc1={d1} desc2={d2} desc3={d4} v1={"Construtoras"} v2={v1} v3={v2} v4={"Clientes finais"} v5={v1} v6={v2}/>
            </div>
        </div>
    );
}

export default Parte5Pagina;