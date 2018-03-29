import _ from 'lodash';

// https://gist.github.com/Yimiprod/7ee176597fef230d1451

function changes(object, base) {
  return _.transform(object, (result, value, key) => {
    if (!_.isEqual(value, base[key])) {
      result[key] = (_.isObject(value) && _.isObject(base[key]))
        ? changes(value, base[key])
        : value;
    }
  });
}

/**
 * Deep diff between two object, using lodash
 * @param  {Object} object Object compared
 * @param  {Object} base   Object to compare with
 * @return {Object}        Return a new object who represent the diff
 */
export default function diff(object, base) {
  const changeSet = changes(object, base);

  Object.keys(changeSet)
    .forEach(key => changeSet[key] === undefined && delete changeSet[key]);

  return changeSet;
}
