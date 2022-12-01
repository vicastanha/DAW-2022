import './style.css';
import imgFundo from '../../assets/img/fundo-1.png';


export function SectionPrimeiraParte() {
    return(

        <section id="primeira-parte">
        <div className="imagem principal">
            <img src={imgFundo} alt="imagem 01"/>
        </div>
        <div className="titulo">
            <h5>Filter Now!</h5>
        </div>
        <div className="subtitulo">
            <h5>Discover more about <br/>
                your music taste.</h5>
        </div>
    </section>

    )
    }