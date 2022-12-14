import React from 'react';
import { useFormContext } from 'react-hook-form';

export default function BasicList({ options, name, className }) {
  const { setValue } = useFormContext()

  const selection = (label) => () => setValue(name, label)

  return (
    <>
      {
        options.length < 1 ? null : (
          <ul className={`${className}`}>
            {
              options.map(({label, value}, index) => {
                return (
                  <li key={index.toString()} className="p-2" onClick={selection(label)}>{label}</li>
                )
              })
            }
          </ul>
        )
      }
    </>
  );
}
