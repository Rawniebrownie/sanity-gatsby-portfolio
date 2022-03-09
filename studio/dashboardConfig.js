export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '622911a88a99d15bbdc0e422',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-s7jwdv1a',
                  apiId: 'c9d02a1b-4bc9-49c7-af7b-f6c637d9fc7f'
                },
                {
                  buildHookId: '622911a88931df57412d5d27',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-7dc86fkw',
                  apiId: '46aeca6c-89d8-4db8-9c5a-8bedb0605292'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Rawniebrownie/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-7dc86fkw.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
