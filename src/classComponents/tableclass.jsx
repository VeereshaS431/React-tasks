import { Component } from "react";

class CustomTables extends Component{

    render(){
        return(
            <>
            <table>
                <tr>
                    <th>Sl No</th>
                    <th>Emp Name</th>
                    <th>Sal</th>
                </tr>

                <tr>
                    <td>1</td>
                    <td>Black_Devil</td>
                    <td>50000</td>
                </tr>

                <tr>
                    <td>2</td>
                    <td>White_Devil</td>
                    <td>55000</td>
                </tr>

                <tr>
                    <td>2</td>
                    <td>Goblin</td>
                    <td>45000</td>
                </tr>
            </table>
            </>
        )
    }
}


export default CustomTables;