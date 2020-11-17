import React from 'react'

type ProfileStatusPropsType = {
    status: null | string
}

export class ProfileStatus extends React.Component<ProfileStatusPropsType> {
    state = {
        editMode: false
    }
    activatedEditMode = () => {
        this.setState({
            editMode: true
        })
    }
    desActivatedEditMode = () => {
        this.setState({
            editMode: false
        })
    }

    render() {
        return (
            <div>
                <div>
                    Status:
                    {
                        this.props.status &&
                        this.state.editMode
                            ? <input autoFocus value={this.props.status} onBlur={this.desActivatedEditMode}/>
                            : <span onDoubleClick={this.activatedEditMode}> {this.props.status}</span>
                    }
                </div>
            </div>
        )
    }
}