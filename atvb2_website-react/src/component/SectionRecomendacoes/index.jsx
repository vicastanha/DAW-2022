import './style.css';


const dados = [
    {
        imagem: './assets/img/fundo1.png',
        titulo_musica: 'Another one Bites the Dust',
        artista: 'Queen',
        descricao: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
    },
    {
        imagem: './assets/img/fundo2.png',
        titulo_musica: 'Fuel',
        artista: 'Metallica',
        descricao: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
    },
    {
        imagem: './assets/img/fundo3.png',
        titulo_musica: 'Do I Wanna Know?',
        artista: 'Artic Monkeys',
        descricao: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
    },
    {
        imagem: './assets/img/fundo4.png',
        titulo_musica: 'Africa',
        artista: 'TOTO',
        descricao: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
    },
    {
        imagem: './assets/img/fundo5.png',
        titulo_musica: 'Burguesinha',
        artista: 'Seu Jorge',
        descricao: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
    },
    {
        imagem: './assets/img/fundo6.png',
        titulo_musica: 'Thunderstruck',
        artista: 'AC/DC',
        descricao: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
    }
]


export function SectionRecomendacoes() {

    return (
        <section id="recomendacoes">
            <h2>Recomendações Diárias</h2>
            <div className="recomendacoes-content">
                {dados.map((item, index) => (
                    <div key={index} className="recomendacao-card">
                        <a href="#"><img src={item.imagem} alt="Queen" className="img" /></a>
                        <div className="recomendacao-texts">
                            <a href="#" className="nome">{item.titulo_musica}<br /></a>
                            <a href="#" className="artista">{item.artista}</a>
                        </div>
                        <div className="descricao">
                            <p className="descricao-text">{item.descricao}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>

    )
}