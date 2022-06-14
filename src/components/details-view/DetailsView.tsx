import { Fragment, FunctionComponent, ReactElement } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ROUTES } from "../../enums/routes.enum";
import { MockedDataInterface } from "../../interfaces/mocked-data.interface";
import './DetailsView.css';

const DetailsView: FunctionComponent = (): ReactElement => {
    const navigate = useNavigate();
    const location = useLocation();

    const state = location.state as MockedDataInterface;

    const goToListView = (): void => {
        navigate(ROUTES.LIST_VIEW);
    }    

    return(
        <Fragment>
            <p>Details view</p>
            <table className="table-container table-row">
                <tbody>
                    { Object.keys(state).map(key =>
                    <tr key={key}>
                        <td className="table-row">{key}</td>
                        <td className="table-row">{state[key as keyof MockedDataInterface].toString()}</td>
                    </tr>
                    )}
                </tbody>
            </table>
            <button onClick={goToListView}>Go back to the list</button>
        </Fragment>
    );
}

export default DetailsView;