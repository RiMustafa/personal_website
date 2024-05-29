function LogoStyle (props) {
return (
  <div>
    <div className="logotext">
              <div className="logo">
              <i class={props.faname}></i>
              </div>
              <div className="logo-desc"> 
              {props.name}
              </div>
            </div>
  </div>
)
}
export default LogoStyle