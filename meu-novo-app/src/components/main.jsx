 

    import './main.css'

function Main(){
    return(
       
       <main>
        <section id="home" class="banner">
            <h2>Soluções Inovadoras em TI</h2>
            <p>Transformando ideias em arquiteturas escaláveis e interfaces modernas.</p>
            <button id="cta-btn">Saiba Mais</button>
        </section>

        <section  className="cards-section">
            <h2>Nossas Especialidades</h2>
            <div class="cards-grid">
                <div className='card'>
                    <h2>UI/UX Design</h2>
                    <h4>Criação de interfaces intuitivas, acessíveis e focadas na experiência do usuário</h4>
                </div>

                <div className='card'>
                    <h2>Infraestrutura AWS</h2>
                    <h4>Arquitetura, deploy e manutenção de soluções escaláveis na nuvem.</h4>
                </div>

                <div className='card'>
                   <h2> IA & Game Dev</h2>
                    <h4>  Desenvolvimento de jogos integrados com algoritmos de Inteligência Artificial.</h4>
                </div>

                <div className='card'>
                   <h2>Engenharia de Dados</h2> 
                   <h4>Estruturação de dashboards em Power BI e modelagem de dados para tomada de decisão.</h4>
                </div>
            </div>
         
        </section>
    </main>
    

    )
}

export default Main;