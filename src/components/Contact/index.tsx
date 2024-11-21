import { GlobeIcon, LinkedinIcon, MailIcon } from 'lucide-react'
import { forwardRef } from 'react'
import { useTranslation } from 'react-i18next'

export const Contact = forwardRef<HTMLElement>((_, ref) => {
  const { t } = useTranslation()
  return(
    <section ref={ref} className="flex flex-col items-center w-80 lg:w-96 h-96 bg-[#262626] shadow-portfolio my-24 mx-auto text-white py-12 px-12 text-center">
      <div>
        <span className="text-xl">{t('Fale comigo')}</span>
        <h1 className="font-black italic uppercase text-4xl">{t('Contato')}</h1>
      </div>
      <div className="flex flex-row items-center self-start italic underline text-base mt-12 gap-4">
        <LinkedinIcon size={30}/>
        <a href='https://www.linkedin.com/in/yure-rafael/' target='blank'>linkedin/yure-rafael</a>
      </div>
      <div className="flex flex-row items-center self-start italic text-base my-8 gap-4">
        <MailIcon size={30}/>
        <span>rafaelyure53@gmail.com</span>
      </div>
      <div className="flex flex-row items-center self-start italic underline text-base gap-4">
        <GlobeIcon size={30}/>
        <a href='https://yurerafael.dev/' target='blank'>yurerafael.dev</a>
      </div>
    </section>
  )
})