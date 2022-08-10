import { Button } from '@mui/material';


export const Btn = ({ content, className, variant, click, disabled }) => {

  return (
    <Button
      variant={ variant ?? 'contained' }
      className={`${className} shadow-none hover:shadow-none ${ disabled && 'opacity-50' }`}
      style={{ textTransform: 'none'}}
      onClick={ click }
      disabled={ disabled }
    >
      {content}
    </Button>
  )
}


export const FormBtn = ({
  content,
  className,
  disabled
}) => {

  return (
    <Button
      variant="contained"
      className={`${className} shadow-none hover:shadow-none focus:outline-none inline-block ${ disabled && 'opacity-50' }`}
      type="submit"
      disabled={ disabled }
      style={{ textTransform: "capitalize"}}
    >
      {content}
    </Button>
  )
}



export const Loading = ({className}) => {
  return (
    <div className="py-2.5 px-2">
      <svg className={`animate-spin h-5 w-5 ${className}`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
        <circle className="opacity-25" cx={12} cy={12} r={10} stroke="currentColor" strokeWidth={4} />
        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
      </svg>
    </div>
  )
}
