const BlocoModelo4 = ({titulo1,titulo2,desc1,desc2,desc3,v1,v2,v3,v4,v5,v6,v7,v8,v9,v10,v11,v12}) => {
    return(
        <>
            <h3>{titulo1}</h3>
            <h4>{titulo2}</h4>
            <table>
                <thead>
                    <tr>
                        <td>{desc1}</td>
                        <td>{desc2}</td>
                        <td>{desc3}</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{v1}</td>
                        <td>{v2}</td>
                        <td>{v3}</td>
                    </tr>
                    <tr>
                        <td>{v4}</td>
                        <td>{v5}</td>
                        <td>{v6}</td>
                    </tr>
                    <tr>
                        <td>{v7}</td>
                        <td>{v8}</td>
                        <td>{v9}</td>
                    </tr>
                    <tr>
                        <td>{v10}</td>
                        <td>{v11}</td>
                        <td>{v12}</td>
                    </tr>
                </tbody>
                
            </table>
        </>
    );
}

export default BlocoModelo4;