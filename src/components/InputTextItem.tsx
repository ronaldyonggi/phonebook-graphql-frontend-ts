interface InputTextItemProps {
  label: string
  value: string
  setValue: React.Dispatch<React.SetStateAction<string>>
}

const InputTextItem = ({label, value, setValue}: InputTextItemProps) => {
  return (
    <div>
      {label}
      <input type="text" value={value} onChange={e => setValue(e.target.value)} />
    </div>
  )
}
export default InputTextItem