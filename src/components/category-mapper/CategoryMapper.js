import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import shortid from 'shortid';
import IconButton from '@material-ui/core/IconButton/IconButton';
import Icon from '@mdi/react';
import { mdiPlus } from '@mdi/js';
import { notebookItemStoreShape } from '../../utils/_notebookItemStoreShape';
import Notebook from '../notebook/Notebook-container';
import CategorySection from '../category-section/CategorySection';

import styles from './CategoryMapper.module.css';

const cx = classNames.bind(styles);

const propTypes = {
  notebooks: PropTypes.arrayOf( notebookItemStoreShape ),
  additionalCategories: PropTypes.arrayOf(PropTypes.string),
  isLoading: PropTypes.bool,
  onCreateNewCategory: PropTypes.func.isRequired,
};

const defaultProps = {
  notebooks: [],
  additionalCategories: [],
  isLoading: false,
};

const CategoryMapper = ({ notebooks, additionalCategories, isLoading, onCreateNewCategory }) => {
  const possibleCategories = [
    ...notebooks.map(({ category }) => category),
    ...additionalCategories,
  ];

  const arrayOfNotebookCategoryObjects = possibleCategories.map((category) => ({
    [category]: [],
  }));

  const categories = arrayOfNotebookCategoryObjects.reduce((acc, curr) => ({
    ...acc,
    ...curr,
  }), {});

  notebooks.forEach(({ category, ...otherFields }) => {
    categories[category] = [
      ...categories[category],
      { ...otherFields },
    ];
  });

  const neutralGray = '#808080';

  const content = (!isLoading && categories && Object.keys(categories).length !== 0)
    ? Object.keys(categories).map((category) => (
        <div className={cx('category-section-wrapper')} key={category}>
          <CategorySection name={category}>
            {categories[category].map(({
              notebookId,
              isPublic,
              title,
              dateCreated,
              lastEdited,
              color,
            }) => (
              <Notebook
                key={notebookId}
                title={title}
                isVisible={isPublic}
                dateCreated={dateCreated}
                lastModified={lastEdited}
                notebookColor={color}
                notebookId={notebookId}
              />
            ))}
          </CategorySection>
        </div>
      )
    )
    : (
        <div className={cx('no-categories-warning')}>
          <h2 style={{ color: neutralGray }}>No Categories Present</h2>
          <IconButton key={shortid.generate()} onClick={onCreateNewCategory}>
            <Icon path={mdiPlus} size={1} color={neutralGray} />
          </IconButton>
        </div>
    );

  debugger;

  return(
    <div className={cx('category-mapper')}>
      {content}
    </div>
  );
};


CategoryMapper.propTypes = propTypes;
CategoryMapper.defaultProps = defaultProps;

export default CategoryMapper;

