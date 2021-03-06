import { combineReducers } from 'redux';
import submenu from './submenu';
import sidebarOpen from './sidebar';
import requestCloseMenu from './requestCloseMenu';
import language from './language';
import { i18nReducer } from 'react-redux-i18n';
import notifications from './notifications';
import sidebarActivity from './sidebarActivity';
import access_token from './access_token';
import users from './users';
import simpleNotification from './simpleNotification';
import invoices from './invoices';
import chatRooms from './chat-rooms';
import chatMessages from './chatMessages';
import emailMessages from './emailMessages';
import sentMessages from './sentMessages';
import starredMessages from './starredMessages';
import shopProducts from './shopProducts';
import cartItems from './cartItems';


export default combineReducers({
    i18n: i18nReducer,
    submenu,
    sidebarOpen,
    requestCloseMenu,
    language,
    notifications,
    sidebarActivity,
    access_token,
    users,
    simpleNotification,
    invoices,
    chatRooms,
    chatMessages,
    emailMessages,
    sentMessages,
    starredMessages,
    shopProducts,
    cartItems
})