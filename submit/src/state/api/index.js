import { getUserApi } from './_userApi';
import { getNotebooksApi } from './_notebooksApi';
import { getPagesApi } from './_pagesApi';

import environs from '../../utils/environmentVariables';

export default {
  ...getUserApi(environs.API_URL),
  ...getNotebooksApi(environs.API_URL),
  ...getPagesApi(environs.API_URL),
};

