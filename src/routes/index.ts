import Login from '../pages/Login';
import Details from '../pages/Home/Details';
import TabsScreen from '../Layouts';
import {StackNavigationOptions} from '@react-navigation/stack';

// headerStyle：将应用于包装标头的样式对象。如果您设置它，那将是标题的颜色。ViewbackgroundColor
// headerTintColor：后退按钮和标题都使用此属性作为其颜色。在下面的示例中，我们将色调颜色设置为白色 （），因此后退按钮和标题将为白色。#fff
// headerTitleStyle：如果我们想自定义标题的 ，和其他样式属性，我们可以使用它来做到这一点。fontFamilyfontWeightText

// StackNavigationOptions
const routes: StackNavigationOptions[] = [
  {
    name: 'Tabs',
    component: TabsScreen,
    // options: {
    //   headerShown: false,
    //   header: () => null,
    //   // title: '首页',
    // },
  },
  {
    name: 'Login',
    component: Login,
    // options: {
    //   headerShown: false,
    //   header: () => null,
    // },
  },
  {
    name: 'Details',
    component: Details,
    // options: {
    //   title: '详情',
    // },
  },
];

export default routes;
