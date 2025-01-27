import {
  Checkbox,
  CheckboxControl,
  CheckboxInput,
  CheckboxLabel,
} from "@ark-ui/react";
import React from "react";

import CheckIcon from "./CheckIcon";
import MinusIcon from "./MinusIcon";
import "./styles.css";

export default function Page() {
  const [checkedItems, setCheckedItems] = React.useState([false, false]);

  const allChecked = checkedItems.every(Boolean);
  const someChecked = checkedItems.some(Boolean) && !allChecked;

  return (
    <>
      <Checkbox
        checked={allChecked}
        indeterminate={someChecked}
        onChange={(e) =>
          setCheckedItems([e.checked === true, e.checked === true])
        }
      >
        {(state) => (
          <>
            <CheckboxInput />
            <CheckboxControl>
              {state.isChecked && <CheckIcon />}
              {state.isIndeterminate && <MinusIcon />}
            </CheckboxControl>
            <CheckboxLabel>Parent Checkbox</CheckboxLabel>
          </>
        )}
      </Checkbox>
      <div>
        <Checkbox
          checked={checkedItems[0]}
          onChange={(e) =>
            setCheckedItems([e.checked === true, checkedItems[1]])
          }
        >
          {(state) => (
            <>
              <CheckboxInput />
              <CheckboxControl>
                {state.isChecked && <CheckIcon />}
              </CheckboxControl>
              <CheckboxLabel>Child Checkbox 1</CheckboxLabel>
            </>
          )}
        </Checkbox>
        <Checkbox
          checked={checkedItems[1]}
          onChange={(e) =>
            setCheckedItems([checkedItems[0], e.checked === true])
          }
        >
          {(state) => (
            <>
              <CheckboxInput />
              <CheckboxControl>
                {state.isChecked && <CheckIcon />}
              </CheckboxControl>
              <CheckboxLabel>Child Checkbox 2</CheckboxLabel>
            </>
          )}
        </Checkbox>
      </div>
    </>
  );
}
