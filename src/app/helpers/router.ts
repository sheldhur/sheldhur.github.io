import {Router} from '@angular/router';

/**
 * Изменяет параметры в текущем роуте
 * @param {Router} router
 * @param {object} queryParams  список параметров которые будут заменены
 * @returns {Promise<boolean>}
 */
export const navigateChangeQueryParams = (router: Router, queryParams: object): Promise<boolean> => {
  const currentPath = router.url.split('?')[0];
  const {queryParams: currentQueryParams} = router.parseUrl(router.url);
  return router.navigate([currentPath], {queryParams: {...currentQueryParams, ...queryParams}});
};
