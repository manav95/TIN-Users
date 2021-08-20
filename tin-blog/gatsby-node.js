/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it
 const path = require(`path`);

 /**
  * Implements the onCreatePage node API.
  */
exports.onCreatePage = async ({ page, actions }) => {
  const { createPage } = actions

  // page.matchPath is a special key that's used for matching pages
  // only on the client.
  if (page.path.match(/^\/user/)) {
    page.matchPath = `/user/*`

    // Update the page.
    createPage(page)
  }
}

 exports.createPages = ({ graphql, actions }) => {
   const { createPage } = actions;

   return new Promise((resolve, reject) => {
    graphql(`
      {
        allUserUser {
          nodes {
            id
            display_name
            drupal_id
            field_address
            field_first_name
            field_last_name
            field_gender
            field_notes
            relationships {
              user_picture {
                 localFile {
                  childImageSharp {
                    gatsbyImageData(layout: FIXED)
                  }
                 }
               }
             }
            field_talents {
              processed
            }
            field_phone
            field_biography
            field_birthday
          }
        }
      }
    `).then(result => {
      result.data.allUserUser.nodes.forEach(node => {
        let path_alias = node.display_name
        createPage({
          // This is the path, or route, at which the page will be visible.
          path: path_alias,
          // This the path to the file that contains the React component
          // that will be used to render the HTML for the recipe.
          component: path.resolve(`./src/templates/profile.tsx`),
          conltext: {
            // Data passed to context is available in page queries as GraphQL
            // variables.
            id: node.id,
            displayName: node.display_name,
            firstName: node.field_first_name ? node.field_first_name : '',
            lastName: node.field_last_name ? node.field_last_name : '',
            address: node.field_address ? node.field_address : '',
            phone: node.field_phone ? node.field_phone : '',
            birthday: node.field_birthday ? node.field_birthday : '',
            bio: node.field_biography ? node.field_biography : '',
            notes: node.field_notes ? node.field_notes : '',
            talent: node.field_talents ? node.field_talents.processed : '',
            gender: node.field_gender ? node.field_gender : '',
            picture: node.relationships ? node.relationships.user_picture : null
          },
        })
      });

      resolve()
    })
  })
};
