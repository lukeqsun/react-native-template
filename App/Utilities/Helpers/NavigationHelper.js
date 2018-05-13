import {StackActions, NavigationActions} from 'react-navigation';

class NavigationHelper {
    static resetTo(fromClass, routeName) {
        const resetAction = StackActions.reset({
            index: 0,
            actions: [NavigationActions.navigate({routeName: routeName})]
        });
        fromClass.props.navigation.dispatch(resetAction);
    }
}

export default NavigationHelper;
