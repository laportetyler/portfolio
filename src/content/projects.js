export default [
  {
    name: 'Incentive and Offer Management',
    text: [
      'Monolithic project consisting of multiple web applications, web services, and ETLs that are used by GM to author incentives and offers that are served up to GM partners and dealers.',
    ],
    technologies: ['Java', 'Spring', 'MySQL', 'Apache SOLR', 'Zookeeper',  'Ansible', 'GitLab CI', 'Docker', 'Javascript', 'ExtJS', 'Tag Manager'],
    image: {
      dark: '/static/light_iom_project.png',
      light: '/static/dark_iom_project.png',
    }
  },
  {
    name: 'Performance Tracking Library',
    text: [
      'Execution time analytics tracking Java library built with AspectJ and Aspect Oriented Programming methodology. ' +
      'Used on multiple projects within Autodata to easily record the execution time of API endpoints in Google Analytics.'
    ],
    technologies: ['Java', 'Spring', 'AspectJ', 'Google Analytics'],
    image: {
      dark: '/static/light_analytics_project.jpg',
      light: '/static/dark_analytics_project.jpg',
    }
  },
  {
    name: 'Recipe Manager',
    text: [
      'Application used to create recipes and automatically calculate nutritional information from the listed ingredients. ' +
      'Nutritional information retrieved from multiple sources and stored in ElasticSearch for quick and robust searching.'
    ],
    technologies: ['React/Redux', 'Javascript ES6', 'Java', 'Spring', 'PostgreSQL', 'ElasticSearch', 'Auth0', 'AntD', 'LESS'],
    source: 'https://github.com/recipe-manager/',
    image: {
      dark: '/static/light_recipe_manager_project.jpg',
      light: '/static/dark_recipe_manager_project.jpg',
    }
  },
  {
    name: 'Portfolio',
    text: [
      'This website! Responsive personal portfolio website built with React. Components are auto-generated from JSON data for easy maintenance.',
      'Hosted on AWS and deployed with Travis CI.'
    ],
    technologies: ['React', 'Javascript ES6', 'Grommit', 'SASS', 'AWS', 'Travis CI'],
    source: 'https://github.com/laportetyler/portfolio',
    image: {
      dark: '/static/light_portfolio_project.png',
      light: '/static/dark_portfolio_project.png',
    }
  }
];