import React from 'react';
import cx from 'clsx';
import Paginate from 'react-paginate';

import * as Icons from '../Icons';
import classes from './Pagination.module.scss';

export interface IProps {
  total: number;
  current: number;
  pageRangeDisplayed?: number;
  onChange: (current: number) => void;
  isOnlyActiveVisible?: boolean;
  hasLastAndFirstButton?: boolean;
  totalItems?: number;
  showPerPage?: boolean;
  onChangePerPage?: (perPage: number) => void;
  perPage?: number;
  hideGoTo?: boolean;
  hidePerPageSelect?: boolean;
  perPageOptions?: number[];
}

const Pagination: React.FC<IProps> = ({
  total,
  current,
  pageRangeDisplayed = 5,
  onChange,
  isOnlyActiveVisible,
  showPerPage = false,
}) => {
  return (
    <div
      className={cx(
        classes.wrapper,
        showPerPage && classes['wrapper-withPerPage'],
      )}
    >
      <div className={classes.changer}>
        <Paginate
          {...{ pageRangeDisplayed }}
          pageCount={total}
          forcePage={current - 1}
          onPageChange={({ selected }) => onChange(selected + 1)}
          containerClassName={cx(
            classes.pagination,
            isOnlyActiveVisible && classes[`pagination-onlyActive`],
          )}
          pageClassName={classes.item}
          pageLinkClassName={classes.itemLink}
          activeClassName={classes.itemActive}
          activeLinkClassName={classes.itemActiveLink}
          previousClassName={cx(classes.item, classes.itemPrev)}
          previousLinkClassName={cx(classes.itemLink, classes.itemPrevLink)}
          nextClassName={cx(classes.item, classes.itemNext)}
          nextLinkClassName={cx(classes.itemLink, classes.itemNextLink)}
          disabledClassName={classes.itemDisabled}
          previousLabel={<Icons.ChevronLeft />}
          nextLabel={<Icons.ChevronRight />}
          breakClassName={cx(classes.itemLink, classes.itemBreak)}
          marginPagesDisplayed={1}
          hrefAllControls={false}
        />
      </div>
    </div>
  );
};

export default Pagination;
