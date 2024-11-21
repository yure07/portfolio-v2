import { forwardRef } from 'react';
import { useTranslation } from 'react-i18next';

export const About = forwardRef<HTMLElement>((_, ref) => {
  const { t } = useTranslation()
  return(
    <section ref={ref} className='flex h-[700px] items-center'>
      <div className="flex flex-col w-full lg:justify-center bg-[#262626] p-12 lg:px-24 text-white gap-5">
        <span className="font-bold text-base lg:text-2xl">{t('Mais sobre mim')}</span>
        <div className="text-xs lg:text-xl text-justify space-y-4">
          <p>{t('Desenvolvedor Front-end fascinado por transformar ideias em presença digital.')}</p>
          <p>{t('Especializado em React e Next.js, combino criatividade e conhecimento técnico para criar aplicações funcionais e inovadoras.')}</p>
          <p>{t('Como profissional, busco sempre construir códigos limpos e reutilizáveis, resultando em projetos escaláveis e de fácil manutenção.')}</p>
        </div>
        <div className='flex flex-row gap-3 text-xs mt-4'>
          <div className='p-2 bg-[#000000] rounded-lg'>React</div>
          <div className='p-2 bg-[#000000] rounded-lg'>Next.js</div>
          <div className='p-2 bg-[#000000] rounded-lg'>Tailwind</div>
          <div className='p-2 bg-[#000000] rounded-lg'>single-spa</div>
        </div>
      </div>
    </section>
  )
})