import React from 'react';
import PageDeFault from '../../../components/PageDefault';
import { Link } from 'react-router-dom';

function CadastroVideo () {
    return (
        <PageDeFault>
            <h1>Cadastro de Video</h1>

            <Link to="/cadastro/categoria">
                <h1>Cadastrar Categoria</h1>
            </Link>
        </PageDeFault>
    )
}

export default CadastroVideo;