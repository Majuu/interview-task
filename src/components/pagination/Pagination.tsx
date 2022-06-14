import { Fragment, FunctionComponent, ReactElement, useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { MockedDataInterface } from "../../interfaces/mocked-data.interface";
import PaginationItems from "./PaginationItems";
import './Pagination.css';

const Pagination: FunctionComponent<{items: Array<MockedDataInterface>, itemsPerPage: number, calculateItems: (item: MockedDataInterface) => void;} > = ({items, itemsPerPage, calculateItems}): ReactElement => {
    const [currentItems, setCurrentItems] = useState<Array<MockedDataInterface>>([]);
    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);

    useEffect(() => {
      const endOffset = itemOffset + itemsPerPage;
      setCurrentItems(items.slice(itemOffset, endOffset));
      setPageCount(Math.ceil(items.length / itemsPerPage));
    }, [itemOffset, itemsPerPage, items]);

    const handlePageClick = (event: any): void => {
      const newOffset = (event.selected * itemsPerPage) % items.length;
      setItemOffset(newOffset);
    };

    return (
      <Fragment>
        <PaginationItems items={currentItems} onCheckboxChange={calculateItems} />
        <ReactPaginate
          breakLabel="..."
          nextLabel="next >"
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          previousLabel="< previous"
        containerClassName="container"
        />
      </Fragment>
    );
}

export default Pagination;