interface IProps {
    color: string;
    width: string;
    height: string;
  }
  
  const PhoneWidget = ({color, width, height}: IProps) => {
    return <svg xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 24 24"  width={width} height={height}>
              <g  fill={color} stroke="none">
              <path d="M15,7V3a1,1,0,0,1,2,0V5.613C17.63,4.981,21.7.887,22.293.3a1,1,0,0,1,1.414,1.414C23.115,2.3,19.064,6.373,18.439,7H21a1,1,0,0,1,0,2H17A2,2,0,0,1,15,7Zm5.655,7.855a3.1,3.1,0,0,0-4.28.006l-1.906,1.606A12.784,12.784,0,0,1,7.537,9.524l1.6-1.9a3.109,3.109,0,0,0,.006-4.282S7.291.939,7.26.908A3.082,3.082,0,0,0,2.934.862l-1.15,1c-7.719,8.21,12.2,28.138,20.4,20.3l.912-1.05a3.1,3.1,0,0,0,0-4.377C23.063,16.708,20.655,14.856,20.655,14.856Z"/>
              </g>
            </svg>
  }
  
  export default PhoneWidget;