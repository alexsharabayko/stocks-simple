import { clearKeys } from './clear-keys-util';

const name = 'Dan';
const age = 33;
const isChild = false;
const fn = () => {
};

describe('clearKeys util', () => {
  it('should remove extra number and un-capitalize', () => {
    const dirtyObj = {
      '1. Name': name,
      '22. Age': age,
    };
    const cleanObj = clearKeys(dirtyObj);

    expect(cleanObj.name).toBe(name);
    expect(cleanObj.age).toBe(age);
    expect(cleanObj['22. Age']).toBeUndefined();
  });

  it('should un-capitalize', () => {
    const dirtyObj = {
      Name: name,
      AGE: age,
      IsChild: isChild,
    };
    const cleanObj = clearKeys(dirtyObj);

    expect(cleanObj.name).toBe(name);
    expect(cleanObj.AGE).toBe(age);
    expect(cleanObj.isChild).toBe(isChild);
    expect(cleanObj.Name).toBeUndefined();
  });

  it('should remove extra numbers', () => {
    const dirtyObj = {
      '22. Name': name,
      '33Age': age,
    };
    const cleanObj = clearKeys(dirtyObj);

    expect(cleanObj.name).toBe(name);
    expect(cleanObj['33Age']).toBe(age);
    expect(cleanObj['22. Name']).toBeUndefined();
  });

  it('should not proceed non-objects', () => {
    const dirtyObj = {
      '22. Name': name,
      '33Age': age,
    };
    const cleanObj = clearKeys(dirtyObj);

    expect(clearKeys(name)).toBe(name);
    expect(clearKeys(age)).toBe(age);
    expect(clearKeys(isChild)).toBe(false);
    expect(clearKeys(undefined)).toBe(undefined);
    expect(clearKeys(null)).toBe(null);
    expect(clearKeys(fn)).toBe(fn);
  });

  it('should proceed arrays', () => {
    const dirtyArr = [
      {
        '22. Name': name,
        Age: age,
      },
      {
        Name: name,
        age: age,
      },
    ];
    const cleanArr = clearKeys(dirtyArr);

    expect(cleanArr.length).toBe(2);
    expect(cleanArr[0].name).toBe(name);
    expect(cleanArr[0].age).toBe(age);
    expect(cleanArr[1].name).toBe(name);
    expect(cleanArr[1].age).toBe(age);
  });

  it('should proceed nested data', () => {
    const dirtyObj = {
      nested: {
        persons: {
          List: [
            {
              '22. Name': name,
              Age: age,
            },
            {
              Name: name,
              age: age,
            },
          ]
        },
        '11. Very': {
          Very: {
            very: {
              'Deep': {
                nesting: {
                  Name: name,
                  '22333. age': age,
                  isChild: isChild,
                }
              }
            }
          }
        }
      }
    };
    const cleanObj = clearKeys(dirtyObj);

    expect(cleanObj.nested.persons.list.length).toBe(2);
    expect(cleanObj.nested.persons.list[0].name).toBe(name);
    expect(cleanObj.nested.persons.list[0].age).toBe(age);
    expect(cleanObj.nested.persons.list[1].name).toBe(name);
    expect(cleanObj.nested.persons.list[1].age).toBe(age);
    expect(cleanObj.nested.very.very.very.deep.nesting.name).toBe(name);
    expect(cleanObj.nested.very.very.very.deep.nesting.age).toBe(age);
    expect(cleanObj.nested.very.very.very.deep.nesting.isChild).toBe(isChild);
  });
});
