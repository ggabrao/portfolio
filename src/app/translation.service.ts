import { Injectable } from '@angular/core';

interface Translation {
  [key: string]: string;
}

interface Translations {
  en: Translation;
  pt: Translation;
}

@Injectable({
  providedIn: 'root'
})
export class TranslationService {

  private translations: Translations = {
    pt: {
      title: 'Desenvolvedor Front-end',
      description: 'React, Next.js, Angular, Typescript, Tailwind CSS, Web Design.',
      exTitle: 'Experiência',
      exDesc: 'Websites e Web Applications.',
      grad: 'Graduação',
      gradDesc: 'em Engenharia Civil pela Universidade Federal de Goiás (UFG)',
      pos: 'Pós-Graduação',
      posDesc: 'em Desenvolvimento de Aplicações Web',
      ing: 'Inglês fluente',
      des: 'Desenvolvedor',
      capDesc: 'Capgemini - 10 meses',
      peqDesc: 'Pequi - 6 meses',
      wancemoDesc: 'Wancemo - Voluntário',
      t1: 'Front-end essencial',
      d1: 'HTML, CSS, JS, Saas/SCSS, design responsivo e acessibilidade.',
      t2: 'Typescript e Tailwind CSS',
      d2: 'Domínio e utilização em projetos Angular e React.',
      t3: 'Frameworks',
      d3: 'Angular, React, Next.js.',
      t4: 'Web Design',
      d4: 'Tipografia, otimização de imagens, paleta de cores, organização visual.',
      t5: 'Core Web Vitals',
      d5: 'Entendimento das métricas e técnicas para maximizá-las.',
      t6: 'Metodologias Ágeis',
      d6: 'Participação nos ritos e utilização de ferramentas do Agile.',
      t7: 'Ferramentas',
      d7: 'Postman, Docker, JIRA, Lighthouse.',
      t8: 'Back-end',
      d8: 'Conhecimento necessário para integração com Front-end.',
      proj: 'Projetos',
      p1: 'Portfolio pessoal - Angular',
      pd1: 'Desenvolvimento de projeto para demonstrar proficiência no Framework e nas melhores práticas de Frontend e Web Design.',
      plink: 'Visitar',
      p2: 'Gerador de cartões de trabalho',
      pd2: 'Projeto para testar o uso de uma das ferramentas de auxílio de código baseada em Inteligência Artificial (GitHub Copilot).',
      p3: 'Porfolio para Arquiteta - Next.js',
      pd3: 'Desenvolvimento de site pessoal para cliente.',
      pconstr: '(Em construção)',
      disc: 'Este site é de minha autoria',
      rights: 'Todos os direitos reservados.',
      langButton: 'Mudar idioma'
    },

    en: {
      title: 'Front-end Developer',
      description: 'React, Next.js, Angular, Typescript, Tailwind CSS, Web Design.',
      exTitle: 'Experience',
      exDesc: 'Websites and Web Applications.',
      grad: "Bachelor's degree",
      gradDesc: 'in Civil Engineering on Universidade Federal de Goiás (UFG)',
      pos: 'Postgraduate degree',
      posDesc: 'in Web Applications Development',
      ing: 'Advanced English',
      des: 'Developer',
      capDesc: 'Capgemini - 10 months',
      peqDesc: 'Pequi - 6 months',
      wancemoDesc: 'Wancemo - Volunteer',
      t1: 'Front-end essentials',
      d1: 'HTML, CSS, JS, Saas/SCSS, responsive design and accessibility.',
      t2: 'Typescript and Tailwind CSS',
      d2: 'Extensive experience within Angular and React projects.',
      t3: 'Frameworks',
      d3: 'Angular, React, Next.js.',
      t4: 'Web Design',
      d4: 'Typography, image optimizations, color palettes, visual hierarchy.',
      t5: 'Core Web Vitals',
      d5: 'Understanding on the metrics and how to optimize them.',
      t6: 'Agile',
      d6: 'Worked with the cycle meetings and tools.',
      t7: 'Tools',
      d7: 'Postman, Docker, JIRA, Lighthouse.',
      t8: 'Back-end',
      d8: 'Necessary knowledge to integrate with Front-end.',
      proj: 'Projects',
      p1: 'Personal Portfolio - Angular',
      pd1: 'Project to consolidate the specialization in the Framework and Frontend/Web Design best practices.',
      plink: 'Visit project',
      p2: 'Business card generator',
      pd2: 'Project to test one of the AI Code Assistant tools (GitHub Copilot).',
      p3: 'Porfolio for Architect - Next.js',
      pd3: 'Developing a personal website for a client.',
      pconstr: '(In Progress)',
      disc: 'This website was built by me',
      rights: 'All rights reserved.',
      langButton: 'Change language'
    }
  };

  private currentLang: keyof Translations = 'pt';

  setLanguage(lang: keyof Translations) {
    this.currentLang = lang;
  }

  translate(key: string): string {
    return this.translations[this.currentLang][key] || '!!!!FORGOT TO SET!!!!!';
  }
}