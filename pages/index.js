import Head from 'next/head';
import Script from 'next/script';
import Navbar from './navbar';
import Footer from './footer';

export default function Home() {
  return (
    <>
      <Head>
        <title>Portal do CAES do IFAM-CMZL</title>
      </Head>

      <Navbar />
      <main>{children}</main>
      <Footer />

      <header>
        <h2 id="page-title" class="page_title" itemprop="headline">
          Centro Academico - Engenharia de Software - IFAM Campus Zona Leste
        </h2>
      </header>

      <section>

        <p>
          A nossa chapa tem objetivos bem simples e definidos:<br /><br />
          (I) - Atender as principais demandas das turmas de Engenharia<br />
          (II) - Prover as melhorias das atividades acadêmicas<br />
          (III) - Fomentar maior participação dos discentes na vida acadêmica<br />
        </p>

        <img src="https://raw.githubusercontent.com/CarlosViniMSouza/CarlosViniMSouza/main/images/Others/img-chapa-completa.jpg" alt="caes-ifam-cmzl2022" />

        <p>
          O CAES-IFAM-CMZL elaborou propostas dentro da realidade vivida pelos alunos e que contemplam nossos
          interesses frente ao Instituto. Assim, estruturamos nossa gestão buscando contemplar as áreas de
          Tecnologia, Finanças, Eventos, Comunicação e Cultura e Lazer.
        </p>

        <h4 id="area-de-tecnologia">Na area de Tecnologia:
        </h4>
        <ul>
          <li>
            Fiscalizar e colaborar na reformulação do PPC do curso, auxiliando a
            coordenação e representando os discentes de forma ativa e responsiva;
          </li>

          <li>
            Atualizar o estatuto do Centro Acadêmico;
          </li>

          <li>
            Incentivar estudante a adentrarem atividades de pesquisa e extensão por
            meio de conexões com professores através de áreas de interesse em comum, bem como a participação
            em eventos extracurriculares: hackathons, summer jobs, workshops, code jamms, competições, etc.
          </li>
        </ul>

        <h4 id="area-de-financas">Na area de Financas:
        </h4>
        <ul>
          <li>
            Prestar Contas das doações e custos do C.A.</li>

          <li>
            Prover eventos que possibilitem arrecadar fundos á organização de
            eventos, melhorias no ambiente do centro acadêmico e eventuais gastos. Dentre as atividades
            propostas, estão: organização de cantinas, vaquinhas colaborativas, solicitar recursos junto à Lei
            da Informática da ZFM, etc.
          </li>
        </ul>

        <h4 id="area-de-comunicacao">Na area de Comunicação:</h4>
        <ul>
          <li>
            Articular parceiras com outros Centros Acadêmicos do IFAM para realização
            de atividades conjuntas e cobrança de interesses estudantis, como sobre os serviços prestados pelo
            Instituto;
          </li>

          <li>
            Divulgar informes com mais frequência em diversos canais de comunicação
            (Instagram, WhatsApp, Facebook e Twitter) sobre os processos e articulações do nosso C.A.;
          </li>

          <li>
            Participar ativamente em redes sociais, compartilhando todas as
            realizações relevantes do CAES-IFAM-CMZL;
          </li>

          <li>
            Divulgar vagas de estágio com empresas interessadas nos
            alunos do curso (e de possíveis vagas que possam ser de interesse dos estudantes).</li>
        </ul>

      </section>

      <div id="footer" class="page_footer">
        <footer>
          <div>
            <ul class="social-medias">
              <h4>Nos Acompanhe nas Redes:</h4>
              <li><a href="https://twitter.com/caes_ifam_cmzl"> Twitter </a></li>
              <li><a href="https://facebook.com/caes_ifam_cmzl"> Facebook </a></li>
              <li><a href="https://instagram.com/caes_ifam_cmzl"> Instagram </a></li>
              <li><a href="https://github.com/caes-ifam-cmzl"> GitHub </a></li>
            </ul>
          </div>
        </footer>
      </div>

      <div>&copy; @CarlosViniMSouza - Desenvolvido com NextJS</div>

      <Script
        src="https://kit.fontawesome.com/4eee35f757.js" />

    </>
  )
}
