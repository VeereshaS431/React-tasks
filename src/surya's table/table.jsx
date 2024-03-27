import { Component } from "react";

class Table extends Component{
    render(){
        return(
            <table>
                <tr>
                    <th>TEAM</th>
                    <th>PLAYERS</th>
                    <th>BAT STYLE</th>
                </tr>
                <tr>
                    <td>RCB</td>
                    <td>VIRAT KOHLI</td>
                    <td>RIGHT HANDED</td>
                </tr>
                <tr>
                    <td>MUMBAI</td>
                    <td>ROHITH</td>
                    <td>RIGHT HANDED</td>
                </tr>
                <tr>
                    <td>CSK</td>
                    <td>DHONI</td>
                    <td>RIGHT HANDED</td>
                </tr>
                <tr>
                    <td>LSG</td>
                    <td>KL RAHUL</td>
                    <td>RIGHT HANDED</td>
                </tr>
            </table>
        )
    }
}
export default Table