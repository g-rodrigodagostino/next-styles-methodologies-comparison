This is a [Next.js](https://nextjs.org/) project (version 13.4.13) and React 18.2.0

## Methodologies comparison


### (S)CSS Modules:

See an implementation example at [`src/app/components-css-modules/CTALink`](https://github.com/g-rodrigodagostino/next-styles-methodologies-comparison/blob/19afd3dd1539e911b0d3f817ead23bafd0a08d76/src/app/components-css-modules/CTALink)

#### Changes introduced to the code:
- Styles are moved to a separated file with the naming convention `name.modules.(s)css
- Styles need to be imported on components as an object
- Classes get a hash added as a suffix to their name, and a preffix based on the **name** used for the style object

```html
<a class="styles_cta-link__o24VL styles_cta-link--blue-fill__sZojc">
  <span class="text-size-button-bold">Click me!</span>
</a>
```

#### Implications:
- _**Can NOT be implemented in current marketing-site-static repo**_ due to current webpack style loader configuration
- Class names get extra cluttered
- E2E and synthetics tests could manifest conflicts due being dependent on class names as element's identifiers. Since the current nomenclature changes, it could break the test. Therefore, an extra refactoring process on Cypress and Datadog would be needed to cover this
- Since complex interpolation styles can't be moved to module files, components with such condition should follow one of these paths:
  - _Use styled-jsx with CSS only, maintaining the current interpolation expression_: This adds more clutter to class names by adding an extra hash class (needed for styled-jsx). Involves low effort, and has full compatibility with our Next.js version destination. **CSS and SASS coexistence**.
  - _Complete component logic rebuild to avoid interpolation_: Could involve more effort depending on the interpolation complexity issue. It would have full compatibility with our Next.js version destination. **No CSS and SASS coexistence**.

### Global SCSS files:

#### Changes introduced to the code:
- All components have an individual SASS (.scss, not .module.scss) file with all the related style
- Components are only able to load .module.scss files, therefore, SASS files need to be loaded on the main app file (app/layout file depending on Next.js version)



#### Implications:
- _**Can be implemented in current marketing-site-static repo**_
- SASS files being loaded in the main app file will make all styles **globally accessible by any component**, therefore, using CSS specificity concept correctly will be crucial
- Some components could break due wrong CSS specificity implementation, hence, this needs to be covered during component refactoring
- Since complex interpolation styles can't be moved to module files, components with such condition should follow one of these paths:
  - _Use styled-jsx with CSS only, maintaining the current interpolation expression_: Styled-jsx will limit the scope of some styles for the component, however, dealing with global and scoped styles can introduce complications when implementing/debugging components. **CSS and SASS coexistence**
  - _Complete component logic rebuild to avoid interpolation_: Could involve more effort depending on the interpolation complexity issue. It would have full compatibility with our Next.js version destination. **No CSS and SASS coexistence**

### Styled-jsx

See an implementation example at [`src/app/components-css-modules/CTALink`](https://github.com/g-rodrigodagostino/next-styles-methodologies-comparison/blob/19afd3dd1539e911b0d3f817ead23bafd0a08d76/src/app/components-css-modules/CTALink)

#### Changes introduced to the code:
- Current SASS code is converted into CSS. Interpolation is kept untouched unless the expression uses SASS directives

#### Implications:
- _**Can be implemented in current marketing-site-static repo**_ (partially done due our current component implementation strategy)
- We would still have SASS files (global styles) coexisting with CSS
- Converting SASS files to CSS add extra work and complexity
- Less efforts when refactoring components due all interpolation styles being maintained (although being CSS)
- **CSS and SASS coexistence**
