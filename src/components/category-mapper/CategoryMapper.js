import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { notebookItemStoreShape } from '../../utils/_notebookItemStoreShape';
import Notebook from '../notebook/Notebook';
import CategorySection from '../category-section/CategorySection';

import styles from './CategoryMapper.module.css';

const cx = classNames.bind(styles);

const propTypes = {
  notebooks: PropTypes.arrayOf( notebookItemStoreShape ),
  additionalCategories: PropTypes.arrayOf(PropTypes.string),
};

const defaultProps = {
  notebooks: [],
  additionalCategories: [],
};

const CategoryMapper = ({ notebooks, additionalCategories }) => {
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

  return(
    <div className={cx('category-mapper')}>
      {Object.keys(categories).map((category) => (
        <div className={cx('category-section-wrapper')}>
          <CategorySection name={category}>
            {categories[category].map(({
              notebookId,
              ownderId,
              isPublic,
              title,
              dateCreated,
              lastEdited,
              color,
            }) => (
              <Notebook
                title={title}
                isVisible={isPublic}
                dateCreated={dateCreated}
                lastModified={lastEdited}
                notebookColor={color}
                onClick={() => window.alert(`You've clicked notebook ${title}`)}
              />
            ))}
          </CategorySection>
        </div>
      ))}
    </div>
  );
};


CategoryMapper.propTypes = propTypes;
CategoryMapper.defaultProps = defaultProps;

export default CategoryMapper;

