import './upload-form';
import { getData } from './api';
import { initFilters } from './filters';

getData('/data')
  .then((data) => {
    initFilters(data);
  });
