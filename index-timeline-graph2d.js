var util = require('vis-util');

// utils
exports.util = util;
exports.DOMutil = require('./lib/DOMutil');

// data
util.extend(exports, require('vis-data'));

// Timeline
exports.Timeline = require('./lib/timeline/Timeline');
exports.Graph2d = require('./lib/timeline/Graph2d');
exports.timeline = {
  Core: require('./lib/timeline/Core'),
  DateUtil: require('./lib/timeline/DateUtil'),
  Range: require('./lib/timeline/Range'),
  stack: require('./lib/timeline/Stack'),
  TimeStep: require('./lib/timeline/TimeStep'),

  components: {
    items: {
      Item: require('./lib/timeline/component/item/Item'),
      BackgroundItem: require('./lib/timeline/component/item/BackgroundItem'),
      BoxItem: require('./lib/timeline/component/item/BoxItem'),
      PointItem: require('./lib/timeline/component/item/PointItem'),
      RangeItem: require('./lib/timeline/component/item/RangeItem')
    },

    BackgroundGroup: require('./lib/timeline/component/BackgroundGroup'),
    Component: require('./lib/timeline/component/Component'),
    CurrentTime: require('./lib/timeline/component/CurrentTime'),
    CustomTime: require('./lib/timeline/component/CustomTime'),
    DataAxis: require('./lib/timeline/component/DataAxis'),
    DataScale: require('./lib/timeline/component/DataScale'),
    GraphGroup: require('./lib/timeline/component/GraphGroup'),
    Group: require('./lib/timeline/component/Group'),
    ItemSet: require('./lib/timeline/component/ItemSet'),
    Legend: require('./lib/timeline/component/Legend'),
    LineGraph: require('./lib/timeline/component/LineGraph'),
    TimeAxis: require('./lib/timeline/component/TimeAxis')
  }
};

// bundled external libraries
exports.moment = require('./lib/module/moment');
exports.Hammer = require('./lib/module/hammer');
exports.keycharm = require('keycharm');
