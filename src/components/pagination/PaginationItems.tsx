import { FunctionComponent, ReactElement } from "react";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../enums/routes.enum";
import { MockedDataInterface } from "../../interfaces/mocked-data.interface";

const PaginationItems: FunctionComponent<{items: Array<MockedDataInterface>, onCheckboxChange: (item: MockedDataInterface) => void}> = ({items, onCheckboxChange}): ReactElement => {
    const navigate = useNavigate();

    const goToDetailsView = (item: MockedDataInterface): void => {
        navigate(`../${ROUTES.DETAILS_VIEW}`, {state: item});
    }

    return (
        <>
          {items &&
            items.map((item) => (
                <div key={item.id} className="checkbox-container">
                <input className="checkbox" type="checkbox" defaultChecked={!item.is_unread} onChange={() => onCheckboxChange(item)} />
                <label onClick={() => goToDetailsView(item)}>
                    {item.subject}
                </label>
            </div>
            ))}
        </>
      );
}

export default PaginationItems;