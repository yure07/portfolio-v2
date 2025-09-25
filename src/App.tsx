import { Github, Linkedin } from "lucide-react"
import { useState } from "react"
import { useTranslation } from "react-i18next"

function App() {
  const [currentLanguage, setCurrentLanguage] = useState<string>('pt')
  const { t, i18n: { changeLanguage } } = useTranslation()

  const handleChangeLanguage = (newLanguage: 'pt' | 'en') => {
    changeLanguage(newLanguage)
    setCurrentLanguage(newLanguage)
  }
  
  return (
    <div className="flex flex-col px-7 py-9 md:flex-row md:justify-around md:px-0 md:pr-20 lg:pr-40 lg:pt-20">
      <section className="flex flex-col text-white md:fixed md:top-30 md:left-20 lg:left-32">
        <div className="flex flex-row">
          <h1 className="font-bold text-3xl lg:text-5xl">Yure Rafael</h1>
          <div className="flex items-center text-xs ml-12 gap-4 lg:text-lg">
            <button 
              type="button" 
              className={currentLanguage === 'en' ? 'font-bold' : 'font-normal'}
              onClick={() => handleChangeLanguage('en')}>
                EN
            </button>
            <span>|</span>
            <button 
              type="button" 
              className={currentLanguage === 'pt' ? 'font-bold' : 'font-normal'}
              onClick={() => handleChangeLanguage('pt')}>
                PT
            </button>
          </div>
        </div>
        <span className="font-medium text-xs mt-4 lg:text-lg">{t("Desenvolvedor Front-end")}</span>
        <span className="text-xs mt-3 w-48 lg:text-lg lg:w-64">{t("Crio experiências memoráveis através da web.")}</span>
        <ul className="flex flex-row mt-7 gap-5 lg:gap-7">
          <li>
            <a href="https://www.linkedin.com/in/yure-rafael/" target="_blank" rel="noreferrer">
              <Linkedin/>
            </a>
          </li>
          <li>
            <a href="https://github.com/yure07" target="_blank" rel="noreferrer">
              <Github/>
            </a>
          </li>
        </ul>
      </section>
      <section className="flex flex-col gap-14 md:ml-auto">
        <div className="flex flex-col w-72 mt-20 text-white text-xs gap-4 md:mt-0 lg:w-[500px]">
          <h2 className="uppercase font-bold text-sm lg:text-lg">{t("Sobre")}</h2>
          <p className="text-slate-200 leading-5 lg:text-base">
            {t("Sou um desenvolvedor apaixonado por criar interfaces de usuário acessíveis que combinam design inteligente com funcionalidade desde 2022. Meu ponto forte está no desenvolvimento, mas domino também a prototipagem, criando experiências que não só têm ótima aparência, mas são meticulosamente construídas para desempenho e usabilidade.")}</p>
          <p className="text-slate-200 leading-5 lg:text-base"> 
            {t("Ao longo da minha carreira, já trabalhei numa software house, fiz projetos freelancers e participei de um projeto voluntário na parte jurídica.")}
          </p>
          <p className="text-slate-200 leading-5 lg:text-base"> 
            {t("No meu tempo livre, gosto de ler, praticar caminhada, musculação e jogos.")}
          </p>
        </div>
        <div className="flex flex-col text-white w-72 lg:w-[500px]">
          <h2 className="uppercase font-bold text-sm lg:text-lg">{t("Experiência")}</h2>
          <div className="flex flex-col lg:flex-row lg:mt-6">
            <div className="mt-6 mb-2 text-slate-200 lg:m-0 lg:mr-6 lg:text-sm">
              <span className="text-xs">07/2024 - 10/2024</span>
            </div>
            <div className="flex flex-col text-xs lg:w-[350px]">
              <div className="flex lg:font-semibold lg:text-base">
                <h3>{t("Desenvolvedor Front-end")} Jr</h3>
                <span className="text-sm -mt-[5px] mx-2 lg:-mt-1">.</span>
                <a href="https://www.yntech.com.br/" target="_blank" className="underline" rel="noreferrer">Yntech</a>
              </div>
              <p className="my-3 lg:text-base">{t("Responsável por construir e manter o CRM da empresa, atuando juntamente com os desenvolvedores e designers, para fundir funcionalidade e elegância em um só projeto.")}
              </p>
              <div className="flex flex-wrap gap-x-3 gap-y-2 text-[#4AB9AC] font-medium lg:text-sm">
                <div className="px-3 py-1 bg-[#122B39] rounded-lg">
                  <span>React</span>
                </div>
                <div className="px-3 py-1 bg-[#122B39] rounded-lg">
                  <span>Typescript</span>
                </div>
                <div className="px-3 py-1 bg-[#122B39] rounded-lg">
                  <span>Tailwind</span>
                </div>
                <div className="px-3 py-1 bg-[#122B39] rounded-lg">
                  <span>single-spa</span>
                </div>
                <div className="px-3 py-1 bg-[#122B39] rounded-lg">
                  <span>WebSocket</span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col mt-4 lg:flex-row lg:mt-8">
            <div className="mt-6 mb-2 text-slate-200 lg:m-0 lg:text-sm">
              <span className="text-xs">07/2023 - 07/2024</span>
            </div>
            <div className="flex flex-col text-xs lg:w-96 lg:ml-auto lg:pl-4">
              <div className="flex lg:text-base lg:font-semibold">
                <h3>{t("Desenvolvedor Front-end voluntário")}</h3>
                <span className="text-sm -mt-[5px] mx-2 lg:-mt-1">.</span>
                <a href="https://direito.ufba.br/servi%C3%A7o-de-apoio-jur%C3%ADdico-saju" target="_blank" className="underline" rel="noreferrer">UFBA</a>
              </div>
              <p className="my-3 lg:text-base">{t("Projeto social da área jurídica, beneficiando pessoas que não têm condições de pagar um advogado. Fui encarregado do front-end do projeto.")}
              </p>
              <div className="flex flex-wrap gap-x-3 gap-y-2 text-[#4AB9AC] font-medium lg:text-sm">
                <div className="px-3 py-1 bg-[#122B39] rounded-lg">
                  <span>React</span>
                </div>
                <div className="px-3 py-1 bg-[#122B39] rounded-lg">
                  <span>Javascript</span>
                </div>
                <div className="px-3 py-1 bg-[#122B39] rounded-lg">
                  <span>SASS</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col text-white w-72 lg:w-[500px]">
          <h2 className="uppercase font-bold text-sm lg:text-lg">{t("Projetos")}</h2>
          <div className="flex flex-col lg:flex-row-reverse lg:mt-8" id="project-more-score">
            <div className="flex flex-col mt-8 lg:-mt-1 lg:w-80 lg:pl-6">
              <a href="https://more-score.netlify.app/" target="_blank" className="underline text-sm font-semibold lg:text-lg" rel="noreferrer">More score</a>
              <span className="mt-2 mb-4 text-xs lg:text-base">{t("Website capaz de ler comentários de um vídeo do youtube e trazer a emoção que expressa cada comentário, através de inteligência artificial, com mais de 20 emoções disponíveis.")}</span>
                <div className="flex flex-wrap gap-x-3 gap-y-2 text-[#4AB9AC] font-medium text-xs lg:text-sm">
                  <div className="px-3 py-1 bg-[#122B39] rounded-lg">
                    <span>React</span>
                  </div>
                  <div className="px-3 py-1 bg-[#122B39] rounded-lg">
                    <span>Typescript</span>
                  </div>
                  <div className="px-3 py-1 bg-[#122B39] rounded-lg">
                    <span>Tailwind</span>
                  </div>
                  <div className="px-3 py-1 bg-[#122B39] rounded-lg">
                    <span>Python</span>
                  </div>
                  <div className="px-3 py-1 bg-[#122B39] rounded-lg">
                    <span>Netlify</span>
                  </div>
                  <div className="px-3 py-1 bg-[#122B39] rounded-lg">
                    <span>Render</span>
                  </div>
                </div>
            </div>
            <div className="p-[2px] bg-[#7C7878] rounded-lg mt-6 w-64 lg:w-[180px] lg:h-[116px] lg:mt-0">
              <img src="/chart-desktop.png" alt="more-score-img" className="rounded-lg"/>
            </div>
          </div>
          <div className="flex flex-col mt-10 lg:flex-row-reverse lg:mt-16" id="project-pancea">
            <div className="flex flex-col mt-8 lg:w-80 lg:pl-6 lg:mt-0">
              <a href="https://www.panaceaexport.com/" target="_blank" className="underline text-sm font-semibold lg:text-lg" rel="noreferrer">Panacea</a>
              <span className="mt-2 mb-4 text-xs lg:text-base">{t("Landing Page produzida para uma empresa importadora e exportadora de açúcar. Com design moderno e funcional, e idiomas em português, inglês e espanhol.")}</span>
                <div className="flex flex-wrap gap-x-3 gap-y-2 text-[#4AB9AC] font-medium text-xs lg:text-sm">
                  <div className="px-3 py-1 bg-[#122B39] rounded-lg">
                    <span>React</span>
                  </div>
                  <div className="px-3 py-1 bg-[#122B39] rounded-lg">
                    <span>Typescript</span>
                  </div>
                  <div className="px-3 py-1 bg-[#122B39] rounded-lg">
                    <span>Tailwind</span>
                  </div>
                  <div className="px-3 py-1 bg-[#122B39] rounded-lg">
                    <span>react-i18next</span>
                  </div>
                </div>
            </div>
            <div className="p-[2px] bg-[#7C7878] rounded-lg mt-6 w-64 lg:w-[180px] lg:h-[80px] lg:mt-0">
              <img src="/panacea-img.png" alt="panacea-img" className="rounded-lg"/>
            </div>
          </div>

          <div className="flex flex-col mt-10 lg:flex-row-reverse lg:mt-16" id="project-pancea">
            <div className="flex flex-col mt-8 lg:w-80 lg:pl-6 lg:mt-0">
              <a href="https://tauripasta.com/" target="_blank" className="underline text-sm font-semibold lg:text-lg" rel="noreferrer">Tauri</a>
              <span className="text-xs mt-1 text-red-500">{t("Em breve!")}</span>
              <span className="mt-2 mb-4 text-xs lg:text-base">{t("Website feito para uma empresa restaurante de massas. Nele é possível realizar pagamentos em pix e cartões, recebendo confirmação via Whatsapp.")}</span>
                <div className="flex flex-wrap gap-x-3 gap-y-2 text-[#4AB9AC] font-medium text-xs lg:text-sm">
                  <div className="px-3 py-1 bg-[#122B39] rounded-lg">
                    <span>React</span>
                  </div>
                  <div className="px-3 py-1 bg-[#122B39] rounded-lg">
                    <span>Typescript</span>
                  </div>
                  <div className="px-3 py-1 bg-[#122B39] rounded-lg">
                    <span>Tailwind</span>
                  </div>
                  <div className="px-3 py-1 bg-[#122B39] rounded-lg">
                    <span>API Mercado Pago</span>
                  </div>
                  <div className="px-3 py-1 bg-[#122B39] rounded-lg">
                    <span>API Meta</span>
                  </div>
                </div>
            </div>
            <div className="p-[2px] bg-[#7C7878] rounded-lg mt-6 w-64 lg:w-[180px] lg:h-[90px] lg:mt-0">
              <img src="/tauri-img.png" alt="panacea-img" className="rounded-lg"/>
            </div>
          </div>
        </div>

      </section>
    </div>
  )
}

export default App
