import React, { Component } from 'react';
import { TextInput } from 'carbon-components-react';
import { Select } from 'carbon-components-react';
import { SelectItem } from 'carbon-components-react';
import { Form } from 'carbon-components-react';
import { Button } from 'carbon-components-react';
import { ModalWrapper } from 'carbon-components-react'
import { Add16 } from '@carbon/icons-react';






class PostForm extends Component {
    
        state = {
                title: '',
                content: '',
                url: '',
                userId: ''
            }
        

    
    getInitialState = () => ({ title: '', content: '', url: '', userId: '' })

    handleIdChange = (event) => {
        console.log(event.target)
        const key = event.target.name
        const value = event.target.value
        this.setState({ [key] : parseInt(value) })
    }

    handleChange = (event) => {
        const key = event.target.name
        const value = event.target.value
        this.setState({ [key] : value })
    }



    handleSubmit = (event) => {
        console.log("hi")
        event.preventDefault()
        fetch('http://localhost:3001/posts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json'
            },
            body: JSON.stringify({
                "title": this.state.title,
                "content": this.state.content,
                "url": this.state.url,
                "user_id": this.state.userId
            })
        })
        .then(resp => resp.json())
        .then(post => this.props.addPost(post))
        this.setState(this.getInitialState())
    }

    render(){
        console.log(this.state)
        return(
            <ModalWrapper
                size="lg"
                buttonTriggerText="Add Post"
                className="some-class"
                disabled={false}
                handleSubmit={function noRefCheck(){}}
                hasScrollingContent
                id="input-modal"
                modalHeading="Add Post"
                onBlur={function noRefCheck(){}}
                onClick={function noRefCheck(){}}
                onFocus={function noRefCheck(){}}
                onKeyDown={function noRefCheck(){}}
                onMouseDown={function noRefCheck(){}}
                onMouseEnter={function noRefCheck(){}}
                onMouseLeave={function noRefCheck(){}}
                onMouseUp={function noRefCheck(){}}
                // primaryButtonText="Save"
                renderTriggerButtonIcon={Add16}
                secondaryButtonText="Cancel"
                selectorPrimaryFocus="[data-modal-primary-focus]"
                shouldCloseAfterSubmit
                triggerButtonIconDescription="Provide icon description if icon is used"
                triggerButtonKind="Tertiary"
            >
                <Form onSubmit={this.handleSubmit} > 
                    <TextInput
                        disabled={false}
                        helperText=""
                        id="title-input"
                        invalid={false}
                        invalidText=""
                        labelText="Title:"
                        light={false}
                        placeholder="Title..."
                        name="title"
                        value={this.state.title}
                        onChange={this.handleChange}
                        type="text"
                    />
                    <br />
                    <TextInput
                        disabled={false}
                        helperText=""
                        id="test2"
                        invalid={false}
                        invalidText=""
                        labelText="Type:"
                        light={false}
                        placeholder="Type of Content..."
                        name="content"
                        value={this.state.content}
                        onChange={this.handleChange}
                        type="text"
                    />
                    <br />
                    <TextInput
                        disabled={false}
                        helperText=""
                        id="test2"
                        invalid={false}
                        invalidText=""
                        labelText="URL:"
                        light={false}
                        placeholder="URL..."
                        name="url"
                        value={this.state.url}
                        onChange={this.handleChange}                
                        type="text"
                    />  
                    <br />
                    <Select
                        disabled={false}
                        helperText=""
                        id="select-1"
                        inline={false}
                        invalid={false}
                        invalidText=""
                        labelText="User"
                        light={false}
                        name="userId"
                        onChange={this.handleIdChange}
                    >
                        {this.props.users.map(user => 
                            <SelectItem
                                user={user}
                                key={user.id}
                                disabled={false}
                                hidden={false}
                                text={user.name}
                                // name="userId"
                                value={user.id}
                                // onChange={this.handleIdChange}
                            />    
                        )}
                    </Select>
                    <br/>
                    <Button
                        className="some-class"
                        disabled={false}
                        kind="Secondary"
                        renderIcon={Add16}
                        tabIndex={0}
                        type="submit"
                    >
                        Create Post
                    </Button>
                </Form> 
            </ModalWrapper>
        )
    }
}

export default PostForm;