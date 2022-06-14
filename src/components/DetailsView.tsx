import { Fragment, FunctionComponent, ReactElement } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ROUTES } from "../enums/routes.enum";
import { MockedDataInterface } from "../interfaces/mocked-data.interface";

const styles = {
    tableContainer: {
        margin: '20px',
        border: '1px solid white'
    },
    tableRow: {
        border: '1px solid white'
    }
}

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
            <table style={styles.tableContainer}>
                <tbody>
                { Object.keys(state).map((key) =>
                <tr key={key}>
                    <td style={styles.tableRow}>{key}</td>
                    <td style={styles.tableRow}>{state[key as keyof MockedDataInterface].toString()}</td>
                </tr>
                )}
                </tbody>
            </table>
            <button onClick={goToListView}>Go back to the list</button>
        </Fragment>
    );
}

export default DetailsView;