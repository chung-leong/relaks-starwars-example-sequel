import { h, Component } from 'preact';
import { AsyncComponent } from 'prelaks';
import List from 'widgets/list';
import Loading from 'widgets/loading';

/** @jsx h */

class VehicleList extends AsyncComponent {
    /**
     * Retrieve remote data and render the synchronize half of this component
     *
     * @param  {Meanwhile}  meanwhile
     *
     * @return {VNode}
     */
    async renderAsync(meanwhile) {
        let { route, swapi } = this.props;
        let props = {
            vehicles: null,
            route: route,
        };
        meanwhile.show(<VehicleListSync {...props} />);
        props.vehicles = await swapi.fetchList('/vehicles/');
        props.vehicles.more();
        return <VehicleListSync {...props} />;
    }
}

class VehicleListSync extends Component {
    /**
     * Render the component, making best effort using what props are given
     *
     * @return {VNode}
     */
    render() {
        let { vehicles, route } = this.props;
        if (!vehicles) {
            return <Loading />;
        }
        let listProps = {
            items: vehicles,
            pageName: 'vehicle-summary',
            route: route,
        };
        return (
            <div>
                <h1>Vehicles</h1>
                <List {...listProps} />
            </div>
        );
    }
}

export {
    VehicleList as default,
    VehicleList,
    VehicleListSync
};
