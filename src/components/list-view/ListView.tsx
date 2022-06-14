import { FunctionComponent, ReactElement, useEffect, useState } from 'react';
import { MockedDataInterface } from '../../interfaces/mocked-data.interface';
import mockedData from '../../mocked-data/mocked-data'
import Pagination from '../pagination/Pagination';
import './ListView.css';

const ListView: FunctionComponent = (): ReactElement => {
    const [data, setData] = useState<Array<MockedDataInterface>>(mockedData);
    const [elementsCount, setElementsCount] = useState<number>(0);
    
    useEffect(() => {
        recalculateClickedElements();   
    })

    const recalculateClickedElements = (): void => {
        const numberOfCheckedItems = data.filter(singleDataItem => !singleDataItem.is_unread);
        setElementsCount(numberOfCheckedItems.length);
    }

    const changeCheckboxState = (item: MockedDataInterface): void => {
        const updatedData: Array<MockedDataInterface> = data.map((singleItem) => { return singleItem.id === item.id ? {...singleItem, is_unread: !singleItem.is_unread} : singleItem });
        setData(updatedData);
        recalculateClickedElements();
    }
    // Added pagination due to task point saying that number of elements could be much bigger (100 / 1000 / 10000)
    return(
        <div>
            <p>List View</p>
            <Pagination calculateItems={changeCheckboxState} itemsPerPage={3} items={data} />
            <p className='count-label'>Number of clicked elements: {elementsCount}</p>
        </div>
    );
}

export default ListView;