import {ThreeDots} from "react-loader-spinner"

function Loading({width="75",height="40"}) {
  return (
   <ThreeDots height={height} width={width} radius={9} color="blue"
   wrapperStyle={{display:"flex",justifyContent:"center"}}varible={true}/>
  )
}

export default Loading