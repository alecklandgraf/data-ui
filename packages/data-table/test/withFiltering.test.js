import { List } from 'immutable';
import React from 'react';
import { shallow } from 'enzyme';

import withFiltering from '../src/enhancers/withFiltering';
import Table from '../src/components/Table';

const TableWithFiltering = withFiltering(Table);
const dataList = List([{ a: 'a', b: 'b' }, { a: 'a', z: 'z' }]);

describe('withFiltering()', () => {
  const props = {
    width: 100,
    height: 100,
    dataList,
    orderedColumnKeys: ['a', 'b', 'z'],
  };

  test('it should be defined', () => {
    expect(withFiltering).toBeDefined();
  });

  test('it should render a Table', () => {
    const wrapper = shallow(<TableWithFiltering {...props} />);
    expect(wrapper.find(Table).length).toBe(1);
  });

  test('it should pass onChangeFilterText, dataList, and filterText props to the wrapped component', () => {
    const wrapper = shallow(<TableWithFiltering {...props} />);
    const RenderedTable = wrapper.find(Table);

    expect(typeof RenderedTable.prop('onChangeFilterText')).toBe('function');
    expect(typeof RenderedTable.prop('filterText')).toBe('string');
    expect(RenderedTable.prop('dataList') instanceof List).toBe(true);
  });

  test('no filter text should return the initial dataList', () => {
    const wrapper = shallow(<TableWithFiltering {...props} />);
    const RenderedTable = wrapper.find(Table);
    expect(RenderedTable.prop('dataList') instanceof List).toBe(true);
    expect(RenderedTable.prop('dataList')).toBe(dataList);
  });

  test('it should filter dataList based on initialFilterText', () => {
    let wrapper = shallow(<TableWithFiltering {...props} />);
    let RenderedTable = wrapper.find(Table);
    expect(RenderedTable.prop('dataList').size).toBe(dataList.size);

    wrapper = shallow(<TableWithFiltering {...props} initialFilterText="z" />);
    RenderedTable = wrapper.find(Table);
    expect(RenderedTable.prop('dataList').size).toBe(1);
  });
});
