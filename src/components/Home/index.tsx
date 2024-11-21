import { forwardRef } from 'react';
import { useTranslation } from 'react-i18next';

export const Home = forwardRef<HTMLElement>((props, ref) => {
  const { t } = useTranslation()
  return(
    <section ref={ref} className="flex flex-col-reverse h-[620px] lg:flex-row items-center gap-7 text-white px-12 lg:px-0" >
      <div className="flex flex-col">
        <span className="text-base lg:text-2xl italic">{t('Olá, sou o')}</span>
        <h1 className="text-6xl lg:text-8xl italic uppercase font-black">yure</h1>
        <h1 className="text-6xl lg:text-8xl italic uppercase font-black ml-12 -mt-2">rafael</h1>
        <span className="text-base lg:text-2xl italic ml-auto">{t('Desenvolvedor Front-end')}</span>
      </div>
      <div className='flex items-center justify-center w-[330px] h-[330px] shadow-portfolio rounded-full md:ml-auto'>
        <img className="h-80 rounded-full" src='/yure.png' alt='profile-img'/>
      </div>
    </section>
  )
})