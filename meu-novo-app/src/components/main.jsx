 

    import './main.css'
    import logo from  './assets'

function Main(){
    return(
       
       <main>
        <section id="home" class="banner">
            
            <h2>Soluções Inovadoras em TI</h2>
            <p>Transformando ideias em arquiteturas escaláveis e interfaces modernas.</p>
            <button id="cta-btn">Saiba Mais</button>
        </section>


        <section  className="cards-section">
            <h2  className='t2'>Nossas Especialidades</h2>
            <div class="cards-grid">
                <div className='card'>
                    <h2 className='borda1'>Segurança de Dados</h2>
                    <h4>Proteção avançada contra ameaças cibernéticas com soluções de cibersegurança, backup em nuvem e políticas de segurança personalizadas para garantir a integridade dos seus dados.</h4>
                     <button  className='button'><a >Detalhes do Serviço </a>  </button>
                </div>

                <div className='card'>
                    <h2 className='borda2'>Firewall</h2>
                    <h4>Implementação e gestão de firewalls de última geração para criar barreiras robustas contra invasões, monitorando e controlando o tráfego de rede com políticas de segurança avançadas.</h4>
                    <button  className='button'><a >Detalhes do Serviço </a>  </button>
                </div>

                <div className='card'>
                   <h2 className='borda3'> Suporte em Informática</h2>
                    <h4>  Assistência técnica especializada para resolver problemas de hardware, software e redes, com atendimento ágil e preventivo para manter sua operação funcionando sem interrupções.</h4>
                    <button  className='button2'><a >Detalhes do Serviço </a>  </button>
                </div>

                <div className='card'>
                   <h2 className='borda4'>Infraestrutura de Rede</h2> 
                   <h4>Projetamos, implementamos e gerenciamos infraestruturas de rede escaláveis e de alta performance, garantindo conectividade estável e segura para todas as operações da sua empresa..</h4>
                   <button  className='button'><a >Detalhes do Serviço </a>  </button>
                </div>
            </div>
         
        </section>
    </main>
    

    )
}

export default Main;