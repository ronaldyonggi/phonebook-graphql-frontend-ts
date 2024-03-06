interface InputTextItemProps {
  label: string
  setValue: React.Dispatch<React.SetStateAction<string>>
}

const InputTextItem = ({label, setValue}: InputTextItemProps) => {
  return (
    <div>
      {label}
      <input type="text" onChange={e => setValue(e.target.value)} />
    </div>
  )
}
export default InputTextItem