import React, {ChangeEvent} from 'react'

type ProfileStatusPropsType = {
    status: null | string
    updateStatus: (status: string) => void
}

export class ProfileStatus extends React.Component<ProfileStatusPropsType> {
    state = {
        editMode: false,
        status: this.props.status || 'NO STATUS'
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
        if (this.state.status) this.props.updateStatus(this.state.status)
    }
    onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({
            status: e.currentTarget.value
        })
    }

    componentDidUpdate(prevProps: Readonly<ProfileStatusPropsType>, prevState: Readonly<{}>) {
        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            })
        }
    }

    render() {
        return (
            <div>
                <div>
                    Status:
                    {
                        this.props.status &&
                        this.state.editMode
                            ? <input autoFocus value={this.state.status}
                                     onBlur={this.desActivatedEditMode}
                                     onChange={this.onStatusChange}/>
                            : <span onDoubleClick={this.activatedEditMode}> {this.props.status}</span>
                    }
                </div>
            </div>
        )
    }
}