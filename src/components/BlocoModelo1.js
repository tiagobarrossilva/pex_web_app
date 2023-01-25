const BlocoModelo1 = ({valorReceitaTotal,valorMediaCliente,descricao1,descricao2}) => {
    return(
        <>
            <h3>$</h3>
            <h4>R$ {valorReceitaTotal}</h4>
            <p>{descricao1}</p>
            <h5>R$ {valorMediaCliente}</h5>
            <span>{descricao2}</span>
        </>
    );
}

export default BlocoModelo1;