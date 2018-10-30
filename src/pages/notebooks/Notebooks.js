import React from 'react';
import PageWrapper from '../../components/page-wrapper/PageWrapper';
import CategoryMapper from '../../components/category-mapper/CategoryMapper';
import { mockNotebookObjects } from './../../components/category-mapper/_mockNotebookObjects';

const Notebooks = () => (
  <PageWrapper>
    <CategoryMapper notebooks={mockNotebookObjects} />
  </PageWrapper>
);

export default Notebooks;

