import React, { Component, Fragment } from 'react';
import { Redirect } from 'react-router-dom'
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import Modal from '@material-ui/core/Modal';
import PageWrapper from '../../components/page-wrapper/PageWrapper';
import CategoryMapper from '../../components/category-mapper/CategoryMapper';
import NotebookMenuBar from '../../components/notebook-menubar/NotebookMenuBar'
import CreateNotebook from '../../components/create-notebook/CreateNotebook-container';
import CreateCategory from '../../components/create-notebook/create-category/CreateCategory';
import UserOptions from '../../components/user-options/UserOptions';
import WidthConstraint from '../../components/width-constraints/WidthConstraints';
import { WHITEBOARD } from '../../utils/routes';

import styles from './Notebooks.module.css';

const cx = classNames.bind(styles);

const propTypes = {
  activeNotebookId: PropTypes.number,
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
  })),
  isLoading: PropTypes.bool.isRequired,
  fetchNotebooksForUser: PropTypes.func.isRequired,
  deleteUser: PropTypes.func.isRequired,
  logoutUser: PropTypes.func.isRequired,
};

const defaultProps = {
  activeNotebookId: null,
  notebooks: [],
  onCreateNewNotebook: () => console.log('createNewNotebook not provided'),
};

class Notebooks extends Component {
  constructor(props) {
    super(props);

    this.state = {
      notebookCreationModalOpen: false,
      categoryCreationModalOpen: false,
      userOptionsModalOpen: false,
      newCategories: [],
    };

    this.addNewCategory = this.addNewCategory.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  componentDidMount() {
    this.props.fetchNotebooksForUser();
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
      [`${dialog}ModalOpen`]: true,
    });
  }

  closeModal(dialog) {
    this.setState({
      [`${dialog}ModalOpen`]: false,
    });
  }

  render() {
    const { notebookCreationModalOpen, categoryCreationModalOpen, userOptionsModalOpen, newCategories } = this.state;
    const { activeNotebookId, notebooks, isLoading, deleteUser, logoutUser} = this.props;
  
    const top = '50%';
    const left = '50%';

    const modalPosition = {
      position: 'absolute',
      top,
      left,
      transform: `translate(-${top}, -${left})`,
    };

    const createNewCategory = () => this.openModal('categoryCreation');
    const createNewNotebook = () => this.openModal('notebookCreation');
    const profileOptions = () => this.openModal('userOptions');

    const onDeleteClick = () => {
      deleteUser();
      this.closeModal('userOptions');
    };

    return(
      <Fragment>
        { !!(activeNotebookId) && <Redirect to={WHITEBOARD} /> }
        <NotebookMenuBar
          onCreateNewCategory={createNewCategory}
          onCreateNewNotebook={createNewNotebook}
          onProfileClick={profileOptions}
        />
        <div className={cx('page-wrapper-positioner')}>
          <PageWrapper isLoading={isLoading}>
            <CategoryMapper
              onCreateNewCategory={createNewCategory}
              isLoading={isLoading}
              notebooks={notebooks}
              additionalCategories={newCategories}
            />
            <Modal open={userOptionsModalOpen} onClose={() => this.closeModal('userOptions')}>
              <div style={modalPosition}>
                <WidthConstraint.ToolColorSelect>
                  <UserOptions onDeleteClick={onDeleteClick} onLogOutClick={logoutUser}/>
                </WidthConstraint.ToolColorSelect>
              </div>
            </Modal>
            <Modal open={notebookCreationModalOpen} onClose={() => this.closeModal('notebookCreation')}>
              <div style={modalPosition}>
                <WidthConstraint.NewEntity>
                  <CreateNotebook onSubmit={() => this.closeModal('notebookCreation')} categories={newCategories} />
                </WidthConstraint.NewEntity>
              </div>
            </Modal>
            <Modal open={categoryCreationModalOpen} onClose={() => this.closeModal('categoryCreation')}>
              <div style={modalPosition}>
                <WidthConstraint.NewEntity>
                  <CreateCategory onSubmit={this.addNewCategory} />
                </WidthConstraint.NewEntity>
              </div>
            </Modal>
          </PageWrapper>
        </div>
      </Fragment>
    );
  }
};

Notebooks.propTypes = propTypes;
Notebooks.defaultProps = defaultProps;

export default Notebooks;

