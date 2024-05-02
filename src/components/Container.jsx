const Container = ({children, styles}) => {
  return (
    <div className={`max-w-[1440px] mx-auto p-5 ${styles}`}>
        {children}
    </div>
  )
}

export default Container