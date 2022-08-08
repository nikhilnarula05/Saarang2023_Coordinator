import { Dropdown } from 'semantic-ui-react'

const options = [
  { key: 1, text: 'S', value: 1 },
  { key: 2, text: 'M', value: 2 },
  { key: 3, text: 'L', value: 3 },
  { key: 4, text: 'XL', value: 4 },
]

const DropdownExampleClearable = () => (
  <Dropdown 
  placeholder='Select Size'
  clearable options={options} selection />
)

export default DropdownExampleClearable