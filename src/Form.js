import React, {Component} from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import Typography from '@material-ui/core/Typography';

class Form extends Component {
    constructor(props) {
        super(props);
        
        this.initialState = {
            id: '',
            fullName: '',
            email: '',
            phone: '',
            address: '',
            fullNameUnique: true,
            openModalForm: this.props.formVisible,
        };
        this.state = this.initialState;
    }
    
    handleClose = () => {
        this.setState({openModalForm: false });
        document.getElementById('btn-show-form').click(); /*в App находится кнопка, 
        которая отвечает за показ модального окна с формой, в Form другая кнопка, которая закрывает 
        показ модального окна. поэтому при закрытии окна идет автоклик по кнопке из App, чтобы
        в App правильно проставился state.formVisible*/
    } 

    handleChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name] : value
        });
    }
    onFormSubmit = (event) => {
        event.preventDefault(); 
        if (this.checkFullName()) {
            this.props.handleSubmit(this.state);
            this.setState(this.initialState);
        }
    }

    checkFullName = () => {
        let current = this.state.fullName;
        let all = [];
        for (let i=0; i< this.props.peopleData.length; i++) {
            all.push(this.props.peopleData[i].fullName);
        }
        return all.indexOf(current) <= -1? true : false;
    }
    
    render() {
        const { id, fullName, email, phone,  address} = this.state;
        let styles = ({
            formPadding: { padding: '10px'},
            buttonMargin: {margin: '10px 10px 0 0'},
        });

        return (
            <Dialog title='Введите данные' modal={true.toString()} open={this.state.openModalForm}
            maxWidth='xs' close={(!this.state.openModalForm).toString()}>
            <form onSubmit={this.onFormSubmit} style={styles.formPadding}>
                <Typography variant='subtitle1' align='center'>Заполните поля</Typography>
                <Typography variant='subtitle2' align='center'>Все поля обязательные. 
                ФИО не должны повторяться.</Typography>
                <TextField
                    type="text" 
                    name="id" 
                    value={id} 
                    onChange={this.handleChange}
                    required 
                    label='id' 
                    margin='normal'
                    fullWidth
                    autoFocus/>
                <TextField
                    error = {!this.checkFullName()}
                    type="text" 
                    name="fullName" 
                    value={fullName} 
                    onChange={this.handleChange} 
                    required
                    id='fullName'
                    label='ФИО' 
                    fullWidth/>
                <TextField
                    type="email" 
                    name="email" 
                    value={email} 
                    onChange={this.handleChange} 
                    required
                    label='e-mail'
                    fullWidth/>
                <TextField
                    type="tel" 
                    name="phone" 
                    value={phone} 
                    onChange={this.handleChange} 
                    required
                    label='телефон'
                    fullWidth/>
                <TextField
                    type="text" 
                    name="address" 
                    value={address} 
                    onChange={this.handleChange} 
                    required
                    label='адрес'
                    fullWidth/>
                <Button variant="outlined" color="primary" type="submit" style={styles.buttonMargin}>
                    Добавить</Button>
                <Button variant="outlined" color='default' onClick={this.handleClose}
                style={styles.buttonMargin}>Закрыть</Button>
            </form>
        </Dialog>
        );
    }
}

export default Form;
