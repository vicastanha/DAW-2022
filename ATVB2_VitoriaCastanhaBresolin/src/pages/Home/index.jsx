import {SectionPrimeiraParte} from '../../component/SectionPrimeiraParte';
import {SectionRecomendacoes} from '../../component/SectionRecomendacoes';
import {SectionFuncionalidades} from '../../component/SectionFuncionalidades';
import {SectionMotivos} from '../../component/SectionMotivos';

export function HomePage() {
    return (
        <div id="home-page">
					<div className="container">

                        <SectionPrimeiraParte/>
                        <SectionRecomendacoes/>
                        <SectionFuncionalidades/>
                        <SectionMotivos/>

					</div>
				</div>
    )
}