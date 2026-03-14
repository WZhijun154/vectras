import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  mainSidebar: [
    'intro',
    {
      type: 'category',
      label: 'Background',
      items: ['background/education', 'background/experience'],
    },
    {
      type: 'category',
      label: 'Skills',
      items: ['skills/technical', 'skills/languages'],
    },
    'projects',
    'dating',
    'contact',
  ],
};

export default sidebars;
