import { forwardRef } from 'react'
import { useTranslation } from 'react-i18next'
import { CardProject } from "./components/CardProject"

export const Projects = forwardRef<HTMLElement>((_, ref) => {
  const { t } = useTranslation()
  return(
    <section ref={ref} className="flex flex-col py-12 ">
      <div className="flex flex-col text-white self-center text-center">
        <span className="text-base">{t('3 projetos mais recentes')}</span>
        <h1 className="font-black italic text-5xl uppercase">{t('Projetos')}</h1>
      </div>
      <div className="flex flex-row flex-wrap text-white justify-between mt-12">
        <CardProject 
          srcImg=""
          title="title project" 
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Nunc maximus quam sed ultrices blandit. Duis elit metus, ornare sed 
            luctus id, tempus nec lectus. In suscipit mi dui, ut iaculis orci lacinia non. 
            Nulla dapibus mollis turpis a bibendum." 
          link="" 
        />
        <CardProject 
          srcImg="/panacea-img.png"
          title="Panacea" 
          description={t("Website produzido para uma empresa importadora e exportadora de açúcar. Com design moderno e funcional, com idiomas em português, inglês e espanhol, construído em React com Typescript e Tailwind.")}
          link="https://www.panaceaexport.com/" 
        />
        <CardProject 
          srcImg="/delplata-img.png"
          title="Del Plata" 
          description={t("Desenvolvimento de um e-commerce de joias. Com a intenção de criar a presença online de um empreendedor, construído usando principalmente React.js com Javascript e CSS.")}
          link="https://delplata.store/" 
        />
      </div>
    </section>
  )
})