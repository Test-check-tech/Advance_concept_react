import React from'react'
// import log from 'loglevel';
// import remote from 'loglevel-plugin-remote';
//import logger from './logger';


//  const customJSON = log => ({
//      msg: log.message,
//      level: log.level.label,
//      stacktrace: log.stacktrace
//      });
    
//      remote.apply(log, { format: customJSON, url: '/logger' });
//      log.enableAll();
    

class Error extends React.Component{

     state = {
         hasError:false
     }
     static getDerivedStateFromError(error){
         return{
             hasError:true
         }
     }
     componentDidCatch(error,info){
        console.log(error)
        console.log(info)
        
        //logComponentStackToMyService(info.componentStack);
        // var data = info;
        // log.error({ error, info });
        // var fso = new window.ActiveXObject("Scripting.FileSystemObject");
        // var a = fso.CreateTextFile("G:\\testfile.txt", true);
        // a.writeline(info);
        // a.writeline(error);
        //  a.Close();
       //this.writeToFile(error,info);
        
     
     }

    //  writeToFile(error,info){
    //     var fso = new window.ActiveXObject("Scripting.FileSystemObject");
    //     var a = fso.CreateTextFile("G:\\testfile.txt", true);
    //      a.writeline(info);
    //      a.writeline(error);
    //       a.Close();

    //  }

      
    render() {
        
          
                if (this.state.hasError) {
                    return <h1>Something went wrong</h1>  
                                
                }
                return this.props.children   
    }
}
export default Error