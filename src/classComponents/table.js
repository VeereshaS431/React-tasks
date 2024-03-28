import { Component } from "react";

class CustomTable extends Component{
    render(){
        return(
           <>
           <table>
               <tr>
                <th>SI.NO</th>
                <th>Name</th>
                <th>Age</th>
                <th>Gender</th>
               </tr>
               <tr>
                 <td>1</td>
                 <td>Raj</td>
                 <td>25</td>
                 <td>Male</td>
               </tr>
               <tr>
                 <td>1</td>
                 <td>Aravind</td>
                 <td>21</td>
                 <td>Male</td>
               </tr>
               <tr>
                 <td>1</td>
                 <td>Sandy</td>
                 <td>20</td>
                 <td>Female</td>
               </tr>


           </table>
           </>
        )
    }
}
export default CustomTable;