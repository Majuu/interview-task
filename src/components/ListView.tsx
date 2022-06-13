import { FunctionComponent, ReactElement, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../enums/routes.enum';
import { MockedDataInterface } from '../interfaces/mocked-data.interface';
import mockedData from '../mocked-data/mocked-data'

const styles = {
    checkboxContainer : {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        width: '350px',
        marginBottom: '10px'
    },
    checkbox: {
        marginRight: '15px'
    },
    countLabel: {
        marginTop: '40px'
    }
}

const ListView: FunctionComponent = (): ReactElement => {
    const [data, setData] = useState<Array<MockedDataInterface>>(mockedData);
    const [elementsCount, setElementsCount] = useState<number>(0);
    const navigate = useNavigate();

    useEffect(() => {
        recalculateClickedElements();   
    })

    const goToDetailsView = (item: MockedDataInterface): void => {
        navigate(`../${ROUTES.DETAILS_VIEW}`, {state: item});
    }

    const recalculateClickedElements = (): void => {
        const numberOfCheckedItems = data.filter(singleDataItem => !singleDataItem.is_unread)
        setElementsCount(numberOfCheckedItems.length);
    }

    const changeCheckboxState = (item: MockedDataInterface): void => {
        const updatedData = data.map((singleItem) => { return singleItem.id === item.id ? {...singleItem, is_unread: !singleItem.is_unread} : singleItem });
        setData(updatedData)
        recalculateClickedElements();
    }

    return(
        <div>
            <p>List View</p>
            {data.map(item => 
                <div key={item.id} style={styles.checkboxContainer}>
                    <input style={styles.checkbox} type="checkbox" defaultChecked={!item.is_unread} onChange={() => changeCheckboxState(item)} />
                    <label onClick={() => goToDetailsView(item)} >
                        {item.subject}
                    </label>
                </div>
        )}
        <p style={styles.countLabel}>Number of clicked elements: {elementsCount}</p>
        </div>
    );
}

export default ListView;