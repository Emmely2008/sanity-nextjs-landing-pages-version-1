export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
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
                  buildHookId: '6133379d5389a906c4cb7e85',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-version-1-studio',
                  apiId: 'a93b4ef5-5383-4e45-b311-2d5887cde767'
                },
                {
                  buildHookId: '6133379c9d12cd9f734c92f9',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-version-1',
                  apiId: '0cf795c0-a756-4432-b837-a18ff3e5a10f'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Emmely2008/sanity-nextjs-landing-pages-version-1',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-version-1.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
