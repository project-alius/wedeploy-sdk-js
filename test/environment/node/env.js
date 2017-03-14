'use strict';

import assert from 'assert';
import sinon from 'sinon';
import NodeRequestMock from '../../fixtures/node/NodeRequestMock';
import '../../../src/env/node';
import FormData from 'form-data';

global.FormData = FormData;
global.assert = assert;
global.sinon = sinon;
global.RequestMock = NodeRequestMock;
