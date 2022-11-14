import React from "react";
import Header from "../../components/Header";
import Image from "../../components/helper/Image";
import "./Produtos.css";
import Frozen from '../../assets/frozen.png';


const Produtos = () => {
    return (
        <div>
            <Header />
            <div className="container">
                <div className="texto-produtos">
                    <h2>Seja bem vindo ao amimaru!</h2>
                    <p>Aqui você encontrará os amigurumis mais incríveis do mundo geek.</p>
                    <p>Mas atenção, as imagens abaixo possuem um nível de fofura acima de 8 mil.</p>
                </div>
                <div className="imagens-produtos">
                    <div className="grup-img-1">
                        <Image src={Frozen} alt="Frozen" />
                    </div>
                    <div className="grup-img-1">
                        <Image src={Frozen} alt="Frozen" />
                    </div>
                    <div className="grup-img-1">
                        <Image src={Frozen} alt="Frozen" />
                    </div>
                    <div className="grup-img-1">
                        <Image src={Frozen} alt="Frozen" />
                    </div>                                                            
                </div>
            </div>
        </div>
    );
}

export default Produtos;