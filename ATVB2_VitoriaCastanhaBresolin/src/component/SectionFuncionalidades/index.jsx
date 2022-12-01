import './style.css';

const funcionalidades = [
    {
        titulo: 'Analisa seus gêneros musicais mais escutados:',
        descricao: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione dolorem nisi etdoloremque labore'
    },
    {
        titulo: 'Mostra o seu #top5 de músicas escutadas:',
        descricao: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione dolorem nisi etdoloremque labore'
    },
    {
        titulo: 'Faz com que você conheça + sobre seu artista favorito: ',
        descricao: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione dolorem nisi etdoloremque labore'
    },
    {
        titulo: 'Te ajuda a criar playlists de suas músicas mais escutadas! ',
        descricao: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione dolorem nisi etdoloremque labore'
    },
    {
        titulo: 'Mostra quantos repeats as músicas tiveram ',
        descricao: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione dolorem nisi etdoloremque labore'
    },
    {
        titulo: 'E ajuda a evoluir seu gosto musical: ',
        descricao: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione dolorem nisi etdoloremque labore'
    }

];


export function SectionFuncionalidades() {
    return (

        <section id="funcionalidades">
            <h2>O que o filter faz?</h2>
            <div className="card-content">
                {funcionalidades.map((item, index) => (

                    <div key={index} className="card">
                        <h3>{item.titulo}</h3>
                        <div className="card-text">
                            <p>{item.descricao}</p>
                        </div>
                    </div>

                ))}



            </div>

        </section>
    )
}