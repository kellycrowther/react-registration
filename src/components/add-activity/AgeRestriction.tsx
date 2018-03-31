import * as React from 'react';

const AgeRestriction = (props: any) => {
  return (
    <div>
      <select
        onChange={props.onChange}
        name='ageRestriction'
      >
        {props.restrictions.map((ageLimit: string, index: number) => {
          return (
            <option
              key={index}
              value={ageLimit}
            >
              {ageLimit}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default AgeRestriction;
