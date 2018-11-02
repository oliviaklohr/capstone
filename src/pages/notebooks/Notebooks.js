import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PageWrapper from '../../components/page-wrapper/PageWrapper';
import CategoryMapper from '../../components/category-mapper/CategoryMapper';
import Button from '@material-ui/core/Button';
import Modal from '@material-ui/core/Modal';
import { mockNotebookObjects } from './../../components/category-mapper/_mockNotebookObjects';
import CreateNotebook from '../../components/create-notebook/CreateNotebook-container';
import CreateCategory from '../../components/create-notebook/create-category/CreateCategory';
import WidthConstraint from '../../components/width-constraints/WidthConstraints';

const propTypes = {
  notebooks: PropTypes.arrayOf(PropTypes.shape({
    status: PropTypes.number,
    notebookId: PropTypes.number.isRequired,
    ownerId: PropTypes.number,
    title: PropTypes.string.isRequired,
    category: PropTypes.string,
    dateCreated: PropTypes.string,
    lastEdited: PropTypes.string,
    color: PropTypes.string,
    isPublic: PropTypes.bool,
    isLoading: PropTypes.bool.isRequired,
    onCreateNewPage: PropTypes.func,
  })),
};

const defaultProps = {
  notebooks: [],
  // TODO: this is something that in the future would be getting handled by the whitebaord / editing component
  onCreateNewPage: () => console.log('createNewPage not provided'),
};

class Notebooks extends Component {
  constructor(props) {
    super(props);

    this.state = {
      notebookCreationModalOpen: false,
      categoryCreationModalOpen: false,
      newCategories: [],
    };

    this.addNewCategory = this.addNewCategory.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  addNewCategory({ category }) {
    this.setState(prevState => ({
      categoryCreationModalOpen: false,
      newCategories: [
        ...prevState.newCategories,
        category,
      ],
    }));
  }

  openModal(dialog) {
    this.setState({
      [`${dialog}CreationModalOpen`]: true,
    });
  }

  closeModal(dialog) {
    this.setState({
      [`${dialog}CreationModalOpen`]: false,
    });
  }

  render() {
    const { notebookCreationModalOpen, categoryCreationModalOpen, newCategories } = this.state;
    const { notebooks, isLoading, onCreateNewPage } = this.props;
  
    const top = '50%';
    const left = '50%';

    const modalPosition = {
      position: 'absolute',
      top,
      left,
      transform: `translate(-${top}, -${left})`,
    };

    return(
      <PageWrapper isLoading={isLoading}>
        <CategoryMapper notebooks={notebooks} additionalCategories={newCategories} />
        <Button onClick={() => this.openModal('notebook')}>Create new notebook</Button>
        <Button onClick={() => this.openModal('category')}>Create new Category</Button>
        <Button onClick={onCreateNewPage}>Create new Page</Button>
        <Modal open={notebookCreationModalOpen} onClose={() => this.closeModal('notebook')}>
          <div style={modalPosition}>
            <WidthConstraint.NewEntity>
              <CreateNotebook onSubmit={() => this.closeModal('notebook')} categories={newCategories} />
            </WidthConstraint.NewEntity>
          </div>
        </Modal>
        <Modal open={categoryCreationModalOpen} onClose={() => this.closeModal('category')}>
          <div style={modalPosition}>
            <WidthConstraint.NewEntity>
              <CreateCategory onSubmit={this.addNewCategory} />
            </WidthConstraint.NewEntity>
          </div>
        </Modal>
      </PageWrapper>
    );
  }
};

Notebooks.propTypes = propTypes;
Notebooks.defaultProps = defaultProps;

export default Notebooks;

