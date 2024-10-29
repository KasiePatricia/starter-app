import React from 'react';

interface Option {
  label: string;
  checked?: boolean;
}

interface MultiselectCheckboxProps {
  options: Option[];
  onChange: (selectedOptions: Option[]) => void;
}

const MultiselectCheckbox: React.FC<MultiselectCheckboxProps> = ({ options, onChange }) => {
  const [data, setData] = React.useState<Option[]>(options);

  const toggle = (index: number) => {
    const newData = [...data];
    newData[index] = {
      ...newData[index],
      checked: !newData[index].checked,
    };
    setData(newData);
    onChange(newData.filter(option => option.checked));
  };

  return (
    <div>
      {data.map((item, index) => (
        <label key={item.label} className="block">
          <input
            type="checkbox"
            checked={item.checked || false}
            onClick={() => toggle(index)}
            readOnly
          />
          {item.label}
        </label>
      ))}
    </div>
  );
};

// Example usage
const options: Option[] = [{ label: 'Item One' }, { label: 'Item Two' }];


export const MultiselectCheckboxMain = () => {
  return (
    <div className="my-8">
      <MultiselectCheckbox
        options={options}
        onChange={data => console.log(data)}
      />
    </div>
  )
}

