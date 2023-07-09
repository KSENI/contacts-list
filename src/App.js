import React, { Component } from 'react';
import Table from './Table';
import Form from './Form';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

class App extends Component {
    state = {
        peoples: [],
        formVisible: false,
    };

    removePeople = index => {
        const { peoples } = this.state;
    
        this.setState({
            peoples: peoples.filter((people, i) => { 
                return i !== index;
            })
        });
    }

    handleSubmit = people => {
            this.setState({peoples: [...this.state.peoples, people]});
    }
    
    render() {
        const { peoples } = this.state;
        
        return (
            <div className="container">
                <Typography variant='h4'>Contacts</Typography>
                <Table
                    peopleData={peoples}
                    removePeople={this.removePeople}
                />
               <Button id='btn-show-form' variant="contained" color="primary" onClick={() => this.onClick()}>Добавить</Button>
                {
                    this.state.formVisible
                    ?  <Form handleSubmit={this.handleSubmit} peopleData={peoples} 
                    formVisible={this.state.formVisible}/>
                    :  null
                }
            </div>
        );
    }

    onClick() {
        this.setState(prevState => ({ formVisible: !prevState.formVisible }));
      }
}

export default App;
