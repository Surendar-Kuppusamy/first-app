// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  getAjaxUrl: 'http://localhost/Server/Angular10/Class/ajax/AllGetRequestAjax.php',
  signupAjaxUrl: 'http://localhost/Server/Angular10/Class/ajax/UserSignupLoginAjax.php',
  uploadAjaxUrl: 'http://localhost/Server/Angular10/Class/ajax/UploadAjax.php',
  projectAjaxUrl: 'http://localhost/Server/Angular10/Class/ajax/ProjectAjax.php',
  productAjaxUrl: 'http://localhost/Server/Angular10/Class/ajax/ProductAjax.php',
  defaultImage: 'http://localhost/Server/Angular10/first-app/src/assets/images/nature1.jpg'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
