/* eslint-disable */
import requestAnimationFrame, { mockLocalAndSessionStorage } from './tempPolyfills';

import Adapter from 'enzyme-adapter-react-16';
import { configure } from 'enzyme';
/* eslint-enable */

configure({ adapter: new Adapter(), disableLifecycleMethods: true });
mockLocalAndSessionStorage();
