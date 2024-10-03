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
      title: 'Desenvolvedor Web',
      description: 'Desenvolvo sites e aplicações web utilizando tecnologias modernas e focadas na experiência do usuário, atendendo às necessidades dos clientes com a melhor performance possível.',
      exTitle: 'Experiência',
      exDesc: 'Desenvolvedor Full-stack, com foco em Frontend.',
      grad: 'Graduação',
      gradDesc: 'em Engenharia Civil pela Universidade Federal de Goiás (UFG)',
      pos: 'Pós-Graduação',
      posDesc: 'em Desenvolvimento de Aplicações Web',
      ing: 'Inglês fluente - ',
      ingDesc: 'escrita e fala',
      des: 'Desenvolvedor',
      capDesc: 'Capgemini - 10 meses',
      peqDesc: 'Pequi - 6 meses',
      t1: 'Frontend essencial',
      d1: 'HTML, CSS, JS, Pré-processadores CSS (Saas e SCSS), design responsivo e acessibilidade.',
      t2: 'Metodologias Ágeis',
      d2: 'Participação nos ritos e utilização de ferramentas do Agile.',
      t3: 'Angular e TypeScript',
      d3: 'Estudo aprofundado do framework e aplicação em projetos usando Typescript, RxJS, Angular Material.',
      t4: 'REST API',
      d4: "Construção, utilização e testes de APIs com Postman.",
      t5: 'Laravel',
      d5: 'Aplicação em projetos full-stack utilizando Blade e ferramentas do ecossistema (Breeze, Herd, Valet).',
      t6: 'Principais Ferramentas',
      d6: 'Utilização plena de Docker, Github Copilot, Lighthouse e Gerenciadores de banco de dados.',
      t7: 'Web Design',
      d7: 'Tipografia, cores, otimização de imagens, organização visual, UI/UX.',
      t8: 'Next.js e React (aprendendo)',
      d8: 'Focado no estudo da documentação e elaboração dos primeiros projetos com essas tecnologias.',
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
      title: 'Web Developer',
      description: 'I craft websites and applications by leveraging modern technologies and user-centered design principles, fulfilling client needs with optimized performance.',
      exTitle: 'Experience',
      exDesc: 'Full-stack developer, with focus on Frontend.',
      grad: 'Graduation degree',
      gradDesc: 'in Civil Engineering on Universidade Federal de Goiás (UFG)',
      pos: 'Post-Graduate degree',
      posDesc: 'in Web Applications Development',
      ing: 'Advanced English - ',
      ingDesc: 'written and spoken',
      des: 'Developer',
      capDesc: 'Capgemini - 10 months',
      peqDesc: 'Pequi - 6 months',
      t1: 'Frontend essentials',
      d1: 'HTML, CSS, JS, CSS Preprocessors (Saas, SCSS), responsive design and accessibility.',
      t2: 'Agile',
      d2: 'Worked with the cycle meetings and tools.',
      t3: 'Angular and Typescript',
      d3: 'Deep study of the framework and application on projects with TypeScript, RxJS, Angular Material.',
      t4: 'REST API',
      d4: "Built, used and tested APIs with Postman.",
      t5: 'Laravel',
      d5: 'Utilized in full-stack projects with Blade and ecosystem tools (Breeze, Herd, Valet).',
      t6: 'Main Tools',
      d6: 'Docker, Github Copilot, Lighthouse and Database Management Softwares.',
      t7: 'Web Design',
      d7: 'Typography, colors, image optimizations, visual hierarchy, UI/UX.',
      t8: 'Next.js and React (learning)',
      d8: 'Studying documentation e starting projects with these technologies.',
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