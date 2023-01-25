
export function Welcome({dmode}) {  

  const dstyle = {
    backgroundColor: "#3a3737" ,   
  }
  
  const lstyle = {
    backgroudColor: "fafafa",    
  };
 
  return (
    <div>
       <div id='welcome'></div>
      <div id='thinlayer' style={dmode? dstyle: lstyle} ></div>
      <div  className='bigComp'>                    
      </div>      
    </div>
  );
}
