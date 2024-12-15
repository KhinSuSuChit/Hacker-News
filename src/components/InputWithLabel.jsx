export default function InputWithLabel({
    handleInputChange, 
    value, 
    id, 
    label,
    type = "text",
    children,
}){

    return (
      <>
        <label htmlFor={id}>{children}</label>
        {/* uncontrolled component -> controlled component */}
        <input 
        autoFocus
        type={type}
        id={id} 
        onChange={handleInputChange} 
        value={value}
        />
      </>
    )
  }