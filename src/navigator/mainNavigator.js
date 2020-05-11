import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Messaging42915Navigator from '../features/Messaging42915/navigator';
import Tutorial42914Navigator from '../features/Tutorial42914/navigator';
import Maps42913Navigator from '../features/Maps42913/navigator';
import CalendarView42912Navigator from '../features/CalendarView42912/navigator';
import Camera42911Navigator from '../features/Camera42911/navigator';
import EmailAuth42910Navigator from '../features/EmailAuth42910/navigator';
import MessengerNavigator from '../features/Messenger/navigator';
import TutorialNavigator from '../features/Tutorial/navigator';
import MapsNavigator from '../features/Maps/navigator';
import CalendarNavigator from '../features/Calendar/navigator';
import CameraNavigator from '../features/Camera/navigator';
import EmailAuthNavigator from '../features/EmailAuth/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {
    SplashScreen: {
      screen: SplashScreen
    },
    //@BlueprintNavigationInsertion
Messaging42915: { screen: Messaging42915Navigator },
Tutorial42914: { screen: Tutorial42914Navigator },
Maps42913: { screen: Maps42913Navigator },
CalendarView42912: { screen: CalendarView42912Navigator },
Camera42911: { screen: Camera42911Navigator },
EmailAuth42910: { screen: EmailAuth42910Navigator },
Messenger: { screen: MessengerNavigator },
Tutorial: { screen: TutorialNavigator },
Maps: { screen: MapsNavigator },
Calendar: { screen: CalendarNavigator },
Camera: { screen: CameraNavigator },
EmailAuth: { screen: EmailAuthNavigator },

    /** new navigators can be added here */
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu,
    initialRouteName: 'SplashScreen',
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
