 import { CommonActions} from '@react-navigation/native';



// let navigation;
// export const setNavigator =(navData) => {
//     navigation = navData;

// };

export const navigate = (name) => {
    navigation.dispatch(
        CommonActions.navigate({
            name
        })
    );
};

// // import { CommonActions } from '@react-navigation/native';

// navigation.dispatch(
//   CommonActions.navigate({
//     name: 'Profile',
//     params: {
//       user: 'jane',
//     },
//   })
// );