export const Filter = ({ filter, onChange }) => (
  <input
    type="text"
    value={filter}
    onChange={e => onChange(e.target.value)}
    placeholder="Search contacts"
  />
);
