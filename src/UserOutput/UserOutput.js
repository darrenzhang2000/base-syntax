import React, {Component} from 'react'

class UserOutput extends Component{
    render(){
        const { user } = this.props
        return <div>
            <h3>Username: {user} </h3>
            <p>Avocado - the fourth fruit</p>
            <p>Banana - the fifth fruit</p>
        </div>
    }
}

export default UserOutput