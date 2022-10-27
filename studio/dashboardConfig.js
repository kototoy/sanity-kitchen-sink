export default {
  widgets: [
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
                  buildHookId: '635b0c60b6d8b7008bb1a5e3',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-4vnhq8ar',
                  apiId: 'eabb8d03-8935-41bc-8ebd-d4b2ee822c68'
                },
                {
                  buildHookId: '635b0c611ebd6c00b17cbbc8',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-xwjpod1p',
                  apiId: '4ad9691c-e005-42e5-be47-d8b7883d1a34'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/kototoy/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-xwjpod1p.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
