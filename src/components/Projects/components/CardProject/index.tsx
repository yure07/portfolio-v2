import { useTranslation } from "react-i18next"

interface CardProject{
  srcImg: string
  title: string
  description: string
  link: string
}

export const CardProject = (projectProp: CardProject) => {
  const { t } = useTranslation()
  return(
    <div className="flex flex-col gap-6 my-8 mx-auto items-center text-center">
      <img src={projectProp.srcImg} alt="project-img" className="w-56 h-36 lg:w-80 lg:h-40 bg-[#1E1E1E] shadow-portfolio"/>
      <div className="flex flex-col gap-2 lg:text-start lg:h-44">
        <h3 className="uppercase text-xl font-black">{projectProp.title}</h3>
        <p className="text-justify text-xs w-52 lg:w-72 px-2 lg:p-0">{t(`${projectProp.description}`)}</p>
      <a 
        href={projectProp.link} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="flex items-center justify-center w-28 h-8 bg-white text-black text-xs font-bold mt-auto">
          {t('Ver projeto')}
      </a>
      </div>
    </div>
  )
}